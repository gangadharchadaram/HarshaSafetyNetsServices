import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Calendar, Shield, CheckCircle, Clock, Phone, AlertTriangle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MaintenanceServiceCard from '@/components/maintenance/MaintenanceServiceCard';
import MaintenancePlanCard from '@/components/maintenance/MaintenancePlanCard';
import MaintenanceProcessSection from '@/components/maintenance/MaintenanceProcessSection';
import MaintenanceTipsSection from '@/components/maintenance/MaintenanceTipsSection';
import FloatingActionButtons from './FloatingActionButtons';

const maintenanceServicesData = [
  {
    icon: Shield,
    title: 'Regular Inspection',
    description: 'Comprehensive inspection of all safety nets to ensure optimal performance and safety.',
    frequency: 'Every 6 months',
    features: ['Visual inspection', 'Strength testing', 'Wear assessment', 'Safety report'],
    price: 'Starting from ₹500'
  },
  {
    icon: Wrench,
    title: 'Repair & Replacement',
    description: 'Professional repair services for damaged nets or complete replacement when needed.',
    frequency: 'As required',
    features: ['Damage assessment', 'Quality repairs', 'Part replacement', 'Warranty coverage'],
    price: 'Starting from ₹800'
  },
  {
    icon: Calendar,
    title: 'Scheduled Maintenance',
    description: 'Planned maintenance visits to keep your safety nets in perfect condition year-round.',
    frequency: 'Quarterly/Annually',
    features: ['Preventive care', 'Cleaning service', 'Adjustment & tightening', 'Performance optimization'],
    price: 'Starting from ₹1200'
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Service',
    description: '24/7 emergency response for urgent safety net issues that require immediate attention.',
    frequency: '24/7 Available',
    features: ['Immediate response', 'Emergency repairs', 'Safety assessment', 'Temporary solutions'],
    price: 'Starting from ₹1500'
  }
];

  const watsappNumber = "918142541365"; 
  const phoneNumber = "918142541365";

const maintenancePlansData = [
  {
    name: 'Basic Plan',
    price: '₹2,000',
    period: 'per year',
    features: [
      'Annual inspection',
      'Basic cleaning',
      'Minor repairs included',
      'Safety report',
      'Phone support'
    ],
    popular: false
  },
  {
    name: 'Standard Plan',
    price: '₹3,500',
    period: 'per year',
    features: [
      'Bi-annual inspection',
      'Deep cleaning service',
      'All repairs included',
      'Priority support',
      'Replacement warranty',
      'Emergency response'
    ],
    popular: true
  },
  {
    name: 'Premium Plan',
    price: '₹5,000',
    period: 'per year',
    features: [
      'Quarterly inspection',
      'Complete maintenance',
      'All repairs & replacement',
      '24/7 emergency service',
      'Extended warranty',
      'Free upgrades',
      'Dedicated support'
    ],
    popular: false
  }
];

const Maintenance = () => {
  const navigate = useNavigate();

  const handleScheduleService = (serviceName) => {
    navigate('/contact', { state: { service: serviceName } });
  };

  const handleSelectPlan = (planName) => {
    navigate('/contact', { state: { service: `${planName} Maintenance Plan` } });
  };

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+917995519988';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Maintenance Services</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Keep your safety nets in perfect condition with our comprehensive maintenance services. 
              Professional care to ensure long-lasting protection and optimal performance.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={handleEmergencyCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency Service: Call Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Maintenance Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance solutions to keep your safety nets functioning perfectly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceServicesData.map((service, index) => (
              <MaintenanceServiceCard 
                key={service.title} 
                service={service} 
                index={index} 
                onScheduleService={handleScheduleService} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Annual Maintenance Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect maintenance plan for your needs and save on regular service costs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlansData.map((plan, index) => (
              <MaintenancePlanCard 
                key={plan.name} 
                plan={plan} 
                index={index} 
                onSelectPlan={handleSelectPlan} 
              />
            ))}
          </div>
        </div>
      </section> */}

      <MaintenanceProcessSection />
      <MaintenanceTipsSection />

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Maintenance Service?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait for problems to occur. Schedule your maintenance service today and ensure 
              your safety nets continue to provide reliable protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-400 hover:bg-gray-100"
                onClick={() => handleScheduleService('General Maintenance Service')}
              >
                Schedule Maintenance
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-blue-400 hover:bg-white hover:text-blue-400"
                onClick={handleEmergencyCall}
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Service
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
       <FloatingActionButtons />
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

export default Maintenance;