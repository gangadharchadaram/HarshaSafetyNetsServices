import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import FloatingActionButtons from './FloatingActionButtons';

const Works = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Luxury Apartment Complex - Children Safety Nets',
      location: 'Whitefield, Bangalore',
      date: 'March 2024',
      category: 'Residential',
      description: 'Complete safety net installation for 120 apartments across 15 floors, ensuring child safety on all balconies.',
      image: 'Modern luxury apartment complex with safety nets installed on multiple balconies',
      features: ['120 Apartments', '15 Floors', 'Child Safety Focus', 'UV Resistant Nets'],
      testimonial: 'Excellent work quality and professional installation. Our residents feel much safer now.',
      client: 'Prestige Group'
    },
    {
      title: 'Commercial Building - Anti-Bird Protection',
      location: 'MG Road, Bangalore',
      date: 'February 2024',
      category: 'Commercial',
      description: 'Comprehensive bird control solution for a 20-story commercial building to prevent nesting and damage.',
      image: 'Modern commercial building with invisible anti-bird nets protecting the glass facade',
      features: ['20 Stories', 'Glass Facade Protection', 'Invisible Installation', 'Maintenance Free'],
      testimonial: 'The bird problem is completely solved. The nets are practically invisible and very effective.',
      client: 'Brigade Group'
    },
    {
      title: 'School Campus - Multi-Purpose Safety Nets',
      location: 'Koramangala, Bangalore',
      date: 'January 2024',
      category: 'Educational',
      description: 'Safety net installation for school playground, sports area, and building perimeter for student safety.',
      image: 'School campus with safety nets around playground and sports facilities with children playing',
      features: ['Playground Safety', 'Sports Area Coverage', 'Building Perimeter', 'Child-Safe Materials'],
      testimonial: 'Parents and teachers are very happy with the safety measures. Great job!',
      client: 'Delhi Public School'
    },
    {
      title: 'Hospital Building - Comprehensive Safety Solution',
      location: 'Jayanagar, Bangalore',
      date: 'December 2023',
      category: 'Healthcare',
      description: 'Complete safety net installation for hospital building including patient areas and emergency zones.',
      image: 'Hospital building with safety nets installed around patient areas and emergency zones',
      features: ['Patient Safety', 'Emergency Zone Coverage', 'Medical Grade Materials', '24/7 Installation'],
      testimonial: 'Professional service with minimal disruption to hospital operations. Highly recommended.',
      client: 'Fortis Healthcare'
    },
    {
      title: 'Industrial Warehouse - Construction Safety Nets',
      location: 'Electronic City, Bangalore',
      date: 'November 2023',
      category: 'Industrial',
      description: 'Heavy-duty safety nets for warehouse construction site ensuring worker safety and debris protection.',
      image: 'Large industrial warehouse construction site with safety nets protecting workers and equipment',
      features: ['Heavy Duty Installation', 'Worker Protection', 'Debris Control', 'OSHA Compliant'],
      testimonial: 'Zero accidents during construction. The safety nets were crucial for our project success.',
      client: 'L&T Construction'
    },
    {
      title: 'Residential Villa - Monkey Safety Nets',
      location: 'Sarjapur Road, Bangalore',
      date: 'October 2023',
      category: 'Residential',
      description: 'Specialized monkey-proof nets for luxury villa near forest area to prevent animal intrusion.',
      image: 'Luxury villa with monkey safety nets installed around the property near forest area',
      features: ['Animal Friendly', 'Forest Area Protection', 'Custom Design', 'Weather Resistant'],
      testimonial: 'No more monkey problems! The nets are strong and blend well with our villa design.',
      client: 'Private Residence'
    },
    {
      title: 'Swimming Pool Complex - Pool Safety Nets',
      location: 'Indiranagar, Bangalore',
      date: 'September 2023',
      category: 'Recreation',
      description: 'Pool safety net installation for community swimming complex ensuring water safety for all ages.',
      image: 'Community swimming pool complex with safety nets providing protection while maintaining accessibility',
      features: ['Pool Safety', 'Community Complex', 'All Age Protection', 'Quick Access Design'],
      testimonial: 'Parents feel confident letting their children play near the pool area now.',
      client: 'Sobha Developers'
    },
    {
      title: 'Cricket Academy - Practice Nets Installation',
      location: 'HSR Layout, Bangalore',
      date: 'August 2023',
      category: 'Sports',
      description: 'Professional cricket practice nets for training academy with multiple batting and bowling areas.',
      image: 'Cricket training academy with professional practice nets and players training',
      features: ['Professional Grade', 'Multiple Practice Areas', 'Impact Resistant', 'Sports Specification'],
      testimonial: 'The nets are perfect for our training needs. Students can practice safely and effectively.',
      client: 'Bangalore Cricket Academy'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Safety Nets Installed', value: '1000+' }
  ];

  const handleViewDetails = (projectTitle) => {
    navigate('/contact', { state: { service: `Details for: ${projectTitle}` } });
  };

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Previous Works</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Showcasing our successful safety net installations across residential, commercial, 
              and industrial projects with satisfied clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent successful installations and see why clients trust us with their safety needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img  
                      className="w-full h-64 object-cover"
                      alt={`${project.title} project`}
                     src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                    <div className="absolute top-4 left-4 bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Project Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-400" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="font-semibold text-gray-900">Client Testimonial</span>
                      </div>
                      <p className="text-gray-600 italic mb-2">"{project.testimonial}"</p>
                      <p className="text-sm text-gray-500">- {project.client}</p>
                    </div>

                    <Button 
                      className="w-full gradient-bg"
                      onClick={() => handleViewDetails(project.title)}
                    >
                      View Project Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from satisfied customers who trust us with their safety needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Apartment Owner',
                rating: 5,
                comment: 'Excellent service! The team was professional and the installation was perfect. Our children are now safe on the balcony.',
                image: 'Happy apartment owner standing on balcony with safety nets installed'
              },
              {
                name: 'Priya',
                role: 'Property Manager',
                rating: 5,
                comment: 'We have used their services for multiple properties. Always reliable, professional, and high-quality work.',
                image: 'Professional property manager inspecting safety net installation'
              },
              {
                name: 'Dr. Suresh Reddy',
                role: 'Hospital Administrator',
                rating: 5,
                comment: 'They completed the hospital installation with minimal disruption. Very impressed with their professionalism.',
                image: 'Hospital administrator reviewing safety net installation in medical facility'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <img  
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                      alt={`${testimonial.name} testimonial`}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="flex justify-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our list of satisfied customers and get professional safety net installation for your property.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-400 hover:bg-gray-100"
              onClick={() => handleViewDetails('New Project Installation')}
            >
              Get Your Free Quote Today
            </Button>
          </motion.div>
        </div>
      </section>
         <a
  href="https://wa.me/917995519988"
  className="fixed bottom-20 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.62 6l-1.6 5.84 6-1.57a11.93 11.93 0 005.98 1.56c6.63 0 12-5.37 12-12 0-3.18-1.24-6.18-3.48-8.52zm-8.52 18a10 10 0 01-5.06-1.4l-.36-.22-3.56.93.96-3.44-.23-.35a9.95 9.95 0 01-1.48-5.1c0-5.5 4.48-10 10-10s10 4.5 10 10-4.48 10-10 10zm5.32-7.26c-.28-.14-1.63-.8-1.88-.88-.25-.09-.43-.14-.61.14s-.7.88-.86 1.06c-.16.18-.32.2-.6.07s-1.17-.43-2.23-1.37c-.82-.73-1.38-1.63-1.54-1.9s-.02-.42.12-.56c.13-.13.29-.34.43-.5.14-.17.18-.28.28-.47.09-.19.04-.36-.02-.5-.06-.13-.6-1.45-.82-1.99-.22-.54-.45-.47-.61-.48h-.52c-.17 0-.45.07-.69.34s-.91.88-.91 2.14.93 2.49 1.07 2.67c.13.17 1.83 2.79 4.44 3.91.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.5-.08 1.63-.67 1.86-1.31.23-.64.23-1.2.16-1.31-.06-.11-.23-.17-.51-.3z" />
  </svg>
</a>
<a
  href="tel:+917995519988"
  className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.01 2.99 13.93 2.99 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58.11.34.03.71-.24 1.01l-2.2 2.2z" />
  </svg>
</a>
    </div>
  );
};

export default Works;