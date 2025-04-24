import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black text-white shadow-lg' : 'bg-black text-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold italic">Gazza's Tarantulas</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/care-guide">Care Guide</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-gray-300 transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <Link to="/account" className="hover:text-gray-300 transition-colors" aria-label="Account">
              <User size={20} />
            </Link>
            <Link to="/cart" className="hover:text-gray-300 transition-colors relative" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white z-50"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8 text-xl">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/care-guide">Care Guide</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </nav>
          <div className="flex items-center space-x-8 mt-8">
            <button className="text-white hover:text-gray-300 transition-colors" aria-label="Search">
              <Search size={24} />
            </button>
            <Link to="/account" className="text-white hover:text-gray-300 transition-colors" aria-label="Account">
              <User size={24} />
            </Link>
            <Link to="/cart" className="text-white hover:text-gray-300 transition-colors relative" aria-label="Cart">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`relative hover:text-gray-300 transition-colors ${
        isActive ? 'font-medium' : ''
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"></span>
      )}
    </Link>
  );
};

export default Header;