import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sai Teja Reddy',
    role: 'Final Year B.Tech Student',
    content: 'MagicFolio transformed my career! Within a week of getting my new portfolio, I landed three interviews. The design is absolutely stunning and perfectly showcases my work.',
    rating: 5
  },
  {
    name: 'Sravani Ponnam',
    role: 'Recent Graduate',
    content: 'I was amazed by how quickly they delivered my portfolio. The AI really understood my background and created something that feels uniquely me. Highly recommend!',
    rating: 5
  },
  {
    name: 'Venkatesh Goud',
    role: 'Final Year CSE Student',
    content: 'As someone with no tech background, I needed something professional and polished. MagicFolio exceeded my expectations and helped me stand out in competitive job applications.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who've accelerated their careers with MagicFolio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
