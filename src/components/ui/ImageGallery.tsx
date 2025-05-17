'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { FaExpand } from 'react-icons/fa';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };
  
  // Variants for animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };
  
  // Animation transition
  const transition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  };
  
  // Motion direction
  const [direction, setDirection] = useState(0);
  
  // Handle next with direction
  const handleNextWithDirection = () => {
    setDirection(1);
    nextImage();
  };
  
  // Handle prev with direction
  const handlePrevWithDirection = () => {
    setDirection(-1);
    prevImage();
  };
  
  // Drag handlers for touch gestures
  const dragConstraints = { left: 0, right: 0 };
  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) > 100 || Math.abs(velocity.x) > 300;
    
    if (swipe) {
      if (offset.x > 0) {
        handlePrevWithDirection();
      } else {
        handleNextWithDirection();
      }
    }
  };
  
  return (
    <div className="relative">
      {/* Main image display */}
      <div className="relative w-full overflow-hidden rounded-lg bg-gray-900 aspect-[4/3]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0"
            drag="x"
            dragConstraints={dragConstraints}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} - image ${currentIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation arrows */}
        <motion.button
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
          onClick={handlePrevWithDirection}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
        
        <motion.button
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
          onClick={handleNextWithDirection}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
        
        {/* Fullscreen button */}
        <motion.button
          className="absolute top-2 right-2 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
          onClick={toggleFullscreen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaExpand className="h-4 w-4" />
        </motion.button>
        
        {/* Image counter */}
        <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="mt-2 flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative h-16 w-24 flex-shrink-0 cursor-pointer overflow-hidden rounded-md border-2 ${
              index === currentIndex ? 'border-[#f3e17b]' : 'border-transparent'
            }`}
            onClick={() => handleThumbnailClick(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={image}
              alt={`${title} - thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Fullscreen modal */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
              onClick={toggleFullscreen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6" />
            </motion.button>
            
            <div className="relative h-[80vh] w-[80vw]">
              <Image
                src={images[currentIndex]}
                alt={`${title} - fullscreen image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="80vw"
              />
              
              <motion.button
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-4 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                onClick={handlePrevWithDirection}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-8 w-8" />
              </motion.button>
              
              <motion.button
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-4 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                onClick={handleNextWithDirection}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-8 w-8" />
              </motion.button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1.5 text-sm text-white backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 