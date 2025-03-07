
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DollarSign, Camera, Handshake } from 'lucide-react';
import Button from './Button';
import AnimatedText from './AnimatedText';

const InfluencersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  
  const benefits = [
    {
      icon: <DollarSign size={24} className="text-pick-purple" />,
      title: "Earn Money Easily",
      description: "Get paid for brand collaborations."
    },
    {
      icon: <Camera size={24} className="text-pick-purple" />,
      title: "Show Your Creativity",
      description: "Make fun content and grow your influence."
    },
    {
      icon: <Handshake size={24} className="text-pick-purple" />,
      title: "Work with Local Brands",
      description: "Support businesses in your city and get cool deals."
    }
  ];
  
  return (
    <section 
      id="influencers" 
      ref={sectionRef}
      className="relative overflow-hidden section-padding bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center"
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586335963805-7b603f62a048?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                alt="Young influencer creating content"
                className="w-full h-full object-cover"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 glass p-4 rounded-xl shadow-lg max-w-[250px]">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-pick-pink text-white flex items-center justify-center font-bold">SP</div>
                  <div>
                    <div className="font-medium">Sneha P.</div>
                    <div className="text-xs text-gray-500">Fashion & Lifestyle • 12K followers</div>
                  </div>
                </div>
                <div className="text-sm">
                  "Made ₹25,000 last month with just 3 brand collaborations!"
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-pick-pink rounded-full opacity-10 blur-3xl"></div>
          </motion.div>
          
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-purple-100 text-pick-purple font-medium px-4 py-1.5 rounded-full text-sm mb-6"
            >
              For Influencers
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <AnimatedText 
                text="Turn Your Instagram into Earnings!" 
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
              Love creating content? Get paid to promote local brands in your city. No experience needed—just your creativity!
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
                  <div className="mr-4 p-2 bg-purple-50 rounded-lg">
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
              <Button 
                variant="brand" 
                size="lg" 
                hoverEffect 
                glow
                className="bg-pick-purple hover:bg-pick-purple/90"
              >
                Start Earning Now
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-purple-300 opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-pick-pink opacity-5 blur-3xl"></div>
    </section>
  );
};

export default InfluencersSection;
