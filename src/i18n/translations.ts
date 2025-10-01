type Translation = {
  navbar: {
    home: string;
    about: string;
    education: string;
    experience: string;
    projects: string;
  };
  home: {
    intro1: string;
    intro2: string;
    intro3: string;
    intro4: string;
    downloadCV: string;
    aboutBtn: string;
    educationBtn: string;
    experienceBtn: string;
    projectsBtn: string;
    contactTitle: string;
    sendMessage: string;
    name: string;
    email: string;
    message: string;
    sendBtn: string;
  };
  about: {
    title: string;
    personalInfo: string;
    name: string;
    dob: string;
    sex: string;
    nationality: string;
    languages: string;
    german: string;
    english: string;
    vietnamese: string;
    businessFluent: string;
    native: string;
    technicalSkills: string;
  };
  education: {
    title: string;
    jgu: {
      name: string;
      degree: string;
      time: string;
      focus: string;
      projects: string;
      major: string;
      minor: string;
      modules: string;
      majorName: string;
      minorName: string;
      project1: string;
      project2: string;
      project3: string;
      moduleNames: {
        introProg: string;
        digitalCircuits: string;
        formalLang: string;
        database: string;
        introDesign: string;
        progLang: string;
        dsea: string;
        complexity: string;
        se: string;
        gameTheory: string;
        itSec: string;
        commNet: string;
        absatz: string;
        irw: string;
        erw: string;
        finanz: string;
      };
      times: {
        wise2223: string;
        sose23: string;
        wise2324:string;
        sose24: string;
        wise2425: string;
        sose25: string;
      };
    };
    stk: {
      name: string;
      degree: string;
      time: string;
      focus: string;
      focusContent: string;
      subjects: string;
      sbj1: string;
      sbj2: string;
      sbj3: string;
      sbj4: string;
      sbj5: string;
      fsp: string;
    };
    thpt: {
      name: string;
      degree: string;
      time: string;
      dsd: string;
      exam: string;
      transcript: string;
    };
  };
  experience: {
    title: string;
    conscia: {
      name: string;
      position: string;
      time: string;
      companyDesc: string;
      mainTasks: string;
      taskContent: string | string[];
    };
  };
  projects: {
    title: string;
    all: string;
    cat1: string;
    cat2: string;
    cat3: string;
    cat4: string;
    portfolio: {
      name: string;
      time: string;
      desc: string;
      role?: string;
      tech?: string;
      view: string;
    };
    chess: {
      name: string;
      time: string;
      desc?: string;
      memNum?: string;
      role?: string;
      tech?: string;
    };
    webserver: {
      name: string;
      time: string;
      desc?: string;
      memNum?: string;
      role?: string;
      tech?: string;
    };
    aiSim: {
      name: string;
      time: string;
      desc?: string;
      memNum?: string;
      role?: string;
      tech?: string; 
    };
  };
};

type Translations = {
  en: Translation;
  vi: Translation;
  de: Translation;
};

const translations: Translations = {
  en: {
    navbar: {
      home: "HOME",
      about: "ABOUT ME",
      education: "EDUCATION",
      experience: "EXPERIENCE",
      projects: "PROJECTS",
    },
    home: {
      intro1: "Hi, my name is",
      intro2: "The Quan Vu",
      intro3:
        "Computer Science student",
      intro4:
        "Welcome to my portfolio website! I'm Quan, 22 years old. I come from Vietnam and currently studying Computer Science at Johannes Gutenberg University of Mainz. Feel free to explore more about me, my education journey, work experiences and projects below. And don't hesistate to leave a message. I'm looking forward to connecting with you.",
      downloadCV: "Download CV",
      aboutBtn: "About me",
      educationBtn: "Education",
      experienceBtn: "Experience",
      projectsBtn: "Projects",
      contactTitle: "Contact Information",
      sendMessage: "Send message",
      name: "Name",
      email: "Email",
      message: "Message",
      sendBtn: "Send",
    },
    about: {
      title: "ABOUT ME",
      personalInfo: "Personal Information",
      languages: "Languages",
      technicalSkills: "Technical Skills",
      name: "Name, Surname: The Quan, Vu",
      dob: "Date of birth: 20.04.2003",
      sex: "Gender: Male",
      nationality: "Nationality: Vietnamese",
      german: "German",
      english: "English",
      vietnamese: "Vietnamese",
      businessFluent: "Business fluent",
      native: "Native",
    },
    education: {
      title: "EDUCATION JOURNEY",
      jgu: {
        name: "Johannes Gutenberg University of Mainz",
        degree: "Bachelor of Science - Computer Science",
        time: "Oct 2022 - now",
        focus: "Focus",
        projects: "Projects",
        major: "Major",
        minor: "Minor",
        modules: "Modules",
        majorName: "Computer Science",
        minorName: "Economics",
        project1: "Game (Introduction to Programming)",
        project2: "Software Engineering (Agile Methods)",
        project3: "Webserver and Network Analytics (Communication Networks)",
        moduleNames: {
          introProg: "Introduction to Programming",
          digitalCircuits: "Digital Circuits and Systems",
          formalLang: "Formal Languages and Computability",
          database: "Database Systems",
          introDesign: "Introduction to Software Design",
          progLang: "Programming Languages",
          dsea: "Data Structures and Algorithms",
          complexity: "Complexity Theory",
          se: "Software Engineering / Software Technic",
          gameTheory: "Game Theory",
          itSec: "IT-Security",
          commNet: "Communication Networks",
          absatz: "Fundamentals of Marketing Management",
          irw: "Internal Accounting",
          erw: "External Accounting",
          finanz: "Financial Management",
        },
        times: {
          wise2223: "WiSe 2022/23",
          sose23: "SuSe 2023",
          wise2324: "WiSe 2023/24",
          sose24: "SuSe 2024",
          wise2425: "WiSe 2024/25",
          sose25: "SuSe 2025",
        },
      },
      stk: {
        name: "Studienkolleg Mittelhessen",
        degree: "University Preparatory",
        time: "Sep 2021 - Jul 2022",
        focus: "T-Course",
        focusContent: "Technical, mathematical and natural science programs",
        subjects: "Subjects",
        sbj1: "Mathematics",
        sbj2: "Physics",
        sbj3: "Chemistry",
        sbj4: "Informatics",
        sbj5: "German",
        fsp: "Certificate of University Qualification Assessment Examination",
      },
      thpt: {
        name: "Foreign Language Specialized High School",
        degree: "Specialized Class in German (7-year program)",
        time: "Sep 2018 - Jul 2021",
        dsd: "DSD-II Certificate",
        exam: "University Entrance Exam Result",
        transcript: "High School Transcript",
      },
    },
    experience: {
      title: "WORK EXPERIENCE",
      conscia: {
        name: "Conscia Germany Ltd.",
        position: "Working Student IT - Service Technician",
        time: "Jul 2025 - now",
        companyDesc: "Conscia Germany Ltd. is an IT consulting company that belongs to the international Conscia Group, which specializes in IT infrastructure, cybersecurity and cloud management solutions. The company implemented a project to provide multimedia entertainment services for patients at the University Medical Center Mainz. Through the BEWATEC ConnectedCare solution, Conscia is responsible for the deployment, operation, and maintenance of bedside entertainment systems, offering services such as movies, music, internet access, and hospital information.",
        mainTasks: "My main tasks",
        taskContent: 
          ["Installation and replacement of patient entertainment systems.",
           "Verification of operating systems and functionalities after installation or replacement.",
           "Recording and documentation of technical issues.",
           "Maintenance of payment machines and headphone dispensers."]
      },
    },
    projects: {
      title: "PROJECTS",
      all: "All",
      cat1: "Web Development",
      cat2: "Game Development",
      cat3: "Network",
      cat4: "Software Engineering",
      portfolio: {
        name: "Portfolio Website",
        time: "Sep 2025",
        desc: "This is my personal portfolio website to introduce myself, my journey and some projects that I have worked on. Explore more about the website and source code on GitHub below.",
        role: "Role: Main Developer",
        tech: "Tech Stack: React, TypeScript, CSS",
        view: "View Website",
      },
      chess: {
        name: "Chess Game",
        time: "Mar 2023",
        desc: "This is a simple chess game application developed as part of Introduction to Programming course .",
        memNum: "Team members: 3",
        role: "Role: Developer",
        tech: "Tech Stack: Python, PyQt5",
      },
      webserver: {
        name: "Webserver and Network Analytics",
        time: "Aug 2025",
        desc: "This is a Network Analytics Lab and a simple Webserver developed as part of Communication Networks course. We worked in a 2-member team to analyze network traffic data captured by Wireshark and implement a simple webserver that can handle HTTP requests and responses. Explore more about this lab on Drive below.",
        memNum: "Team members: 2",
        role: "Role: Developer",
        tech: "Tech Stack: Python, Wireshark, LaTeX",
      },
      aiSim: {
        name: "Active Learning Simulation UI",
        time: "Mar 2025",
        desc: "This is an Active Learning Simulation Web Application developed as part of Software Engineering course. We worked in a 6-member frontend team, collaborating closely with a backend team, following Agile methodolgy with Kanban board for tasks tracking and weekly sprints. Explore more about source code on GitHub below.",
        memNum: "Team members: 6",
        role: "Role: Frontend Developer",
        tech: "Tech Stack: React, TypeScript, CSS, ChakraUI",
      },
    },
  },
  vi: {
    navbar: {
      home: "TRANG CHỦ",
      about: "GIỚI THIỆU",
      education: "HỌC VẤN",
      experience: "KINH NGHIỆM",
      projects: "DỰ ÁN",
    },
    home: {
      intro1: "Xin chào, tôi tên là",
      intro2: "Vũ Thế Quân",
      intro3:
        "Sinh viên Công nghệ Thông tin",
      intro4:
        "Chào mừng bạn đến với trang web portfolio của tôi! Tôi là Quân, 22 tuổi. Tôi đến từ Việt Nam và hiện đang là sinh viên ngành Công nghệ thông tin tại Đại học Johannes Gutenberg Mainz. Tìm hiểu thêm về tôi, hành trình học tập, kinh nghiệm làm việc và các dự án bên dưới. Đừng ngần ngại để lại tin nhắn. Tôi rất mong được kết nối với bạn.",
      downloadCV: "Tải CV",
      aboutBtn: "Giới thiệu",
      educationBtn: "Học vấn",
      experienceBtn: "Kinh nghiệm",
      projectsBtn: "Dự án",
      contactTitle: "Thông tin liên hệ",
      sendMessage: "Gửi tin nhắn",
      name: "Họ và tên",
      email: "Email",
      message: "Nội dung",
      sendBtn: "Gửi",
    },
    about: {
      title: "GIỚI THIỆU",
      personalInfo: "Thông tin cá nhân",
      name: "Họ và tên: Vũ Thế Quân",
      dob: "Ngày sinh: 20.04.2003",
      sex: "Giới tính: Nam",
      nationality: "Quốc tịch: Việt Nam",
      languages: "Ngôn ngữ",
      german: "Tiếng Đức",
      english: "Tiếng Anh",
      vietnamese: "Tiếng Việt",
      businessFluent: "Thành thạo",
      native: "Tiếng mẹ đẻ",
      technicalSkills: "Kỹ năng",
    },
    education: {
      title: "QUÁ TRÌNH HỌC VẤN",
      jgu: {
        name: "Đại học Johannes Gutenberg Mainz",
        degree: "Cử nhân khoa học - Công nghệ thông tin",
        time: "10/2022 đến nay",
        focus: "Chuyên ngành",
        projects: "Dự án",
        major: "Ngành chính",
        minor: "Ngành phụ",
        modules: "Các học phần",
        majorName: "Công nghệ thông tin",
        minorName: "Kinh tế học",
        project1: "Trò chơi (Nhập môn Lập trình)",
        project2: "Kỹ thuật phần mềm (Phương pháp Agile)",
        project3: "Webserver và Phân tích mạng (Mạng truyền thông)",
        moduleNames: {
          introProg: "Nhập môn Lập trình",
          digitalCircuits: "Mạch và Hệ thống Số",
          formalLang: "Ngôn ngữ hình thức và Tính toán",
          database: "Hệ quản trị Cơ sở dữ liệu",
          introDesign: "Nhập môn Thiết kế Phần mềm",
          progLang: "Ngôn ngữ Lập trình",
          dsea: "Cấu trúc Dữ liệu và Giải thuật",
          complexity: "Lý thuyết Độ phức tạp",
          se: "Kỹ thuật phần mềm",
          gameTheory: "Lý thuyết Trò chơi",
          itSec: "An toàn Thông tin",
          commNet: "Mạng Truyền thông",
          absatz: "Quản trị Marketing",
          irw: "Kế toán quản trị",
          erw: "Kế toán tài chính",
          finanz: " Quản trị tài chính",
        },
        times: {
          wise2223: "Kỳ Đông 2022/23",
          sose23: "Kỳ Hè 2023",
          wise2324: "Kỳ Đông 2023/24",
          sose24: "Kỳ Hè 2024",
          wise2425: "Kỳ Đông 2024/25",
          sose25: "Kỳ Hè 2025",
        },
      },
      stk: {
        name: "Trường Dự bị Đại học Mittelhessen",
        degree: "Dự bị đại học",
        time: "09/2021 - 07/2022",
        focus: "Khối T",
        focusContent: "Chương trình học kỹ thuật, toán học và khoa học tự nhiên",
        subjects: "Các môn học",
        sbj1: "Toán học",
        sbj2: "Vật lý",
        sbj3: "Hóa học",
        sbj4: "Tin học",
        sbj5: "Tiếng Đức",
        fsp: "Chứng chỉ kỳ thi đánh giá trình độ Dự bị Đại học",
      },
      thpt: {
        name: "Trường THPT Chuyên Ngoại Ngữ",
        degree: "Lớp chuyên tiếng Đức (hệ 7 năm)",
        time: "09/2018 - 07/2021",
        dsd: "Chứng chỉ DSD-II",
        exam: "Chứng nhận kết quả thi TNTHPT",
        transcript: "Học bạ THPT",
      },
    },
    experience: {
      title: "KINH NGHIỆM LÀM VIỆC",
      conscia: {
        name: "Công ty TNHH Conscia Đức",
        position: "Sinh viên làm thêm IT - Kỹ thuật viên dịch vụ",
        time: "07/2025 đến nay",
        companyDesc: "Công ty TNHH Conscia Đức là công ty tư vấn CNTT thuộc Tập đoàn Conscia Group - một tập đoàn đa quốc gia chuyên về giải pháp hạ tầng IT, an ninh mạng và quản lý đám mây. Công ty đã triển khai dự án cung cấp dịch vụ giải trí đa phương tiện cho bệnh nhân tại Bệnh viện Đại học Mainz. Thông qua giải pháp BEWATEC ConnectedCare, Conscia chịu trách nhiệm triển khai, vận hành và bảo trì hệ thống giải trí tại giường bệnh, bao gồm các dịch vụ như xem phim, nghe nhạc, truy cập Internet và cung cấp thông tin bệnh viện.",
        mainTasks: "Công việc chính của tôi",
        taskContent: 
          ["Lắp đặt và thay thế hệ thống giải trí cho bệnh nhân.",
           "Kiểm tra hệ điều hành và các chức năng sau khi lắp đặt hoặc thay thế.",
           "Ghi nhận và lập tài liệu về các sự cố kỹ thuật.",
           "Bảo trì máy thanh toán và máy bán tai nghe tự động."]
      },
    },
    projects: {
      title: "CÁC DỰ ÁN",
      all: "Tất cả",
      cat1: "Phát triển Web",
      cat2: "Phát triển Game",
      cat3: "Mạng",
      cat4: "Kỹ thuật Phần mềm",
      portfolio: {
        name: "Trang web Portfolio",
        time: "09/2025",
        desc: "Trang web portfolio cá nhân được xây dựng bằng React và TypeScript để giới thiệu các dự án và kỹ năng của tôi.",
        role: "Vai trò: Lập trình viên chính",
        tech: "Công nghệ sử dụng: React, TypeScript, CSS",
        view: "Xem trang web",
      },
      chess: {
        name: "Trò chơi cờ vua",
        time: "03/2023",
        desc: "Đây là một ứng dụng trò chơi cờ vua đơn giản được phát triển trong khuôn khổ môn Nhập môn Lập trình.",
        memNum: "Số thành viên nhóm: 3",
        role: "Vai trò: Lập trình viên",
        tech: "Công nghệ sử dụng: Python, PyQt5", 
      },
      webserver: {
        name: "Webserver và phân tích mạng",
        time: "08/2025",
        desc: "Đây là một thí nghiệm Phân tích Mạng và một Webserver đơn giản được phát triển trong khuôn khổ môn Mạng Truyền thông. Chúng tôi đã làm việc theo nhóm 2 người để phân tích dữ liệu lưu lượng mạng được ghi lại bằng Wireshark và triển khai một webserver đơn giản có thể xử lý các yêu cầu và phản hồi HTTP. Tìm hiểu thêm về dự án này trên Drive bên dưới.",
        memNum: "Số thành viên nhóm: 2",
        role: "Vai trò: Lập trình viên",
        tech: "Công nghệ sử dụng: Python, Wireshark, LaTeX",
      },
      aiSim: {
        name: "Giao diện mô phỏng Active Learning",
        time: "03/2025",
        desc: "Đây là một ứng dụng web mô phỏng Active Learning được phát triển trong khuôn khổ môn Kỹ thuật Phần mềm. Chúng tôi đã làm việc trong một nhóm frontend gồm 6 người, phối hợp chặt chẽ với nhóm backend, tuân theo phương pháp Agile với bảng Kanban để theo dõi các nhiệm vụ và các sprint hàng tuần. Tìm hiểu thêm về mã nguồn trên GitHub bên dưới.",
        memNum: "Số thành viên nhóm: 6",
        role: "Vai trò: Lập trình viên frontend",
        tech: "Công nghệ sử dụng: React, TypeScript, CSS, ChakraUI",
      },
    },
  },
  de: {
    navbar: {
      home: "STARTSEITE",
      about: "ÜBER MICH",
      education: "AUSBILDUNG",
      experience: "BERUFSERFAHRUNGEN",
      projects: "PROJEKTE",
    },
    home: {
      intro1: "Hallo, mein Name ist",
      intro2: "The Quan Vu",
      intro3:
        "Informatikstudent",
      intro4:
        "Willkommen auf meiner Portfolio Webseite! Ich bin Quan, 22 Jahre alt. Ich komme aus Vietnam und studiere derzeit Informatik an der Johannes Gutenberg Universität Mainz. Erkunde mehr über mich, meinen Bildungsweg, meine Berufserfahrungen und Projekte unten. Und zögere, eine Nachricht zu hinterlassen. Ich freue mich sehr auf den Austausch mit Dir.",
      downloadCV: "Lebenslauf herunterladen",
      aboutBtn: "Über mich",
      educationBtn: "Ausbildung",
      experienceBtn: "Berufserfahrung",
      projectsBtn: "Projekte",
      contactTitle: "Kontaktinformationen",
      sendMessage: "Nachricht senden",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      sendBtn: "Senden",
    },
    about: {
      title: "ÜBER MICH",
      personalInfo: "Persönliche Informationen",
      languages: "Sprachen",
      technicalSkills: "Technische Fähigkeiten",
      name: "Name, Nachname: The Quan, Vu",
      dob: "Geburtsdatum: 20.04.2003",
      sex: "Geschlecht: Männlich",
      nationality: "Nationalität: Vietnamesisch",
      german: "Deutsch",
      english: "Englisch",
      vietnamese: "Vietnamesisch",
      businessFluent: "Verhandlungssicher",
      native: "Muttersprache",
    },
    education: {
      title: "BILDUNGSWEG",
      jgu: {
        name: "Johannes Gutenberg Universität Mainz",
        degree: "Bachelor of Science - Informatik",
        time: "Okt 2022 - heute",
        focus: "Schwerpunkt",
        projects: "Projekte",
        major: "Hauptfach",
        minor: "Nebenfach",
        modules: "Module",
        majorName: "Informatik",
        minorName: "Wirtschaftswissenschaften",
        project1: "Spiel (Einführung in die Programmierung)",
        project2: "Software Engineering (Agile Methoden)",
        project3: "Webserver und Netzwerkanalyse (Kommunikationsnetze)",
        moduleNames: {
          introProg: "Einführung in die Programmierung",
          digitalCircuits: "Technische Grundlage der Informatik",
          formalLang: "Formale Sprachen und Berechenbarkeit",
          database: "Datenbanksysteme",
          introDesign: "Einführung in die Softwareentwicklung",
          progLang: "Programmiersprachen",
          dsea: "Datenstrukturen und effiziente Algorithmen",
          complexity: "Komplexitätstheorie",
          se: "Software Engineering / Softwaretechnik",
          gameTheory: "Spieltheorie",
          itSec: "IT-Sicherheit",
          commNet: "Kommunikationsnetze",
          absatz: "Absatzwirtschaft",
          irw: "Internes Rechnungswesen",
          erw: "Externes Rechnungswesen",
          finanz: "Finanzwirtschaft",
        },
        times: {
          wise2223: "WiSe 2022/23",
          sose23: "SoSe 2023",
          wise2324: "WiSe 2023/24",
          sose24: "SoSe 2024",
          wise2425: "WiSe 2024/25",
          sose25: "SoSe 2025",
        },
      },
      stk: {
        name: "Studienkolleg Mittelhessen",
        degree: "Studienvorbereitung",
        time: "Sep 2021 - Jul 2022",
        focus: "T-Kurs",
        focusContent: "Technische, mathematische und naturwissenschaftliche Studiengänge",
        subjects: "Fächer",
        sbj1: "Mathematik",
        sbj2: "Physik",
        sbj3: "Chemie",
        sbj4: "Informatik",
        sbj5: "Deutsch",
        fsp: "Zeugnis über die Feststellungsprüfung",
      },
      thpt: {
        name: "Spezialisiertes Gymnasium für Fremdsprachen",
        degree: "Spezialklasse für Deutsch (7-jährige Ausbildung)",
        time: "Sep 2018 - Jul 2021",
        dsd: "DSD-II Zertifikat",
        exam: "Hochschulaufnahmeprüfung",
        transcript: "Oberschule Notenübersicht",
      },
    },
    experience: {
      title: "BERUFSERFAHRUNGEN",
      conscia: {
        name: "Conscia Deutschland GmbH",
        position: "Werkstudent IT - Service Techniker",
        time: "Jul 2025 bisher",
        companyDesc: "Die Conscia Deutschland GmbH ist ein IT-Beratungsunternehmen und Teil der internationalen Conscia Group, die auf IT-Infrastruktur, Cybersicherheit und Cloud-Management spezialisiert ist. Das Unternehmen hat ein Projekt zur Bereitstellung von multimedialen Entertainmentsdiensten für Patienten am Universitätsklinikum Mainz umgesetzt. Mit der Lösung BEWATEC ConnectedCare übernimmt Conscia die Implementierung, den Betrieb und die Wartung des Entertainmentssystems am Patientenbett, das Dienste wie Filme, Musik, Internetzugang und Krankenhausinformationen bietet.",
        mainTasks: "Meine Hauptarbeit",
        taskContent: 
          ["Installation und Austausch von Patiententertainmentssystem.",
           "Überprüfung des Betriebssystems und der Funktionen nach der Installation oder Austausch.",
           "Erfassung und Dokumentation technischer Fehler.",
           "Pflege von Kassenautomaten und Kopfhörerautomaten."]
      },
    },
    projects: {
      title: "PROJEKTE",
      all: "Alle",
      cat1: "Webentwicklung",
      cat2: "Spielentwicklung",
      cat3: "Netzwerk",
      cat4: "Softwaretechnik",
      portfolio: {
        name: "Portfolio Webseite",
        time: "Sep 2025",
        desc: "Dies ist meine persönliche Portfolio-Webseite, um mich, meinen Werdegang und einige Projekte, an denen ich gearbeitet habe, vorzustellen. Erfahre mehr über die Webseite und den Quellcode auf GitHub unten.",
        role: "Rolle: Hauptentwickler",
        tech: "Technologie-Stack: React, TypeScript, CSS",
        view: "Webseite ansehen",
      },
      chess: {
        name: "Schachspiel",
        time: "Mär 2023",
        desc: "Dies ist eine einfache Schachspiel-Anwendung, die im Rahmen des Kurses Einführung in die Programmierung entwickelt wurde.",
        memNum: "Teammitglieder: 3",
        role: "Rolle: Entwickler",
        tech: "Technologie-Stack: Python, PyQt5",
      },
      webserver: {
        name: "Webserver und Netzwerkanalyse",
        time: "Aug 2025",
        desc: "Dies ist ein Netzwerk-Analyse-Labor und ein einfacher Webserver, der im Rahmen des Kurses Kommunikationsnetze entwickelt wurde. Wir arbeiteten in einem 2-köpfigen Team, um Netzwerkverkehrsdaten zu analysieren, die von Wireshark erfasst wurden, und implementierten einen einfachen Webserver, der HTTP-Anfragen und -Antworten verarbeiten kann. Erfahre mehr über dieses Labor auf Drive unten.",
        memNum: "Teammitglieder: 2",
        role: "Rolle: Entwickler",
        tech: "Technologie-Stack: Python, Wireshark, LaTeX",
      },
      aiSim: {
        name: "Active Learning Simulation UI",
        time: "Mär 2025",
        desc: "Dies ist eine Active Learning Simulation Webanwendung, die im Rahmen des Kurses Software Engineering entwickelt wurde. Wir arbeiteten in einem 6-köpfigen Frontend-Team, das eng mit einem Backend-Team zusammenarbeitete und der agilen Methodik mit Kanban-Board für die Aufgabenverfolgung und wöchentliche Sprints folgte. Erfahre mehr über den Quellcode auf GitHub unten.",
        memNum: "Teammitglieder: 6",
        role: "Rolle: Frontend-Entwickler",
        tech: "Technologie-Stack: React, TypeScript, CSS, ChakraUI",
      },
    },
  },
};

export default translations;
