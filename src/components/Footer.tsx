import React from 'react';
import { Cpu, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Cpu className="w-8 h-8 text-blue-500 mr-2" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              AutoFusionAI
            </span>
          </div>
          <nav className="flex space-x-6 mb-6 md:mb-0">
            {['Home', 'Services', 'Use Cases', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 made with ♥ by AutoFusionAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;