import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: '50+ Cities', icon: '/email.png' },
    { label: '80+ Modules', icon: '/module-icons.png' },
    { label: '10K+ Students', icon: '/student-icon.png' },
    { label: '100+ Institutes', icon: '/institute-icon.png' },
  ];

  return (
    <section className="flex flex-wrap justify-around py-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center border rounded-lg p-4 text-center shadow-md w-40">
          <img src={stat.icon} alt={stat.label} className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 text-lg font-semibold">{stat.label}</h3>
        </div>
      ))}
    </section>
  );
};

export default Stats;
