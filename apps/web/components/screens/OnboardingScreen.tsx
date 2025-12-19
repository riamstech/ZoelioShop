import React, { useState } from 'react';
import { ShoppingBag, Truck, Award } from 'lucide-react';
import { Button } from '../ui/button';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: ShoppingBag,
    title: 'Wide Selection',
    description: 'Browse thousands of dental instruments, consumables, and accessories from trusted brands.',
  },
  {
    icon: Award,
    title: 'Bulk Discounts',
    description: 'Save more with exclusive bulk pricing for clinics and dental practices.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery to keep your clinic stocked and ready.',
  },
];

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col transition-colors">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-full p-8 mb-8 transition-colors">
          <Icon className="w-24 h-24 text-blue-600 dark:text-blue-400" />
        </div>
        
        <h2 className="text-2xl text-gray-900 dark:text-white mb-4 text-center">
          {slide.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-sm mb-8">
          {slide.description}
        </p>
        
        <div className="flex gap-2 mb-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-blue-600 dark:bg-blue-500'
                  : 'w-2 bg-gray-300 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <Button
          onClick={handleNext}
          className="w-full h-12 text-center justify-center"
          size="lg"
        >
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
        </Button>
        
        {currentSlide < slides.length - 1 && (
          <Button
            onClick={handleSkip}
            variant="ghost"
            className="w-full h-12 text-center justify-center"
            size="lg"
          >
            Skip
          </Button>
        )}
      </div>
    </div>
  );
};
