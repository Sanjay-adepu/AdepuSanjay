// Mock data for Adepu Sanjay's Portfolio
export const personalInfo = {
  name: "Adepu Sanjay",
  title: "Full Stack Developer",
  subtitle: "MERN Stack | Next.js | React Native Expert",
  profileImage: "https://images.unsplash.com/photo-1731951039706-0e793240bb32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTU2MjMzNzB8MA&ixlib=rb-4.1.0&q=85",
  bio: "Passionate full-stack developer with 3+ years of experience building scalable web and mobile applications. Specialized in modern JavaScript frameworks and cloud technologies.",
  email: "adepusanjay812@gmail.com",
  phone: "+91 88977 14968",
  location: "Hyderabad, India",
  linkedin: "https://linkedin.com/in/adepu-sanjay-dev",
  github: "https://github.com/adepu-sanjay",
  resume: "/resume-adepu-sanjay.pdf"
};

export const skills = [
  {
    category: "Frontend Development",
    technologies: [
      { name: "React.js", level: 90, color: "#61DAFB" },
      { name: "Next.js", level: 85, color: "#000000" },
      { name: "TypeScript", level: 80, color: "#3178C6" },
      { name: "HTML5/CSS3", level: 95, color: "#E34F26" },
      { name: "Tailwind CSS", level: 85, color: "#06B6D4" },
      { name: "JavaScript", level: 90, color: "#F7DF1E" }
    ]
  },
  {
    category: "Backend Development",
    technologies: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Express.js", level: 80, color: "#000000" },
      { name: "Python", level: 75, color: "#3776AB" },
      { name: "REST APIs", level: 90, color: "#FF6B6B" },
      { name: "GraphQL", level: 70, color: "#E10098" }
    ]
  },
  {
    category: "Database & Cloud",
    technologies: [
      { name: "MongoDB", level: 85, color: "#47A248" },
      { name: "PostgreSQL", level: 75, color: "#336791" },
      { name: "AWS", level: 70, color: "#FF9900" },
      { name: "Firebase", level: 80, color: "#FFCA28" },
      { name: "Redis", level: 65, color: "#DC382D" }
    ]
  },
  {
    category: "Mobile Development",
    technologies: [
      { name: "React Native", level: 80, color: "#61DAFB" },
      { name: "Expo", level: 75, color: "#000020" },
      { name: "Native APIs", level: 70, color: "#4CAF50" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management. Built with React, Node.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHByb2plY3QlMjBtb2NrdXB8ZW58MHx8fHwxNzU1NjIzMzc2fDA&ixlib=rb-4.1.0&q=85",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    liveUrl: "https://ecommerce-dashboard-demo.com",
    githubUrl: "https://github.com/adepu-sanjay/ecommerce-dashboard",
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Weather App Pro",
    description: "A modern weather application with location-based forecasts, interactive maps, and personalized weather alerts. Features beautiful UI and offline capabilities.",
    image: "https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMHByb2plY3QlMjBtb2NrdXB8ZW58MHx8fHwxNzU1NjIzMzc2fDA&ixlib=rb-4.1.0&q=85",
    technologies: ["React Native", "Expo", "Weather API", "Redux"],
    liveUrl: "https://play.google.com/store/apps/weather-pro",
    githubUrl: "https://github.com/adepu-sanjay/weather-app-pro",
    category: "Mobile",
    featured: true
  },
  {
    id: 3,
    title: "Task Management System",
    description: "A collaborative task management platform with team workspaces, real-time updates, file sharing, and progress tracking. Perfect for remote teams.",
    image: "https://images.unsplash.com/photo-1517650862521-d580d5348145?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxzb2Z0d2FyZSUyMHByb2plY3QlMjBtb2NrdXB8ZW58MHx8fHwxNzU1NjIzMzc2fDA&ixlib=rb-4.1.0&q=85",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io"],
    liveUrl: "https://taskmanager-pro.vercel.app",
    githubUrl: "https://github.com/adepu-sanjay/task-management",
    category: "Full Stack",
    featured: false
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "An intelligent content generation tool powered by AI APIs. Create blogs, social media posts, and marketing copy with customizable templates and tone.",
    image: "https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzU1NjIzMzgxfDA&ixlib=rb-4.1.0&q=85",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Stripe"],
    liveUrl: "https://ai-content-gen.com",
    githubUrl: "https://github.com/adepu-sanjay/ai-content-generator",
    category: "Full Stack",
    featured: true
  },
  {
    id: 5,
    title: "Fitness Tracker Mobile",
    description: "A comprehensive fitness tracking app with workout plans, nutrition tracking, progress analytics, and social features for fitness enthusiasts.",
    image: "https://images.unsplash.com/photo-1657972170499-3376d9eb8f65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzU1NjIzMzgxfDA&ixlib=rb-4.1.0&q=85",
    technologies: ["React Native", "Firebase", "Redux Toolkit", "Chart.js"],
    liveUrl: "https://fitness-tracker-app.com",
    githubUrl: "https://github.com/adepu-sanjay/fitness-tracker",
    category: "Mobile",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    duration: "Jan 2022 - Present",
    location: "Hyderabad, India",
    description: [
      "Lead development of 5+ web applications serving 10,000+ users",
      "Architected microservices using Node.js and Docker, reducing deployment time by 40%",
      "Mentored 3 junior developers and conducted code reviews",
      "Implemented CI/CD pipelines using GitHub Actions and AWS"
    ],
    technologies: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"]
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "Jun 2021 - Dec 2021",
    location: "Remote",
    description: [
      "Developed MVP for fintech startup from scratch using MERN stack",
      "Integrated payment gateways and implemented secure authentication",
      "Built responsive mobile app using React Native",
      "Collaborated with design team to implement pixel-perfect UI"
    ],
    technologies: ["React", "Express.js", "MongoDB", "React Native", "Stripe"]
  },
  {
    id: 3,
    company: "Digital Agency Pro",
    position: "Frontend Developer",
    duration: "Mar 2021 - May 2021",
    location: "Bangalore, India",
    description: [
      "Created dynamic websites for 15+ clients using React and Next.js",
      "Optimized website performance achieving 90+ Google Lighthouse scores",
      "Implemented SEO best practices and improved organic traffic by 60%",
      "Worked closely with clients to understand requirements and deliver solutions"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "SEO"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CTO, TechCorp Solutions",
    content: "Sanjay is an exceptional developer with strong problem-solving skills. His ability to deliver high-quality code on time has been instrumental in our project success.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Product Manager, StartupXYZ",
    content: "Working with Sanjay was a pleasure. He understood our vision perfectly and translated it into a robust, scalable application. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Founder, Digital Agency Pro",
    content: "Sanjay's frontend skills are outstanding. He delivered pixel-perfect designs that exceeded client expectations. A true professional!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/adepu-sanjay",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/adepu-sanjay-dev",
    icon: "Linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/adepu_sanjay",
    icon: "Twitter"
  },
  {
    name: "Email",
    url: "mailto:adepusanjay812@gmail.com",
    icon: "Mail"
  }
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" }
];