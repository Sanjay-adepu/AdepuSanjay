import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { projects } from '../data/mock';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
          />
          <Button
            variant="secondary"
            size="sm"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white"
            onClick={onClose}
          >
            ✕
          </Button>
        </div>
        
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {project.title}
              </h2>
              <Badge variant="outline" className="w-fit">
                {project.category}
              </Badge>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A collection of projects I've built, showcasing my skills in full-stack development, 
              mobile apps, and modern web technologies.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <Filter className="w-5 h-5 text-gray-600 mr-2 self-center" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className={filter === category 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "text-gray-600 hover:text-blue-600 border-gray-300"
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {project.featured && (
                        <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                          Featured
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            className="bg-white/90 text-gray-900 hover:bg-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.liveUrl, '_blank');
                            }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-white/90 text-gray-900 hover:bg-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubUrl, '_blank');
                            }}
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-blue-600 text-white hover:bg-blue-700"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Click to view details</span>
                        <div className="flex gap-2">
                          <ExternalLink className="w-4 h-4" />
                          <Github className="w-4 h-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;