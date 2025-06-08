import { Menu, X, MapPin } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold">RealTime Device Tracker</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
              <a href="/map" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Map</a>
              
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
              <a href="/map" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Map</a>
              
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;