import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { IndianRupee } from 'lucide-react';

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 gradient-bg">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Get Your Personal{' '}
            <span className="gradient-text">Portfolio Website</span>{' '}
            in Just 1 Hour
          </h1>
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-tech-blue to-tech-purple text-white border-2 border-transparent bg-clip-padding rounded-full px-8 py-3 shadow-2xl font-extrabold text-2xl animate-[glow_4s_ease-in-out_infinite] ring-4 ring-tech-blue ring-offset-2 ring-offset-white transition-all duration-500 animate-pulse">
              Starting at ₹300
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Upload your resume and we'll turn it into a stunning, 
            professional website that showcases your skills and experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-blue/90 hover:to-tech-purple/90 text-lg px-8 py-6 animate-glow"
              onClick={scrollToForm}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Examples
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>1 Hour Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-tech-purple rounded-full animate-pulse"></div>
              <span>Mobile-Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
