
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Basic',
    price: '$49',
    description: 'Perfect for students and entry-level professionals',
    features: [
      'Single-page portfolio',
      'Mobile responsive design',
      'Basic SEO optimization',
      'Contact form integration',
      '1 round of revisions',
      'PDF resume upload'
    ],
    popular: false
  },
  {
    name: 'Standard',
    price: '$99',
    description: 'Ideal for experienced professionals',
    features: [
      'Multi-page portfolio',
      'Custom domain setup',
      'Advanced SEO optimization',
      'Project showcase galleries',
      '3 rounds of revisions',
      'Social media integration',
      'Blog section',
      'Analytics setup'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: '$149',
    description: 'For executives and senior professionals',
    features: [
      'Everything in Standard',
      'Custom animations',
      'Advanced contact forms',
      'Testimonials section',
      'Portfolio analytics',
      'Unlimited revisions',
      'Priority support',
      '6 months maintenance'
    ],
    popular: false
  }
];

const PricingSection = () => {
  const scrollToForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 px-4 gradient-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include fast delivery and professional quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll ${
                tier.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-tech-blue to-tech-purple text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">{tier.price}</div>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToForm}
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-blue/90 hover:to-tech-purple/90' 
                      : 'variant-outline'
                  }`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include 30-day money-back guarantee • No hidden fees • Pay only after approval
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
