import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { coursesData } from "@/lib/courses-data";
import { CourseCard } from "@/components/CourseCard";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);
  
  if (!course) {
    return {
      title: "Curso no encontrado - CodeLearn",
    };
  }

  return {
    title: `${course.title} - CodeLearn`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);
  
  if (!course) {
    notFound();
  }

  const relatedCourses = coursesData
    .filter((c) => c.id !== course.id && c.category === course.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                {course.category}
              </Badge>
              <Badge 
                variant={course.level === "Principiante" ? "default" : course.level === "Intermedio" ? "secondary" : "destructive"}
                className="bg-white/20 text-white"
              >
                {course.level}
              </Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 sm:text-5xl">
              {course.title}
            </h1>
            
            <p className="text-xl opacity-90 mb-8">
              {course.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.duration}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                {course.lessonsCount} lecciones
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {course.studentsCount.toLocaleString()} estudiantes
              </div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-white/50'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1">({course.rating})</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Image */}
            <div className="mb-8">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover rounded-lg shadow-sm"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción del Curso</h2>
              <p className="text-gray-600 leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            {/* What you'll learn */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lo que aprenderás</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contenido del Curso</h2>
              <div className="space-y-4">
                {course.curriculum.map((module, moduleIndex) => (
                  <Card key={moduleIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Módulo {moduleIndex + 1}: {module.module}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center gap-3 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {lesson}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructor</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {course.instructor.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {course.instructor.title}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {course.instructor.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {course.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${course.originalPrice}
                        </span>
                      )}
                      <span className="text-3xl font-bold text-gray-900">
                        ${course.price}
                      </span>
                    </div>
                    {course.originalPrice && (
                      <div className="text-sm text-green-600 font-medium">
                        ¡Ahorras ${course.originalPrice - course.price}!
                      </div>
                    )}
                  </div>
                  
                  <Button className="w-full mb-4" size="lg">
                    Inscribirse Ahora
                  </Button>
                  
                  <Button variant="outline" className="w-full mb-6" size="lg">
                    Agregar al Carrito
                  </Button>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duración:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Lecciones:</span>
                      <span className="font-medium">{course.lessonsCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Nivel:</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Estudiantes:</span>
                      <span className="font-medium">{course.studentsCount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Acceso:</span>
                      <span className="font-medium">De por vida</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Certificado:</span>
                      <span className="font-medium">Sí</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Garantía de Satisfacción</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Si no estás completamente satisfecho con el curso, 
                        te devolvemos tu dinero dentro de los primeros 30 días.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Cursos Relacionados
              </h2>
              <Button asChild variant="outline">
                <Link href={`/cursos?category=${encodeURIComponent(course.category)}`}>
                  Ver más en {course.category}
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCourses.map((relatedCourse) => (
                <CourseCard key={relatedCourse.id} course={relatedCourse} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}