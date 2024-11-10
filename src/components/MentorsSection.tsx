import React from 'react';

interface MentorCardProps {
  name: string;
  backgroundColor: string;
  imageUrl: string;
  position: string;
  institution: string;
  description: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ name, backgroundColor, imageUrl, position, institution, description }) => {
  return (
    <div 
      className="w-[405px] h-[643px] rounded-lg shadow-lg flex flex-col justify-end overflow-hidden relative"
      style={{
        backgroundColor,
        clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)' // Cut only the top-right corner
      }}
    >
      <img src={imageUrl} alt={name} className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
      <div className="relative z-10 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-sm uppercase">{position}</p>
        <p className="text-sm mb-4">{institution}</p>
        <p className="text-sm italic">“ {description} ”</p>
      </div>
    </div>
  );
};

const MentorsSection: React.FC = () => {
  return (
    <div className="py-10 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">We Know Just Education Is Not Enough Anymore</h2>
      <h3 className="text-2xl font-semibold text-gray-700 mb-8">
        So We’ve Got The <span className="text-blue-500">Best Mentors</span> For You.
      </h3>
      <div className="flex space-x-6 justify-center">
        <MentorCard
          name="Vikas Shukla"
          backgroundColor="#00C2CB"
          imageUrl="/person1.png" // Replace with actual image path
          position="Software Engineering"
          institution="IIT- BHU"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        />
        <MentorCard
          name="Sumit Bhatt"
          backgroundColor="#488FDC"
          imageUrl="/person2.png" // Replace with actual image path
          position="Software Engineering"
          institution="IIT- BHU"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        />
        <MentorCard
          name="Neelu Verma"
          backgroundColor="#5FD1D6"
          imageUrl="/person3.png" // Replace with actual image path
          position="Software Engineering"
          institution="IIT- BHU"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        />
      </div>
    </div>
  );
};

export default MentorsSection;
