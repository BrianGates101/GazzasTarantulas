import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText = 'Shop Now',
  ctaLink = '/shop'
}) => {
  return (
    <div className="relative h-screen max-h-[800px] min-h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl animate-fade-in">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-delay">
            {subtitle}
          </p>
        )}
        
        {ctaText && (
          <Link to={ctaLink}>
            <Button variant="secondary" size="lg" className="animate-fade-in-delay-longer">
              {ctaText}
            </Button>
          </Link>
        )}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;