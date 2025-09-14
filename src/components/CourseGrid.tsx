"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { CourseCard } from "./CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { coursesData, categories, levels } from "@/lib/courses-data";

interface CourseGridProps {
  showFilters?: boolean;
  featuredOnly?: boolean;
  limit?: number;
}

export function CourseGrid({ showFilters = true, featuredOnly = false, limit }: CourseGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedLevel, setSelectedLevel] = useState("Todos");

  const filteredCourses = useMemo(() => {
    let filtered = featuredOnly ? coursesData.filter(course => course.featured) : coursesData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    // Filter by level
    if (selectedLevel !== "Todos") {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    // Apply limit if specified
    if (limit) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedLevel, featuredOnly, limit]);

  return (
    <div className="space-y-8">
      {showFilters && (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="space-y-6">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Buscar cursos
              </label>
              <Input
                id="search"
                type="text"
                placeholder="Buscar por nombre, tecnología o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Categoría
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Nivel
              </label>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLevel(level)}
                    className="text-sm"
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>

            {/* Active filters */}
            {(selectedCategory !== "Todos" || selectedLevel !== "Todos" || searchTerm) && (
              <div className="flex items-center gap-2 pt-4 border-t">
                <span className="text-sm font-medium text-gray-700">Filtros activos:</span>
                {selectedCategory !== "Todos" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory("Todos")}
                      className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </Badge>
                )}
                {selectedLevel !== "Todos" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {selectedLevel}
                    <button
                      onClick={() => setSelectedLevel("Todos")}
                      className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </Badge>
                )}
                {searchTerm && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    &quot;{searchTerm}&quot;
                    <button
                      onClick={() => setSearchTerm("")}
                      className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("Todos");
                    setSelectedLevel("Todos");
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Limpiar todos
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          {filteredCourses.length === 0
            ? "No se encontraron cursos"
            : `${filteredCourses.length} ${filteredCourses.length === 1 ? 'curso encontrado' : 'cursos encontrados'}`
          }
        </p>
        {limit && filteredCourses.length === limit && (
          <Button asChild variant="outline">
            <Link href="/cursos">Ver todos los cursos</Link>
          </Button>
        )}
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron cursos</h3>
          <p className="text-gray-600 mb-6">
            Intenta cambiar los filtros o términos de búsqueda.
          </p>
          <Button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("Todos");
              setSelectedLevel("Todos");
            }}
          >
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  );
}