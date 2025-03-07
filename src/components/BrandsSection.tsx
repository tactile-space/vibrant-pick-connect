
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, MessageSquare, TrendingUp } from 'lucide-react';
import Button from './Button';
import AnimatedText from './AnimatedText';

const BrandsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  
  const benefits = [
    {
      icon: <MapPin size={24} className="text-pick-blue" />,
      title: "Find Influencers Nearby",
      description: "Reach the right audience in your city."
    },
    {
      icon: <MessageSquare size={24} className="text-pick-blue" />,
      title: "Direct Chat & Deals",
      description: "No middlemen, talk and collaborate easily."
    },
    {
      icon: <TrendingUp size={24} className="text-pick-blue" />,
      title: "Boost Your Sales & Visibility",
      description: "Let influencers create content that brings more customers."
    }
  ];
  
  return (
    <section 
      id="brands" 
      ref={sectionRef}
      className="relative overflow-hidden section-padding bg-gradient-to-b from-white to-blue-50 min-h-screen flex items-center"
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-pick-blue font-medium px-4 py-1.5 rounded-full text-sm mb-6"
            >
              For Local Businesses
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <AnimatedText 
                text="Grow Your Business with Local Influencers!" 
                animation="slide"
                delay={0.1}
                as="span"
              />
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-700 mb-8 max-w-2xl"
            >
              Find Instagram influencers in your city to promote your brand. No big budgets, just real connections and real results!
            </motion.p>
            
            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-4 p-2 bg-blue-50 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button variant="brand" size="lg" hoverEffect glow>
                Find Influencers Now
              </Button>
            </motion.div>
          </div>
          
          {/* Image */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                alt="Local business owner with influencer"
                className="w-full h-full object-cover"
              />
              
              {/* Floating cards */}
              <div className="absolute -bottom-6 -right-6 glass p-4 rounded-xl shadow-lg max-w-[250px]">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-pick-purple text-white flex items-center justify-center font-bold">CM</div>
                  <div>
                    <div className="font-medium">City Mall</div>
                    <div className="text-xs text-gray-500">Partnered with 8 influencers</div>
                  </div>
                </div>
                <div className="text-sm">
                  "Our foot traffic increased by 32% during the weekend event!"
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-pick-purple rounded-full opacity-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-blue-300 opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-pick-blue opacity-5 blur-3xl"></div>
    </section>
  );
};

export default BrandsSection;
