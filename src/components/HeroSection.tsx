import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-blue-200 opacity-20"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-indigo-200 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
              Domina las{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                tecnologías
              </span>{' '}
              del futuro
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
              Aprende programación y desarrollo de software con cursos diseñados por expertos. 
              Desde JavaScript hasta DevOps, te preparamos para el mercado tecnológico actual.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link href="/cursos">
                  Explorar Cursos
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link href="/sobre-nosotros">
                  Conocer Más
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">15,000+</div>
                <div className="text-sm text-gray-600">Estudiantes</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Cursos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <div className="relative mx-auto max-w-lg">
              <div className="relative">
                <img
                  className="w-full rounded-2xl shadow-2xl"
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ea978576-c591-4d3d-9ec8-743a26dd4d25.png"
                  alt="Espacio de trabajo moderno para desarrolladores con múltiples monitores"
                />
                
                {/* Floating cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform rotate-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">JavaScript</span>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">React</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm font-medium">Python</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}