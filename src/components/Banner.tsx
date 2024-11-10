import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-blue-100 text-center py-2">
      <span className="text-black">
        Learn coding at the nearby&nbsp;
        <a
          href="#"
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
        >
          Coding Pro Institute
        </a>
        .&nbsp;
        <a
          href="#"
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
        >
          Enquire now
        </a>
      </span>
    </div>
  );
};

export default Banner;
