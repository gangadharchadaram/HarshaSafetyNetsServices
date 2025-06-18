import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Wrench } from 'lucide-react';

const MaintenanceTipsSection = () => {
  const maintenanceTips = [
    {
      icon: CheckCircle,
      title: 'Regular Visual Checks',
      description: 'Inspect your safety nets monthly for any visible damage, tears, or loose connections.'
    },
    {
      icon: Shield,
      title: 'Weather Protection',
      description: 'Check nets after severe weather conditions like storms, heavy rain, or strong winds.'
    },
    {
      icon: Clock,
      title: 'Professional Service',
      description: 'Schedule professional maintenance at least once a year for optimal safety and performance.'
    },
    {
      icon: Wrench,
      title: 'Immediate Repairs',
      description: 'Address any damage immediately to prevent further deterioration and maintain safety.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Maintenance Tips</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple tips to help you maintain your safety nets between professional services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {maintenanceTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <tip.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceTipsSection;