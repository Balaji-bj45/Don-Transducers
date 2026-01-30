import React from "react";

function Footer() {
  return (
 

    
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Don Transducers</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Professional audio manufacturing company delivering high-performance speaker
                drivers and sound components for the industry.
              </p>
              {/* Social Links */}
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <span className="text-sm font-bold">yt</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <span className="text-sm font-bold">ig</span>
                </a>
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Products</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    10" Drivers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    12" Drivers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    15" Drivers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    18" Subwoofers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Crossovers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Cabinets
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Quality
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Dealer Network
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">📍</span>
                  <span>Industrial Area, Mumbai, Maharashtra, India - 400001</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">📞</span>
                  <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">📧</span>
                  <a href="mailto:info@dontransducers.com" className="hover:text-blue-400 transition-colors">
                    info@dontransducers.com
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">🕐</span>
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© 2024 Don Transducers. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
