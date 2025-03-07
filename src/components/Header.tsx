
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const navLinks = [
    { title: "For Brands", href: "#brands" },
    { title: "For Influencers", href: "#influencers" },
    { title: "How It Works", href: "#how-it-works" },
    { title: "About", href: "#about" },
  ];
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="inline-flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-pick-blue to-pick-purple bg-clip-text text-transparent">
            PickCreator
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href}
              className="text-gray-700 hover:text-pick-blue transition-colors duration-200 font-medium"
            >
              {link.title}
            </a>
          ))}
        </nav>
        
        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="brand-outline" size="sm">
            Log In
          </Button>
          <Button variant="brand" size="sm" hoverEffect glow>
            Sign Up
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-pick-blue transition-colors"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="container-custom py-5 flex flex-col space-y-4">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href}
              className="text-gray-700 hover:text-pick-blue transition-colors py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
          
          <div className="flex flex-col space-y-3 pt-3">
            <Button variant="brand-outline" fullWidth>
              Log In
            </Button>
            <Button variant="brand" fullWidth>
              Sign Up
            </Button>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
