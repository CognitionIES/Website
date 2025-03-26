// components/FaqButton.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import FaqGif from '@/constants/images/faq-gif-unscreen.gif';

const FaqButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/faq');
  };

  return (
    <div className="fixed  right-2 z-[1100] hidden md:block">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          w-16
          h-16 
          bg-transparent 
          rounded-full 
          flex 
          
          items-center 
          justify-center 
          
          transition-all 
          duration-300 
          hover:scale-105
        "
      >
        <Image
          src={FaqGif}
          alt="FAQ"
          width={64}  // Matches w-16 (16 * 4 = 64px)
          height={64} // Matches h-16 (16 * 4 = 64px)
          className="object-contain"
        />
      </button>
      
      <div
        className={`
          absolute 
          top-10 
          right-0 
          bg-gray-800 
          text-white 
          px-3 
          py-1 
          rounded-md 
          text-sm 
          transition-opacity 
          duration-200
          ${isHovered ? 'opacity-0' : 'opacity-0'}
        `}
      >
        FAQ
      </div>
    </div>
  );
};

export default FaqButton;