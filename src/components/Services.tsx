
import React from 'react';
import { Monitor, Smartphone, BarChart3, Shield, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor size={40} />,
      title: "Electronic Shelf Labels",
      description: "Digital price tags with real-time updates, promotional displays, and inventory tracking integration.",
      features: ["Real-time pricing", "Promotional displays", "Inventory sync", "Energy efficient"]
    },
    {
      icon: <Smartphone size={40} />,
      title: "POS Systems",
      description: "Complete point-of-sale solutions with payment processing, customer management, and analytics.",
      features: ["Payment processing", "Customer management", "Sales analytics", "Multi-location support"]
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Inventory Management",
      description: "Automated inventory tracking with predictive analytics and supply chain optimization.",
      features: ["Automated tracking", "Predictive analytics", "Supply chain optimization", "Multi-channel sync"]
    },
    {
      icon: <Shield size={40} />,
      title: "Security Solutions",
      description: "Comprehensive security systems including loss prevention and access control.",
      features: ["Loss prevention", "Access control", "Video monitoring", "Alert systems"]
    },
    {
      icon: <Zap size={40} />,
      title: "Integration Services",
      description: "Seamless integration with existing systems and third-party applications.",
      features: ["API integration", "Custom solutions", "Data migration", "24/7 support"]
    },
    {
      icon: <Users size={40} />,
      title: "Business Analytics",
      description: "Advanced analytics and reporting tools for data-driven business decisions.",
      features: ["Sales reporting", "Customer insights", "Performance metrics", "Custom dashboards"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive retail solutions that integrate seamlessly to transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-emerald-700 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
