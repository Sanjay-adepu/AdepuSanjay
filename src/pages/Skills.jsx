import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Cloud, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { skills } from '../data/mock';

const Skills = () => {
  const categoryIcons = {
    'Frontend Development': Globe,
    'Backend Development': Database,
    'Database & Cloud': Cloud,
    'Mobile Development': Smartphone
  };

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-xs text-gray-500 font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
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
              Skills & Technologies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A comprehensive overview of my technical skills, programming languages, 
              frameworks, and tools I use to bring ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skills.map((category, categoryIndex) => {
              const IconComponent = categoryIcons[category.category] || Code;
              
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center text-xl text-gray-900">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.technologies.map((skill, skillIndex) => (
                        <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* All Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-2xl text-gray-900">
                  <Zap className="w-6 h-6 text-yellow-500 mr-2" />
                  Technical Proficiencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.flatMap(category => category.technologies).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group"
                    >
                      <div className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors duration-200 text-center">
                        <div 
                          className="w-8 h-8 mx-auto mb-2 rounded-full"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          <div 
                            className="w-2 h-2 rounded-full mx-auto mt-3"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                        <h3 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </h3>
                        <div className="flex justify-center">
                          <Badge 
                            variant="secondary" 
                            className="text-xs"
                            style={{ 
                              backgroundColor: `${skill.color}15`,
                              color: skill.color,
                              border: `1px solid ${skill.color}30`
                            }}
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Always Learning, Always Growing</h3>
                <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto">
                  Technology evolves rapidly, and I stay updated with the latest trends and best practices. 
                  I'm constantly learning new frameworks, tools, and methodologies to deliver cutting-edge solutions. 
                  Currently exploring Web3, AI integration, and advanced cloud architectures.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {['Web3', 'AI/ML', 'Microservices', 'DevOps', 'Performance Optimization'].map((skill) => (
                    <Badge key={skill} className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;