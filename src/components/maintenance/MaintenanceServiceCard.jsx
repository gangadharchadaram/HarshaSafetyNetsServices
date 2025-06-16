import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const MaintenanceServiceCard = ({ service, index, onScheduleService }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
        <CardHeader className="text-center">
          <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-xl">{service.title}</CardTitle>
          <div className="text-sm text-gray-500">{service.frequency}</div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 mb-4">
            {service.description}
          </CardDescription>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
            <ul className="space-y-1">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-lg font-semibold text-primary mb-4">{service.price}</div>
          
          <Button 
            className="w-full gradient-bg"
            onClick={() => onScheduleService(service.title)}
          >
            Schedule Service
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MaintenanceServiceCard;