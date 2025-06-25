import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, CreditCard } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    plan: '',
    resume: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 10MB",
          variant: "destructive",
        });
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.category || !formData.plan || !formData.resume) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields and upload your resume",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Order submitted successfully!",
      description: "We'll contact you within 30 minutes to confirm your order and collect payment.",
    });

    console.log('Form submitted:', formData);
  };

  const getPlanPrice = () => {
    return formData.plan === 'normal' ? '₹300' : formData.plan === 'advanced' ? '₹500' : '';
  };

  return (
    <section id="order-form" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Start Your Portfolio</h2>
          <p className="text-xl text-muted-foreground">Fill out the form below and upload your resume to get started</p>
        </div>

        <Card className="animate-scale-in shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <span>Order Your Portfolio</span>
            </CardTitle>
            <CardDescription>
              We'll review your information and contact you for payment confirmation
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Portfolio Category *</Label>
                  <Select onValueChange={(value) => handleInputChange('category', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="final-year-student">Final Year Student</SelectItem>
                      <SelectItem value="recent-graduate">Recent Graduate</SelectItem>
                      <SelectItem value="working-professional">Working Professional</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan">Select Plan *</Label>
                <Select onValueChange={(value) => handleInputChange('plan', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal - ₹300</SelectItem>
                    <SelectItem value="advanced">Advanced - ₹500</SelectItem>
                  </SelectContent>
                </Select>
                {formData.plan && (
                  <p className="text-sm text-muted-foreground">
                    Selected: {formData.plan === 'normal' ? 'Normal Plan' : 'Advanced Plan'} - {getPlanPrice()}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="resume">Upload Resume *</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    required
                  />
                  <label htmlFor="resume" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-medium">
                      {formData.resume ? formData.resume.name : 'Click to upload your resume'}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, DOC, or DOCX (max 10MB)
                    </p>
                  </label>
                </div>
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-blue/90 hover:to-tech-purple/90 text-lg py-6"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Submit & Pay {getPlanPrice()}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our terms of service. We'll contact you within 30 minutes for payment confirmation.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;
