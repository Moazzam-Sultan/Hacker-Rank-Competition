import React, { useRef, useState, useEffect } from 'react';
import { 
  Star, ArrowRight, Quote, CheckCircle, TrendingUp, Target, Zap, Award, Shield, BookOpen, Printer, Tablet, FileText
} from 'lucide-react';

const CommunitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      name: "Jacob L.",
      location: "United States",
      title: "The resources have been a fantastic addition to our online academy",
      text: "Their high-quality content has enriched our educational offerings, making it easier for our students to learn.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Edwin P.",
      location: "Singapore",
      title: "I didn't expect the quality of the products to be as good as they are",
      text: "Everything is visually polished, content-rich, and ready to sell. Just add your own logo. It's a huge time saver.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily B.",
      location: "United Kingdom",
      title: "I saved thousands of hours of creation with one investment",
      text: "Now I can focus on changing the lives of others with information that not everybody has access to.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James W.",
      location: "Australia",
      title: "It saved me so much time! I'm happy to have found it right now",
      text: "I believe this package to have saved me 6 months of development time and boosted my credibility instantly.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const platforms = [
    { name: "Trustpilot", rating: "4.8/5", icon: "TP", color: "bg-green-600", link: "https://www.trustpilot.com/review/entrepedia.co?sort=recency" },
    { name: "Facebook", rating: "5.0/5", icon: "FB", color: "bg-blue-600", link: "https://www.facebook.com/entrepedia.co" },
    { name: "Google", rating: "4.5/5", icon: "G", color: "bg-white text-black", link: "#" }
  ];

  const processSteps = [
    { title: "Research & Trend Analysis", icon: TrendingUp },
    { title: "Structure & Content Writing", icon: BookOpen },
    { title: "Multistep AI Optimization", icon: Zap },
    { title: "Editing & Source Check", icon: CheckCircle },
    { title: "Layouting & Formatting", icon: FileText },
    { title: "Designing Cover & Mockup", icon: Award }
  ];

  const features = [
    { title: "Tailored 100% to your business goals", description: "Custom solutions designed specifically for your needs" },
    { title: "A-Z strategy, writing, editing, and designs", description: "Complete end-to-end service from concept to completion" },
    { title: "Creation handled in house by real experts", description: "Professional team delivering high-quality results" },
    { title: "Finished world-class asset in just 7 days", description: "Fast turnaround without compromising on quality" }
  ];

  const stats = [
    { value: "300+", label: "Books and Other Assets Produced" },
    { value: "90+", label: "Founders, Creators, and Brands Served" },
    { value: "100%", label: "Client Satisfaction Across All Projects" }
  ];

  const benefits = [
    {
      icon: Printer,
      title: "Ready For Print",
      description: "Your book is formatted and polished to be print-ready, designed to look and feel like a true best-seller.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop"
    },
    {
      icon: Tablet,
      title: "EPUB & Kindle",
      description: "Publish across major digital platforms with professional formatting optimized for every device.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop"
    },
    {
      icon: Shield,
      title: "Full Ownership License",
      description: "You keep 100% rights and profits. Your book is fully yours to distribute and monetize without restrictions.",
      image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&h=400&fit=crop"
    },
    {
      icon: Target,
      title: "Produced by experts",
      description: "Each part of the resource is created by our experienced team for maximum quality and brand alignment.",
      image: "https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?w=600&h=400&fit=crop"
    }
  ];

  // Track active testimonial based on scroll
  useEffect(() => {
    const container = carouselRef.current;
    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setActiveIndex(index);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Testimonials Header */}
        <div className="text-center mb-20">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 mb-8 hover:scale-105 transition-transform duration-300">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Rated 4.8/5 overall by our users
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              "Must have content"
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Join thousands of satisfied users who transformed their digital presence
          </p>

          {/* Platform Ratings */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mt-12">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 hover:scale-105 transition-all duration-300 min-w-[280px]"
              >
                <div className={`w-14 h-14 ${platform.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <span className={`text-lg font-bold ${platform.color.includes('white') ? 'text-black' : 'text-white'}`}>
                    {platform.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">{platform.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">{platform.rating}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < 4 || platform.name === 'Facebook' ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-700 text-gray-700'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-32">
          <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-center">
                <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-gray-700 hover:scale-[1.02] transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <Quote className="w-12 h-12 text-red-600/50 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{testimonial.title}</h3>
                  <p className="text-gray-400 mb-8 text-lg leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full border-2 border-gray-800 group-hover:border-red-600 transition-colors duration-300"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${activeIndex === index ? 'bg-red-600' : 'bg-gray-800 hover:bg-gray-600'}`}
                onClick={() => carouselRef.current.scrollTo({ left: index * carouselRef.current.offsetWidth, behavior: 'smooth' })}
              />
            ))}
          </div>
        </div>

        {/* Add Features, Benefits, Stats and CTA here (keep as your original, unchanged) */}

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .bg-grid {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(255,255,255,.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.02) 1px, transparent 1px);
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CommunitySection;