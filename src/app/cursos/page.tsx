import { CourseGrid } from "@/components/CourseGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de Cursos - CodeLearn",
  description: "Explora nuestro catálogo completo de cursos de programación y desarrollo de software. JavaScript, React, Python, Node.js y más.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 sm:text-5xl">
              Catálogo de Cursos
            </h1>
            <p className="text-xl opacity-90">
              Descubre nuestra colección completa de cursos diseñados para llevarte 
              desde principiante hasta experto en las tecnologías más demandadas.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600 text-sm">Cursos Disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15K+</div>
              <div className="text-gray-600 text-sm">Estudiantes Activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">18</div>
              <div className="text-gray-600 text-sm">Instructores Expertos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CourseGrid showFilters={true} />
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rutas de Aprendizaje Recomendadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sigue nuestras rutas estructuradas para maximizar tu aprendizaje 
              y obtener las habilidades más relevantes para tu carrera.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Developer</h3>
              <p className="text-gray-600 mb-6">
                Conviértete en un desarrollador frontend completo dominando las tecnologías 
                esenciales para crear interfaces modernas e interactivas.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">1. JavaScript Fundamentals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">2. React Avanzado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">3. TypeScript Profesional</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">4. Testing Frontend</span>
                </div>
              </div>
              <div className="text-sm text-blue-600 font-medium">
                Duración estimada: 6-8 meses
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Developer</h3>
              <p className="text-gray-600 mb-6">
                Domina el desarrollo backend y aprende a construir APIs robustas, 
                escalables y seguras para aplicaciones empresariales.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">1. JavaScript Fundamentals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">2. Node.js Backend Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">3. Bases de Datos y MongoDB</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">4. Microservicios</span>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">
                Duración estimada: 8-10 meses
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Science</h3>
              <p className="text-gray-600 mb-6">
                Conviértete en un científico de datos y aprende a extraer insights 
                valiosos de los datos usando Python y herramientas especializadas.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">1. Python para Data Science</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">2. Machine Learning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">3. Deep Learning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">4. MLOps</span>
                </div>
              </div>
              <div className="text-sm text-purple-600 font-medium">
                Duración estimada: 10-12 meses
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps Engineer</h3>
              <p className="text-gray-600 mb-6">
                Aprende las prácticas y herramientas de DevOps para automatizar 
                deployments, gestionar infraestructura y optimizar workflows.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">1. Linux y Terminal</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">2. DevOps con Docker y Kubernetes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">3. CI/CD Avanzado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">4. Cloud Computing</span>
                </div>
              </div>
              <div className="text-sm text-orange-600 font-medium">
                Duración estimada: 8-10 meses
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}