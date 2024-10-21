import React from 'react';
import { Bot, Zap, BarChart, Lock } from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-12 h-12 text-blue-500" />,
    title: 'Intelligent Chatbots',
    description: 'Deploy AI-powered chatbots to handle customer inquiries 24/7, improving response times and customer satisfaction.',
  },
  {
    icon: <Zap className="w-12 h-12 text-purple-500" />,
    title: 'Process Automation',
    description: 'Streamline your business processes with intelligent automation, reducing errors and increasing efficiency.',
  },
  {
    icon: <BarChart className="w-12 h-12 text-green-500" />,
    title: 'Predictive Analytics',
    description: 'Leverage AI to analyze data and predict trends, helping you make informed business decisions.',
  },
  {
    icon: <Lock className="w-12 h-12 text-red-500" />,
    title: 'AI-Enhanced Security',
    description: 'Protect your business with advanced AI-driven security systems that detect and prevent threats in real-time.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Our AI-Powered Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover-lift"
            >
              <div className="mb-4 transform transition-transform duration-300 hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;