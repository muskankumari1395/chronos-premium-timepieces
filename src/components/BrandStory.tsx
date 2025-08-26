import { Button } from "@/components/ui/button";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";

const BrandStory = () => {
  return (
    <section id="heritage" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="heading-section mb-6">
              A Legacy of 
              <span className="text-gold block">Excellence</span>
            </h2>
            
            <div className="space-y-6 text-luxury">
              <p>
                For over a century, our master craftsmen have dedicated their lives to 
                perfecting the art of timekeeping. Each CHRONOS timepiece is a testament 
                to Swiss precision and unwavering commitment to excellence.
              </p>
              
              <p>
                From our atelier in the heart of the Swiss Alps, we continue to push 
                the boundaries of horological innovation while honoring the traditional 
                techniques passed down through generations of master watchmakers.
              </p>
              
              <p>
                Every component is meticulously crafted by hand, ensuring that each 
                timepiece is not just an instrument of time, but a work of art that 
                will be treasured for generations.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <span className="font-playfair font-bold text-black text-xl">125</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Years of Heritage</p>
                  <p className="text-text-secondary text-sm">Established 1898</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <span className="font-playfair font-bold text-black text-xl">50+</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Master Craftsmen</p>
                  <p className="text-text-secondary text-sm">Skilled artisans</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <span className="font-playfair font-bold text-black text-xl">∞</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Lifetime Warranty</p>
                  <p className="text-text-secondary text-sm">Comprehensive service</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button className="btn-luxury">
                Discover Our Heritage
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={craftsmanshipImage}
                alt="Master craftsman at work"
                className="w-full h-[600px] object-cover rounded-lg shadow-luxury"
              />
              
              {/* Floating Quote */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-card max-w-xs">
                <blockquote className="font-playfair italic text-text-primary mb-3">
                  "Perfection is not attainable, but if we chase perfection we can catch excellence."
                </blockquote>
                <cite className="text-text-secondary text-sm">
                  — Master Watchmaker, CHRONOS
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;