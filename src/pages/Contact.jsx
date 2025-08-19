import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Clock, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { personalInfo, socialLinks } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adepusanjay812@gmail.com',
      href: 'mailto:adepusanjay812@gmail.com',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 88977 14968',
      href: 'tel:+918897714968',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${personalInfo.location}`,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const iconMap = {
    Github,
    Linkedin,
    Twitter,
    Mail
  };

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
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Currently available for new projects
            </Badge>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack developer for your team or want to discuss a freelance project, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mr-4`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-500">{item.label}</p>
                            {item.href ? (
                              <a 
                                href={item.href}
                                className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-gray-900">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = iconMap[social.icon];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-md transition-all duration-200"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Send className="w-6 h-6 mr-2 text-blue-600" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      className="w-full"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Quick tip:</strong> Include details about your project timeline, 
                    budget range, and specific requirements to help me provide a better response.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;