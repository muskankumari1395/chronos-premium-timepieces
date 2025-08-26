import { Button } from "@/components/ui/button";
import watchCollection from "@/assets/watch-collection.jpg";

const CTABanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${watchCollection})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
          Experience Luxury 
          <span className="text-gold block">In Person</span>
        </h2>
        
        <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
          Book a private consultation at our exclusive showroom. 
          Discover our limited editions and bespoke services tailored to your refined taste.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="gold" className="text-lg px-10 py-4">
            Book Private Viewing
          </Button>
          <Button variant="hero" className="text-lg px-10 py-4">
            Explore Limited Editions
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-playfair font-bold text-black text-xl">VIP</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold text-white mb-2">
              Exclusive Access
            </h3>
            <p className="text-white/80">
              Private showings of our most coveted timepieces
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-playfair font-bold text-black text-xl">1:1</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold text-white mb-2">
              Personal Consultation
            </h3>
            <p className="text-white/80">
              Expert guidance from our master horologists
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-playfair font-bold text-black text-xl">∞</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold text-white mb-2">
              Bespoke Services
            </h3>
            <p className="text-white/80">
              Customization and personalization options
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;