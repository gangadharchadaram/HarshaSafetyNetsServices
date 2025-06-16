import React from 'react';
import { motion } from 'framer-motion';

const MaintenanceProcessSection = () => {
  const processSteps = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'Thorough inspection of all safety nets to identify any issues or potential problems.'
    },
    {
      step: '2',
      title: 'Detailed Report',
      description: 'Comprehensive report with findings, recommendations, and maintenance requirements.'
    },
    {
      step: '3',
      title: 'Professional Service',
      description: 'Expert maintenance work including cleaning, repairs, adjustments, and replacements.'
    },
    {
      step: '4',
      title: 'Quality Check',
      description: 'Final inspection and testing to ensure all work meets our high safety standards.'
    },
    {
      step: '5',
      title: 'Service Documentation',
      description: 'Complete documentation of work performed and recommendations for future maintenance.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Maintenance Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to ensure your safety nets receive the best care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img  
              className="rounded-lg shadow-xl w-full h-96 object-cover"
              alt="Professional maintenance team inspecting safety nets"
             src="https://images.unsplash.com/photo-1697565052469-78d51932fb4b" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {processSteps.map((process) => (
                <div key={process.step} className="flex items-start space-x-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceProcessSection;