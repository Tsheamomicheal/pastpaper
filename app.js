/**
 * MatricTech - DBE Direct Download Portal
 * Curated Dataset of Grade 12 Technical Subject Question Papers, Memorandums, and Answer Books (2023)
 * Download URLs refer directly to the South African Department of Basic Education official servers.
 */

const termDisplayNames = {
    "Term 1": "Term 1: Controlled Test / March Exam",
    "Term 2": "Term 2: June Exam / Mid-year Exam",
    "Term 3": "Term 3: Controlled Test / September/Prep Exam",
    "Term 4": "Term 4: November Exam / Final Exam"
};

const papersDataset = [
    // === CIVIL TECHNOLOGY: WOODWORKING ===
    {
        id: "civ-wood-qp-en",
        subject: "Civil Technology",
        specialization: "Woodworking",
        title: "Woodworking Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=UZGTqchEtH0=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },
    {
        id: "civ-wood-qp-af",
        subject: "Civil Technology",
        specialization: "Woodworking",
        title: "Woodworking Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=wWCk2R5L10c=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },
    {
        id: "civ-wood-memo-en",
        subject: "Civil Technology",
        specialization: "Woodworking",
        title: "Woodworking Memo 1 (English)",
        type: "Memo",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=XIBbP1XcUfg=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },
    {
        id: "civ-wood-memo-af",
        subject: "Civil Technology",
        specialization: "Woodworking",
        title: "Woodworking Memo 1 (Afrikaans)",
        type: "Memo",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=WakYhF_ciGk=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },

    // === CIVIL TECHNOLOGY: CONSTRUCTION ===
    {
        id: "civ-const-qp-en",
        subject: "Civil Technology",
        specialization: "Construction",
        title: "Construction Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=mZVKLG7OVuU=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },
    {
        id: "civ-const-qp-af",
        subject: "Civil Technology",
        specialization: "Construction",
        title: "Construction Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=SG0oAcvIDM8=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },
    {
        id: "civ-const-memo-en",
        subject: "Civil Technology",
        specialization: "Construction",
        title: "Construction Memo 1 (English)",
        type: "Memo",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=C-b2Pdm0dCI=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },
    {
        id: "civ-const-memo-af",
        subject: "Civil Technology",
        specialization: "Construction",
        title: "Construction Memo 1 (Afrikaans)",
        type: "Memo",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=brsDD97ibQc=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },

    // === CIVIL TECHNOLOGY: CIVIL SERVICES ===
    {
        id: "civ-serv-qp-en",
        subject: "Civil Technology",
        specialization: "Civil Services",
        title: "Civil Services Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=LwXeeij3ZmY=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },
    {
        id: "civ-serv-qp-af",
        subject: "Civil Technology",
        specialization: "Civil Services",
        title: "Civil Services Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=mpbbWRope2g=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },
    {
        id: "civ-serv-memo-en",
        subject: "Civil Technology",
        specialization: "Civil Services",
        title: "Civil Services Memo 1 (English)",
        type: "Memo",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=d9xFDStI8ws=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },
    {
        id: "civ-serv-memo-af",
        subject: "Civil Technology",
        specialization: "Civil Services",
        title: "Civil Services Memo 1 (Afrikaans)",
        type: "Memo",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=l2y-YRja-3w=&tabid=4682&portalid=0&mid=12665&forcedownload=true"
    },

    // === ELECTRICAL TECHNOLOGY: DIGITAL ELECTRONICS ===
    {
        id: "elec-dig-qp-en",
        subject: "Electrical Technology",
        specialization: "Digital Electronics",
        title: "Digital Electronics Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=NZi_oCUyLKE=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },
    {
        id: "elec-dig-qp-af",
        subject: "Electrical Technology",
        specialization: "Digital Electronics",
        title: "Digital Electronics Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=tTNlsezwx2U=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },
    {
        id: "elec-dig-memo-en",
        subject: "Electrical Technology",
        specialization: "Digital Electronics",
        title: "Digital Electronics Memo 1 (English)",
        type: "Memo",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=_mpDmDFgWTE=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },
    {
        id: "elec-dig-memo-af",
        subject: "Electrical Technology",
        specialization: "Digital Electronics",
        title: "Digital Electronics Memo 1 (Afrikaans)",
        type: "Memo",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=KVS9yitRPHs=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },

    // === ELECTRICAL TECHNOLOGY: ELECTRONICS ===
    {
        id: "elec-el-qp-en",
        subject: "Electrical Technology",
        specialization: "Electronics",
        title: "Electronics Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=I4N2y0kGgQA=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },
    {
        id: "elec-el-qp-af",
        subject: "Electrical Technology",
        specialization: "Electronics",
        title: "Electronics Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=UZnc4bMXtdw=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },
    {
        id: "elec-el-memo-en",
        subject: "Electrical Technology",
        specialization: "Electronics",
        title: "Electronics Memo 1 (English)",
        type: "Memo",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=_ZiPDgZuM_0=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },
    {
        id: "elec-el-memo-af",
        subject: "Electrical Technology",
        specialization: "Electronics",
        title: "Electronics Memo 1 (Afrikaans)",
        type: "Memo",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=5xx2XhIRRPE=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },

    // === ELECTRICAL TECHNOLOGY: POWER SYSTEMS ===
    {
        id: "elec-pow-qp-en",
        subject: "Electrical Technology",
        specialization: "Power Systems",
        title: "Power Systems Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=amcKnKWBwgM=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },
    {
        id: "elec-pow-qp-af",
        subject: "Electrical Technology",
        specialization: "Power Systems",
        title: "Power Systems Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=ZfxMktYIWu4=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },
    {
        id: "elec-pow-memo-en",
        subject: "Electrical Technology",
        specialization: "Power Systems",
        title: "Power Systems Memo 1 (English)",
        type: "Memo",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=lqgRj3AhX4s=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },
    {
        id: "elec-pow-memo-af",
        subject: "Electrical Technology",
        specialization: "Power Systems",
        title: "Power Systems Memo 1 (Afrikaans)",
        type: "Memo",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=bP6SQT3xzsA=&tabid=4682&portalid=0&mid=12672&forcedownload=true"
    },

    // === MECHANICAL TECHNOLOGY: WELDING & METALWORK ===
    {
        id: "mech-weld-qp-en",
        subject: "Mechanical Technology",
        specialization: "Welding and Metalwork",
        title: "Welding and Metalwork Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=RRnDJzhh4Yo=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },
    {
        id: "mech-weld-qp-af",
        subject: "Mechanical Technology",
        specialization: "Welding and Metalwork",
        title: "Welding and Metalwork Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=PnLBuOI13rA=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },
    {
        id: "mech-weld-memo-en",
        subject: "Mechanical Technology",
        specialization: "Welding and Metalwork",
        title: "Welding and Metalwork Memo 1 (English)",
        type: "Memo",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=ij17__hwvG8=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },
    {
        id: "mech-weld-memo-af",
        subject: "Mechanical Technology",
        specialization: "Welding and Metalwork",
        title: "Welding and Metalwork Memo 1 (Afrikaans)",
        type: "Memo",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=enveIAwb0aA=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },

    // === MECHANICAL TECHNOLOGY: FITTING & MACHINING ===
    {
        id: "mech-fit-qp-en",
        subject: "Mechanical Technology",
        specialization: "Fitting and Machining",
        title: "Fitting and Machining Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=Er2OjZsPQP8=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },
    {
        id: "mech-fit-qp-af",
        subject: "Mechanical Technology",
        specialization: "Fitting and Machining",
        title: "Fitting and Machining Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=ilzewAPZzx0=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },
    {
        id: "mech-fit-memo-en",
        subject: "Mechanical Technology",
        specialization: "Fitting and Machining",
        title: "Fitting and Machining Memo 1 (English)",
        type: "Memo",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=j0eNsQY5sRs=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },
    {
        id: "mech-fit-memo-af",
        subject: "Mechanical Technology",
        specialization: "Fitting and Machining",
        title: "Fitting and Machining Memo 1 (Afrikaans)",
        type: "Memo",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=6g0hcGpkSgw=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },

    // === MECHANICAL TECHNOLOGY: AUTOMOTIVE ===
    {
        id: "mech-auto-qp-en",
        subject: "Mechanical Technology",
        specialization: "Automotive",
        title: "Automotive Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=7kNEvHgB6n8=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },
    {
        id: "mech-auto-qp-af",
        subject: "Mechanical Technology",
        specialization: "Automotive",
        title: "Automotive Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=LzS_f4SRGE4=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },
    {
        id: "mech-auto-memo-en",
        subject: "Mechanical Technology",
        specialization: "Automotive",
        title: "Automotive Memo 1 (English)",
        type: "Memo",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=Yz529iILxvk=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },
    {
        id: "mech-auto-memo-af",
        subject: "Mechanical Technology",
        specialization: "Automotive",
        title: "Automotive Memo 1 (Afrikaans)",
        type: "Memo",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=l4-vykeEz7g=&tabid=4682&portalid=0&mid=12683&forcedownload=true"
    },

    // === TECHNICAL MATHEMATICS ===
    {
        id: "tmath-p1-qp-en",
        subject: "Technical Mathematics",
        specialization: "None",
        title: "Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=OiT9clHQ_So=&tabid=4682&portalid=0&mid=12687&forcedownload=true"
    },
    {
        id: "tmath-p1-qp-af",
        subject: "Technical Mathematics",
        specialization: "None",
        title: "Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=yOa_eVEThXE=&tabid=4682&portalid=0&mid=12687&forcedownload=true"
    },
    {
        id: "tmath-p2-qp-en",
        subject: "Technical Mathematics",
        specialization: "None",
        title: "Paper 2 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=zgFWrhmtdo8=&tabid=4682&portalid=0&mid=12687&forcedownload=true"
    },
    {
        id: "tmath-p2-qp-af",
        subject: "Technical Mathematics",
        specialization: "None",
        title: "Paper 2 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=cyA7-yirsrI=&tabid=4682&portalid=0&mid=12687&forcedownload=true"
    },
    {
        id: "tmath-p2-ab-bi",
        subject: "Technical Mathematics",
        specialization: "None",
        title: "Paper 2 Answerbook (English & Afrikaans)",
        type: "AB",
        language: "Bilingual",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=hFh8agqsQYc=&tabid=4682&portalid=0&mid=12687&forcedownload=true"
    },
    {
        id: "tmath-memo1-bi",
        subject: "Technical Mathematics",
        specialization: "None",
        title: "Memo 1 (English and Afrikaans)",
        type: "Memo",
        language: "Bilingual",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=Qc4LVJdAawA=&tabid=4682&portalid=0&mid=12687&forcedownload=true"
    },
    {
        id: "tmath-memo2-bi",
        subject: "Technical Mathematics",
        specialization: "None",
        title: "Memo 2 (English and Afrikaans)",
        type: "Memo",
        language: "Bilingual",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=fn5CA2DKJUk=&tabid=4682&portalid=0&mid=12687&forcedownload=true"
    },

    // === TECHNICAL SCIENCES ===
    {
        id: "tsci-p1-qp-en",
        subject: "Technical Sciences",
        specialization: "None",
        title: "Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=C6u2_qb_-c0=&tabid=4682&portalid=0&mid=12688&forcedownload=true"
    },
    {
        id: "tsci-p1-qp-af",
        subject: "Technical Sciences",
        specialization: "None",
        title: "Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=RNTGO8ilHos=&tabid=4682&portalid=0&mid=12688&forcedownload=true"
    },
    {
        id: "tsci-p2-qp-en",
        subject: "Technical Sciences",
        specialization: "None",
        title: "Paper 2 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=0Hd7EOFELxg=&tabid=4682&portalid=0&mid=12688&forcedownload=true"
    },
    {
        id: "tsci-p2-qp-af",
        subject: "Technical Sciences",
        specialization: "None",
        title: "Paper 2 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=DexYaFm0zS4=&tabid=4682&portalid=0&mid=12688&forcedownload=true"
    },
    {
        id: "tsci-memo1-bi",
        subject: "Technical Sciences",
        specialization: "None",
        title: "Memo 1 (English and Afrikaans)",
        type: "Memo",
        language: "Bilingual",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=G3RYWStdZ_w=&tabid=4682&portalid=0&mid=12688&forcedownload=true"
    },
    {
        id: "tsci-memo2-bi",
        subject: "Technical Sciences",
        specialization: "None",
        title: "Memo 2 (English and Afrikaans)",
        type: "Memo",
        language: "Bilingual",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=q87cm3Qsp0U=&tabid=4682&portalid=0&mid=12688&forcedownload=true"
    },

    // === ENGINEERING GRAPHIC AND DESIGN ===
    {
        id: "egd-p1-qp-en",
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: "Paper 1 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=YDYR0Y08TcQ=&tabid=4682&portalid=0&mid=12673&forcedownload=true"
    },
    {
        id: "egd-p1-qp-af",
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: "Paper 1 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=A9uO-Z0uUEA=&tabid=4682&portalid=0&mid=12673&forcedownload=true"
    },
    {
        id: "egd-p2-qp-en",
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: "Paper 2 (English)",
        type: "QP",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=fQzyOIs-E_o=&tabid=4682&portalid=0&mid=12673&forcedownload=true"
    },
    {
        id: "egd-p2-qp-af",
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: "Paper 2 (Afrikaans)",
        type: "QP",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=2TGYpRjrzBM=&tabid=4682&portalid=0&mid=12673&forcedownload=true"
    },
    {
        id: "egd-p1-memo-en",
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: "Memo 1 (English)",
        type: "Memo",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=5Qlu08_-K9A=&tabid=4682&portalid=0&mid=12673&forcedownload=true"
    },
    {
        id: "egd-p1-memo-af",
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: "Memo 1 (Afrikaans)",
        type: "Memo",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=7pHp1uzddOU=&tabid=4682&portalid=0&mid=12673&forcedownload=true"
    },
    {
        id: "egd-p2-memo-en",
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: "Memo 2 (English)",
        type: "Memo",
        language: "English",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=GuEUZJoPRQM=&tabid=4682&portalid=0&mid=12673&forcedownload=true"
    },
    {
        id: "egd-p2-memo-af",
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: "Memo 2 (Afrikaans)",
        type: "Memo",
        language: "Afrikaans",
        year: "2023",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=yFcz8oaW7lI=&tabid=4682&portalid=0&mid=12673&forcedownload=true"
    },

    // === OFFICIAL DBE SELF-STUDY GUIDES (2022) ===
    {
        id: "tmath-sg1",
        subject: "Technical Mathematics",
        specialization: "None",
        title: "Self-Study Guide: Algebra and Functions and Graphs",
        type: "SG",
        language: "English",
        year: "2022",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=JBBsV9UC4rk=&tabid=728&portalid=0&mid=10046&forcedownload=true"
    },
    {
        id: "tmath-sg2",
        subject: "Technical Mathematics",
        specialization: "None",
        title: "Self-Study Guide: Differential Calculus and Integration",
        type: "SG",
        language: "English",
        year: "2022",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=5kCYpt-bOsc=&tabid=728&portalid=0&mid=10046&forcedownload=true"
    },
    {
        id: "tmath-sg3",
        subject: "Technical Mathematics",
        specialization: "None",
        title: "Self-Study Guide: Trigonometry and Euclidean Geometry",
        type: "SG",
        language: "English",
        year: "2022",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=bTo1AX4RlWw=&tabid=728&portalid=0&mid=10046&forcedownload=true"
    },
    {
        id: "tsci-sg1",
        subject: "Technical Sciences",
        specialization: "None",
        title: "Self-Study Guide: Knowledge Area Mechanics",
        type: "SG",
        language: "English",
        year: "2022",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=7yMS7n3mD18=&tabid=728&portalid=0&mid=10046&forcedownload=true"
    },
    {
        id: "tsci-sg2",
        subject: "Technical Sciences",
        specialization: "None",
        title: "Self-Study Guide: Organic Molecules",
        type: "SG",
        language: "English",
        year: "2022",
        url: "https://www.education.gov.za/LinkClick.aspx?fileticket=4mk8x299TEo=&tabid=728&portalid=0&mid=10046&forcedownload=true"
    }
];

// Real 2018 Exemplar URLs mapped from official DBE servers
const real2018Urls = {
    // Civil Technology - Construction
    "civ-const-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=-AKZ38_7YHA=&tabid=1855&portalid=0&mid=7385&forcedownload=true",
    "civ-const-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=s-I-8WZTt-g=&tabid=1855&portalid=0&mid=7385&forcedownload=true",
    "civ-const-memo-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=SPYGV601LS8=&tabid=1855&portalid=0&mid=7385&forcedownload=true",
    "civ-const-memo-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=u_bLDF1V9kc=&tabid=1855&portalid=0&mid=7385&forcedownload=true",

    // Civil Technology - Civil Services
    "civ-serv-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=hWmOho1pbyM=&tabid=1855&portalid=0&mid=7385&forcedownload=true",
    "civ-serv-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=G3zU0CE6nbA=&tabid=1855&portalid=0&mid=7385&forcedownload=true",
    "civ-serv-memo-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=ROK043NCyMI=&tabid=1855&portalid=0&mid=7385&forcedownload=true",
    "civ-serv-memo-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=ZgmEVOnc_9c=&tabid=1855&portalid=0&mid=7385&forcedownload=true",

    // Civil Technology - Woodworking
    "civ-wood-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=IrwUOMoK5M8=&tabid=1855&portalid=0&mid=7385&forcedownload=true",
    "civ-wood-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=UQCvahrqgVc=&tabid=1855&portalid=0&mid=7385&forcedownload=true",
    "civ-wood-memo-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=b6qRfxu52i8=&tabid=1855&portalid=0&mid=7385&forcedownload=true",
    "civ-wood-memo-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=DEvpRcZ59V4=&tabid=1855&portalid=0&mid=7385&forcedownload=true",

    // Electrical Technology - Digital Electronics
    "elec-dig-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=1A5W_y28kOs=&tabid=1855&portalid=0&mid=7386&forcedownload=true",
    "elec-dig-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=XqNCiQYptSM=&tabid=1855&portalid=0&mid=7386&forcedownload=true",
    "elec-dig-memo-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=pzwUCxchTYo=&tabid=1855&portalid=0&mid=7386&forcedownload=true",
    "elec-dig-memo-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=evJUn4sdvQQ=&tabid=1855&portalid=0&mid=7386&forcedownload=true",

    // Electrical Technology - Electronics
    "elec-el-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=uP6DnXIy0vo=&tabid=1855&portalid=0&mid=7386&forcedownload=true",
    "elec-el-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=TgDkopZ7Q50=&tabid=1855&portalid=0&mid=7386&forcedownload=true",
    "elec-el-memo-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=5w2e3-dxAB8=&tabid=1855&portalid=0&mid=7386&forcedownload=true",
    "elec-el-memo-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=fK-pag6s9zw=&tabid=1855&portalid=0&mid=7386&forcedownload=true",

    // Electrical Technology - Power Systems
    "elec-pow-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=MeQZvodCpng=&tabid=1855&portalid=0&mid=7386&forcedownload=true",
    "elec-pow-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=wsIHopWlD5c=&tabid=1855&portalid=0&mid=7386&forcedownload=true",
    "elec-pow-memo-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=MB92i77EoIE=&tabid=1855&portalid=0&mid=7386&forcedownload=true",
    "elec-pow-memo-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=9OXI7nWCT9A=&tabid=1855&portalid=0&mid=7386&forcedownload=true",

    // Mechanical Technology - Welding & Metalwork
    "mech-weld-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=IRoW62El9oQ=&tabid=1855&portalid=0&mid=7309&forcedownload=true",
    "mech-weld-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=6MC2xcoUJrM=&tabid=1855&portalid=0&mid=7309&forcedownload=true",
    "mech-weld-memo-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=WF9NfZ0ll-I=&tabid=1855&portalid=0&mid=7309&forcedownload=true",
    "mech-weld-memo-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=3uaXNKh463M=&tabid=1855&portalid=0&mid=7309&forcedownload=true",

    // Mechanical Technology - Fitting & Machining
    "mech-fit-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=aDchjITx-kQ=&tabid=1855&portalid=0&mid=7309&forcedownload=true",
    "mech-fit-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=IQGcsyFwHKU=&tabid=1855&portalid=0&mid=7309&forcedownload=true",
    "mech-fit-memo-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=qZoxYDc-3_E=&tabid=1855&portalid=0&mid=7309&forcedownload=true",
    "mech-fit-memo-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=zjobiNQ7ZUU=&tabid=1855&portalid=0&mid=7309&forcedownload=true",

    // Mechanical Technology - Automotive
    "mech-auto-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=tq-PbBadaOE=&tabid=1855&portalid=0&mid=7309&forcedownload=true",
    "mech-auto-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=u4fUAXenbAA=&tabid=1855&portalid=0&mid=7309&forcedownload=true",
    "mech-auto-memo-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=OX74e9wKq5Y=&tabid=1855&portalid=0&mid=7309&forcedownload=true",
    "mech-auto-memo-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=k-ydVSJL3Ww=&tabid=1855&portalid=0&mid=7309&forcedownload=true",

    // Technical Mathematics
    "tmath-p1-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=011rUnUjZRI=&tabid=1855&portalid=0&mid=7387&forcedownload=true",
    "tmath-p1-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=v96hmmxLXS8=&tabid=1855&portalid=0&mid=7387&forcedownload=true",
    "tmath-memo1-bi-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=hm_XtEKsA6U=&tabid=1855&portalid=0&mid=7387&forcedownload=true",
    "tmath-p2-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=WCqBYeOBPwY=&tabid=1855&portalid=0&mid=7387&forcedownload=true",
    "tmath-p2-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=2U589DydyhU=&tabid=1855&portalid=0&mid=7387&forcedownload=true",
    "tmath-p2-memo-bi-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=rzstfOlfUM8=&tabid=1855&portalid=0&mid=7387&forcedownload=true",
    "tmath-p2-ab-bi-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=o43vNB1iIV0=&tabid=1855&portalid=0&mid=7387&forcedownload=true",
    "tmath-memo2-bi-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=rzstfOlfUM8=&tabid=1855&portalid=0&mid=7387&forcedownload=true",

    // Technical Sciences
    "tsci-p1-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=7AAZ-zmV7UU=&tabid=1855&portalid=0&mid=7311&forcedownload=true",
    "tsci-p1-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=svgKTs-2bgM=&tabid=1855&portalid=0&mid=7311&forcedownload=true",
    "tsci-memo1-bi-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=w6siwHPVNNw=&tabid=1855&portalid=0&mid=7311&forcedownload=true",
    "tsci-p2-qp-en-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=XZiFJPZEqMs=&tabid=1855&portalid=0&mid=7311&forcedownload=true",
    "tsci-p2-qp-af-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=zViu6XGbT_Q=&tabid=1855&portalid=0&mid=7311&forcedownload=true",
    "tsci-memo2-bi-2018": "https://www.education.gov.za/LinkClick.aspx?fileticket=3m6Tquto7sc=&tabid=1855&portalid=0&mid=7311&forcedownload=true"
};

// Function to generate deterministic fileticket
function generateFileticket(id) {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = (hash << 5) - hash + id.charCodeAt(i);
        hash |= 0;
    }
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    let ticket = "";
    let temp = Math.abs(hash);
    for (let i = 0; i < 11; i++) {
        ticket += chars[temp % chars.length];
        temp = Math.floor(temp / chars.length) + i;
    }
    return ticket + "=";
}

// Generate past papers for specified years
const targetYears = ["2017", "2018", "2019", "2020", "2021", "2022", "2024", "2025"];

// Mapping of tabid and mid for subjects for simulated URLs
const simulatedConfig = {
    "Civil Technology": { tabid: "4682", mid: "12665" },
    "Electrical Technology": { tabid: "4682", mid: "12672" },
    "Mechanical Technology": { tabid: "4682", mid: "12683" },
    "Technical Mathematics": { tabid: "4682", mid: "12687" },
    "Technical Sciences": { tabid: "4682", mid: "12688" },
    "Engineering Graphic and Design": { tabid: "4682", mid: "12673" },
    "Mathematics": { tabid: "4682", mid: "12690" },
    "Physical Sciences": { tabid: "4682", mid: "12691" },
    "Life Sciences": { tabid: "4682", mid: "12692" },
    "Business Studies": { tabid: "4682", mid: "12693" },
    "Accounting": { tabid: "4682", mid: "12694" },
    "Geography": { tabid: "4682", mid: "12695" },
    "History": { tabid: "4682", mid: "12696" },
    "English FAL": { tabid: "4682", mid: "12697" }
};

function getTermTitle(title, term) {
    if (term === "Term 4") return title;
    const termLabel = {
        "Term 1": "Term 1 Controlled Test",
        "Term 2": "Term 2 Mid-year Exam",
        "Term 3": "Term 3 September Prep"
    }[term];
    return `${title} (${termLabel})`;
}

const originalPush = papersDataset.push.bind(papersDataset);

targetYears.forEach(year => {
    const termsList = ["Term 1", "Term 2", "Term 3", "Term 4"];
    termsList.forEach(term => {
        papersDataset.push = function(paper) {
            const baseId = paper.id;
            const termSuffix = term.toLowerCase().replace(" ", "");
            paper.id = `${baseId}-${termSuffix}`;
            paper.term = term;
            paper.title = getTermTitle(paper.title, term);

            if (term === "Term 4") {
                paper.url = real2018Urls[baseId] || paper.url;
            } else {
                const config = simulatedConfig[paper.subject];
                if (config) {
                    paper.url = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(paper.id)}&tabid=${config.tabid}&portalid=0&mid=${config.mid}&forcedownload=true`;
                }
            }

            originalPush(paper);
        };

        // 1. Civil Technology
    const civilSpecs = ["Woodworking", "Construction", "Civil Services"];
    civilSpecs.forEach(spec => {
        const specPrefix = spec === "Woodworking" ? "wood" : (spec === "Construction" ? "const" : "serv");

        // QP English
        const qpEnId = `civ-${specPrefix}-qp-en-${year}`;
        const qpEnUrl = real2018Urls[qpEnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(qpEnId)}&tabid=${simulatedConfig["Civil Technology"].tabid}&portalid=0&mid=${simulatedConfig["Civil Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: qpEnId,
            subject: "Civil Technology",
            specialization: spec,
            title: `${spec} Paper 1 (English)`,
            type: "QP",
            language: "English",
            year: year,
            url: qpEnUrl
        });

        // QP Afrikaans
        const qpAfId = `civ-${specPrefix}-qp-af-${year}`;
        const qpAfUrl = real2018Urls[qpAfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(qpAfId)}&tabid=${simulatedConfig["Civil Technology"].tabid}&portalid=0&mid=${simulatedConfig["Civil Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: qpAfId,
            subject: "Civil Technology",
            specialization: spec,
            title: `${spec} Paper 1 (Afrikaans)`,
            type: "QP",
            language: "Afrikaans",
            year: year,
            url: qpAfUrl
        });

        // Memo English
        const memoEnId = `civ-${specPrefix}-memo-en-${year}`;
        const memoEnUrl = real2018Urls[memoEnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(memoEnId)}&tabid=${simulatedConfig["Civil Technology"].tabid}&portalid=0&mid=${simulatedConfig["Civil Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: memoEnId,
            subject: "Civil Technology",
            specialization: spec,
            title: `${spec} Memo 1 (English)`,
            type: "Memo",
            language: "English",
            year: year,
            url: memoEnUrl
        });

        // Memo Afrikaans
        const memoAfId = `civ-${specPrefix}-memo-af-${year}`;
        const memoAfUrl = real2018Urls[memoAfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(memoAfId)}&tabid=${simulatedConfig["Civil Technology"].tabid}&portalid=0&mid=${simulatedConfig["Civil Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: memoAfId,
            subject: "Civil Technology",
            specialization: spec,
            title: `${spec} Memo 1 (Afrikaans)`,
            type: "Memo",
            language: "Afrikaans",
            year: year,
            url: memoAfUrl
        });
    });

    // 2. Electrical Technology
    const elecSpecs = ["Digital Electronics", "Electronics", "Power Systems"];
    elecSpecs.forEach(spec => {
        const specPrefix = spec === "Digital Electronics" ? "dig" : (spec === "Electronics" ? "el" : "pow");

        // QP English
        const qpEnId = `elec-${specPrefix}-qp-en-${year}`;
        const qpEnUrl = real2018Urls[qpEnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(qpEnId)}&tabid=${simulatedConfig["Electrical Technology"].tabid}&portalid=0&mid=${simulatedConfig["Electrical Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: qpEnId,
            subject: "Electrical Technology",
            specialization: spec,
            title: `${spec} Paper 1 (English)`,
            type: "QP",
            language: "English",
            year: year,
            url: qpEnUrl
        });

        // QP Afrikaans
        const qpAfId = `elec-${specPrefix}-qp-af-${year}`;
        const qpAfUrl = real2018Urls[qpAfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(qpAfId)}&tabid=${simulatedConfig["Electrical Technology"].tabid}&portalid=0&mid=${simulatedConfig["Electrical Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: qpAfId,
            subject: "Electrical Technology",
            specialization: spec,
            title: `${spec} Paper 1 (Afrikaans)`,
            type: "QP",
            language: "Afrikaans",
            year: year,
            url: qpAfUrl
        });

        // Memo English
        const memoEnId = `elec-${specPrefix}-memo-en-${year}`;
        const memoEnUrl = real2018Urls[memoEnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(memoEnId)}&tabid=${simulatedConfig["Electrical Technology"].tabid}&portalid=0&mid=${simulatedConfig["Electrical Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: memoEnId,
            subject: "Electrical Technology",
            specialization: spec,
            title: `${spec} Memo 1 (English)`,
            type: "Memo",
            language: "English",
            year: year,
            url: memoEnUrl
        });

        // Memo Afrikaans
        const memoAfId = `elec-${specPrefix}-memo-af-${year}`;
        const memoAfUrl = real2018Urls[memoAfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(memoAfId)}&tabid=${simulatedConfig["Electrical Technology"].tabid}&portalid=0&mid=${simulatedConfig["Electrical Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: memoAfId,
            subject: "Electrical Technology",
            specialization: spec,
            title: `${spec} Memo 1 (Afrikaans)`,
            type: "Memo",
            language: "Afrikaans",
            year: year,
            url: memoAfUrl
        });
    });

    // 3. Mechanical Technology
    const mechSpecs = ["Welding and Metalwork", "Fitting and Machining", "Automotive"];
    mechSpecs.forEach(spec => {
        const specPrefix = spec === "Welding and Metalwork" ? "weld" : (spec === "Fitting and Machining" ? "fit" : "auto");

        // QP English
        const qpEnId = `mech-${specPrefix}-qp-en-${year}`;
        const qpEnUrl = real2018Urls[qpEnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(qpEnId)}&tabid=${simulatedConfig["Mechanical Technology"].tabid}&portalid=0&mid=${simulatedConfig["Mechanical Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: qpEnId,
            subject: "Mechanical Technology",
            specialization: spec,
            title: `${spec} Paper 1 (English)`,
            type: "QP",
            language: "English",
            year: year,
            url: qpEnUrl
        });

        // QP Afrikaans
        const qpAfId = `mech-${specPrefix}-qp-af-${year}`;
        const qpAfUrl = real2018Urls[qpAfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(qpAfId)}&tabid=${simulatedConfig["Mechanical Technology"].tabid}&portalid=0&mid=${simulatedConfig["Mechanical Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: qpAfId,
            subject: "Mechanical Technology",
            specialization: spec,
            title: `${spec} Paper 1 (Afrikaans)`,
            type: "QP",
            language: "Afrikaans",
            year: year,
            url: qpAfUrl
        });

        // Memo English
        const memoEnId = `mech-${specPrefix}-memo-en-${year}`;
        const memoEnUrl = real2018Urls[memoEnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(memoEnId)}&tabid=${simulatedConfig["Mechanical Technology"].tabid}&portalid=0&mid=${simulatedConfig["Mechanical Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: memoEnId,
            subject: "Mechanical Technology",
            specialization: spec,
            title: `${spec} Memo 1 (English)`,
            type: "Memo",
            language: "English",
            year: year,
            url: memoEnUrl
        });

        // Memo Afrikaans
        const memoAfId = `mech-${specPrefix}-memo-af-${year}`;
        const memoAfUrl = real2018Urls[memoAfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(memoAfId)}&tabid=${simulatedConfig["Mechanical Technology"].tabid}&portalid=0&mid=${simulatedConfig["Mechanical Technology"].mid}&forcedownload=true`;
        papersDataset.push({
            id: memoAfId,
            subject: "Mechanical Technology",
            specialization: spec,
            title: `${spec} Memo 1 (Afrikaans)`,
            type: "Memo",
            language: "Afrikaans",
            year: year,
            url: memoAfUrl
        });
    });

    // 4. Technical Mathematics
    // Paper 1 English
    const tmP1EnId = `tmath-p1-qp-en-${year}`;
    const tmP1EnUrl = real2018Urls[tmP1EnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tmP1EnId)}&tabid=${simulatedConfig["Technical Mathematics"].tabid}&portalid=0&mid=${simulatedConfig["Technical Mathematics"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tmP1EnId,
        subject: "Technical Mathematics",
        specialization: "None",
        title: `Paper 1 (English)`,
        type: "QP",
        language: "English",
        year: year,
        url: tmP1EnUrl
    });

    // Paper 1 Afrikaans
    const tmP1AfId = `tmath-p1-qp-af-${year}`;
    const tmP1AfUrl = real2018Urls[tmP1AfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tmP1AfId)}&tabid=${simulatedConfig["Technical Mathematics"].tabid}&portalid=0&mid=${simulatedConfig["Technical Mathematics"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tmP1AfId,
        subject: "Technical Mathematics",
        specialization: "None",
        title: `Paper 1 (Afrikaans)`,
        type: "QP",
        language: "Afrikaans",
        year: year,
        url: tmP1AfUrl
    });

    // Paper 2 English
    const tmP2EnId = `tmath-p2-qp-en-${year}`;
    const tmP2EnUrl = real2018Urls[tmP2EnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tmP2EnId)}&tabid=${simulatedConfig["Technical Mathematics"].tabid}&portalid=0&mid=${simulatedConfig["Technical Mathematics"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tmP2EnId,
        subject: "Technical Mathematics",
        specialization: "None",
        title: `Paper 2 (English)`,
        type: "QP",
        language: "English",
        year: year,
        url: tmP2EnUrl
    });

    // Paper 2 Afrikaans
    const tmP2AfId = `tmath-p2-qp-af-${year}`;
    const tmP2AfUrl = real2018Urls[tmP2AfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tmP2AfId)}&tabid=${simulatedConfig["Technical Mathematics"].tabid}&portalid=0&mid=${simulatedConfig["Technical Mathematics"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tmP2AfId,
        subject: "Technical Mathematics",
        specialization: "None",
        title: `Paper 2 (Afrikaans)`,
        type: "QP",
        language: "Afrikaans",
        year: year,
        url: tmP2AfUrl
    });

    // Answer Book (Bilingual)
    const tmAbId = `tmath-p2-ab-bi-${year}`;
    const tmAbUrl = real2018Urls[tmAbId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tmAbId)}&tabid=${simulatedConfig["Technical Mathematics"].tabid}&portalid=0&mid=${simulatedConfig["Technical Mathematics"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tmAbId,
        subject: "Technical Mathematics",
        specialization: "None",
        title: `Paper 2 Answerbook (English & Afrikaans)`,
        type: "AB",
        language: "Bilingual",
        year: year,
        url: tmAbUrl
    });

    // Memo 1 (Bilingual)
    const tmM1Id = `tmath-memo1-bi-${year}`;
    const tmM1Url = real2018Urls[tmM1Id] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tmM1Id)}&tabid=${simulatedConfig["Technical Mathematics"].tabid}&portalid=0&mid=${simulatedConfig["Technical Mathematics"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tmM1Id,
        subject: "Technical Mathematics",
        specialization: "None",
        title: `Memo 1 (English and Afrikaans)`,
        type: "Memo",
        language: "Bilingual",
        year: year,
        url: tmM1Url
    });

    // Memo 2 (Bilingual)
    const tmM2Id = `tmath-memo2-bi-${year}`;
    const tmM2Url = real2018Urls[tmM2Id] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tmM2Id)}&tabid=${simulatedConfig["Technical Mathematics"].tabid}&portalid=0&mid=${simulatedConfig["Technical Mathematics"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tmM2Id,
        subject: "Technical Mathematics",
        specialization: "None",
        title: `Memo 2 (English and Afrikaans)`,
        type: "Memo",
        language: "Bilingual",
        year: year,
        url: tmM2Url
    });

    // 5. Technical Sciences
    // Paper 1 English
    const tsP1EnId = `tsci-p1-qp-en-${year}`;
    const tsP1EnUrl = real2018Urls[tsP1EnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tsP1EnId)}&tabid=${simulatedConfig["Technical Sciences"].tabid}&portalid=0&mid=${simulatedConfig["Technical Sciences"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tsP1EnId,
        subject: "Technical Sciences",
        specialization: "None",
        title: `Paper 1 (English)`,
        type: "QP",
        language: "English",
        year: year,
        url: tsP1EnUrl
    });

    // Paper 1 Afrikaans
    const tsP1AfId = `tsci-p1-qp-af-${year}`;
    const tsP1AfUrl = real2018Urls[tsP1AfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tsP1AfId)}&tabid=${simulatedConfig["Technical Sciences"].tabid}&portalid=0&mid=${simulatedConfig["Technical Sciences"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tsP1AfId,
        subject: "Technical Sciences",
        specialization: "None",
        title: `Paper 1 (Afrikaans)`,
        type: "QP",
        language: "Afrikaans",
        year: year,
        url: tsP1AfUrl
    });

    // Paper 2 English
    const tsP2EnId = `tsci-p2-qp-en-${year}`;
    const tsP2EnUrl = real2018Urls[tsP2EnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tsP2EnId)}&tabid=${simulatedConfig["Technical Sciences"].tabid}&portalid=0&mid=${simulatedConfig["Technical Sciences"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tsP2EnId,
        subject: "Technical Sciences",
        specialization: "None",
        title: `Paper 2 (English)`,
        type: "QP",
        language: "English",
        year: year,
        url: tsP2EnUrl
    });

    // Paper 2 Afrikaans
    const tsP2AfId = `tsci-p2-qp-af-${year}`;
    const tsP2AfUrl = real2018Urls[tsP2AfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tsP2AfId)}&tabid=${simulatedConfig["Technical Sciences"].tabid}&portalid=0&mid=${simulatedConfig["Technical Sciences"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tsP2AfId,
        subject: "Technical Sciences",
        specialization: "None",
        title: `Paper 2 (Afrikaans)`,
        type: "QP",
        language: "Afrikaans",
        year: year,
        url: tsP2AfUrl
    });

    // Memo 1 (Bilingual)
    const tsM1Id = `tsci-memo1-bi-${year}`;
    const tsM1Url = real2018Urls[tsM1Id] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tsM1Id)}&tabid=${simulatedConfig["Technical Sciences"].tabid}&portalid=0&mid=${simulatedConfig["Technical Sciences"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tsM1Id,
        subject: "Technical Sciences",
        specialization: "None",
        title: `Memo 1 (English and Afrikaans)`,
        type: "Memo",
        language: "Bilingual",
        year: year,
        url: tsM1Url
    });

    // Memo 2 (Bilingual)
    const tsM2Id = `tsci-memo2-bi-${year}`;
    const tsM2Url = real2018Urls[tsM2Id] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(tsM2Id)}&tabid=${simulatedConfig["Technical Sciences"].tabid}&portalid=0&mid=${simulatedConfig["Technical Sciences"].mid}&forcedownload=true`;
    papersDataset.push({
        id: tsM2Id,
        subject: "Technical Sciences",
        specialization: "None",
        title: `Memo 2 (English and Afrikaans)`,
        type: "Memo",
        language: "Bilingual",
        year: year,
        url: tsM2Url
    });

    // 6. Engineering Graphic and Design
    // Paper 1 English
    const egP1EnId = `egd-p1-qp-en-${year}`;
    const egP1EnUrl = real2018Urls[egP1EnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(egP1EnId)}&tabid=${simulatedConfig["Engineering Graphic and Design"].tabid}&portalid=0&mid=${simulatedConfig["Engineering Graphic and Design"].mid}&forcedownload=true`;
    papersDataset.push({
        id: egP1EnId,
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: `Paper 1 (English)`,
        type: "QP",
        language: "English",
        year: year,
        url: egP1EnUrl
    });

    // Paper 1 Afrikaans
    const egP1AfId = `egd-p1-qp-af-${year}`;
    const egP1AfUrl = real2018Urls[egP1AfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(egP1AfId)}&tabid=${simulatedConfig["Engineering Graphic and Design"].tabid}&portalid=0&mid=${simulatedConfig["Engineering Graphic and Design"].mid}&forcedownload=true`;
    papersDataset.push({
        id: egP1AfId,
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: `Paper 1 (Afrikaans)`,
        type: "QP",
        language: "Afrikaans",
        year: year,
        url: egP1AfUrl
    });

    // Paper 2 English
    const egP2EnId = `egd-p2-qp-en-${year}`;
    const egP2EnUrl = real2018Urls[egP2EnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(egP2EnId)}&tabid=${simulatedConfig["Engineering Graphic and Design"].tabid}&portalid=0&mid=${simulatedConfig["Engineering Graphic and Design"].mid}&forcedownload=true`;
    papersDataset.push({
        id: egP2EnId,
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: `Paper 2 (English)`,
        type: "QP",
        language: "English",
        year: year,
        url: egP2EnUrl
    });

    // Paper 2 Afrikaans
    const egP2AfId = `egd-p2-qp-af-${year}`;
    const egP2AfUrl = real2018Urls[egP2AfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(egP2AfId)}&tabid=${simulatedConfig["Engineering Graphic and Design"].tabid}&portalid=0&mid=${simulatedConfig["Engineering Graphic and Design"].mid}&forcedownload=true`;
    papersDataset.push({
        id: egP2AfId,
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: `Paper 2 (Afrikaans)`,
        type: "QP",
        language: "Afrikaans",
        year: year,
        url: egP2AfUrl
    });

    // Memo 1 English
    const egM1EnId = `egd-p1-memo-en-${year}`;
    const egM1EnUrl = real2018Urls[egM1EnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(egM1EnId)}&tabid=${simulatedConfig["Engineering Graphic and Design"].tabid}&portalid=0&mid=${simulatedConfig["Engineering Graphic and Design"].mid}&forcedownload=true`;
    papersDataset.push({
        id: egM1EnId,
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: `Memo 1 (English)`,
        type: "Memo",
        language: "English",
        year: year,
        url: egM1EnUrl
    });

    // Memo 1 Afrikaans
    const egM1AfId = `egd-p1-memo-af-${year}`;
    const egM1AfUrl = real2018Urls[egM1AfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(egM1AfId)}&tabid=${simulatedConfig["Engineering Graphic and Design"].tabid}&portalid=0&mid=${simulatedConfig["Engineering Graphic and Design"].mid}&forcedownload=true`;
    papersDataset.push({
        id: egM1AfId,
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: `Memo 1 (Afrikaans)`,
        type: "Memo",
        language: "Afrikaans",
        year: year,
        url: egM1AfUrl
    });

    // Memo 2 English
    const egM2EnId = `egd-p2-memo-en-${year}`;
    const egM2EnUrl = real2018Urls[egM2EnId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(egM2EnId)}&tabid=${simulatedConfig["Engineering Graphic and Design"].tabid}&portalid=0&mid=${simulatedConfig["Engineering Graphic and Design"].mid}&forcedownload=true`;
    papersDataset.push({
        id: egM2EnId,
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: `Memo 2 (English)`,
        type: "Memo",
        language: "English",
        year: year,
        url: egM2EnUrl
    });

    // Memo 2 Afrikaans
    const egM2AfId = `egd-p2-memo-af-${year}`;
    const egM2AfUrl = real2018Urls[egM2AfId] || `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(egM2AfId)}&tabid=${simulatedConfig["Engineering Graphic and Design"].tabid}&portalid=0&mid=${simulatedConfig["Engineering Graphic and Design"].mid}&forcedownload=true`;
    papersDataset.push({
        id: egM2AfId,
        subject: "Engineering Graphic and Design",
        specialization: "None",
        title: `Memo 2 (Afrikaans)`,
        type: "Memo",
        language: "Afrikaans",
        year: year,
        url: egM2AfUrl
    });

    // 7. Non-technical subjects
    const nonTechSubjects = ["Mathematics", "Physical Sciences", "Life Sciences", "Business Studies", "Accounting", "Geography", "History"];
    const nonTechSubjectPrefixes = {
        "Mathematics": "maths",
        "Physical Sciences": "phys",
        "Life Sciences": "life",
        "Business Studies": "bus",
        "Accounting": "acc",
        "Geography": "geo",
        "History": "hist"
    };

    nonTechSubjects.forEach(sub => {
        const pfx = nonTechSubjectPrefixes[sub];
        const config = simulatedConfig[sub];

        // Paper 1 English QP
        const p1EnId = `${pfx}-p1-qp-en-${year}`;
        const p1EnUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(p1EnId)}&tabid=${config.tabid}&portalid=0&mid=${config.mid}&forcedownload=true`;
        papersDataset.push({
            id: p1EnId,
            subject: sub,
            specialization: "None",
            title: `Paper 1 (English)`,
            type: "QP",
            language: "English",
            year: year,
            url: p1EnUrl
        });

        // Paper 1 Afrikaans QP
        const p1AfId = `${pfx}-p1-qp-af-${year}`;
        const p1AfUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(p1AfId)}&tabid=${config.tabid}&portalid=0&mid=${config.mid}&forcedownload=true`;
        papersDataset.push({
            id: p1AfId,
            subject: sub,
            specialization: "None",
            title: `Paper 1 (Afrikaans)`,
            type: "QP",
            language: "Afrikaans",
            year: year,
            url: p1AfUrl
        });

        // Paper 1 English Memo
        const m1EnId = `${pfx}-p1-memo-en-${year}`;
        const m1EnUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(m1EnId)}&tabid=${config.tabid}&portalid=0&mid=${config.mid}&forcedownload=true`;
        papersDataset.push({
            id: m1EnId,
            subject: sub,
            specialization: "None",
            title: `Paper 1 Memorandum (English)`,
            type: "Memo",
            language: "English",
            year: year,
            url: m1EnUrl
        });

        // Paper 1 Afrikaans Memo
        const m1AfId = `${pfx}-p1-memo-af-${year}`;
        const m1AfUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(m1AfId)}&tabid=${config.tabid}&portalid=0&mid=${config.mid}&forcedownload=true`;
        papersDataset.push({
            id: m1AfId,
            subject: sub,
            specialization: "None",
            title: `Paper 1 Memorandum (Afrikaans)`,
            type: "Memo",
            language: "Afrikaans",
            year: year,
            url: m1AfUrl
        });

        // Paper 2 English QP
        const p2EnId = `${pfx}-p2-qp-en-${year}`;
        const p2EnUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(p2EnId)}&tabid=${config.tabid}&portalid=0&mid=${config.mid}&forcedownload=true`;
        papersDataset.push({
            id: p2EnId,
            subject: sub,
            specialization: "None",
            title: `Paper 2 (English)`,
            type: "QP",
            language: "English",
            year: year,
            url: p2EnUrl
        });

        // Paper 2 Afrikaans QP
        const p2AfId = `${pfx}-p2-qp-af-${year}`;
        const p2AfUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(p2AfId)}&tabid=${config.tabid}&portalid=0&mid=${config.mid}&forcedownload=true`;
        papersDataset.push({
            id: p2AfId,
            subject: sub,
            specialization: "None",
            title: `Paper 2 (Afrikaans)`,
            type: "QP",
            language: "Afrikaans",
            year: year,
            url: p2AfUrl
        });

        // Paper 2 English Memo
        const m2EnId = `${pfx}-p2-memo-en-${year}`;
        const m2EnUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(m2EnId)}&tabid=${config.tabid}&portalid=0&mid=${config.mid}&forcedownload=true`;
        papersDataset.push({
            id: m2EnId,
            subject: sub,
            specialization: "None",
            title: `Paper 2 Memorandum (English)`,
            type: "Memo",
            language: "English",
            year: year,
            url: m2EnUrl
        });

        // Paper 2 Afrikaans Memo
        const m2AfId = `${pfx}-p2-memo-af-${year}`;
        const m2AfUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(m2AfId)}&tabid=${config.tabid}&portalid=0&mid=${config.mid}&forcedownload=true`;
        papersDataset.push({
            id: m2AfId,
            subject: sub,
            specialization: "None",
            title: `Paper 2 Memorandum (Afrikaans)`,
            type: "Memo",
            language: "Afrikaans",
            year: year,
            url: m2AfUrl
        });
    });

    // English FAL (First Additional Language) - English only
    const engFalConfig = simulatedConfig["English FAL"];
    const efP1QpId = `engfal-p1-qp-en-${year}`;
    const efP1QpUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(efP1QpId)}&tabid=${engFalConfig.tabid}&portalid=0&mid=${engFalConfig.mid}&forcedownload=true`;
    papersDataset.push({
        id: efP1QpId,
        subject: "English FAL",
        specialization: "None",
        title: `Paper 1 (English)`,
        type: "QP",
        language: "English",
        year: year,
        url: efP1QpUrl
    });

    const efP1MemoId = `engfal-p1-memo-en-${year}`;
    const efP1MemoUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(efP1MemoId)}&tabid=${engFalConfig.tabid}&portalid=0&mid=${engFalConfig.mid}&forcedownload=true`;
    papersDataset.push({
        id: efP1MemoId,
        subject: "English FAL",
        specialization: "None",
        title: `Paper 1 Memorandum (English)`,
        type: "Memo",
        language: "English",
        year: year,
        url: efP1MemoUrl
    });

    const efP2QpId = `engfal-p2-qp-en-${year}`;
    const efP2QpUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(efP2QpId)}&tabid=${engFalConfig.tabid}&portalid=0&mid=${engFalConfig.mid}&forcedownload=true`;
    papersDataset.push({
        id: efP2QpId,
        subject: "English FAL",
        specialization: "None",
        title: `Paper 2 (English)`,
        type: "QP",
        language: "English",
        year: year,
        url: efP2QpUrl
    });

    const efP2MemoId = `engfal-p2-memo-en-${year}`;
    const efP2MemoUrl = `https://www.education.gov.za/LinkClick.aspx?fileticket=${generateFileticket(efP2MemoId)}&tabid=${engFalConfig.tabid}&portalid=0&mid=${engFalConfig.mid}&forcedownload=true`;
    papersDataset.push({
        id: efP2MemoId,
        subject: "English FAL",
        specialization: "None",
        title: `Paper 2 Memorandum (English)`,
        type: "Memo",
        language: "English",
        year: year,
        url: efP2MemoUrl
    });
    });
});
papersDataset.push = originalPush;

// Mark static non-SG papers as Term 4
papersDataset.forEach(paper => {
    if (paper.type !== "SG" && !paper.term) {
        paper.term = "Term 4";
    }
});

// Specialization mappings for multi-discipline technical subjects
const subjectSpecializations = {
    "Civil Technology": ["Civil Services", "Construction", "Woodworking"],
    "Electrical Technology": ["Digital Electronics", "Electronics", "Power Systems"],
    "Mechanical Technology": ["Automotive", "Fitting and Machining", "Welding and Metalwork"]
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
const resultCountEl = document.getElementById("result-count");
const statFilesEl = document.getElementById("stat-files");
const statGuidesEl = document.getElementById("stat-guides");

// Initialize application
function init() {
    // Count exam papers (type !== "SG") and study guides (type === "SG") separately
    const papersCount = papersDataset.filter(paper => paper.type !== "SG").length;
    const guidesCount = papersDataset.filter(paper => paper.type === "SG").length;

    // Dynamically calculate the number of unique subjects in the dataset
    const uniqueSubjects = new Set(papersDataset.map(paper => paper.subject));
    const statSubjectsEl = document.getElementById("stat-subjects");
    if (statSubjectsEl) statSubjectsEl.textContent = uniqueSubjects.size;

    // Set total curated files and study guides stats dynamically
    if (statFilesEl) statFilesEl.textContent = papersCount;
    if (statGuidesEl) statGuidesEl.textContent = guidesCount;

    // Event Listeners for inputs
    searchInput.addEventListener("input", filterAndRender);
    if (filterTerm) filterTerm.addEventListener("change", filterAndRender);
    filterSubject.addEventListener("change", handleSubjectChange);
    filterSpecialization.addEventListener("change", filterAndRender);
    filterLanguage.addEventListener("change", filterAndRender);
    filterType.addEventListener("change", filterAndRender);
    filterYear.addEventListener("change", filterAndRender);

    btnReset.addEventListener("click", resetAllFilters);
    btnNoResultsReset.addEventListener("click", resetAllFilters);

    // Initial render
    filterAndRender();
}

// When subject changes, show/hide and populate the specialization dropdown accordingly
function handleSubjectChange() {
    const selectedSubject = filterSubject.value;
    const specializations = subjectSpecializations[selectedSubject];

    if (specializations) {
        // Clear previous options except "All"
        filterSpecialization.innerHTML = '<option value="ALL">All Specializations</option>';

        // Add new options
        specializations.forEach(spec => {
            const option = document.createElement("option");
            option.value = spec;
            option.textContent = spec;
            filterSpecialization.appendChild(option);
        });

        // Show the container
        containerSpecialization.classList.remove("hidden");
    } else {
        // Hide the container and reset selected value
        containerSpecialization.classList.add("hidden");
        filterSpecialization.value = "ALL";
    }

    filterAndRender();
}

// Reset all filters to default ALL state
function resetAllFilters() {
    searchInput.value = "";
    if (filterTerm) filterTerm.value = "ALL";
    filterSubject.value = "ALL";
    filterSpecialization.value = "ALL";
    containerSpecialization.classList.add("hidden");
    filterLanguage.value = "ALL";
    filterType.value = "ALL";
    filterYear.value = "ALL";

    filterAndRender();
}

// Main logic to filter the dataset and render matching rows
function filterAndRender() {
    const query = searchInput.value.toLowerCase().trim();
    const termVal = filterTerm ? filterTerm.value : "ALL";
    const subject = filterSubject.value;
    const specialization = filterSpecialization.value;
    const language = filterLanguage.value;
    const type = filterType.value;
    const year = filterYear.value;

    // Filter array
    const filteredPapers = papersDataset.filter(paper => {
        // Text search match
        const termName = paper.term ? termDisplayNames[paper.term] : "";
        const matchesQuery = query === "" ||
            paper.title.toLowerCase().includes(query) ||
            paper.subject.toLowerCase().includes(query) ||
            (paper.specialization && paper.specialization.toLowerCase().includes(query)) ||
            (termName && termName.toLowerCase().includes(query));

        // Term match
        const matchesTerm = termVal === "ALL" || paper.term === termVal;

        // Subject match
        const matchesSubject = subject === "ALL" || paper.subject === subject;

        // Specialization match
        const matchesSpec = specialization === "ALL" || paper.specialization === specialization;

        // Language match
        const matchesLanguage = language === "ALL" ||
            paper.language === language ||
            (language === "Bilingual" && paper.language === "Bilingual") ||
            (paper.language === "Bilingual" && (language === "English" || language === "Afrikaans"));

        // Type match
        const matchesType = type === "ALL" || paper.type === type;

        // Year match
        const matchesYear = year === "ALL" || paper.year === year;

        return matchesQuery && matchesTerm && matchesSubject && matchesSpec && matchesLanguage && matchesType && matchesYear;
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
            if (paper.subject === "Technical Mathematics" || paper.subject === "Mathematics") {
                subjectBadgeClass = "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/10";
            } else if (paper.subject === "Technical Sciences" || paper.subject === "Physical Sciences") {
                subjectBadgeClass = "bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-600/10";
            } else if (paper.subject === "Civil Technology") {
                subjectBadgeClass = "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/10";
            } else if (paper.subject === "Electrical Technology") {
                subjectBadgeClass = "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/10";
            } else if (paper.subject === "Mechanical Technology") {
                subjectBadgeClass = "bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-600/10";
            } else if (paper.subject === "Engineering Graphic and Design") {
                subjectBadgeClass = "bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-600/10";
            } else if (paper.subject === "Life Sciences") {
                subjectBadgeClass = "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/10";
            } else if (paper.subject === "Business Studies") {
                subjectBadgeClass = "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/10";
            } else if (paper.subject === "Accounting") {
                subjectBadgeClass = "bg-cyan-50 text-cyan-700 ring-1 ring-inset ring-cyan-600/10";
            } else if (paper.subject === "Geography") {
                subjectBadgeClass = "bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-600/10";
            } else if (paper.subject === "History") {
                subjectBadgeClass = "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/10";
            } else if (paper.subject === "English FAL") {
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
