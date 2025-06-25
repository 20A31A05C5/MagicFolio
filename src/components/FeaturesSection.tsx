import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Smartphone, Search, Palette, Clock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Get your professional portfolio website delivered within just 1 hour of placing your order.'
  },
  {
    icon: Zap,
    title: 'AI-Powered Personalization',
    description: 'Our AI analyzes your resume to create a personalized website that highlights your unique skills.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-Optimized',
    description: 'Your portfolio looks stunning and functions perfectly on all devices and screen sizes.'
  },
  {
    icon: Search,
    title: 'SEO-Ready',
    description: 'Built with SEO best practices to help employers and clients find you online easily.'
  },
  {
    icon: Palette,
    title: 'Professional Design',
    description: 'Choose from modern, industry-specific templates designed to make you stand out.'
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Professional portfolio websites starting at just ₹300 - a fraction of custom development costs.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose MagicFolio?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with professional design to deliver outstanding results fast
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-tech-purple rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
