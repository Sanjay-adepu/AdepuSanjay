import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Award, Users, Coffee } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { personalInfo, experience, testimonials } from '../data/mock';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '3+', icon: Calendar },
    { label: 'Projects Completed', value: '25+', icon: Award },
    { label: 'Happy Clients', value: '15+', icon: Users },
    { label: 'Cups of Coffee', value: '1000+', icon: Coffee }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-80 h-96 mx-auto lg:mx-0 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl"
                  whileHover={{ rotate: 3, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <img 
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  About Me
                </h1>
                <h2 className="text-xl text-blue-600 font-medium mb-6">
                  {personalInfo.title} • {personalInfo.subtitle}
                </h2>
              </div>

              <div className="prose prose-lg text-gray-600">
                <p className="leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring fellow developers. I believe in writing clean, maintainable code and creating user experiences that make a difference.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <a href="mailto:adepusanjay812@gmail.com" className="hover:text-blue-600 transition-colors">
                    adepusanjay812@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <span>+91 88977 14968</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey and the amazing companies I've worked with.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {job.position}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {job.company} • {job.location}
                        </p>
                      </div>
                      <Badge variant="outline" className="mt-2 lg:mt-0 w-fit">
                        {job.duration}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What People Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testimonials from colleagues and clients I've had the pleasure to work with.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;