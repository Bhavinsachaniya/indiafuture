import {
  type LucideIcon,
  Cpu,
  Workflow,
  LineChart,
  ShieldCheck,
  Code,
  Bot,
  TrendingUp,
  Users,
  Presentation,
  Database,
  Laptop,
  Settings,
  MessageSquare,
  Zap,
  Globe,
  Lock,
  BrainCircuit,
  BarChart,
  Server,
  Layers,
  Target,
  Rocket,
  Shield,
} from "lucide-react";

export type ProgramData = {
  id: string;
  theme: string;
  label: string;
  title: React.ReactNode;
  highlightWord?: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string }[];
  audience: string[];
  whyExists: {
    title: string;
    description: string;
    reasons: {
      title: string;
      description: string;
      icon: LucideIcon;
    }[];
  };
  learnings: {
    title: string;
    description: string;
    icon: LucideIcon;
    duration: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
  }[];
  curriculum: {
    week: string;
    title: string;
    description: string;
  }[];
  projects: {
    title: string;
    previewText: string;
    technologies: string[];
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    outcome: string;
    hours: string;
  }[];
  experiences: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  outcomes: {
    phase: string;
    description: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const programsConfig: Record<string, ProgramData> = {
  upskilling: {
    id: "upskilling",
    theme: "Future-ready AI education.",
    label: "FLAGSHIP PROGRAM",
    title: "AI Upskilling Program",
    highlightWord: "Upskilling",
    subtitle: "Future-Ready AI Education",
    description:
      "An 8-week hands-on journey that takes learners from AI fundamentals to real-world implementation through projects, automation, and practical workflows.",
    stats: [
      { label: "Students", value: "3000+" },
      { label: "Completion Rate", value: "95%" },
      { label: "Projects", value: "40+" },
      { label: "Mentors", value: "15+" },
    ],
    audience: ["Students", "Fresh Graduates", "Job Seekers"],
    whyExists: {
      title: "The AI skill gap is closing fast — and courses aren't keeping up.",
      description:
        "Every team is hiring for AI fluency, but tutorials leave people stuck at 'hello world'. Vertex was built to close that gap: you learn by shipping evaluated systems into real codebases, week after week.",
      reasons: [
        {
          title: "Real hiring signal",
          description: "Recruiters recognise Vertex graduates because the repos are inspectable.",
          icon: Target,
        },
        {
          title: "Compounding output",
          description:
            "Every week produces a shippable artefact — not a certificate of attendance.",
          icon: Rocket,
        },
        {
          title: "Senior review",
          description: "Practitioners with production AI experience review your code, not TAs.",
          icon: Shield,
        },
      ],
    },
    learnings: [
      {
        title: "AI foundations",
        description: "Tokens, embeddings, evals, and the honest limits of LLMs.",
        icon: BrainCircuit,
        duration: "6h",
        difficulty: "Beginner",
      },
      {
        title: "Prompt engineering",
        description: "Structured outputs, tool use, and prompt-driven pipelines.",
        icon: MessageSquare,
        duration: "8h",
        difficulty: "Beginner",
      },
      {
        title: "Agents",
        description: "Design agents that use tools, retry, and know when to stop.",
        icon: Bot,
        duration: "12h",
        difficulty: "Intermediate",
      },
      {
        title: "Retrieval (RAG)",
        description: "Chunking, embeddings, hybrid search, reranking, evaluation.",
        icon: Database,
        duration: "10h",
        difficulty: "Intermediate",
      },
      {
        title: "Evals",
        description: "Build the eval harness first — then the feature.",
        icon: BarChart,
        duration: "8h",
        difficulty: "Intermediate",
      },
      {
        title: "Shipping",
        description: "Deploy to real users, add observability, iterate on data.",
        icon: Zap,
        duration: "10h",
        difficulty: "Advanced",
      },
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Foundations",
        description: "Introduction to generative models and core concepts.",
      },
      {
        week: "Week 2",
        title: "Prompt Engineering",
        description: "Advanced techniques for steering LLMs.",
      },
      {
        week: "Week 3",
        title: "Automation",
        description: "Building no-code and low-code workflows.",
      },
      {
        week: "Week 4",
        title: "AI Agents",
        description: "Creating autonomous agents to perform complex tasks.",
      },
      {
        week: "Week 5",
        title: "Projects",
        description: "Building your comprehensive capstone project.",
      },
      {
        week: "Week 6",
        title: "Deployment & Certification",
        description: "Deploying to production and finalizing certification.",
      },
    ],
    projects: [
      {
        title: "Personal AI Assistant",
        previewText:
          "Build a context-aware assistant that remembers past conversations and connects to calendar APIs.",
        technologies: ["OpenAI API", "Python", "Next.js"],
        difficulty: "Intermediate",
        outcome: "A fully functional, deployable AI companion.",
        hours: "15 hours",
      },
      {
        title: "Automated Content Pipeline",
        previewText:
          "Design a workflow that researches, drafts, and schedules social media content automatically.",
        technologies: ["Zapier", "Claude 3", "Airtable"],
        difficulty: "Beginner",
        outcome: "A self-running content engine.",
        hours: "8 hours",
      },
    ],
    experiences: [
      {
        title: "Live sessions",
        description: "Two working sessions each week, recorded so you never miss context.",
        icon: Presentation,
      },
      {
        title: "1:1 Mentorship",
        description: "Senior practitioners review your builds and unblock you in office hours.",
        icon: Users,
      },
      {
        title: "Assignments",
        description: "Ship a deliverable weekly — code, workflow, or writeup — with real review.",
        icon: Code,
      },
      {
        title: "Community",
        description: "A private room of 2,400+ builders posting repos and shipping in public.",
        icon: MessageSquare,
      },
      {
        title: "Certification",
        description: "A verified credential recognised by hiring teams inside our network.",
        icon: ShieldCheck,
      },
      {
        title: "Lifetime resources",
        description: "Every playbook, template and eval harness stays yours after graduation.",
        icon: Database,
      },
    ],
    outcomes: [
      {
        phase: "Before Joining",
        description: "Theoretical understanding, uncertain about practical implementation.",
      },
      {
        phase: "During Learning",
        description: "Building muscle memory through daily hands-on projects and workflows.",
      },
      {
        phase: "After Completion",
        description: "Confident AI builder with a portfolio of live, deployed applications.",
      },
      {
        phase: "Career Growth",
        description: "Ready for AI Engineering roles with verified certification.",
      },
    ],
    testimonials: [
      {
        quote:
          "This program transformed how I approach software engineering. I went from reading papers to building actual AI agents in weeks.",
        author: "Sarah Chen",
        role: "Software Engineer",
        company: "TechNexus",
        rating: 5,
      },
      {
        quote:
          "The hands-on projects were incredible. I used my capstone project to land my first junior developer role.",
        author: "James Miller",
        role: "Recent Graduate",
        company: "DataFlow",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Do I need prior coding experience?",
        answer:
          "Basic programming knowledge is helpful but not strictly required. We cover foundations early on.",
      },
      {
        question: "How much time is required?",
        answer: "Expect to dedicate 8-10 hours per week for lectures and assignments.",
      },
      {
        question: "Is the certification recognized?",
        answer: "Yes, our certificates are verified and highly regarded by our hiring partners.",
      },
    ],
  },

  masterclasses: {
    id: "masterclasses",
    theme: "Short intensive learning.",
    label: "WORKSHOPS",
    title: "AI Workshops & Certifications",
    highlightWord: "Workshops",
    subtitle: "Interactive Learning",
    description:
      "Interactive AI workshops and certification programs designed for schools, colleges, universities, organizations, and MSMEs.",
    stats: [
      { label: "Attendees", value: "5000+" },
      { label: "Satisfaction", value: "4.9/5" },
      { label: "Sessions", value: "100+" },
      { label: "Partners", value: "30+" },
    ],
    audience: ["Working professionals", "College students", "Faculty", "Corporate teams"],
    whyExists: {
      title: "Master AI workflows in a weekend — because you don't have months to learn.",
      description:
        "Professionals need immediate, actionable knowledge to stay relevant. Our masterclasses distill complex AI concepts into hyper-focused, weekend-long intensive sessions that yield immediate productivity gains.",
      reasons: [
        {
          title: "Immediate ROI",
          description: "Apply what you learn on Monday morning.",
          icon: Target,
        },
        {
          title: "Hyper-focused",
          description: "No fluff, just the tools and techniques that matter.",
          icon: Rocket,
        },
        {
          title: "Expert led",
          description: "Taught by industry veterans who use AI daily.",
          icon: Shield,
        },
      ],
    },
    learnings: [
      {
        title: "Generative AI",
        description: "Master the art of creating high-quality text, image, and audio assets.",
        icon: BrainCircuit,
        duration: "1 Day",
        difficulty: "Beginner",
      },
      {
        title: "Productivity Boost",
        description: "Learn how to automate daily administrative and communication tasks.",
        icon: TrendingUp,
        duration: "1 Day",
        difficulty: "Beginner",
      },
      {
        title: "AI for Business",
        description:
          "Strategic implementation of AI tools to reduce overhead and increase margins.",
        icon: BarChart,
        duration: "2 Days",
        difficulty: "Intermediate",
      },
      {
        title: "AI for Design",
        description:
          "Supercharging creative workflows with Midjourney, Stable Diffusion, and Figma AI.",
        icon: Layers,
        duration: "1 Day",
        difficulty: "Intermediate",
      },
    ],
    curriculum: [
      {
        week: "Session 1",
        title: "Introduction & Context",
        description: "Understanding the current AI landscape and capabilities.",
      },
      {
        week: "Session 2",
        title: "Prompt Architecture",
        description: "Building robust, repeatable prompts for professional use.",
      },
      {
        week: "Session 3",
        title: "Workflow Integration",
        description: "Connecting AI outputs directly into your existing tools.",
      },
      {
        week: "Session 4",
        title: "Live Assessment",
        description: "Real-time project build and certification review.",
      },
    ],
    projects: [
      {
        title: "Automated Reporting System",
        previewText:
          "Convert raw spreadsheet data into polished, executive-ready presentations instantly.",
        technologies: ["ChatGPT", "Google Workspace APIs", "Make.com"],
        difficulty: "Beginner",
        outcome: "A one-click reporting pipeline.",
        hours: "4 hours",
      },
    ],
    experiences: [
      {
        title: "Interactive Sessions",
        description: "Follow along live as instructors build workflows in real-time.",
        icon: Presentation,
      },
      {
        title: "Micro-learning",
        description: "Dense, highly focused modules designed for maximum retention.",
        icon: Zap,
      },
      {
        title: "Completion Badges",
        description: "Shareable credentials for your LinkedIn profile.",
        icon: ShieldCheck,
      },
    ],
    outcomes: [
      { phase: "Before Joining", description: "Overwhelmed by AI noise, unsure where to start." },
      {
        phase: "During Learning",
        description: "Rapid 'Aha!' moments as concepts click into place.",
      },
      { phase: "After Completion", description: "Immediate productivity boost of 30% or more." },
      { phase: "Career Growth", description: "Recognized internally as the team's AI innovator." },
    ],
    testimonials: [
      {
        quote:
          "The best 4 hours I've spent this year. I immediately saved our marketing team 15 hours a week.",
        author: "Marcus Doe",
        role: "Marketing Director",
        company: "Global Retail",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Are these live or pre-recorded?",
        answer: "These are highly interactive, live sessions with Q&A.",
      },
      {
        question: "Will I get a recording?",
        answer: "Yes, all attendees receive lifetime access to the session recordings.",
      },
    ],
  },

  workshops: {
    id: "workshops",
    theme: "Build real automations.",
    label: "AI LABS & ENABLEMENT",
    title: "AI Labs & Campus Enablement",
    highlightWord: "Enablement",
    subtitle: "Build an AI-ready institution",
    description:
      "Build an AI-ready institution with faculty development, student upskilling, AI labs, curriculum support, and long-term implementation.",
    stats: [
      { label: "Workflows Built", value: "10,000+" },
      { label: "Hours Saved", value: "1M+" },
      { label: "Integrations", value: "500+" },
      { label: "Teams", value: "200+" },
    ],
    audience: ["Developers", "Businesses", "Operations Teams", "Students"],
    whyExists: {
      title: "Stop losing thousands of hours to repetitive manual tasks.",
      description:
        "Organizations lose thousands of hours annually to repetitive manual data entry, routing, and communication tasks. We teach teams how to wire their disparate systems together using AI-powered middleware, entirely eliminating grunt work.",
      reasons: [
        {
          title: "No-code automation",
          description: "Build complex workflows without writing a single line of code.",
          icon: Target,
        },
        {
          title: "System integration",
          description: "Make all your tools talk to each other seamlessly.",
          icon: Rocket,
        },
        {
          title: "Time reclaimed",
          description: "Free your team to focus on high-leverage strategic work.",
          icon: Shield,
        },
      ],
    },
    learnings: [
      {
        title: "Zapier & Make",
        description: "Master the premier no-code automation platforms.",
        icon: Workflow,
        duration: "2 Weeks",
        difficulty: "Intermediate",
      },
      {
        title: "OpenAI APIs",
        description: "Inject intelligence directly into your data pipelines.",
        icon: Bot,
        duration: "2 Weeks",
        difficulty: "Advanced",
      },
      {
        title: "Email & CRM Sync",
        description: "Automate lead capture, qualification, and follow-up.",
        icon: Users,
        duration: "1 Week",
        difficulty: "Intermediate",
      },
      {
        title: "Workflow Design",
        description: "Architect robust, error-proof automation systems.",
        icon: Database,
        duration: "1 Week",
        difficulty: "Advanced",
      },
    ],
    curriculum: [
      {
        week: "Module 1",
        title: "Platform Fundamentals",
        description: "Navigating triggers, actions, and data mapping.",
      },
      {
        week: "Module 2",
        title: "API Connections",
        description: "Authenticating and writing custom webhooks.",
      },
      {
        week: "Module 3",
        title: "Logic & Routing",
        description: "Building complex conditional pathways.",
      },
      {
        week: "Module 4",
        title: "AI Integration",
        description: "Adding LLMs to process unstructured data.",
      },
      {
        week: "Module 5",
        title: "Error Handling",
        description: "Building resilient systems that don't break.",
      },
      {
        week: "Module 6",
        title: "Live Deployment",
        description: "Publishing your workflows to production.",
      },
    ],
    projects: [
      {
        title: "Intelligent Lead Qualifier",
        previewText:
          "Automatically score inbound leads using AI and route them to the correct sales rep.",
        technologies: ["Make.com", "HubSpot", "Claude"],
        difficulty: "Advanced",
        outcome: "A zero-touch lead routing system.",
        hours: "12 hours",
      },
    ],
    experiences: [
      {
        title: "Workflow Diagrams",
        description: "Learn to visually architect systems before you build.",
        icon: Layers,
      },
      { title: "API Blocks", description: "Demystify complex API documentation.", icon: Code },
      {
        title: "Real Projects",
        description: "Build automations that solve your actual business problems.",
        icon: Settings,
      },
    ],
    outcomes: [
      { phase: "Before Joining", description: "Drowning in manual spreadsheets and data entry." },
      {
        phase: "During Learning",
        description: "Connecting systems that previously didn't speak to each other.",
      },
      { phase: "After Completion", description: "Reclaimed 10+ hours per week of deep work time." },
      {
        phase: "Career Growth",
        description: "Transition to Systems Architect or Operations Leader.",
      },
    ],
    testimonials: [
      {
        quote:
          "We automated our entire onboarding process. It feels like we hired three new employees.",
        author: "Elena Rodriguez",
        role: "Head of Operations",
        company: "ScaleUp Inc",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Do I need to know how to code?",
        answer: "No, we focus primarily on low-code and no-code tools.",
      },
      {
        question: "What tools do I need?",
        answer: "A free Zapier or Make.com account is enough to start.",
      },
    ],
  },

  custom: {
    id: "custom",
    theme: "Enterprise AI transformation.",
    label: "ORGANIZATIONS",
    title: "AI Adoption Programs",
    highlightWord: "Adoption",
    subtitle: "Enterprise AI Transformation",
    description:
      "Help teams integrate AI into daily workflows through productivity training, automation, department-specific use cases, and implementation support.",
    stats: [
      { label: "Enterprises", value: "50+" },
      { label: "ROI", value: "300%" },
      { label: "Security Rating", value: "A+" },
      { label: "Custom Models", value: "20+" },
    ],
    audience: ["Schools", "Universities", "Companies", "MSMEs", "Government"],
    whyExists: {
      title: "Off-the-shelf AI training fails large organizations.",
      description:
        "Generic training often fails to address the unique security, compliance, and specific workflow needs of large organizations. We embed with your team to design bespoke curricula that directly solve your proprietary challenges.",
      reasons: [
        {
          title: "Proprietary models",
          description: "Learn to build on top of your own secure, private data.",
          icon: Target,
        },
        {
          title: "Enterprise security",
          description: "Compliance, SOC2, and data privacy baked into the curriculum.",
          icon: Shield,
        },
        {
          title: "Bespoke curriculum",
          description: "Content generated specifically for your industry's exact use-cases.",
          icon: Rocket,
        },
      ],
    },
    learnings: [
      {
        title: "Custom Curriculum",
        description: "Content generated specifically for your industry's exact use-cases.",
        icon: Settings,
        duration: "Flexible",
        difficulty: "Intermediate",
      },
      {
        title: "Private Workshops",
        description: "Closed-door, confidential sessions for your leadership team.",
        icon: Lock,
        duration: "Flexible",
        difficulty: "Advanced",
      },
      {
        title: "Enterprise Deployment",
        description: "Strategies for securely deploying internal LLMs.",
        icon: Server,
        duration: "Flexible",
        difficulty: "Advanced",
      },
      {
        title: "Implementation Consulting",
        description: "End-to-end support from theory to live production.",
        icon: ShieldCheck,
        duration: "Flexible",
        difficulty: "Advanced",
      },
    ],
    curriculum: [
      {
        week: "Phase 1",
        title: "Discovery",
        description: "Auditing your current systems and identifying AI opportunities.",
      },
      {
        week: "Phase 2",
        title: "Curriculum Design",
        description: "Architecting a custom learning path for your teams.",
      },
      {
        week: "Phase 3",
        title: "Executive Alignment",
        description: "Ensuring leadership understands the ROI and security implications.",
      },
      {
        week: "Phase 4",
        title: "Training Execution",
        description: "Delivering the custom workshops and labs.",
      },
      {
        week: "Phase 5",
        title: "Deployment Support",
        description: "Assisting internal engineers with live implementation.",
      },
      {
        week: "Phase 6",
        title: "Review & Scaling",
        description: "Measuring ROI and expanding across departments.",
      },
    ],
    projects: [
      {
        title: "Internal Knowledge Base Bot",
        previewText:
          "Train a secure, private LLM on your company's proprietary documents to answer employee questions instantly.",
        technologies: ["LangChain", "Vector DBs", "Private LLMs"],
        difficulty: "Advanced",
        outcome: "A secure internal intelligence layer.",
        hours: "Custom",
      },
    ],
    experiences: [
      {
        title: "Enterprise Dashboard",
        description: "Track your team's learning progress and ROI.",
        icon: LineChart,
      },
      {
        title: "Security First",
        description: "All implementations prioritize data privacy and SOC2 compliance.",
        icon: Lock,
      },
      {
        title: "Dedicated Support",
        description: "Direct access to our senior AI architects.",
        icon: Users,
      },
    ],
    outcomes: [
      { phase: "Before Joining", description: "Lagging behind competitors, risking disruption." },
      {
        phase: "During Learning",
        description: "Aligning teams around a unified, secure AI strategy.",
      },
      {
        phase: "After Completion",
        description: "Deployed custom AI solutions driving massive ROI.",
      },
      {
        phase: "Career Growth",
        description: "Positioning the organization as an industry tech leader.",
      },
    ],
    testimonials: [
      {
        quote:
          "They completely demystified AI for our board and helped us deploy a secure internal tool that saves us millions annually.",
        author: "David Chen",
        role: "CTO",
        company: "FinServe Global",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Is our data secure?",
        answer: "Yes, we prioritize zero-retention policies and local deployment models.",
      },
      {
        question: "Can you train our non-technical staff?",
        answer: "Absolutely. We design specific tracks for both technical and non-technical teams.",
      },
    ],
  },
};
