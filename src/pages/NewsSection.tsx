import React from 'react';

interface ArticleCardProps {
  source: string;
  date: string;
  imageUrl?: string;
  title: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ source, date, imageUrl, title, link }) => {
  return (
    <div className="w-full sm:w-80 md:w-96 h-[500px] bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-red-500">{source}</span>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>
        <div className="w-full h-40 md:h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No Image Available
            </div>
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      </div>
      <div className="flex items-center text-blue-500 mt-4">
        <a href={link} className="text-sm font-semibold">
          Read article
        </a>
        <span className="ml-2">→</span>
      </div>
    </div>
  );
};

const NewsSection: React.FC = () => {
  return (
    <div className="py-10 bg-gray-50 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        We’ve Also Been In <span className="text-blue-500">News!</span>
      </h2>
      {/* Responsive flexbox layout */}
      <div className="flex flex-wrap justify-center gap-6">
        <ArticleCard
          source="ThePrint"
          date="31 March, 2023"
          imageUrl="/frame1.png"
          title="Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40"
          link="#"
        />
        <ArticleCard
          source="Business Outreach"
          date="01 March, 2023"
          imageUrl="/frame2.png"
          title="Meet Vikas Shukla - The flag bearer of technology and ..."
          link="#"
        />
        <ArticleCard
          source="ThePrint"
          date="01 March, 2023"
          imageUrl="/frame2.png"
          title="Meet Vikas Shukla - The flag bearer of technology and ..."
          link="#"
        />
      </div>
    </div>
  );
};

export default NewsSection;
