import React from 'react';

const CTAButton = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <a 
          href="./custom-digital-product" 
          className="group bg-gradient-to-r from-[#DA2B35] to-[#8b0000] rounded-full px-8 py-4 flex items-center justify-center gap-3 max-w-md mx-auto hover:scale-[1.02] transition-transform"
        >
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </div>
          <span className="text-lg font-semibold">Get Custom Digital Product</span>
        </a>
      </div>
    </div>
  );
};

export default CTAButton;