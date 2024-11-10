import React from 'react';

const MainContainer: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white p-10 font-poppins relative">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-[50px] font-medium leading-[72px] underline decoration-teal-500 underline-offset-4 decoration-1">
          <img src="orn.jpg" alt="" />
          Because We Offer What You Need
        </h2>
        <p className="text-[50px] font-medium leading-[72px] text-gray-800">
          At Every Step Of Your <span className="text-teal-500">Transformative Learning Journey</span>
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Image of Students */}
        <img src="/students1.png" alt="Students" className="w-[614.4px] h-[221.89px] z-10" />
        {/* Main Vertical Line */}
        <div className="absolute top-[150px] w-1 bg-teal-500 h-[1200px] left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-6 mt-10 w-full">
        <Card
          number="1"
          title="Custom Specialization"
          description="We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals."
          isLeftAligned={true}
        />
        <Card
          number="2"
          title="Virtual Labs"
          description="We provide our students with the convenience of accessing a fully equipped lab from anywhere just with an internet connection."
          isLeftAligned={false}
        />
        <Card
          number="3"
          title="AI Tests"
          description="We understand that teaching alone isn’t enough, so we provide our students with AI-powered tests to assess their progress."
          isLeftAligned={true}
        />
        <Card
          number="4"
          title="Resume Builder"
          description="We not only support skill development but also leverage AI to highlight those skills effectively on your resume to help you stand out from the crowd."
          isLeftAligned={false}
        />
        <Card
          number="5"
          title="Placement Preparation"
          description="We go beyond building skills, taking our students to the next level by providing them with thorough placement preparation."
          isLeftAligned={true}
        />
        <Card
          number="6"
          title="AI Interviews"
          description="Interviews can be challenging, so we use AI to conduct mock interviews, helping our students build confidence and be fully prepared."
          isLeftAligned={false}
        />
      </div>
    </div>
  );
};

interface CardProps {
  number: string;
  title: string;
  description: string;
  isLeftAligned: boolean;
}

const Card: React.FC<CardProps> = ({ number, title, description, isLeftAligned }) => {
  return (
    <div className={`relative flex ${isLeftAligned ? 'justify-start' : 'justify-end'} w-full`}>
      {/* Connecting Line with Arrow */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          isLeftAligned
            ? 'left-1/2 -translate-x-full w-[250px] h-[1px] bg-teal-500'
            : 'right-1/2 translate-x-full w-[250px] h-[1px] bg-teal-500'
        }`}
      >
        {/* Arrow for Left or Right */}
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 ${
            isLeftAligned ? 'right-0' : 'left-0'
          } h-0 w-0 border-[6px] border-transparent ${
            isLeftAligned ? 'border-r-teal-500' : 'border-l-teal-500'
          }`}
        ></div>
      </div>

      <div className="flex flex-col border border-gray-200 rounded-lg p-6 bg-white shadow-md w-full max-w-md">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-500 text-white font-bold">
            {number}
          </div>
          <h3 className="ml-4 text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MainContainer;
