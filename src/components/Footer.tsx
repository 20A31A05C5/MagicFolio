import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer id="contact" className="bg-muted/30 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/genie.jpg" alt="MagicFolio Genie Logo" className="w-8 h-8 rounded-lg object-cover shadow-md" />
              <span className="text-xl font-bold gradient-text">MagicFolio</span>
            </div>
            <p className="text-muted-foreground">
              Creating professional portfolios that help you land your dream job.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio Creation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resume Review</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Consulting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Website Maintenance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Get tips on career development and portfolio best practices.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground">
            © 2024 MagicFolio. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">Contact us:</span>
            <a href="mailto:support@magicfolio.com" className="text-primary hover:underline">
              support@magicfolio.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
