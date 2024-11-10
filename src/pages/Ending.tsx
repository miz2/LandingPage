import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Ending: React.FC = () => {
  return (
    <footer
      className="text-white py-12 px-6"
      style={{
        background: `
          linear-gradient(180deg, #15568B 0%, #2595F1 100%),
          linear-gradient(286.26deg, rgba(0, 0, 0, 0) 39.63%, rgba(15, 35, 77, 0.2) 78.21%, rgba(21, 49, 108, 0.2) 84.49%, rgba(28, 64, 142, 0.2) 98.68%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        
        {/* Contact Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Let’s keep in touch!</h2>
          <p className="mb-4">Request a CodingPro Institute enquiry!</p>
          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden mb-4">
            <input
              type="text"
              placeholder="Institute name"
              className="flex-grow px-4 py-2 bg-transparent text-white placeholder-gray-300 outline-none"
            />
            <button className="bg-gradient-to-r from-blue-400 to-blue-600 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col text-sm space-y-2">
            <a href="#" className="hover:underline">Create Account</a>
            <a href="#" className="hover:underline">Sign in</a>
          </div>
          <div className="mt-6 space-y-2">
            <p className="flex items-center"><span role="img" aria-label="phone">📞</span> +91 97973 59144</p>
            <p className="flex items-center"><span role="img" aria-label="email">📧</span> codingjr.in@gmail.com</p>
            <p className="flex items-center"><span role="img" aria-label="location">📍</span> AIC-BHU, Varanasi, 421004</p>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Campus Training Program</a></li>
            <li><a href="#" className="hover:underline">Professional Training Program</a></li>
            <li><a href="#" className="hover:underline">B. Tech</a></li>
            <li><a href="#" className="hover:underline">B. Des.</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-pink-500 hover:text-pink-400">
              <FaInstagram size={28} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400">
              <FaFacebook size={28} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-600">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Ending;
