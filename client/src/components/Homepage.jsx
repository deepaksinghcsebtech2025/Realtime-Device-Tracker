// frontend/src/components/Homepage.jsx
import { ArrowRight, Map, Shield, Users, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium">
              Real-Time Location Platform
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Real-Time Location
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Tracking</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Track and monitor locations in real-time with our advanced mapping system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/map"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-gray-300 hover:text-white border-2 border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                Learn More
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
              Features
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Everything you need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features to help you track and manage locations effortlessly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Map,
                title: "Real-Time Tracking",
                description: "Monitor locations in real-time with instant updates and notifications"
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Your location data is encrypted and protected with the highest security standards"
              },
              {
                icon: Users,
                title: "Multiple Users",
                description: "Track multiple users simultaneously with our advanced mapping system"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <feature.icon className="h-16 w-16 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%)',
          backgroundSize: '50px 50px'
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Ready to Start Tracking?
            </h2>
            <p className="text-xl mb-10 leading-relaxed text-blue-100 max-w-2xl mx-auto">
              Join thousands of users who trust our platform for their location tracking needs
            </p>
            <a
              href="/map"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Try It Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;