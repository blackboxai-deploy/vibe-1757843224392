export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  duration: string;
  lessonsCount: number;
  price: number;
  originalPrice?: number;
  rating: number;
  studentsCount: number;
  instructor: {
    name: string;
    title: string;
    image: string;
    bio: string;
  };
  image: string;
  skills: string[];
  curriculum: {
    module: string;
    lessons: string[];
  }[];
  featured: boolean;
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "JavaScript Fundamentals",
    slug: "javascript-fundamentals",
    description: "Aprende los fundamentos de JavaScript desde cero hasta conceptos avanzados.",
    longDescription: "Este curso completo de JavaScript te llevará desde los conceptos básicos hasta temas avanzados. Aprenderás variables, funciones, objetos, arrays, DOM manipulation, async/await, y mucho más. Ideal para principiantes que quieren dominar el lenguaje de programación más popular del mundo.",
    category: "Frontend",
    level: "Principiante",
    duration: "8 semanas",
    lessonsCount: 45,
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    studentsCount: 2847,
    instructor: {
      name: "María González",
      title: "Senior Frontend Developer",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/25759cf6-b0e1-4aef-95b3-c3dfbe92b5c2.png",
      bio: "Desarrolladora senior con 8 años de experiencia en empresas tech. Especializada en JavaScript y frameworks modernos."
    },
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03d59db6-9b35-4751-b607-2a57cfa8a14a.png",
    skills: ["Variables y Tipos de Datos", "Funciones", "Objetos y Arrays", "DOM Manipulation", "ES6+", "Async/Await"],
    curriculum: [
      {
        module: "Introducción a JavaScript",
        lessons: ["¿Qué es JavaScript?", "Configuración del entorno", "Tu primer programa", "Variables y constantes"]
      },
      {
        module: "Tipos de Datos y Operadores",
        lessons: ["Numbers y Strings", "Booleans", "Arrays básicos", "Operadores lógicos"]
      },
      {
        module: "Funciones y Scope",
        lessons: ["Declaración de funciones", "Arrow functions", "Scope y closures", "Callbacks"]
      },
      {
        module: "Objetos y Prototipos",
        lessons: ["Objetos literales", "Constructor functions", "Prototipos", "Classes ES6"]
      }
    ],
    featured: true
  },
  {
    id: "2",
    title: "React Avanzado",
    slug: "react-avanzado",
    description: "Domina React con hooks, context, testing y patrones avanzados de desarrollo.",
    longDescription: "Curso avanzado de React para desarrolladores que ya conocen los fundamentos. Cubriremos hooks personalizados, Context API, testing con Jest y React Testing Library, optimización de performance, patrones avanzados y mejores prácticas para aplicaciones escalables.",
    category: "Frontend",
    level: "Avanzado",
    duration: "10 semanas",
    lessonsCount: 60,
    price: 249,
    originalPrice: 299,
    rating: 4.9,
    studentsCount: 1523,
    instructor: {
      name: "Carlos Mendoza",
      title: "React Specialist & Tech Lead",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7373b761-87c2-41ce-8416-38e949d80c32.png",
      bio: "Tech Lead con 6 años especializándose en React. Ha trabajado en startups y grandes corporaciones construyendo aplicaciones escalables."
    },
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db1b6a43-fbf8-4d5c-b6ad-3186a020a3e4.png",
    skills: ["Custom Hooks", "Context API", "Testing", "Performance", "Design Patterns", "TypeScript"],
    curriculum: [
      {
        module: "Hooks Avanzados",
        lessons: ["useReducer en detalle", "Custom hooks", "useCallback y useMemo", "useRef patterns"]
      },
      {
        module: "State Management",
        lessons: ["Context API avanzado", "Reducer patterns", "Estado global", "Zustand integration"]
      },
      {
        module: "Testing",
        lessons: ["Jest setup", "React Testing Library", "Component testing", "Integration tests"]
      },
      {
        module: "Performance",
        lessons: ["Code splitting", "Lazy loading", "Memorización", "Bundle optimization"]
      }
    ],
    featured: true
  },
  {
    id: "3",
    title: "Python para Data Science",
    slug: "python-data-science",
    description: "Aprende Python aplicado a ciencia de datos con pandas, numpy y machine learning.",
    longDescription: "Curso completo de Python enfocado en Data Science. Aprenderás desde Python básico hasta análisis de datos con pandas, numpy, visualización con matplotlib/seaborn y fundamentos de machine learning con scikit-learn. Incluye proyectos reales con datasets del mundo real.",
    category: "Data Science",
    level: "Intermedio",
    duration: "12 semanas",
    lessonsCount: 72,
    price: 299,
    rating: 4.7,
    studentsCount: 3241,
    instructor: {
      name: "Ana Ruiz",
      title: "Data Scientist & ML Engineer",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/293f2a24-90c9-4a44-ac12-37b73ccb9048.png",
      bio: "Data Scientist con PhD en Estadística. 5 años de experiencia en análisis de datos y machine learning en el sector financiero."
    },
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/15f0768b-ac07-4775-96b1-93c9a654ffb0.png",
    skills: ["Python Basics", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter"],
    curriculum: [
      {
        module: "Python Foundations",
        lessons: ["Python syntax", "Data structures", "Control flow", "Functions y modules"]
      },
      {
        module: "Data Analysis",
        lessons: ["Pandas basics", "Data cleaning", "Exploratory analysis", "Data transformation"]
      },
      {
        module: "Visualization",
        lessons: ["Matplotlib", "Seaborn", "Plotly", "Dashboard creation"]
      }
    ],
    featured: false
  },
  {
    id: "4",
    title: "Node.js Backend Development",
    slug: "nodejs-backend",
    description: "Construye APIs robustas y escalables con Node.js, Express y MongoDB.",
    longDescription: "Curso completo de desarrollo backend con Node.js. Aprenderás a crear APIs RESTful con Express, trabajar con bases de datos MongoDB, implementar autenticación JWT, testing, deployment y mejores prácticas de seguridad. Incluye proyecto final de una API completa.",
    category: "Backend",
    level: "Intermedio",
    duration: "10 semanas",
    lessonsCount: 55,
    price: 199,
    originalPrice: 249,
    rating: 4.6,
    studentsCount: 1876,
    instructor: {
      name: "Luis Rodríguez",
      title: "Backend Engineer & DevOps",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e7f0c1d0-37a1-4e36-bcbd-086f80be90aa.png",
      bio: "Backend engineer con 7 años de experiencia. Especializado en Node.js, microservicios y arquitecturas cloud-native."
    },
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/29fdde69-b481-42a5-9fe5-9c3784235cb2.png",
    skills: ["Node.js", "Express", "MongoDB", "JWT Auth", "Testing", "Deployment"],
    curriculum: [
      {
        module: "Node.js Fundamentals",
        lessons: ["Event loop", "Modules", "File system", "HTTP server"]
      },
      {
        module: "Express Framework",
        lessons: ["Routing", "Middleware", "Error handling", "RESTful APIs"]
      },
      {
        module: "Database Integration",
        lessons: ["MongoDB setup", "Mongoose ODM", "Data modeling", "Queries"]
      }
    ],
    featured: true
  },
  {
    id: "5",
    title: "React Native Mobile Apps",
    slug: "react-native-mobile",
    description: "Desarrolla aplicaciones móviles nativas para iOS y Android con React Native.",
    longDescription: "Aprende a desarrollar aplicaciones móviles multiplataforma con React Native. Cubriremos navegación, componentes nativos, integración con APIs, manejo de estado, notificaciones push, deployment a stores y optimización de performance.",
    category: "Móvil",
    level: "Intermedio",
    duration: "8 semanas",
    lessonsCount: 48,
    price: 229,
    rating: 4.5,
    studentsCount: 892,
    instructor: {
      name: "Patricia Vega",
      title: "Mobile Developer & UX Designer",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/77d95bb8-3168-4cba-99a6-af1041adf1de.png",
      bio: "Desarrolladora móvil con 5 años de experiencia. Especializada en React Native y diseño de experiencias móviles."
    },
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6df588e9-bfe0-4e5a-b492-4cfc2b3be858.png",
    skills: ["React Native", "Navigation", "Native Modules", "Redux", "Push Notifications", "App Store"],
    curriculum: [
      {
        module: "React Native Basics",
        lessons: ["Setup", "Components", "Styling", "Debugging"]
      },
      {
        module: "Navigation",
        lessons: ["Stack Navigator", "Tab Navigator", "Drawer Navigation", "Deep linking"]
      },
      {
        module: "Advanced Features",
        lessons: ["Camera", "Geolocation", "Push notifications", "Background tasks"]
      }
    ],
    featured: false
  },
  {
    id: "6",
    title: "DevOps con Docker y Kubernetes",
    slug: "devops-docker-kubernetes",
    description: "Aprende containerización y orquestación para deployments escalables.",
    longDescription: "Curso completo de DevOps enfocado en containerización con Docker y orquestación con Kubernetes. Aprenderás CI/CD pipelines, monitoring, scaling automático, security best practices y deployment en cloud providers como AWS y GCP.",
    category: "DevOps",
    level: "Avanzado",
    duration: "12 semanas",
    lessonsCount: 68,
    price: 349,
    rating: 4.8,
    studentsCount: 567,
    instructor: {
      name: "Roberto Silva",
      title: "DevOps Engineer & Cloud Architect",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8be4521e-8dfe-4cff-8618-5f0059b691d9.png",
      bio: "DevOps Engineer con 9 años de experiencia. Certificado en AWS y Kubernetes. Especializado en arquitecturas cloud-native."
    },
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/65f67956-d468-4fea-9d71-77efa2ecd058.png",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Monitoring", "Security"],
    curriculum: [
      {
        module: "Containerización",
        lessons: ["Docker basics", "Dockerfile", "Docker Compose", "Registry"]
      },
      {
        module: "Kubernetes",
        lessons: ["Pods y Services", "Deployments", "ConfigMaps", "Ingress"]
      },
      {
        module: "CI/CD",
        lessons: ["GitHub Actions", "Pipeline automation", "Testing", "Deployment strategies"]
      }
    ],
    featured: false
  }
];

export const categories = [
  "Todos",
  "Frontend", 
  "Backend", 
  "Móvil", 
  "Data Science", 
  "DevOps"
];

export const levels = [
  "Todos",
  "Principiante",
  "Intermedio", 
  "Avanzado"
];