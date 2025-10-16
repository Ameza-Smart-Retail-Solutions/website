
import React from 'react';
import { Target, Award, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-emerald-700">AMEZA</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                AMEZA is revolutionizing the retail industry with cutting-edge smart retail solutions. 
                We deliver comprehensive systems that seamlessly integrate pricing, inventory, and point-of-sale 
                operations to create a unified retail ecosystem that drives efficiency and growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our integrated approach goes beyond what traditional solutions like Square and Clover 
                offer, providing retailers with the tools they need to thrive in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-emerald-700 mb-2">500+</div>
                <div className="text-gray-600">Retail Partners</div>
              </div>
              <div className="text-center p-6 bg-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-emerald-700 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-600 text-white p-8 rounded-xl">
              <Target size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-emerald-100">
                To empower retailers with intelligent, integrated solutions that drive efficiency and growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-500 text-white p-8 rounded-xl">
              <Award size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-red-100">
                Leading the industry with breakthrough technology and forward-thinking solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-700 to-gray-600 text-white p-8 rounded-xl">
              <Lightbulb size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-3">Expertise</h3>
              <p className="text-gray-100">
                Deep retail industry knowledge combined with technical excellence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-emerald-500 text-white p-8 rounded-xl">
              <Globe size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-emerald-100">
                Serving retailers worldwide with scalable, reliable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
