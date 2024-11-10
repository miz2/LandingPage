import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section
      className="relative py-12 px-4"
      style={{
        background: 'linear-gradient(96.91deg, #2B95ED -2.42%, #185587 183.96%)',
        borderRadius: '25px 0px 0px 0px',
      }}
    >
      {/* Ornamental Background */}
      <div
        className="absolute -z-10 w-full h-full"
        style={{
          background: 'linear-gradient(96.91deg, #2B95ED -2.42%, #185587 183.96%)',
          width: '1733px',
          height: '857px',
          top: '1135px',
          left: '-109px',
          opacity: '0',
        }}
      ></div>

      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What Sets Us Apart?
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-white rounded-lg p-6 shadow-lg text-center transform transition hover:scale-105">
          <img src="/i2.png" alt="IIT-IIM Alumni" className="w-16 h-16 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-blue-600">
            Created by IIT-IIM Alumni
          </h3>
          <p className="text-gray-600 mt-2">
            We’ve learned from the best and strive to bring you the best.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-lg p-6 shadow-lg text-center transform transition hover:scale-105">
          <img src="/i1.png" alt="A.I. Integration" className="w-16 h-16 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-blue-600">A.I. Integration</h3>
          <p className="text-gray-600 mt-2">
            We have harnessed the power of A.I. to enhance and assess your knowledge.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-lg p-6 shadow-lg text-center transform transition hover:scale-105">
          <img src="/image 13.png" alt="In-app Coding" className="w-16 h-16 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-blue-600">In-app Coding</h3>
          <p className="text-gray-600 mt-2">
            The app features in-app coding, eliminating the need for laptops.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white rounded-lg p-6 shadow-lg text-center transform transition hover:scale-105">
          <img src="/i4.png" alt="Extensive E-books" className="w-16 h-16 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-blue-600">Extensive E-books</h3>
          <p className="text-gray-600 mt-2">
            Deepen your understanding and mastery of the skills.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white rounded-lg p-6 shadow-lg text-center transform transition hover:scale-105">
          <img src="/i5.png" alt="Recorded Lectures" className="w-16 h-16 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-blue-600">Recorded Lectures</h3>
          <p className="text-gray-600 mt-2">
            Access lectures anywhere and anytime at your own pace.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white rounded-lg p-6 shadow-lg text-center transform transition hover:scale-105">
          <img src="/i3.png" alt="Flash cards" className="w-16 h-16 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-blue-600">Flash cards</h3>
          <p className="text-gray-600 mt-2">
            Make learning convenient and fun using flash cards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
