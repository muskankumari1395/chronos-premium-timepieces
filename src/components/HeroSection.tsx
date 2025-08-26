import { Button } from "@/components/ui/button";
import heroWatch from "@/assets/hero-watch.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWatch})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="heading-hero fade-in mb-6">
          Timeless Elegance.
          <br />
          <span className="text-gold">Crafted for Connoisseurs.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed fade-in-delay max-w-2xl mx-auto">
          Discover the pinnacle of Swiss watchmaking where heritage meets innovation in every meticulously crafted timepiece.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-delay">
          <Button variant="hero">
            Explore Collection
          </Button>
          <Button variant="gold">
            Book an Appointment
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;