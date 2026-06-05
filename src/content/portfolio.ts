export type NavigationItem = {
  label: string;
  href: string;
  id: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  institution: string;
  tagline: string;
  summary: string;
  portrait: string;
  links: {
    email: string;
    github: string;
    linkedin: string;
    facebook: string;
    googleScholar: string;
    researchGate: string;
    resume: string;
  };
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type EducationEntry = {
  level: string;
  institution: string;
  period: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ResearchItem = {
  title: string;
  status?: string;
  venue: string;
  summary: string;
  keywords: string[];
  highlights: string[];
  collaborators?: string;
  link?: string;
};

export type Project = {
  title: string;
  summary: string;
  techStack: string[];
  categories: string[];
  status: string;
  impact: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export type Achievement = {
  title: string;
  detail: string;
};

export type TimelineEntry = {
  date: string;
  title: string;
  detail: string;
};

export type Endorsement = {
  quote: string;
  name: string;
  role: string;
};

export const portfolio = {
  navigation: [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Research", href: "#research", id: "research" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Timeline", href: "#timeline", id: "timeline" },
    { label: "Contact", href: "#contact", id: "contact" }
  ] satisfies NavigationItem[],

  profile: {
    name: "Indrajit Gupta",
    role: "ECE Student, ML/AI Enthusiast, and Research-Oriented Builder",
    location: "Dhaka, Bangladesh",
    institution: "Electronics & Communication Engineering, KUET",
    tagline:
      "I build applied AI systems and study language, signals, and privacy-preserving intelligence.",
    summary:
      "I am an undergraduate ECE student at Khulna University of Engineering & Technology with a focus on machine learning, deep learning, NLP, EEG-related research, and practical AI products. My work spans Bangla NLP research, computer vision prototypes, AI assistants, and human-computer interaction projects.",
    portrait: "/images/formal-pic.jpeg",
    links: {
      email: "mailto:indrajitgupta147@gmail.com",
      github: "https://github.com/Indrajit147",
      linkedin: "https://www.linkedin.com/in/indrajit147",
      facebook: "https://www.facebook.com/indrajit.gupta.98434",
      googleScholar: "https://scholar.google.com/citations?user=d61a6hkAAAAJ&hl=en",
      researchGate: "https://www.researchgate.net/profile/Indrajit-Gupta-3?ev=hdr_xprf",
      resume: "https://www.linkedin.com/in/indrajit147"
    }
  } satisfies Profile,

  education: [
    {
      level: "University",
      institution: "Khulna University of Engineering & Technology",
      period: "2023-2027"
    },
    {
      level: "College",
      institution: "Notre Dame College",
      period: "2020-2022"
    },
    {
      level: "School",
      institution: "St. Gregory's High School & College",
      period: "2010-2020"
    }
  ] satisfies EducationEntry[],

  stats: [
    { label: "Research papers", value: 1, suffix: "+" },
    { label: "Featured projects", value: 5, suffix: "+" },
    { label: "ML certifications", value: 2, suffix: "+" },
    { label: "Research areas", value: 4, suffix: "+" }
  ] satisfies Stat[],

  skills: [
    {
      title: "Programming",
      items: ["Python", "C", "TypeScript", "JavaScript", "Data Structures", "CLI tools"]
    },
    {
      title: "ML/DL",
      items: ["Supervised Learning", "Deep Learning", "TensorFlow", "Model Evaluation", "Feature Engineering"]
    },
    {
      title: "Computer Vision",
      items: ["OpenCV", "YOLO", "MediaPipe", "Face Recognition", "Real-Time Video Pipelines"]
    },
    {
      title: "NLP",
      items: ["Bangla NLP", "Privacy Rewriting", "Summarization", "Prompting", "LLM Evaluation"]
    },
    {
      title: "Tools & Frameworks",
      items: ["Streamlit", "LangChain", "OpenAI API", "Pydantic", "GitHub", "Pandas"]
    }
  ] satisfies SkillGroup[],

  research: [
    {
      title: "PriBan: A Benchmark Dataset and Modeling Framework for Privacy Preservation in Bengali Texts",
      venue: "Bangla NLP, privacy preservation, low-resource language research",
      summary:
        "PriBan focuses on privacy-preserving Bengali text rewriting, exploring approaches that delete sensitive expressions or obscure private details while preserving natural language quality and utility.",
      keywords: ["Bangla NLP", "Privacy Preservation", "Low-Resource Languages", "LLMs", "Dataset Creation"],
      highlights: [
        "Built around Bengali privacy rewriting, a relatively underexplored low-resource NLP problem.",
        "Connects dataset development with modeling and automated evaluation.",
        "Frames practical privacy risks around everyday LLM usage and sensitive text sharing."
      ],
      collaborators: "Collaborator details can be added when the final publication metadata is ready.",
      link: "https://ieeexplore.ieee.org/document/11491511/"
    }
  ] satisfies ResearchItem[],

  projects: [
    {
      title: "Real-Time Fire Detection System",
      summary:
        "A webcam-based fire detection system with visual and audio alerts for rapid response scenarios.",
      techStack: ["YOLO", "OpenCV", "Streamlit", "pygame", "Python"],
      categories: ["Computer Vision", "Python", "Web App"],
      status: "Completed",
      impact: "Applies object detection to a safety-critical real-time alert workflow.",
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/Indrajit147/Real-Time-Fire-Detection"
        }
      ]
    },
    {
      title: "Face Recognition System",
      summary:
        "A live face recognition project that detects, encodes, compares, and labels known faces from webcam input.",
      techStack: ["Python", "OpenCV", "face_recognition"],
      categories: ["Computer Vision", "Python"],
      status: "Completed",
      impact: "Demonstrates end-to-end biometric recognition with real-time inference."
    },
    {
      title: "Finger Controlled Mouse",
      summary:
        "A gesture-control project that maps hand landmarks to cursor movement and click gestures.",
      techStack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
      categories: ["Computer Vision", "Python", "Human-Computer Interaction"],
      status: "Completed",
      impact: "Explores accessible interaction through camera-based hand tracking.",
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/Indrajit147/finger-controlled-mouse"
        }
      ]
    },
    {
      title: "CareerMate AI Multi-Agent System",
      summary:
        "A multi-agent career support system concept for planning, profile analysis, and role guidance.",
      techStack: ["Python", "OpenAI Agents", "Tools", "Guardrails"],
      categories: ["AI Agents", "Python"],
      status: "In progress",
      impact: "Explores coordinated agent workflows for practical career decisions.",
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/Indrajit147/Multi-Agent-Career-Advisor-CareerMate"
        }
      ]
    },
    {
      title: "NewsSense: AI News Intelligence Agent",
      summary:
        "An AI news intelligence agent designed to collect, reason over, and organize news signals into more useful insights.",
      techStack: ["Python", "AI Agents", "OpenAI API", "News Intelligence", "Tool Calling"],
      categories: ["AI Agents", "NLP", "Python"],
      status: "Prototype",
      impact: "Helps transform scattered news information into structured intelligence for faster understanding.",
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/Indrajit147/AI-News-Intelligence-Agent-NewsSense"
        }
      ]
    }
  ] satisfies Project[],

  achievements: [
    {
      title: "Andrew Ng Machine Learning Specialization",
      detail: "Completed the foundational ML specialization covering core supervised and unsupervised learning workflows."
    },
    {
      title: "TensorFlow Developer Specialization Study",
      detail: "Worked through parts of the TensorFlow Developer curriculum to strengthen deep learning implementation skills."
    },
    {
      title: "Published research author",
      detail: "Research profile includes PriBan and an EEG-related paper submitted to a conference."
    },
    {
      title: "Applied AI project portfolio",
      detail: "Built projects across NLP, computer vision, agentic AI, document intelligence, and interaction systems."
    }
  ] satisfies Achievement[],

  timeline: [
    {
      date: "Mar 2025",
      title: "Computer vision projects",
      detail: "Completed real-time face recognition and finger-controlled mouse projects using webcam pipelines."
    },
    {
      date: "May 2025",
      title: "Real-time fire detection",
      detail: "Built a YOLO, OpenCV, and Streamlit application with audio alerting."
    },
    {
      date: "Jun 2025",
      title: "CareerMate AI",
      detail: "Started building a multi-agent career advisor using coordinated AI agents, tools, and guardrails."
    },
    {
      date: "2025",
      title: "NewsSense",
      detail: "Added an AI news intelligence agent to the project portfolio."
    },
    {
      date: "2025",
      title: "PriBan research milestone",
      detail: "Advanced Bangla privacy-preservation research through dataset and modeling work."
    }
  ] satisfies TimelineEntry[],

  endorsements: [
    {
      quote:
        "Endorsements from professors, collaborators, or project reviewers can live here once available.",
      name: "Future collaborator",
      role: "Research or engineering mentor"
    },
    {
      quote:
        "This space is reserved for short recommendations that validate research depth and software execution.",
      name: "Future reviewer",
      role: "Academic or technical reviewer"
    }
  ] satisfies Endorsement[]
};
