import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="AI Technology"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              About Our AI Innovation
            </h2>
            <p className="text-gray-300 mb-6">
              At AIAutomation, we're at the forefront of AI technology, constantly pushing the boundaries of what's possible. Our team of expert engineers and data scientists work tirelessly to develop cutting-edge solutions that transform businesses across industries.
            </p>
            <ul className="space-y-4">
              {[
                'State-of-the-art machine learning algorithms',
                'Customized AI solutions for your unique needs',
                'Continuous learning and improvement',
                'Seamless integration with existing systems',
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;