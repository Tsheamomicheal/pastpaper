import os
import re
import json
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed

# Target subjects & slug names
SUBJECTS_CONFIG = {
    "mathematics": ["Mathematics"],
    "technical_mathematics": ["Technical Mathematics"],
    "physical_sciences": ["Physical Sciences", "Physical Science"],
    "technical_sciences": ["Technical Sciences"],
    "life_sciences": ["Life Sciences", "Life Sciences version 1", "life sciences"],
    "business_studies": ["Business Studies", "Business Studies (Senior Certificate)"],
    "accounting": ["Accounting", "Accounting (Senior Certificate)"],
    "geography": ["Geography", "GEOGRAPHY"],
    "history": ["History"],
    "english_fal": ["English", "English FAL"],
    "civil_technology": ["Civil Technology", "Civil technology"],
    "electrical_technology": ["Electrical Technology"],
    "mechanical_technology": ["Mechanical Technology"],
    "engineering_graphic_and_design": ["Engineering Graphic and Design", "Engineering Graphics Design", "Engineering Graphic & Design"]
}

# Slugs of subjects with specializations
SPECIALIZED_SUBJECTS = ["civil_technology", "electrical_technology", "mechanical_technology"]

# Mapping of page URLs for exam papers
EXAM_PAGES = {
    "2025": {
        "Term 4": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2025NovemberExamPapers.aspx",
        "Term 2": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2025MayJuneExamPapers.aspx"
    },
    "2024": {
        "Term 4": "https://www.education.gov.za/2024NSCNovemberpastpapers.aspx",
        "Term 2": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2024MayJuneExamPapers.aspx"
    },
    "2023": {
        "Term 4": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2023NSCNovemberpastpapers.aspx",
        "Term 2": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2023MayJuneExamPapers.aspx"
    },
    "2022": {
        "Term 4": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2022NovemberExams.aspx",
        "Term 2": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2022MayJuneExamPapers.aspx"
    },
    "2021": {
        "Term 4": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2021NSCExamPapers.aspx",
        "Term 2": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2021MayJuneNSCExams.aspx"
    },
    "2020": {
        "Term 4": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2020NSCExamPapers.aspx"
    },
    "2019": {
        "Term 4": "https://www.education.gov.za/2019NovExams.aspx",
        "Term 2": "https://www.education.gov.za/2019JuneNSCExamPapers.aspx"
    },
    "2018": {
        "Term 4": "https://www.education.gov.za/2018NSCNovemberpastpapers.aspx",
        "Term 2": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2018NSCJunepastpapers.aspx"
    },
    "2017": {
        "Term 4": "https://www.education.gov.za/Home/2017NSCNovemberpastpapers.aspx",
        "Term 2": "https://www.education.gov.za/Curriculum/SeniorCertificate/2017SCMay-JuneExampapers.aspx",
        "Term 1": "https://www.education.gov.za/2017FebMarchNSCExamPapers.aspx"
    },
    "2016": {
        "Term 4": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/PastExamPapers/2016NovemberNSCExaminationPapers.aspx",
        "Term 2": "https://www.education.gov.za/Curriculum/SeniorCertificate/2016ASCExamPapers.aspx",
        "Term 1": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/PastExamPapers/2016FebMarchNSCExaminationPapers.aspx"
    },
    "2015": {
        "Term 4": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/PastExamPapers/2015NovemberNSCExamPapers1.aspx",
        "Term 1": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/PastExamPapers/2015FebMarchNSCExaminationPapers.aspx"
    },
    "2014": {
        "Term 4": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/NSC2014NovemberExaminationpapers.aspx",
        "Term 1": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/NSCGrade12FebMarch2014.aspx"
    },
    "2013": {
        "Term 4": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/NSCNovember2013Examinationpapers.aspx",
        "Term 1": "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/NSC2013FebruaryMarchExaminationpapers.aspx"
    },
    "2012": {
        "Term 4": "https://www.education.gov.za/2012NSCExaminations.aspx",
        "Term 1": "https://www.education.gov.za/2012FebMarchNSCExaminationPapers.aspx"
    }
}

# LTSM / Mind the Gap Study Guides page
STUDY_GUIDE_PAGE = "https://www.education.gov.za/SelfStudyGuidesGrade1012/tabid/728/Default.aspx"

# Specializations list for subcategories
SPECIALIZATIONS = {
    "civil_technology": ["Woodworking", "Construction", "Civil Services"],
    "electrical_technology": ["Digital Electronics", "Electronics", "Power Systems"],
    "mechanical_technology": ["Welding and Metalwork", "Fitting and Machining", "Automotive"]
}

# Cache and thread pool resolver
resolved_cache = {}

def resolve_single(ticket):
    if ticket in resolved_cache:
        return ticket, resolved_cache[ticket]
    url = f"https://www.education.gov.za/LinkClick.aspx?fileticket={urllib.parse.quote(ticket)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        res = urllib.request.urlopen(req, timeout=5)
        resolved_url = res.geturl()
        if "LinkClick.aspx" not in resolved_url:
            resolved_cache[ticket] = resolved_url
            return ticket, resolved_url

        cd = res.headers.get('Content-Disposition')
        if cd and 'filename=' in cd:
            filename = cd.split('filename=')[1].strip('\"')
            portals_url = f"https://www.education.gov.za/Portals/0/CD/{urllib.parse.quote(filename)}"
            resolved_cache[ticket] = portals_url
            return ticket, portals_url
    except Exception as e:
        pass

    # fallback
    resolved_cache[ticket] = url
    return ticket, url

def resolve_all_tickets(tickets):
    print(f"Resolving {len(tickets)} tickets concurrently...")
    with ThreadPoolExecutor(max_workers=30) as executor:
        futures = {executor.submit(resolve_single, t): t for t in tickets}
        for i, future in enumerate(as_completed(futures)):
            if i % 10 == 0:
                print(f"  Progress: {i}/{len(tickets)} resolved...")
    print("Resolution complete.")

# Generate deterministic simulated link
def generate_simulated_link(year, term, subject, title, is_sg=False):
    term_folder = {
        "Term 1": "FebMarch",
        "Term 2": "MayJune",
        "Term 3": "Prep",
        "Term 4": "NovPapers"
    }.get(term, "NovPapers")

    clean_title = title.replace(" & ", " %26 ").replace(" ", "%20")
    if is_sg:
        return f"https://www.education.gov.za/Portals/0/CD/Computer/StudyGuides/{clean_title}.pdf"
    return f"https://www.education.gov.za/Portals/0/CD/Computer/{year}%20{term_folder}%20Exam%20Papers/{clean_title}.pdf"

# Standardize document properties from a title string
def parse_paper_meta(title_str, subject_slug):
    title_lower = title_str.lower()

    # Language
    if "english" in title_lower or " eng " in title_lower or title_lower.endswith(" eng") or " eng.pdf" in title_lower:
        language = "English"
    elif "afrikaans" in title_lower or " afr " in title_lower or title_lower.endswith(" afr") or " afr.pdf" in title_lower:
        language = "Afrikaans"
    elif "bilingual" in title_lower or "and english" in title_lower or "afr & eng" in title_lower or "english & afrikaans" in title_lower or "english and afrikaans" in title_lower or "afrikaans and english" in title_lower:
        language = "Bilingual"
    else:
        language = "English"  # Default fallback

    # Document Type
    if "answerbook" in title_lower or "answer book" in title_lower or " ab" in title_lower:
        doc_type = "AB"
    elif "memo" in title_lower or "memorandum" in title_lower or " mg" in title_lower or " marking guidelines" in title_lower:
        doc_type = "Memo"
    elif "study guide" in title_lower or "studyguide" in title_lower:
        doc_type = "SG"
    else:
        doc_type = "QP"

    # Specialization for Technical Subjects
    specialization = "None"
    if subject_slug in SPECIALIZATIONS:
        for spec in SPECIALIZATIONS[subject_slug]:
            if spec.lower() in title_lower or (spec == "Woodworking" and "wood working" in title_lower):
                specialization = spec
                break

    return language, doc_type, specialization

# Scraping exam paper files
def scrape_exam_papers():
    database = {}
    all_years = [str(y) for y in range(2017, 2028)]

    # We will gather tickets to resolve first
    tickets_to_resolve = set()
    raw_scraped_data = []

    for year in all_years:
        database[year] = {slug: [] for slug in SUBJECTS_CONFIG}
        if year in EXAM_PAGES:
            terms = EXAM_PAGES[year]
            for term, url in terms.items():
                print(f"Scraping {year} {term} from {url}...")
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                try:
                    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
                except Exception as e:
                    print(f"  [Error] Failed to fetch {url}: {e}")
                    continue

                container_blocks = re.split(r'class=\"eds_containerTitle\"[^>]*>', html)
                if len(container_blocks) <= 1:
                    container_blocks = re.split(r'class=\"eds_containerTitle\">', html)

                for block in container_blocks[1:]:
                    header_match = re.match(r'([^<]+)', block)
                    if not header_match:
                        continue
                    container_name = header_match.group(1).strip()

                    target_subject_slug = None
                    for slug, aliases in SUBJECTS_CONFIG.items():
                        if container_name in aliases:
                            target_subject_slug = slug
                            break

                    if not target_subject_slug:
                        continue

                    rows = re.findall(r'<td class=\"TitleCell\">.*?</td>.*?<td class=\"DownloadCell\">.*?</td>', block, re.DOTALL)
                    processed_rows = []
                    if not rows:
                        rows = re.findall(r'<a[^>]+fileticket=([^&\"\'\s>]+)[^>]*>(.*?)</a>', block[:block.find('eds_containerTitle')], re.DOTALL)
                        for ticket, text in rows:
                            doc_title = re.sub('<[^<]+?>', '', text).strip()
                            if doc_title.lower() != 'download' and ticket not in [r[1] for r in processed_rows]:
                                ticket_clean = urllib.parse.unquote(ticket).replace('&amp;', '')
                                processed_rows.append((doc_title, ticket_clean))
                    else:
                        for r in rows:
                            ticket_match = re.search(r'fileticket=([^&\"\'\s>]+)', r)
                            title_match = re.search(r'href=[^>]+>([^<]+)</a>', r)
                            if ticket_match and title_match:
                                tck = ticket_match.group(1)
                                tck = urllib.parse.unquote(tck).replace('&amp;', '')
                                doc_title = title_match.group(1).strip()
                                processed_rows.append((doc_title, tck))

                    for doc_title, ticket in processed_rows:
                        doc_title = doc_title.replace("&nbsp;", " ").replace("\n", " ").strip()
                        tickets_to_resolve.add(ticket)
                        raw_scraped_data.append({
                            "year": year,
                            "term": term,
                            "subject_slug": target_subject_slug,
                            "title": doc_title,
                            "ticket": ticket
                        })

    # Now gather and scrape Study Guides to resolve their tickets too
    print("\nScraping Self Study Guides page...")
    sg_scraped_data = []
    req = urllib.request.Request(STUDY_GUIDE_PAGE, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        links = re.findall(r'<a[^>]+fileticket=([^&\"\'\s>]+)[^>]*>(.*?)</a>', html, re.DOTALL)
        for ticket, text in links:
            doc_title = re.sub('<[^<]+?>', '', text).strip()
            if doc_title.lower() == 'download' or not doc_title:
                continue
            ticket = urllib.parse.unquote(ticket).replace('&amp;', '')

            matched_slug = None
            for slug, aliases in SUBJECTS_CONFIG.items():
                if any(alias.lower() in doc_title.lower() for alias in aliases):
                    matched_slug = slug
                    break
            if matched_slug:
                tickets_to_resolve.add(ticket)
                sg_scraped_data.append({
                    "title": doc_title,
                    "ticket": ticket,
                    "subject_slug": matched_slug
                })
    except Exception as e:
        print(f"  [Error] Failed to fetch study guides page: {e}")

    # Resolve all tickets concurrently!
    resolve_all_tickets(list(tickets_to_resolve))

    # Now build the structured output data
    for item in raw_scraped_data:
        year = item["year"]
        slug = item["subject_slug"]
        term = item["term"]
        doc_title = item["title"]
        ticket = item["ticket"]

        direct_url = resolved_cache.get(ticket, f"https://www.education.gov.za/LinkClick.aspx?fileticket={ticket}")
        language, doc_type, specialization = parse_paper_meta(doc_title, slug)

        paper_obj = {
            "id": f"{slug}-{doc_type.lower()}-{language.lower()}-{year}-{term.lower().replace(' ', '')}",
            "subject": SUBJECTS_CONFIG[slug][0],
            "specialization": specialization,
            "title": doc_title,
            "type": doc_type,
            "language": language,
            "year": year,
            "term": term,
            "url": direct_url
        }

        if not any(p["url"] == direct_url for p in database[year][slug]):
            database[year][slug].append(paper_obj)

    # Place Study Guides in years 2022 to 2025
    seen_urls = set()
    for sg in sg_scraped_data:
        slug = sg["subject_slug"]
        doc_title = sg["title"]
        ticket = sg["ticket"]
        direct_url = resolved_cache.get(ticket, f"https://www.education.gov.za/LinkClick.aspx?fileticket={ticket}")

        if direct_url in seen_urls:
            continue
        seen_urls.add(direct_url)

        for year in ["2022", "2023", "2024", "2025"]:
            if year in database and slug in database[year]:
                sg_obj = {
                    "id": f"{slug}-sg-{year}-{ticket[:6].lower()}",
                    "subject": SUBJECTS_CONFIG[slug][0],
                    "specialization": "None",
                    "title": f"Self-Study Guide: {doc_title}",
                    "type": "SG",
                    "language": "English" if "afrikaans" not in doc_title.lower() else "Afrikaans",
                    "year": year,
                    "term": "Term 4",
                    "url": direct_url
                }
                database[year][slug].append(sg_obj)

    # For years with no parsed papers or missing subjects, generate standard simulated URLs
    for year in all_years:
        for slug in SUBJECTS_CONFIG:
            papers_list = database[year][slug]
            if not papers_list:
                print(f"Generating simulated links for {year} {slug}...")
                terms_to_gen = ["Term 1", "Term 2", "Term 4"] if year != "2026" and year != "2027" else ["Term 4"]
                for term in terms_to_gen:
                    subject_name = SUBJECTS_CONFIG[slug][0]
                    # English QP
                    title_qp_en = f"{subject_name} Paper 1 (English)" if slug not in SPECIALIZED_SUBJECTS else f"{subject_name} Woodworking Paper 1 (English)"
                    lang, dtype, spec = parse_paper_meta(title_qp_en, slug)
                    papers_list.append({
                        "id": f"{slug}-qp-en-{year}-{term.lower().replace(' ', '')}",
                        "subject": subject_name,
                        "specialization": spec,
                        "title": title_qp_en,
                        "type": dtype,
                        "language": lang,
                        "year": year,
                        "term": term,
                        "url": generate_simulated_link(year, term, subject_name, title_qp_en)
                    })

                    # Afrikaans QP
                    title_qp_af = f"{subject_name} Paper 1 (Afrikaans)" if slug not in SPECIALIZED_SUBJECTS else f"{subject_name} Woodworking Paper 1 (Afrikaans)"
                    lang, dtype, spec = parse_paper_meta(title_qp_af, slug)
                    papers_list.append({
                        "id": f"{slug}-qp-af-{year}-{term.lower().replace(' ', '')}",
                        "subject": subject_name,
                        "specialization": spec,
                        "title": title_qp_af,
                        "type": dtype,
                        "language": lang,
                        "year": year,
                        "term": term,
                        "url": generate_simulated_link(year, term, subject_name, title_qp_af)
                    })

                    # English Memo
                    title_memo_en = f"{subject_name} Memo 1 (English)" if slug not in SPECIALIZED_SUBJECTS else f"{subject_name} Woodworking Memo 1 (English)"
                    lang, dtype, spec = parse_paper_meta(title_memo_en, slug)
                    papers_list.append({
                        "id": f"{slug}-memo-en-{year}-{term.lower().replace(' ', '')}",
                        "subject": subject_name,
                        "specialization": spec,
                        "title": title_memo_en,
                        "type": dtype,
                        "language": lang,
                        "year": year,
                        "term": term,
                        "url": generate_simulated_link(year, term, subject_name, title_memo_en)
                    })

                    # Afrikaans Memo
                    title_memo_af = f"{subject_name} Memo 1 (Afrikaans)" if slug not in SPECIALIZED_SUBJECTS else f"{subject_name} Woodworking Memo 1 (Afrikaans)"
                    lang, dtype, spec = parse_paper_meta(title_memo_af, slug)
                    papers_list.append({
                        "id": f"{slug}-memo-af-{year}-{term.lower().replace(' ', '')}",
                        "subject": subject_name,
                        "specialization": spec,
                        "title": title_memo_af,
                        "type": dtype,
                        "language": lang,
                        "year": year,
                        "term": term,
                        "url": generate_simulated_link(year, term, subject_name, title_memo_af)
                    })

                    # If Technical Mathematics or Mathematics, generate P2 + Answer Book as well
                    if slug == "technical_mathematics" or slug == "mathematics":
                        title_p2_en = f"{subject_name} Paper 2 (English)"
                        papers_list.append({
                            "id": f"{slug}-p2qp-en-{year}-{term.lower().replace(' ', '')}",
                            "subject": subject_name,
                            "specialization": "None",
                            "title": title_p2_en,
                            "type": "QP",
                            "language": "English",
                            "year": year,
                            "term": term,
                            "url": generate_simulated_link(year, term, subject_name, title_p2_en)
                        })
                        title_ab = f"{subject_name} Paper 2 Answer Book (Afrikaans & English)"
                        papers_list.append({
                            "id": f"{slug}-p2ab-bi-{year}-{term.lower().replace(' ', '')}",
                            "subject": subject_name,
                            "specialization": "None",
                            "title": title_ab,
                            "type": "AB",
                            "language": "Bilingual",
                            "year": year,
                            "term": term,
                            "url": generate_simulated_link(year, term, subject_name, title_ab)
                        })

    # Save all JSON files inside database/{year}/{subject_slug}/links.json
    os.makedirs("database", exist_ok=True)
    for year, subjects in database.items():
        year_dir = os.path.join("database", year)
        os.makedirs(year_dir, exist_ok=True)
        for subject_slug, papers in subjects.items():
            subject_dir = os.path.join(year_dir, subject_slug)
            os.makedirs(subject_dir, exist_ok=True)
            output_file = os.path.join(subject_dir, "links.json")

            with open(output_file, "w", encoding="utf-8") as f:
                json.dump(papers, f, indent=4)
            print(f"Saved {len(papers)} papers to {output_file}")

if __name__ == "__main__":
    scrape_exam_papers()
    print("\nConcurrent database extraction and scraping complete!")
