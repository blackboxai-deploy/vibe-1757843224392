export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  experience: string;
}

export const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Elena Castillo",
    role: "CEO & Fundadora",
    bio: "Ingeniera en Sistemas con 12 años de experiencia en la industria tech. Ex-CTO de una startup exitosa, apasionada por la educación tecnológica y el desarrollo de talento.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4aff4437-5f9f-4dbf-adac-c404f7e69720.png",
    expertise: ["Liderazgo", "Estrategia", "Product Management", "Startups"],
    experience: "12+ años"
  },
  {
    id: "2", 
    name: "David Martínez",
    role: "Director Académico",
    bio: "PhD en Ciencias de la Computación, ex-profesor universitario con 15 años de experiencia en educación. Especializado en diseño curricular y metodologías de aprendizaje efectivas.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6efc2139-2122-45ff-8cd0-91c0deaef421.png",
    expertise: ["Educación", "Curriculum", "Pedagogía", "Investigación"],
    experience: "15+ años"
  },
  {
    id: "3",
    name: "Andrea Sánchez",
    role: "Head of Engineering",
    bio: "Senior Software Engineer con experiencia en Google y Microsoft. Experta en arquitecturas escalables y mentoring de equipos de desarrollo. Lidera nuestro equipo técnico.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/065d3ed7-1a5e-4969-a44a-73e4b81ef636.png",
    expertise: ["Architecture", "Scaling", "Team Leadership", "Cloud Computing"],
    experience: "10+ años"
  },
  {
    id: "4",
    name: "Javier Moreno",
    role: "UI/UX Design Lead",
    bio: "Diseñador con background en psicología cognitiva. Especializado en crear experiencias de aprendizaje intuitivas y engaging. Ha trabajado con startups y empresas Fortune 500.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c492b7f-fecc-4e69-b428-c2505e5bf6ba.png",
    expertise: ["UX Design", "Psychology", "Prototyping", "User Research"],
    experience: "8+ años"
  }
];

export const companyStats = {
  studentsCount: 15000,
  coursesCount: 25,
  instructorsCount: 18,
  companiesCount: 150,
  satisfactionRate: 98
};