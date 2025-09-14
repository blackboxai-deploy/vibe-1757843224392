export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  comment: string;
  course: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Alejandra Morales",
    role: "Frontend Developer",
    company: "TechStart",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6ca4fb52-dea7-4f6c-9e36-65b0565f93e5.png",
    rating: 5,
    comment: "El curso de JavaScript Fundamentals cambió completamente mi carrera. Los conceptos están explicados de manera clara y los proyectos prácticos me dieron la confianza para conseguir mi primer trabajo como desarrolladora.",
    course: "JavaScript Fundamentals"
  },
  {
    id: "2", 
    name: "Fernando López",
    role: "Fullstack Developer",
    company: "InnovaCorp",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3446fc06-048b-42e0-af6d-a0e0ce06df17.png",
    rating: 5,
    comment: "Increíble el curso de React Avanzado. Los patrones de diseño y técnicas de optimización que aprendí me han ayudado a mejorar significativamente la performance de nuestras aplicaciones en producción.",
    course: "React Avanzado"
  },
  {
    id: "3",
    name: "Carmen Jiménez",
    role: "Data Analyst",
    company: "DataInSights",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1c00cb45-212f-4545-8714-b4a368241aca.png",
    rating: 5,
    comment: "El curso de Python para Data Science es excepcional. Me ayudó a hacer la transición de Excel a Python y ahora puedo manejar datasets masivos con pandas. Los proyectos reales fueron muy valiosos.",
    course: "Python para Data Science"
  },
  {
    id: "4",
    name: "Diego Herrera",
    role: "Backend Engineer",
    company: "CloudTech",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a460bac0-c827-493d-822a-07420c4e985a.png",
    rating: 4,
    comment: "Excelente curso de Node.js. La estructura del contenido es muy lógica y los ejercicios prácticos te preparan para situaciones reales. Especialmente útil la parte de testing y deployment.",
    course: "Node.js Backend Development"
  },
  {
    id: "5",
    name: "Sofía Ramírez",
    role: "Mobile Developer",
    company: "AppStudio",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a6c165dc-d100-4bc5-b68d-819c86df710f.png",
    rating: 5,
    comment: "React Native era algo que quería aprender hace tiempo. Este curso me dio todas las herramientas necesarias para desarrollar mi primera app y publicarla en las stores. ¡Muy recomendado!",
    course: "React Native Mobile Apps"
  },
  {
    id: "6",
    name: "Miguel Torres",
    role: "DevOps Engineer",
    company: "ScaleTech",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dbbd34c2-20cd-4aa3-bda5-21cec441649b.png",
    rating: 5,
    comment: "El curso de DevOps con Docker y Kubernetes es muy completo. Me ayudó a entender conceptos complejos de orquestación y ahora manejo deployments escalables con confianza. El instructor explica todo muy bien.",
    course: "DevOps con Docker y Kubernetes"
  }
];