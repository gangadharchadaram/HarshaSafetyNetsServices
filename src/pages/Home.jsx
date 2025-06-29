import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FloatingActionButtons from './FloatingActionButtons'
import HeroBanner from './HomeBanner';
import MaintenanceProcessSection from '../components/maintenance/MaintenanceProcessSection';

const Home = () => {
  const navigate = useNavigate();

  const products = [
      {
        icon: Shield,
        title: 'Children Safety Nets',
        description: 'High-strength safety nets designed specifically for child protection on balconies, windows, and staircases.',
        features: ['UV Resistant', 'Weather Proof', 'Child-Safe Materials', 'Easy Maintenance'],
        image: 'https://ik.imagekit.io/x3z2alsqy/csn.jpg?updatedAt=1750499002336',
        category: 'Residential'
      },
      {
        icon: Shield,
        title: 'Anti-Bird Protection Nets',
        description: 'Comprehensive bird control solutions to prevent nesting and protect your property from bird-related damage.',
        features: ['Invisible Protection', 'Humane Solution', 'Long Lasting', 'All Weather'],
        image: 'https://ik.imagekit.io/x3z2alsqy/anti-bird.jpg?updatedAt=1750501201672',
        category: 'Commercial'
      },
      {
        icon: Shield,
        title: 'Pigeon Balcony Safety Nets',
        description: 'Specialized nets to prevent pigeons from nesting and creating mess on balconies and terraces.',
        features: ['Pigeon Proof', 'Aesthetic Design', 'Easy Installation', 'Maintenance Free'],
        image: 'https://ik.imagekit.io/x3z2alsqy/61669+aZDXL._UF1000,1000_QL80_.jpg?updatedAt=1750501281128',
        category: 'Residential'
      },
      {
        icon: Shield,
        title: 'Monkey Safety Nets',
        description: 'Heavy-duty nets designed to protect properties from monkey intrusions while ensuring animal safety.',
        features: ['Extra Strong', 'Animal Friendly', 'Durable Material', 'Custom Sizing'],
        image: 'https://ik.imagekit.io/x3z2alsqy/monkey-safety.jpg?updatedAt=1750501381002',
        category: 'Residential'
      },
      {
        icon: Shield,
        title: 'Apartment Open Area Safety Nets',
        description: 'Safety nets for apartment common areas, courtyards, and open spaces to prevent accidents.',
        features: ['High Visibility', 'Strong Support', 'Fire Resistant', 'Professional Grade'],
        image: 'https://ik.imagekit.io/x3z2alsqy/apartment-opennets.webp?updatedAt=1750501479807',
        category: 'Commercial'
      },
      {
        icon: Shield,
        title: 'Apartment Duct Area Safety Nets',
        description: 'Specialized nets for duct areas, utility spaces, and technical areas in apartment buildings.',
        features: ['Technical Grade', 'Heat Resistant', 'Easy Access', 'Maintenance Friendly'],
        image: 'https://ik.imagekit.io/x3z2alsqy/duct-3.jpg?updatedAt=1750501599819',
        category: 'Commercial'
      },
      {
        icon: Shield,
        title: 'Glass Protection Safety Nets',
        description: 'Protective nets for glass facades, windows, and glass structures to prevent breakage and injury.',
        features: ['Impact Resistant', 'Transparent Design', 'Glass Compatible', 'Weather Resistant'],
        image: 'https://ik.imagekit.io/x3z2alsqy/balcony1.jpg?updatedAt=1750501678321',
        category: 'Commercial'
      },
      {
        icon: Shield,
        title: 'Construction Safety Nets',
        description: 'Professional-grade safety nets for construction sites, scaffolding, and building projects.',
        features: ['OSHA Compliant', 'High Strength', 'Debris Protection', 'Worker Safety'],
        image: 'https://ik.imagekit.io/x3z2alsqy/constructin.jpeg?updatedAt=1750501764503',
        category: 'Industrial'
      },
      {
        icon: Shield,
        title: 'Swimming Pool Safety Nets',
        description: 'Pool safety nets to prevent accidental drowning and ensure water safety for families.',
        features: ['Water Resistant', 'Quick Removal', 'Child Safe', 'Pool Compatible'],
        image: 'https://ik.imagekit.io/x3z2alsqy/swimming-pool-safety-net.jpg?updatedAt=1750501834469',
        category: 'Residential'
      },
      {
        icon: Shield,
        title: 'Cricket Practice Nets',
        description: 'Professional cricket practice nets for training facilities, schools, and sports complexes.',
        features: ['Sports Grade', 'Impact Absorption', 'Weather Proof', 'Professional Size'],
        image: 'https://ik.imagekit.io/x3z2alsqy/IMG_1446.jpeg?updatedAt=1750498269938',
        category: 'Sports'
      }
    ];

  const services = [
    {
      title: 'Children Safety Nets',
      description: 'Protect your children from falls with our high-quality safety nets for balconies and windows.',
      icon: Shield,
    },
    {
      title: 'Anti-Bird Protection',
      description: 'Comprehensive bird control solutions to keep your property clean and protected.',
      icon: Shield,
    },
    {
      title: 'Pigeon Balcony Safety',
      description: 'Specialized nets to prevent pigeons from nesting on your balconies.',
      icon: Shield,
    },
    {
      title: 'Monkey Safety Nets',
      description: 'Durable nets to protect your property from monkey intrusions.',
      icon: Shield,
    },
    {
      title: 'Construction Safety',
      description: 'Professional safety nets for construction sites and building projects.',
      icon: Shield,
    },
    {
      title: 'Swimming Pool Safety',
      description: 'Pool safety nets to prevent accidents and ensure water safety.',
      icon: Shield,
    },
  ];

  const features = [
    'Professional Installation',
    'High-Quality Materials',
    'Weather Resistant',
    'Long-lasting Durability',
    'Expert Maintenance',
    'Affordable Pricing',
  ];

  const handleCallNow = () => {
    window.location.href = 'tel:+9179955 19988';
  };

  return (
    <div className="min-h-screen">
      <HeroBanner />
       <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-xl transition-all duration-300 group">
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                alt={`${product.title} installation`}
                src={product.image}
              />
              <div className="absolute top-4 right-4 bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {product.category}
              </div>
            </div>

            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <product.icon className="h-8 w-8 text-blue-400" />
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                {product.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

             <a
  href="tel:+917995519988"
  className="inline-flex w-full justify-center items-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition font-semibold text-base shadow"
>
  Call +91 79955 19988
</a>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Safety Net Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection solutions for residential and commercial properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-400">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MaintenanceProcessSection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Harsha Safety Nets Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience in the safety net industry, we provide reliable, 
                durable, and professionally installed safety solutions that protect what matters most.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button asChild size="lg" className="gradient-bg">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img  
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                alt="Professional safety net installation"
               src="https://images.unsplash.com/photo-1673300982703-be76f17b5c92" />
              <div className="absolute -bottom-6 -right-6 bg-blue-400 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 fill-current" />
                  <div>
                    <div className="text-2xl font-bold">4.9</div>
                    <div className="text-sm">Customer Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
        Ready to Secure Your Property?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Get a free consultation and quote for your safety net requirements. 
        Our experts are ready to help you choose the perfect solution.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+917995519988"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md text-blue-400 bg-white hover:bg-gray-100 text-lg font-semibold shadow transition"
        >
          Call Now: +91 79955 19988
        </a>
        
      </div>
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

export default Home;