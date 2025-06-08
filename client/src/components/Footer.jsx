const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Real-time location tracking made simple and efficient for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/map" className="text-gray-400 hover:text-white">Map</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Made with ❤️ by{' '}
            <a
              href="https://deepaksinghportfolio01.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Deepak Kumar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;