import React from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/genie.jpg" alt="MagicFolio Genie Logo" className="w-10 h-10 rounded-lg object-cover shadow-md" />
          <span className="text-xl font-bold gradient-text">MagicFolio</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-lg font-bold hover:text-primary transition-colors">Features</a>
          <a href="#testimonials" className="text-lg font-bold hover:text-primary transition-colors">Reviews</a>
          <a href="#contact" className="text-lg font-bold hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            size="sm"
            className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-blue/90 hover:to-tech-purple/90"
            onClick={() => {
              const form = document.getElementById('order-form');
              if (form) form.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
