
import React from 'react';
import { ArrowRight, ShoppingCart, CreditCard, Package } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Smart Retail Solutions for the{' '}
                <span className="text-red-400">Future</span>
              </h1>
              <p className="text-xl lg:text-2xl text-emerald-100 leading-relaxed">
                Revolutionizing retail with integrated electronic shelf labels, advanced POS systems, and intelligent inventory management.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <ShoppingCart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Electronic Shelf Labels</h3>
              </div>
              <p className="text-emerald-100">Dynamic pricing and real-time inventory updates</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <CreditCard className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Advanced POS Systems</h3>
              </div>
              <p className="text-emerald-100">Comprehensive point-of-sale solutions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Package className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Inventory Management</h3>
              </div>
              <p className="text-emerald-100">Smart tracking and automated processes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
