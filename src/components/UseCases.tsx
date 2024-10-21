import React from 'react';
import { Briefcase, ShoppingCart, Stethoscope } from 'lucide-react';

const useCases = [
  {
    icon: <Briefcase className="w-12 h-12 text-blue-500" />,
    title: 'Financial Services',
    description: 'AI-powered fraud detection and automated customer service for banks and financial institutions.',
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-purple-500" />,
    title: 'E-commerce',
    description: 'Personalized product recommendations and inventory management optimization for online retailers.',
  },
  {
    icon: <Stethoscope className="w-12 h-12 text-green-500" />,
    title: 'Healthcare',
    description: 'Automated medical image analysis and predictive diagnostics for improved patient care.',
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Real-World Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover-lift group"
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">{useCase.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">{useCase.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;