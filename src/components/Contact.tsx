
import React from 'react';
import { Mail, Phone, MapPin, Tag, Package, DollarSign } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's <span className="text-red-400">Connect</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Ready to transform your grocery business? Get in touch today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tag className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Electronic Shelf Labels</h3>
            <p className="text-emerald-100 mb-6">
              Automate pricing updates with digital shelf labels that sync instantly with your POS system.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Get Demo
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Inventory Management</h3>
            <p className="text-emerald-100 mb-6">
              Real-time stock tracking and automated reordering to prevent stockouts and reduce waste.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Smart Pricing</h3>
            <p className="text-emerald-100 mb-6">
              AI-powered price optimization based on demand, competition, and inventory levels.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Explore Solutions
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-700 p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contact@ameza.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-emerald-700 p-3 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-emerald-700 p-3 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">123 Innovation Drive<br />Tech Hub, CA 94105</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors">
                    <option>Investment Opportunity</option>
                    <option>Partnership</option>
                    <option>Retail Solution</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Tell us about your interest..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
