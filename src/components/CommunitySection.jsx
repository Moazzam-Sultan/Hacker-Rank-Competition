import React from "react";

const CommunitySection = () => {
  return (
    <section 
      style={{
        backgroundColor: '#171717',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        padding: '107px 0 201px',
        boxSizing: 'border-box',
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 48px'
        }}
      >
        <div>
          <div>
            
            {/* Header Section - Two Column Layout */}
            <div 
              style={{ 
                marginBottom: '80px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                alignItems: 'center'
              }}
            >
              {/* Left Column - Title */}
              <div style={{ textAlign: 'left' }}>
                <div style={{ transform: 'none' }}>
                  <h1 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '68px',
                      fontWeight: '800',
                      letterSpacing: '-3.5px',
                      lineHeight: '105%',
                      textAlign: 'left',
                      color: '#ffffff',
                      margin: '0'
                    }}
                  >
                    Get started with <br />
                    <span 
                      style={{
                        color: '#da2b35',
                        fontWeight: '800'
                      }}
                    >
                      free resources
                    </span>
                  </h1>
                </div>
              </div>
              
              {/* Right Column - Description */}
              <div style={{ textAlign: 'left' }}>
                <div style={{ transform: 'none' }}>
                  <p 
                    style={{
                      color: '#8b8b8b',
                      textAlign: 'left',
                      fontSize: '24px',
                      fontWeight: '500',
                      lineHeight: '1.5',
                      margin: '0',
                      letterSpacing: '-0.3px'
                    }}
                  >
                    All designed to simplify your online business journey, no matter your experience level.
                  </p>
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '32px'
              }}
            >
              
              {/* Card 1 */}
              <div 
                style={{
                  backgroundColor: '#232323',
                  borderRadius: '24px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ marginBottom: '32px', width: '100%' }}>
                  <div>
                    <div 
                      style={{
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        height: '280px',
                        backgroundColor: '#232323',
                        marginBottom: '32px'
                      }}
                    >
                      <img
                        src="https://framerusercontent.com/images/AbpIeUOwimkXr4E9pi7LuGZYbs.webp?width=3123&height=3423"
                        alt="Entrepedia Online Business Master Plan Preview"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          objectPosition: 'center center',
                          display: 'block',
                          backgroundColor: 'transparent'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Title Below Image */}
                  <div>
                    <div style={{ transform: 'none', marginBottom: '16px' }}>
                      <h3 
                        style={{
                          color: '#ffffff',
                          fontSize: '28px',
                          fontWeight: '700',
                          textAlign: 'left',
                          margin: '0 0 12px 0',
                          letterSpacing: '-0.5px',
                          lineHeight: '1.3'
                        }}
                      >
                        Digital Product Funnels Blueprint
                      </h3>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '32px', width: '100%' }}>
                  <div>
                    <div style={{ transform: 'none' }}>
                      <p 
                        style={{
                          color: '#8b8b8b',
                          fontSize: '18px',
                          fontWeight: '400',
                          lineHeight: '1.6',
                          textAlign: 'left',
                          margin: '0'
                        }}
                      >
                        10 proven funnels that turn your leads into customers using digital products.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ width: '100%' }}>
                    <a 
                      href="./resources/free/digital-product-funnels-ebook"
                      tabIndex="0"
                      style={{
                        border: 'none',
                        backgroundColor: '#f2f2f2',
                        borderRadius: '500px',
                        opacity: '1',
                        display: 'inline-block',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        maxWidth: '280px',
                        fontWeight: '600',
                        fontSize: '18px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#e6e6e6';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f2f2f2';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <div style={{ transform: 'none', opacity: '1' }}>
                        <p 
                          style={{
                            color: '#000',
                            fontSize: '18px',
                            fontWeight: '600',
                            textAlign: 'center',
                            margin: '0',
                            padding: '16px 40px',
                            lineHeight: '1'
                          }}
                        >
                          Copy proven funnels
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                style={{
                  backgroundColor: '#232323',
                  borderRadius: '24px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ marginBottom: '32px', width: '100%' }}>
                  <div>
                    <div 
                      style={{
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        height: '280px',
                        backgroundColor: '#232323',
                        marginBottom: '32px'
                      }}
                    >
                      <img
                        src="https://framerusercontent.com/images/rqBUkaZTux2NgF8ZnjMv6SCAhfs.png?width=1695&height=1695"
                        alt="Online Business Master Plan Box"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          objectPosition: 'center center',
                          display: 'block',
                          backgroundColor: 'transparent'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Title Below Image */}
                  <div>
                    <div style={{ transform: 'none', marginBottom: '16px' }}>
                      <h4 
                        style={{
                          color: '#ffffff',
                          fontSize: '28px',
                          fontWeight: '700',
                          textAlign: 'left',
                          margin: '0 0 12px 0',
                          letterSpacing: '-0.5px',
                          lineHeight: '1.3'
                        }}
                      >
                        Online Business Master Plan
                      </h4>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '32px', width: '100%' }}>
                  <div>
                    <div style={{ transform: 'none' }}>
                      <p 
                        style={{
                          color: '#8b8b8b',
                          fontSize: '18px',
                          fontWeight: '400',
                          lineHeight: '1.6',
                          textAlign: 'left',
                          margin: '0'
                        }}
                      >
                        Access a guide full of actionable steps and tips for growing your online business.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ width: '100%' }}>
                    <a 
                      href="./resources/free/masterplan"
                      tabIndex="0"
                      style={{
                        border: 'none',
                        backgroundColor: '#f2f2f2',
                        borderRadius: '500px',
                        opacity: '1',
                        display: 'inline-block',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        maxWidth: '280px',
                        fontWeight: '600',
                        fontSize: '18px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#e6e6e6';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f2f2f2';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <div style={{ transform: 'none', opacity: '1' }}>
                        <p 
                          style={{
                            color: '#000',
                            fontSize: '18px',
                            fontWeight: '600',
                            textAlign: 'center',
                            margin: '0',
                            padding: '16px 40px',
                            lineHeight: '1'
                          }}
                        >
                          Kickstart your business
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                style={{
                  backgroundColor: '#232323',
                  borderRadius: '24px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ marginBottom: '32px', width: '100%' }}>
                  <div>
                    <div 
                      style={{
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        height: '280px',
                        backgroundColor: '#232323',
                        marginBottom: '32px'
                      }}
                    >
                      <img
                        src="https://framerusercontent.com/images/I8srIL5qZt28XJ624ZHdv2bs.webp?width=640&height=700"
                        alt="Entrepedia Online Business Master Plan Preview"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          objectPosition: 'center center',
                          display: 'block',
                          backgroundColor: 'transparent'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Title Below Image */}
                  <div>
                    <div style={{ transform: 'none', marginBottom: '16px' }}>
                      <h3 
                        style={{
                          color: '#ffffff',
                          fontSize: '28px',
                          fontWeight: '700',
                          textAlign: 'left',
                          margin: '0 0 12px 0',
                          letterSpacing: '-0.5px',
                          lineHeight: '1.3'
                        }}
                      >
                        Digital Product Pricing Strategies
                      </h3>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '32px', width: '100%' }}>
                  <div>
                    <div style={{ transform: 'none' }}>
                      <p 
                        style={{
                          color: '#8b8b8b',
                          fontSize: '18px',
                          fontWeight: '400',
                          lineHeight: '1.6',
                          textAlign: 'left',
                          margin: '0'
                        }}
                      >
                        This free guide reveals the exact pricing frameworks used by top online sellers.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ width: '100%' }}>
                    <a 
                      href="./resources/free/success/pricing-digital-products"
                      tabIndex="0"
                      style={{
                        border: 'none',
                        backgroundColor: '#f2f2f2',
                        borderRadius: '500px',
                        opacity: '1',
                        display: 'inline-block',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        maxWidth: '280px',
                        fontWeight: '600',
                        fontSize: '18px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#e6e6e6';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f2f2f2';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <div style={{ transform: 'none', opacity: '1' }}>
                        <p 
                          style={{
                            color: '#000',
                            fontSize: '18px',
                            fontWeight: '600',
                            textAlign: 'center',
                            margin: '0',
                            padding: '16px 40px',
                            lineHeight: '1'
                          }}
                        >
                          Get your pricing right
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          section > div > div > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          section > div > div > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
          
          h1 {
            font-size: 52px !important;
          }
          
          section > div > div > div > div:first-child p {
            font-size: 20px !important;
          }
        }
        
        @media (max-width: 768px) {
          section > div > div > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          section {
            padding: 80px 0 120px !important;
          }
          
          section > div {
            padding: 0 24px !important;
          }
          
          h1 {
            font-size: 42px !important;
            letter-spacing: -2px !important;
          }
          
          section > div > div > div > div:first-child p {
            font-size: 18px !important;
          }
          
          section > div > div > div > div:last-child > div {
            padding: 32px !important;
          }
          
          section > div > div > div > div:last-child > div > div:first-child > div > div {
            height: 240px !important;
          }
          
          section > div > div > div > div:last-child h3,
          section > div > div > div > div:last-child h4 {
            font-size: 24px !important;
          }
          
          section > div > div > div > div:last-child p {
            font-size: 16px !important;
          }
        }
        
        /* Ensure images have transparent backgrounds */
        img {
          mix-blend-mode: normal !important;
          background: transparent !important;
        }
        
        /* Card hover effects */
        section > div > div > div > div:last-child > div {
          will-change: transform, box-shadow;
        }
        
        /* Make card text left-aligned */
        section > div > div > div > div:last-child h3,
        section > div > div > div > div:last-child h4,
        section > div > div > div > div:last-child > div > div:nth-child(2) p {
          text-align: left !important;
        }
      `}</style>
    </section>
  );
};

export default CommunitySection;