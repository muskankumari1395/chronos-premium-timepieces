import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The pinnacle of Swiss watchmaking. My CHRONOS has been a faithful companion for over a decade.",
      author: "James Morrison",
      title: "Connoisseur & Collector",
      rating: 5,
    },
    {
      id: 2,
      quote: "Exquisite craftsmanship and timeless design. This is more than a watch - it's a legacy piece.",
      author: "Sofia Chen",
      title: "Luxury Lifestyle Curator",
      rating: 5,
    },
    {
      id: 3,
      quote: "The attention to detail is extraordinary. Every element speaks to the heritage and quality.",
      author: "Marcus Williams",
      title: "Watch Enthusiast",
      rating: 5,
    },
  ];

  const pressFeatures = [
    {
      publication: "Luxury Watch Magazine",
      headline: "CHRONOS Redefines Modern Elegance",
      year: "2024",
    },
    {
      publication: "Swiss Time Review",
      headline: "Heritage Meets Innovation",
      year: "2024",
    },
    {
      publication: "Connoisseur's Choice",
      headline: "Timepiece of the Year Award",
      year: "2023",
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">What Our Clients Say</h2>
            <p className="text-luxury max-w-2xl mx-auto">
              Trusted by discerning collectors and connoisseurs worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="card-luxury">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-gold mb-4" />
                  
                  <blockquote className="text-text-secondary mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-text-muted text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Press Mentions */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-playfair text-2xl font-semibold text-text-primary mb-4">
              Featured In
            </h3>
            <p className="text-text-secondary">
              Recognized by leading luxury publications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pressFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-card transition-shadow duration-300">
                <p className="font-playfair text-xl font-semibold text-text-primary mb-2">
                  {feature.publication}
                </p>
                <p className="text-text-secondary mb-2 leading-relaxed">
                  "{feature.headline}"
                </p>
                <p className="text-gold font-medium">
                  {feature.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;