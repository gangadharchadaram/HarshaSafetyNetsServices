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
    window.location.href = 'tel:+919876543210';
  };

  return (
    <div className="min-h-screen pt-16">
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
      <section className="py-20 bg-white">
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
      </section>

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
    </div>
  );
};

export default Maintenance;