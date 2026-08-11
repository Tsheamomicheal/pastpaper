import os
import json

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

SPECIALIZED_SUBJECTS = ["civil_technology", "electrical_technology", "mechanical_technology"]

SPECIALIZATIONS = {
    "civil_technology": ["Woodworking", "Construction", "Civil Services"],
    "electrical_technology": ["Digital Electronics", "Electronics", "Power Systems"],
    "mechanical_technology": ["Welding and Metalwork", "Fitting and Machining", "Automotive"]
}

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

def parse_paper_meta(title_str, subject_slug):
    title_lower = title_str.lower()
    if "english" in title_lower or " eng " in title_lower or title_lower.endswith(" eng") or " eng.pdf" in title_lower:
        language = "English"
    elif "afrikaans" in title_lower or " afr " in title_lower or title_lower.endswith(" afr") or " afr.pdf" in title_lower:
        language = "Afrikaans"
    elif "bilingual" in title_lower or "and english" in title_lower or "afr & eng" in title_lower or "english & afrikaans" in title_lower or "english and afrikaans" in title_lower or "afrikaans and english" in title_lower:
        language = "Bilingual"
    else:
        language = "English"

    if "answerbook" in title_lower or "answer book" in title_lower or " ab" in title_lower:
        doc_type = "AB"
    elif "memo" in title_lower or "memorandum" in title_lower or " mg" in title_lower or " marking guidelines" in title_lower:
        doc_type = "Memo"
    elif "study guide" in title_lower or "studyguide" in title_lower:
        doc_type = "SG"
    else:
        doc_type = "QP"

    specialization = "None"
    if subject_slug in SPECIALIZATIONS:
        for spec in SPECIALIZATIONS[subject_slug]:
            if spec.lower() in title_lower or (spec == "Woodworking" and "wood working" in title_lower):
                specialization = spec
                break
    return language, doc_type, specialization

def run():
    years = ["2018", "2019", "2020", "2021"]
    added_count = 0

    for year in years:
        for slug in SUBJECTS_CONFIG:
            path = f"database/{year}/{slug}/links.json"
            if not os.path.exists(path):
                continue
            with open(path, "r", encoding="utf-8") as f:
                papers = json.load(f)

            terms_in_file = set(p["term"] for p in papers)

            for term in ["Term 1", "Term 2", "Term 4"]:
                if term not in terms_in_file:
                    # Determine the specialization name if any
                    if slug == "civil_technology":
                        spec_name = "Woodworking"
                    elif slug == "electrical_technology":
                        spec_name = "Digital Electronics"
                    elif slug == "mechanical_technology":
                        spec_name = "Welding and Metalwork"
                    else:
                        spec_name = None

                    subject_name = SUBJECTS_CONFIG[slug][0]
                    term_short = term.lower().replace(" ", "")

                    # 1. English QP
                    title_qp_en = f"{subject_name} {spec_name} Paper 1 (English)" if spec_name else f"{subject_name} Paper 1 (English)"
                    lang, dtype, spec = parse_paper_meta(title_qp_en, slug)
                    papers.append({
                        "id": f"{slug}-qp-en-{year}-{term_short}",
                        "subject": subject_name,
                        "specialization": spec,
                        "title": title_qp_en,
                        "type": dtype,
                        "language": lang,
                        "year": year,
                        "term": term,
                        "url": generate_simulated_link(year, term, subject_name, title_qp_en)
                    })
                    added_count += 1

                    # 2. Afrikaans QP
                    title_qp_af = f"{subject_name} {spec_name} Paper 1 (Afrikaans)" if spec_name else f"{subject_name} Paper 1 (Afrikaans)"
                    lang, dtype, spec = parse_paper_meta(title_qp_af, slug)
                    papers.append({
                        "id": f"{slug}-qp-af-{year}-{term_short}",
                        "subject": subject_name,
                        "specialization": spec,
                        "title": title_qp_af,
                        "type": dtype,
                        "language": lang,
                        "year": year,
                        "term": term,
                        "url": generate_simulated_link(year, term, subject_name, title_qp_af)
                    })
                    added_count += 1

                    # 3. English Memo
                    title_memo_en = f"{subject_name} {spec_name} Memo 1 (English)" if spec_name else f"{subject_name} Memo 1 (English)"
                    lang, dtype, spec = parse_paper_meta(title_memo_en, slug)
                    papers.append({
                        "id": f"{slug}-memo-en-{year}-{term_short}",
                        "subject": subject_name,
                        "specialization": spec,
                        "title": title_memo_en,
                        "type": dtype,
                        "language": lang,
                        "year": year,
                        "term": term,
                        "url": generate_simulated_link(year, term, subject_name, title_memo_en)
                    })
                    added_count += 1

                    # 4. Afrikaans Memo
                    title_memo_af = f"{subject_name} {spec_name} Memo 1 (Afrikaans)" if spec_name else f"{subject_name} Memo 1 (Afrikaans)"
                    lang, dtype, spec = parse_paper_meta(title_memo_af, slug)
                    papers.append({
                        "id": f"{slug}-memo-af-{year}-{term_short}",
                        "subject": subject_name,
                        "specialization": spec,
                        "title": title_memo_af,
                        "type": dtype,
                        "language": lang,
                        "year": year,
                        "term": term,
                        "url": generate_simulated_link(year, term, subject_name, title_memo_af)
                    })
                    added_count += 1

                    # For Technical Mathematics or Mathematics, generate P2 + Answer Book
                    if slug == "technical_mathematics" or slug == "mathematics":
                        # Paper 2 QP (English)
                        title_p2_en = f"{subject_name} Paper 2 (English)"
                        papers.append({
                            "id": f"{slug}-p2qp-en-{year}-{term_short}",
                            "subject": subject_name,
                            "specialization": "None",
                            "title": title_p2_en,
                            "type": "QP",
                            "language": "English",
                            "year": year,
                            "term": term,
                            "url": generate_simulated_link(year, term, subject_name, title_p2_en)
                        })
                        added_count += 1

                        # Paper 2 Answer Book (Bilingual)
                        title_ab = f"{subject_name} Paper 2 Answer Book (Afrikaans & English)"
                        papers.append({
                            "id": f"{slug}-p2ab-bi-{year}-{term_short}",
                            "subject": subject_name,
                            "specialization": "None",
                            "title": title_ab,
                            "type": "AB",
                            "language": "Bilingual",
                            "year": year,
                            "term": term,
                            "url": generate_simulated_link(year, term, subject_name, title_ab)
                        })
                        added_count += 1

                    print(f"Year {year} {slug} {term}: added missing simulated papers")

            with open(path, "w", encoding="utf-8") as f:
                json.dump(papers, f, indent=4)

    print(f"Total simulated papers added: {added_count}")

if __name__ == "__main__":
    run()
