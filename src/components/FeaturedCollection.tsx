import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Star } from "lucide-react";
import watchDetail1 from "@/assets/watch-detail-1.jpg";
import watchDetail2 from "@/assets/watch-detail-2.jpg";
import watchDetail3 from "@/assets/watch-detail-3.jpg";

const FeaturedCollection = () => {
  const watches = [
    {
      id: 1,
      name: "Heritage Classic",
      collection: "Signature Collection",
      price: "From $12,500",
      image: watchDetail1,
      description: "A timeless masterpiece featuring 18k gold case and intricate Swiss movement.",
      features: ["18k Gold Case", "Swiss Movement", "Sapphire Crystal"],
    },
    {
      id: 2,
      name: "Urban Elegance",
      collection: "Modern Series",
      price: "From $8,900",
      image: watchDetail2,
      description: "Contemporary design meets traditional craftsmanship in this sleek timepiece.",
      features: ["Ceramic Bezel", "Automatic", "Water Resistant"],
    },
    {
      id: 3,
      name: "Sport Chronograph",
      collection: "Athletic Line",
      price: "From $15,800",
      image: watchDetail3,
      description: "Precision timing for the modern athlete with uncompromising luxury.",
      features: ["Chronograph", "Titanium", "Dive Rated"],
    },
  ];

  return (
    <section id="collection" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">Featured Collection</h2>
          <p className="text-luxury max-w-2xl mx-auto">
            Each timepiece represents the pinnacle of Swiss watchmaking, 
            combining traditional craftsmanship with contemporary innovation.
          </p>
        </div>

        {/* Watch Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {watches.map((watch) => (
            <Card key={watch.id} className="card-luxury group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="hero" className="text-xs px-4 py-2">
                        <Eye className="w-4 h-4 mr-2" />
                        Quick View
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-black px-3 py-1 text-xs font-medium rounded-full">
                    {watch.collection}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-playfair text-xl font-semibold text-text-primary">
                    {watch.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <Star className="w-4 h-4 fill-gold text-gold" />
                  </div>
                </div>

                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {watch.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {watch.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-surface-secondary rounded-full text-text-secondary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-playfair text-lg font-semibold text-text-primary">
                    {watch.price}
                  </span>
                  <Button variant="outline" size="sm">
                    Enquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="luxury">
            View Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;