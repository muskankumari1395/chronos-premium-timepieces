import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const JournalSection = () => {
  const articles = [
    {
      id: 1,
      title: "The Art of Swiss Watchmaking: A Journey Through Time",
      excerpt: "Discover the meticulous craftsmanship and centuries-old traditions that make Swiss timepieces the pinnacle of horological excellence.",
      category: "Heritage",
      author: "Master Horologist",
      date: "December 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Complications: Beyond Basic Timekeeping",
      excerpt: "Explore the intricate world of horological complications and what makes a timepiece truly exceptional.",
      category: "Technical",
      author: "Technical Expert",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611599537845-2f0a29dfca98?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Caring for Your Luxury Timepiece",
      excerpt: "Essential maintenance tips to ensure your precious timepiece continues to perform flawlessly for generations.",
      category: "Care Guide",
      author: "Service Master",
      date: "December 5, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "The Evolution of Chronograph Watches",
      excerpt: "From racing circuits to executive boardrooms, discover how chronographs became symbols of precision and style.",
      category: "History",
      author: "Watch Historian",
      date: "November 28, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Investment Watches: Timepieces That Appreciate",
      excerpt: "Learn which luxury timepieces hold their value and continue to appreciate over time.",
      category: "Investment",
      author: "Market Analyst",
      date: "November 20, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1523170335258-f5c51c2f2dce?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Behind the Scenes: A Day in Our Atelier",
      excerpt: "Step inside our workshop and witness the dedication of master craftsmen creating horological masterpieces.",
      category: "Craftsmanship",
      author: "Atelier Master",
      date: "November 15, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop"
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section id="journal" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-playfair">
            The Chronos <span className="text-gold">Journal</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Insights, stories, and expertise from the world of luxury horology.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl overflow-hidden shadow-luxury group hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-2">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-gold text-black px-4 py-2 text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gold/10 text-gold px-3 py-1 text-sm font-medium rounded-full">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center gap-2 text-text-secondary text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-text-primary mb-4 group-hover:text-gold transition-colors duration-300">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gold" />
                      </div>
                      <div className="text-sm">
                        <p className="text-text-primary font-medium">{featuredArticle.author}</p>
                        <div className="flex items-center gap-2 text-text-secondary">
                          <Clock className="w-3 h-3" />
                          <span>{featuredArticle.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-2 text-gold hover:text-gold/80 font-medium transition-colors duration-300 group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-luxury group hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-text-secondary text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                  <span className="w-1 h-1 bg-text-secondary rounded-full"></span>
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-text-primary mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-text-secondary text-sm mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-text-primary font-medium text-sm">{article.author}</span>
                  </div>
                  
                  <button className="text-gold hover:text-gold/80 transition-colors duration-300 group/btn">
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-white border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold/30">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
