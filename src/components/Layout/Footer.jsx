import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/mock';

const iconMap = {
  Github,
  Linkedin, 
  Twitter,
  Mail
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 text-gray-600 hover:text-blue-600 hover:shadow-md transition-all duration-200"
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">
                  About Me
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href={personalInfo.resume} download className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> adepusanjay812@gmail.com
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +91 88977 14968
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Location:</span> {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 {personalInfo.name}. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
