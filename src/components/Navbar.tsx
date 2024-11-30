import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, BookOpen, Pencil } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                <BookOpen className="h-6 w-6 text-purple-600 absolute" />
                <Pencil className="h-5 w-5 text-purple-700 absolute transform -rotate-45 translate-x-1 translate-y-1" />
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-purple-700">MMCOE</span>
                <span className="text-lg text-purple-600 ml-1">Store</span>
              </div>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-purple-600 hover:text-purple-800 font-medium">Home</Link>
            <Link to="/shop" className="text-purple-600 hover:text-purple-800 font-medium">Shop</Link>
            <Link to="/about" className="text-purple-600 hover:text-purple-800 font-medium">About</Link>
            <Link to="/contact" className="text-purple-600 hover:text-purple-800 font-medium">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="text-purple-600 hover:text-purple-800 relative group">
              <Heart className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            </Link>
            <Link to="/cart" className="text-purple-600 hover:text-purple-800 relative group">
              <ShoppingCart className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            </Link>
            <button className="sm:hidden">
              <Menu className="h-6 w-6 text-purple-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}