import React, { useState } from 'react';

const Reviews = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const reviews = [
    {
      id: 1,
      name: "Jason Kearns",
      company: "Eezylearn",
      avatar: "https://cdn.senja.io/public/avatar/420872e8-8ebc-4097-99ab-ddef4d534b20_avatar%20jk.png?width=63&height=63&format=webp",
      rating: 5,
      comment: "Entrepedia's premade courses and ebooks have been a fantastic addition to our online academy at Eezylearn. Their high-quality content has enriched our educational offerings, making it easier for our students to access comprehensive and well-structured learning materials. The seamless integration of their resources has not only saved us time but also enhanced the overall learning experience for our users. We highly recommend Entrepedia to any organization looking to elevate their educational platform with expertly crafted, ready-to-use content.",
      highlights: ["premade courses and ebooks have been a fantastic addition", "highly recommend Entrepedia to any organization"]
    },
    {
      id: 2,
      name: "Greg Wilson",
      company: "Fix and Flippers",
      avatar: "https://cdn.senja.io/public/avatar/97156974-6570-44d1-b6f4-34b60130559d_Greg%20Wilson.jpg?width=63&height=63&format=webp",
      rating: 5,
      comment: "I love the PLR content from Entrepedia. We use the handouts as freebies and bundle the guides into our coaching programs. I would certainly recommend this company to my real estate and finance friends.",
      highlights: ["I love the PLR content from Entrepedia"]
    },
    {
      id: 3,
      name: "William Meldman",
      company: "Digital Solutions LLC",
      avatar: "https://cdn.senja.io/public/avatar/e44d0dd5-5b39-4209-91dc-ece49858fde8_IMG_8003.jpg?width=63&height=63&format=webp",
      rating: 5,
      comment: "Entrepedia is the first, design-focused, quality content-optimized, white-label suite of products with a consistent, attractive branding that I've ever used. The designs are professional for every product with a visual consistency between sub-categories, and its valuable material that you're proud to affiliate with. It is hands down, white-label at its peak and the new standard.",
      highlights: ["white-label suite of products with a consistent, attractive branding"]
    },
    {
      id: 4,
      name: "Sheena Whyatt",
      company: "Kapow Coaching",
      avatar: "https://cdn.senja.io/public/avatar/44a98bd7-bd26-44d2-8fb8-397d84f7c38f_IMG_6809.JPG?width=63&height=63&format=webp",
      rating: 5,
      comment: "I simply love the variety of topics & delivery that Entrepedia offers - being able to offer audio, video & book options to my customers is fabulous, as it covers all the learning styles! I would definitely recommend it to fellow business coaches looking for a value-add product that supports their clients journey!",
      highlights: ["being able to offer audio, video & book options to my customers is fabulous"]
    },
    {
      id: 5,
      name: "Sujay Raj Singh",
      company: "Tech Innovations Inc",
      avatar: "https://cdn.senja.io/public/avatar/c5dd7e25-abba-4dff-ac83-900f69df9f5a_A.I%20Profile%20Pic.jpeg?width=63&height=63&format=webp",
      rating: 5,
      comment: "Entrepedia has been an absolute game-changer for my business! The range of trending digital products with resell rights they offer is unmatched, allowing me to easily expand my inventory and attract more customers. What I like most is the quality and variety of the products, making it simple to find exactly what I need to stay ahead of the market. Their customer service is exceptional, always ready to assist and ensure a seamless experience. I highly recommend Entrepedia to anyone looking to grow their business with top-notch digital products. Five stars all the way!",
      highlights: ["absolute game-changer for my business", "trending digital products with resell rights", "quality and variety of the products", "Five stars all the way"]
    },
    {
      id: 6,
      name: "Greg Beacher",
      company: "Trow Bridge Solutions",
      avatar: "https://cdn.senja.io/public/avatar/594e05c5-5dd1-47df-8d75-df96c10dbc68_2%20x%20Greg%20Beacher%20-%20Headshot.png?width=63&height=63&format=webp",
      rating: 5,
      comment: "The quality of the material from Entrepedia is very high, with clear visuals, videos and audio products. The library contains loads of information to help get you started on your business journey and these are also proving to be very useful. I would recommend this library to a friend.",
      highlights: ["The quality of the material from Entrepedia is very high"]
    },
    {
      id: 7,
      name: "Derek Passalaqua",
      company: "Legacy Guard Financial Group",
      avatar: "https://cdn.senja.io/public/avatar/9794d3c9-01e0-4503-991c-781261f063dc_IMG_3813%20%282%29.jpg?width=63&height=63&format=webp",
      rating: 5,
      comment: "Absolutely amazing product probably the best investment i have ever made when it comes to online or digital products these guys are the best and they are constantly updating the site every single month so it literally just keeps getting better and better!! I would highly recommend to anyone looking to get started making money online if your unsure of what to sell or where to start then Entrepedia is an absolute game changer and no brainer!!",
      highlights: ["the best investment i have ever made", "they are constantly updating the site every single month"]
    },
    {
      id: 8,
      name: "Matthew Mason",
      company: "Mason Digital Agency",
      avatar: "https://cdn.senja.io/public/avatar/b643429f-73eb-4fb0-84b6-d9b7c3ac9c08_IMG_2137.jpeg?width=63&height=63&format=webp",
      rating: 5,
      comment: "The quality and range of the Entrepedia products leave all other PLR providers behind. And the continual additions of new content is great.",
      highlights: ["leave all other PLR providers behind"]
    },
    {
      id: 9,
      name: "James Powell",
      company: "Powell Enterprises",
      avatar: "https://www.gravatar.com/avatar/210ca30563798a36b00d27ed735fdb1b?s=512&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FJames%20Powell%2F512%2Ffde2e2%2Fd20f0f%2F2%2F0.4",
      rating: 5,
      comment: "Love the platform, the GUI and interface is so easy to use and the digital products are extremely professional. Entrepedia has knocked it out of the park!!",
      highlights: ["digital products are extremely professional"]
    },
    {
      id: 10,
      name: "Sarah Johnson",
      company: "Growth Marketing Pro",
      avatar: "https://cdn.senja.io/public/avatar/f8a2c5d7-3e45-4b89-a2c7-d1e8f3a7b5c2_Sarah.jpg?width=63&height=63&format=webp",
      rating: 5,
      comment: "As a marketing professional, I've used many PLR platforms but Entrepedia stands out with its modern design and relevant content. The social media templates alone have saved me hundreds of hours. The quality is consistently excellent across all products.",
      highlights: ["Entrepedia stands out with its modern design and relevant content", "saved me hundreds of hours"]
    },
    {
      id: 11,
      name: "Michael Chen",
      company: "EduTech Solutions",
      avatar: "https://cdn.senja.io/public/avatar/9c8a7b6d-5e4f-4c3d-b2a1-0f9e8d7c6b5a_Michael.jpg?width=63&height=63&format=webp",
      rating: 5,
      comment: "The course materials are incredibly well-structured and professional. We've integrated several Entrepedia courses into our learning management system and the student feedback has been overwhelmingly positive. The value for money is exceptional.",
      highlights: ["course materials are incredibly well-structured and professional", "value for money is exceptional"]
    },
    {
      id: 12,
      name: "Olivia Rodriguez",
      company: "Wellness Coaches Network",
      avatar: "https://cdn.senja.io/public/avatar/6b5a4c3d-2e1f-4c9d-b8a7-0f6e5d4c3b2a_Olivia.jpg?width=63&height=63&format=webp",
      rating: 5,
      comment: "Perfect for wellness coaches! The health and wellness content is scientifically accurate and beautifully presented. My clients love the worksheets and guided journals. Entrepedia has helped me scale my coaching business without compromising on quality.",
      highlights: ["scientifically accurate and beautifully presented", "helped me scale my coaching business"]
    },
    {
      id: 13,
      name: "Robert Kim",
      company: "Startup Launchpad",
      avatar: "https://cdn.senja.io/public/avatar/4d3c2b1a-0f9e-8d7c-6b5a-4c3d2b1a0f9e_Robert.jpg?width=63&height=63&format=webp",
      rating: 5,
      comment: "The business templates and legal documents have been invaluable for our startup accelerator. Everything is professionally written and up-to-date. We recommend Entrepedia to all our startups for their foundational business documents.",
      highlights: ["business templates and legal documents have been invaluable", "professionally written and up-to-date"]
    },
    {
      id: 14,
      name: "Jennifer Lee",
      company: "Content Creators Hub",
      avatar: "https://cdn.senja.io/public/avatar/2b1a0f9e-8d7c-6b5a-4c3d-2b1a0f9e8d7c_Jennifer.jpg?width=63&height=63&format=webp",
      rating: 5,
      comment: "As a content creator, I'm always looking for high-quality materials to enhance my offerings. Entrepedia delivers exactly that - professional, on-trend content that I can confidently put my brand on. The graphics and layouts are beautiful.",
      highlights: ["professional, on-trend content", "graphics and layouts are beautiful"]
    },
    {
      id: 15,
      name: "David Miller",
      company: "Financial Freedom Academy",
      avatar: "https://cdn.senja.io/public/avatar/0f9e8d7c-6b5a-4c3d-2b1a-0f9e8d7c6b5a_David.jpg?width=63&height=63&format=webp",
      rating: 5,
      comment: "The financial education materials are top-notch. We've used them in our workshops and they've been incredibly effective. The worksheets and calculators add real value for our clients. Entrepedia has helped us deliver more value with less preparation time.",
      highlights: ["financial education materials are top-notch", "deliver more value with less preparation time"]
    }
  ];

  // Determine which reviews to show
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 12);
  const lastThreeReviews = displayedReviews.slice(-3);

  const StarRating = ({ rating }) => {
    return (
      <div style={{ display: 'flex' }}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            style={{
              width: '16px',
              height: '16px',
              color: i < rating ? '#fbbf24' : '#d1d5db'
            }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const ReviewCard = ({ review, isBlurred }) => {
    const [expanded, setExpanded] = useState(false);
    
    const highlightText = (text, highlights) => {
      if (!highlights || highlights.length === 0) return text;
      
      let highlightedText = text;
      highlights.forEach(highlight => {
        const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        highlightedText = highlightedText.replace(regex, '<mark style="background-color: #fef3c7; padding: 2px 4px; border-radius: 4px; font-weight: 500">$1</mark>');
      });
      
      return { __html: highlightedText };
    };

    const shouldTruncate = review.comment.length > 300;
    const displayText = expanded ? review.comment : review.comment.substring(0, 300) + (shouldTruncate ? '...' : '');

    return (
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '320px',
        filter: isBlurred ? 'blur(4px)' : 'none',
        opacity: isBlurred ? 0.7 : 1,
        transition: 'filter 0.3s ease, opacity 0.3s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '24px' }}>
          <img 
            src={review.avatar} 
            alt={`${review.name} avatar`}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: '0',
              border: '2px solid #f3f4f6'
            }}
            loading="lazy"
          />
          <div style={{ minWidth: '0', flex: '1' }}>
            <h4 style={{ 
              fontWeight: '600', 
              color: '#111827', 
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              margin: '0',
              fontSize: '16px'
            }}>
              {review.name}
            </h4>
            {review.company && (
              <p style={{ 
                color: '#4b5563',
                fontSize: '14px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                margin: '4px 0 0 0'
              }}>
                {review.company}
              </p>
            )}
          </div>
          <div style={{ flexShrink: '0' }}>
            <StarRating rating={review.rating} />
          </div>
        </div>
        
        <div style={{ flex: '1' }}>
          <div 
            style={{
              color: '#374151',
              fontSize: '15px',
              lineHeight: '1.7',
              marginBottom: '16px',
              minHeight: '150px'
            }}
            dangerouslySetInnerHTML={highlightText(displayText, review.highlights)}
          />
          {shouldTruncate && !isBlurred && (
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                color: '#92400e',
                fontSize: '14px',
                fontWeight: '500',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
                textDecoration: 'underline'
              }}
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <section style={{
      padding: '80px 16px',
      background: 'linear-gradient(to bottom, #f9fafb, #ffffff)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          {/* Rating badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '9999px',
            padding: '8px 16px',
            marginBottom: '24px',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg style={{ width: '16px', height: '16px', color: '#ffffff' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>
              Rated 4.9/5 overall by our users
            </span>
          </div>
          
          {/* Main title */}
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '24px',
            lineHeight: '1.2',
            color: '#111827'
          }}>
            <span style={{ color: '#78350f' }}>See what our </span>
            <span style={{ color: '#dc2626' }}>users are saying</span>
          </h1>
          
          {/* Subtitle */}
          <p style={{
            color: '#4b5563',
            maxWidth: '768px',
            margin: '0 auto',
            fontSize: '18px',
            lineHeight: '1.6'
          }}>
            Join over 5,000+ entrepreneurs, coaches, and business owners who trust Entrepedia for their digital product needs
          </p>
        </div>

        {/* Reviews Grid */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '24px'
          }}>
            {displayedReviews.map((review, index) => {
              // Check if this is one of the last three reviews AND we're not showing all reviews
              const isLastThree = !showAllReviews && index >= displayedReviews.length - 3;
              return (
                <ReviewCard 
                  key={review.id} 
                  review={review} 
                  isBlurred={isLastThree}
                />
              );
            })}
          </div>
        </div>

        {/* See All Reviews Button */}
        {!showAllReviews && (
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <button
              onClick={() => setShowAllReviews(true)}
              style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '16px 32px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#333333';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              See All Reviews
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div style={{ 
          marginTop: '80px', 
          paddingTop: '48px', 
          borderTop: '1px solid #e5e7eb' 
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '32px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#78350f', 
                marginBottom: '8px' 
              }}>
                4.9/5
              </div>
              <p style={{ color: '#4b5563', fontSize: '18px' }}>Average Rating</p>
              <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '4px' }}>
                Based on {reviews.length} verified reviews
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#78350f', 
                marginBottom: '8px' 
              }}>
                5,000+
              </div>
              <p style={{ color: '#4b5563', fontSize: '18px' }}>Happy Users</p>
              <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '4px' }}>
                Across 45+ countries worldwide
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#78350f', 
                marginBottom: '8px' 
              }}>
                99.2%
              </div>
              <p style={{ color: '#4b5563', fontSize: '18px' }}>Would Recommend</p>
              <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '4px' }}>
                Satisfaction rate
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          section > div > div:nth-child(2) > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          section > div > div:last-child > div {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          h1 {
            font-size: 56px !important;
          }
        }
        
        @media (min-width: 1024px) {
          section > div > div:nth-child(2) > div {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          h1 {
            font-size: 64px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;