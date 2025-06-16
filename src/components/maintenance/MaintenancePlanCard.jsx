import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';

const MaintenancePlanCard = ({ plan, index, onSelectPlan }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className={`h-full relative ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
              <Star className="h-4 w-4" />
              <span>Most Popular</span>
            </div>
          </div>
        )}
        
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{plan.name}</CardTitle>
          <div className="text-3xl font-bold text-primary">
            {plan.price}
            <span className="text-lg text-gray-600 font-normal">/{plan.period}</span>
          </div>
        </CardHeader>
        
        <CardContent>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            className={`w-full ${plan.popular ? 'gradient-bg' : ''}`}
            variant={plan.popular ? 'default' : 'outline'}
            onClick={() => onSelectPlan(plan.name)}
          >
            Select {plan.name}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MaintenancePlanCard;