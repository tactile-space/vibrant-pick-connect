
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import BrandsSection from '@/components/BrandsSection';
import InfluencersSection from '@/components/InfluencersSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Add preloader class to body
    if (loading) {
      document.body.classList.add('preloader-active');
    } else {
      document.body.classList.remove('preloader-active');
    }
    
    return () => {
      document.body.classList.remove('preloader-active');
    };
  }, [loading]);
  
  const handlePreloaderComplete = () => {
    setLoading(false);
  };
  
  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            
            <main>
              {/* Hero Section */}
              <section className="relative h-screen flex items-center overflow-hidden">
                <div className="container-custom relative z-10">
                  <div className="text-center max-w-4xl mx-auto pt-20">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="inline-block bg-gradient-to-r from-pick-blue/10 to-pick-purple/10 text-pick-blue font-medium px-4 py-1.5 rounded-full text-sm mb-6"
                    >
                      The Platform for Local Collaborations
                    </motion.span>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pick-blue to-pick-purple bg-clip-text text-transparent"
                    >
                      Connect Brands with Influencers 
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
                    >
                      PickCreator bridges the gap between local businesses and influencers, creating meaningful collaborations that boost growth for both.
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                      <a href="#brands">
                        <motion.button
                          whileHover={{ y: -5 }}
                          className="px-8 py-4 rounded-full bg-pick-blue text-white font-medium shadow-lg shadow-blue-300/30 hover:shadow-blue-300/50 transition-all duration-300"
                        >
                          For Businesses
                        </motion.button>
                      </a>
                      
                      <a href="#influencers">
                        <motion.button
                          whileHover={{ y: -5 }}
                          className="px-8 py-4 rounded-full bg-white text-pick-purple border-2 border-pick-purple font-medium hover:bg-pick-purple/5 transition-all duration-300"
                        >
                          For Influencers
                        </motion.button>
                      </a>
                    </motion.div>
                  </div>
                </div>
                
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                  <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-200 opacity-20 blur-3xl animate-float"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-200 opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
              </section>
              
              <BrandsSection />
              <InfluencersSection />
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
