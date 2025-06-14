
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, User, BarChart3, Award, Home } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/grammar', icon: Book, label: 'Grammar' },
    { to: '/profile', icon: User, label: 'Profile' },
    { to: '/progress', icon: BarChart3, label: 'Progress' },
    { to: '/rewards', icon: Award, label: 'Rewards' },
  ];

  return (
    <nav className="elegant-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <Book className="w-5 h-5 text-white" />
            </div>
            <span className="text-elegant-primary text-xl font-bold">Grammar Master</span>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  location.pathname === to
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-200/50'
                    : 'text-gray-600 hover-elegant hover:text-blue-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
