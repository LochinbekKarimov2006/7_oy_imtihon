import React from 'react';

const Carousel = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center bg-gray-100">
      {/* Item 1 */}
      <div className="absolute opacity-0 animate-carousel">
        <h2 className="text-4xl font-bold">Home</h2>
      </div>
      {/* Item 2 */}
      <div className="absolute opacity-0 animate-carousel delay-[2000ms]">
        <h2 className="text-4xl font-bold">About</h2>
      </div>
      {/* Item 3 */}
      <div className="absolute opacity-0 animate-carousel delay-[4000ms]">
        <h2 className="text-4xl font-bold">Contact</h2>
      </div>
    </div>
  );
};

export default Carousel;
