/**
 * MatricTech - DBE Direct Download Portal
 * Dynamic Database of NSC Question Papers, Memorandums, and Answer Books (2017 - 2027)
 * Download URLs refer directly to the South African Department of Basic Education official servers.
 */

const termDisplayNames = {
    "Term 1": "Term 1: Controlled Test / March Exam",
    "Term 2": "Term 2: June Exam / Mid-year Exam",
    "Term 3": "Term 3: Controlled Test / September/Prep Exam",
    "Term 4": "Term 4: November Exam / Final Exam"
};

// Global loaded papers dataset
let loadedPapers = [];

// Specialization mappings for multi-discipline technical subjects
const subjectSpecializations = {
    "civil_technology": ["Civil Services", "Construction", "Woodworking"],
    "electrical_technology": ["Digital Electronics", "Electronics", "Power Systems"],
    "mechanical_technology": ["Automotive", "Fitting and Machining", "Welding and Metalwork"]
};

// Subject display names for table rendering
const subjectDisplayNames = {
    "mathematics": "Mathematics",
    "technical_mathematics": "Technical Mathematics",
    "physical_sciences": "Physical Sciences",
    "technical_sciences": "Technical Sciences",
    "life_sciences": "Life Sciences",
    "business_studies": "Business Studies",
    "accounting": "Accounting",
    "geography": "Geography",
    "history": "History",
    "english_fal": "English FAL",
    "civil_technology": "Civil Technology",
    "electrical_technology": "Electrical Technology",
    "mechanical_technology": "Mechanical Technology",
    "engineering_graphic_and_design": "Engineering Graphic and Design"
};

// DOM Elements
const searchInput = document.getElementById("search-input");
const filterTerm = document.getElementById("filter-term");
const filterSubject = document.getElementById("filter-subject");
const filterSpecialization = document.getElementById("filter-specialization");
const filterLanguage = document.getElementById("filter-language");
const filterType = document.getElementById("filter-type");
const filterYear = document.getElementById("filter-year");
const containerSpecialization = document.getElementById("container-specialization");

const btnReset = document.getElementById("btn-reset");
const btnNoResultsReset = document.getElementById("btn-no-results-reset");
const papersTbody = document.getElementById("papers-tbody");
const noResultsDiv = document.getElementById("no-results");
const selectFilterPromptDiv = document.getElementById("select-filter-prompt");
const resultCountEl = document.getElementById("result-count");
const statFilesEl = document.getElementById("stat-files");
const statGuidesEl = document.getElementById("stat-guides");
const statSubjectsEl = document.getElementById("stat-subjects");

// Initialize application
function init() {
    // Populate stats
    if (statSubjectsEl) statSubjectsEl.textContent = "14";
    if (statFilesEl) statFilesEl.textContent = "2285";
    if (statGuidesEl) statGuidesEl.textContent = "268";

    // Setup Event Listeners
    searchInput.addEventListener("input", filterAndRender);
    if (filterTerm) filterTerm.addEventListener("change", filterAndRender);
    filterSubject.addEventListener("change", handleSubjectChange);
    if (filterSpecialization) filterSpecialization.addEventListener("change", filterAndRender);
    filterLanguage.addEventListener("change", filterAndRender);
    filterType.addEventListener("change", filterAndRender);
    filterYear.addEventListener("change", handleYearChange);

    btnReset.addEventListener("click", resetAllFilters);
    btnNoResultsReset.addEventListener("click", resetAllFilters);

    // Initial flow state: everything disabled except Year select
    updateUiState("INITIAL");
}

// Controls active state of the interactive filters dashboard
function updateUiState(state) {
    if (state === "INITIAL") {
        // Only Year is enabled
        filterYear.disabled = false;
        filterYear.classList.remove("opacity-60", "cursor-not-allowed");

        filterSubject.value = "ALL";
        filterSubject.disabled = true;
        filterSubject.classList.add("opacity-60", "cursor-not-allowed");

        disableSubsequentFilters();

        papersTbody.innerHTML = "";
        noResultsDiv.classList.add("hidden");
        if (selectFilterPromptDiv) {
            selectFilterPromptDiv.classList.remove("hidden");
            selectFilterPromptDiv.innerHTML = `
                <div class="mx-auto w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-4 text-2xl animate-pulse">
                    <i class="fa-solid fa-calendar-days"></i>
                </div>
                <h4 class="font-bold text-slate-900 text-base">Select a Year First</h4>
                <p class="text-slate-500 text-sm mt-1 max-w-sm mx-auto">Please choose a specific Year from the Filter Dashboard on the left to start.</p>
            `;
        }
        resultCountEl.textContent = "Past Papers Directory";
        papersTbody.parentElement.parentElement.classList.add("border-b-0");
    } else if (state === "YEAR_SELECTED") {
        // Year is selected, subject is enabled, subsequent disabled
        filterSubject.disabled = false;
        filterSubject.classList.remove("opacity-60", "cursor-not-allowed");

        disableSubsequentFilters();

        papersTbody.innerHTML = "";
        noResultsDiv.classList.add("hidden");
        if (selectFilterPromptDiv) {
            selectFilterPromptDiv.classList.remove("hidden");
            selectFilterPromptDiv.innerHTML = `
                <div class="mx-auto w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-4 text-2xl animate-pulse">
                    <i class="fa-solid fa-book"></i>
                </div>
                <h4 class="font-bold text-slate-900 text-base">Select a Subject</h4>
                <p class="text-slate-500 text-sm mt-1 max-w-sm mx-auto">Now choose a specific Subject from the Filter Dashboard to load direct download links.</p>
            `;
        }
        resultCountEl.textContent = "Past Papers Directory";
        papersTbody.parentElement.parentElement.classList.add("border-b-0");
    } else if (state === "LOADING") {
        disableSubsequentFilters(true); // disable all subsequent during load
        if (selectFilterPromptDiv) {
            selectFilterPromptDiv.classList.remove("hidden");
            selectFilterPromptDiv.innerHTML = `
                <div class="mx-auto w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-4 text-2xl animate-spin">
                    <i class="fa-solid fa-spinner"></i>
                </div>
                <h4 class="font-bold text-slate-900 text-base">Fetching Direct Links...</h4>
                <p class="text-slate-500 text-sm mt-1 max-w-sm mx-auto">Connecting to DBE portals database to pull the direct high-speed links.</p>
            `;
        }
    } else if (state === "LOADED") {
        // Enable search and all subsequent filters
        searchInput.disabled = false;
        searchInput.classList.remove("bg-slate-100", "cursor-not-allowed", "opacity-60");
        searchInput.placeholder = "e.g. Woodworking, Memo...";

        if (filterTerm) {
            filterTerm.disabled = false;
            filterTerm.classList.remove("opacity-60", "cursor-not-allowed");
        }
        filterLanguage.disabled = false;
        filterLanguage.classList.remove("opacity-60", "cursor-not-allowed");
        filterType.disabled = false;
        filterType.classList.remove("opacity-60", "cursor-not-allowed");

        if (selectFilterPromptDiv) selectFilterPromptDiv.classList.add("hidden");
    }
}

function disableSubsequentFilters(keepValues = false) {
    searchInput.disabled = true;
    searchInput.classList.add("bg-slate-100", "cursor-not-allowed", "opacity-60");
    searchInput.placeholder = "Select year/subject first...";
    if (!keepValues) searchInput.value = "";

    if (filterTerm) {
        if (!keepValues) filterTerm.value = "ALL";
        filterTerm.disabled = true;
        filterTerm.classList.add("opacity-60", "cursor-not-allowed");
    }

    if (!keepValues) filterLanguage.value = "ALL";
    filterLanguage.disabled = true;
    filterLanguage.classList.add("opacity-60", "cursor-not-allowed");

    if (!keepValues) filterType.value = "ALL";
    filterType.disabled = true;
    filterType.classList.add("opacity-60", "cursor-not-allowed");

    if (!keepValues) {
        filterSpecialization.value = "ALL";
        containerSpecialization.classList.add("hidden");
    }
}

// Handle Year dropdown change
function handleYearChange() {
    const year = filterYear.value;
    if (year === "ALL") {
        updateUiState("INITIAL");
    } else {
        updateUiState("YEAR_SELECTED");
    }
}

// Handle Subject dropdown change
function handleSubjectChange() {
    const year = filterYear.value;
    const subject = filterSubject.value;

    if (subject === "ALL") {
        if (year !== "ALL") {
            updateUiState("YEAR_SELECTED");
        } else {
            updateUiState("INITIAL");
        }
        return;
    }

    // Trigger loader state
    updateUiState("LOADING");

    // Fetch dynamic JSON file for selected year and subject
    const url = `database/${year}/${subject}/links.json`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Database file missing or offline.");
            }
            return response.json();
        })
        .then(data => {
            loadedPapers = data;

            // Check if selected subject has specialization configurations
            const specializations = subjectSpecializations[subject];
            if (specializations) {
                // Populate specialization dropdown
                filterSpecialization.innerHTML = '<option value="ALL">All Specializations</option>';
                specializations.forEach(spec => {
                    const option = document.createElement("option");
                    option.value = spec;
                    option.textContent = spec;
                    filterSpecialization.appendChild(option);
                });
                containerSpecialization.classList.remove("hidden");
                filterSpecialization.disabled = false;
                filterSpecialization.classList.remove("opacity-60", "cursor-not-allowed");
            } else {
                containerSpecialization.classList.add("hidden");
            }

            updateUiState("LOADED");
            filterAndRender();
        })
        .catch(err => {
            console.error("Fetch error:", err);
            loadedPapers = [];
            if (selectFilterPromptDiv) {
                selectFilterPromptDiv.classList.remove("hidden");
                selectFilterPromptDiv.innerHTML = `
                    <div class="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-4 text-2xl">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h4 class="font-bold text-slate-900 text-base">Failed to Load Directory</h4>
                    <p class="text-slate-500 text-sm mt-1 max-w-sm mx-auto">We couldn't retrieve the download portal files for this combination. Please try another subject or year.</p>
                `;
            }
            disableSubsequentFilters();
        });
}

// Reset all filters to default state
function resetAllFilters() {
    filterYear.value = "ALL";
    updateUiState("INITIAL");
}

// Main logic to filter the loaded dataset and render matching rows
function filterAndRender() {
    const termVal = filterTerm ? filterTerm.value : "ALL";
    const specialization = filterSpecialization.value;
    const language = filterLanguage.value;
    const type = filterType.value;
    const query = searchInput.value.toLowerCase().trim();

    // Filter loaded array
    const filteredPapers = loadedPapers.filter(paper => {
        // Text search match
        const termName = paper.term ? termDisplayNames[paper.term] : "";
        const matchesQuery = query === "" ||
            paper.title.toLowerCase().includes(query) ||
            paper.subject.toLowerCase().includes(query) ||
            (paper.specialization && paper.specialization.toLowerCase().includes(query)) ||
            (termName && termName.toLowerCase().includes(query));

        // Term match
        const matchesTerm = termVal === "ALL" || paper.term === termVal;

        // Specialization match
        const matchesSpec = specialization === "ALL" || paper.specialization === specialization;

        // Language match
        const matchesLanguage = language === "ALL" ||
            paper.language === language ||
            (language === "Bilingual" && paper.language === "Bilingual") ||
            (paper.language === "Bilingual" && (language === "English" || language === "Afrikaans"));

        // Type match
        const matchesType = type === "ALL" || paper.type === type;

        return matchesQuery && matchesTerm && matchesSpec && matchesLanguage && matchesType;
    });

    // Render count
    resultCountEl.textContent = `Matched Papers (${filteredPapers.length})`;

    // Empty previous tbody
    papersTbody.innerHTML = "";

    if (filteredPapers.length === 0) {
        noResultsDiv.classList.remove("hidden");
        papersTbody.parentElement.parentElement.classList.add("border-b-0"); // smooth border
    } else {
        noResultsDiv.classList.add("hidden");
        papersTbody.parentElement.parentElement.classList.remove("border-b-0");

        // Render rows
        filteredPapers.forEach((paper, index) => {
            const tr = document.createElement("tr");
            tr.className = `hover:bg-slate-50/70 animate-fade-in`;
            tr.style.animationDelay = `${index * 0.02}s`; // staggered clean fade-in

            // Subject Color Styling Codes
            let subjectBadgeClass = "bg-slate-100 text-slate-800 ring-1 ring-inset ring-slate-600/10";
            const currentSubj = paper.subject;
            if (currentSubj === "Technical Mathematics" || currentSubj === "Mathematics") {
                subjectBadgeClass = "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/10";
            } else if (currentSubj === "Technical Sciences" || currentSubj === "Physical Sciences") {
                subjectBadgeClass = "bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-600/10";
            } else if (currentSubj === "Civil Technology") {
                subjectBadgeClass = "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/10";
            } else if (currentSubj === "Electrical Technology") {
                subjectBadgeClass = "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/10";
            } else if (currentSubj === "Mechanical Technology") {
                subjectBadgeClass = "bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-600/10";
            } else if (currentSubj === "Engineering Graphic and Design") {
                subjectBadgeClass = "bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-600/10";
            } else if (currentSubj === "Life Sciences") {
                subjectBadgeClass = "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/10";
            } else if (currentSubj === "Business Studies") {
                subjectBadgeClass = "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/10";
            } else if (currentSubj === "Accounting") {
                subjectBadgeClass = "bg-cyan-50 text-cyan-700 ring-1 ring-inset ring-cyan-600/10";
            } else if (currentSubj === "Geography") {
                subjectBadgeClass = "bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-600/10";
            } else if (currentSubj === "History") {
                subjectBadgeClass = "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/10";
            } else if (currentSubj === "English FAL") {
                subjectBadgeClass = "bg-pink-50 text-pink-700 ring-1 ring-inset ring-pink-600/10";
            }

            // Language Badge Styling
            let langBadgeClass = "bg-gray-100 text-gray-700";
            if (paper.language === "English") langBadgeClass = "bg-blue-100 text-blue-800";
            else if (paper.language === "Afrikaans") langBadgeClass = "bg-amber-100 text-amber-800";
            else if (paper.language === "Bilingual") langBadgeClass = "bg-purple-100 text-purple-800";

            // Paper Type Badge styling
            let typeBadgeClass = "bg-slate-100 text-slate-800";
            let typeFullName = "Question Paper";
            if (paper.type === "QP") {
                typeBadgeClass = "bg-sky-100 text-sky-800";
                typeFullName = "Question Paper";
            } else if (paper.type === "Memo") {
                typeBadgeClass = "bg-emerald-100 text-emerald-800";
                typeFullName = "Memorandum";
            } else if (paper.type === "AB") {
                typeBadgeClass = "bg-fuchsia-100 text-fuchsia-800";
                typeFullName = "Answer Book";
            } else if (paper.type === "SG") {
                typeBadgeClass = "bg-emerald-100 text-emerald-800";
                typeFullName = "Study Guide";
            }

            // Construct specialization markup
            const specMarkup = paper.specialization && paper.specialization !== "None"
                ? `<span class="block text-[11px] font-medium text-slate-500 italic mt-0.5">${paper.specialization}</span>`
                : "";

            // Custom metadata details depending on whether it is a study guide or exam paper
            const termFullName = paper.term ? termDisplayNames[paper.term] : "Term 4: November Exam / Final Exam";
            const detailsMarkup = paper.type === "SG"
                ? `<i class="fa-regular fa-bookmark"></i> Official Study Guide Resource`
                : `<i class="fa-regular fa-calendar-check"></i> ${termFullName} (${paper.year})`;

            tr.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${subjectBadgeClass}">
                        ${paper.subject}
                    </span>
                    ${specMarkup}
                </td>
                <td class="px-6 py-4">
                    <div class="text-sm font-semibold text-slate-900">${paper.title}</div>
                    <div class="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                        ${detailsMarkup}
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-xs font-medium space-x-2">
                    <span class="inline-flex items-center rounded px-2 py-0.5 text-[11px] font-medium ${langBadgeClass}">
                        ${paper.language}
                    </span>
                    <span class="inline-flex items-center rounded px-2 py-0.5 text-[11px] font-bold ${typeBadgeClass}" title="${typeFullName}">
                        ${paper.type}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="${paper.url}" onclick="window.handleDownload(event, '${paper.url}')" class="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors">
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                        <span>Download</span>
                    </a>
                </td>
            `;

            papersTbody.appendChild(tr);
        });
    }
}

// Drawer Toggle logic
function setupDrawer() {
    const btnHamburger = document.getElementById("btn-hamburger");
    const btnDrawerClose = document.getElementById("btn-drawer-close");
    const drawerOverlay = document.getElementById("drawer-overlay");
    const drawer = document.getElementById("drawer");

    function openDrawer() {
        drawerOverlay.classList.remove("pointer-events-none");
        drawerOverlay.classList.add("opacity-100");
        drawerOverlay.classList.remove("opacity-0");
        drawer.classList.remove("translate-x-full");
    }

    function closeDrawer() {
        drawerOverlay.classList.add("pointer-events-none");
        drawerOverlay.classList.remove("opacity-100");
        drawerOverlay.classList.add("opacity-0");
        drawer.classList.add("translate-x-full");
    }

    if (btnHamburger) btnHamburger.addEventListener("click", openDrawer);
    if (btnDrawerClose) btnDrawerClose.addEventListener("click", closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);
}

// Helper to handle monetag ad open and paper download simultaneously
window.handleDownload = function(event, downloadUrl) {
    if (event) {
        event.preventDefault();
    }
    // Open the Monetag ad link in a new tab
    window.open("https://omg10.com/4/11491460", "_blank");
    // Start the actual paper/study guide download in the current tab/background
    window.location.href = downloadUrl;
};

// Start everything up
document.addEventListener("DOMContentLoaded", () => {
    init();
    setupDrawer();
});
