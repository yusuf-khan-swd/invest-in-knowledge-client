import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='dark:bg-gray-800 p-10'>
      <footer className="p-6 dark:text-gray-100">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Getting started</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link to='/home' href="#">Home</Link>
              <Link to='/courses' href="#">Courses</Link>
              <Link to='/faq' href="#">FAQs</Link>
              <Link to='/blog' href="#">Blog</Link>
              <Link rel="noopener noreferrer" href="#">Optimizing for Production</Link>
              <Link rel="noopener noreferrer" href="#">Browser Support</Link>
              <Link rel="noopener noreferrer" href="#">IntelliSense</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Core Concepts</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link rel="noopener noreferrer" href="#">Private Route</Link>
              <Link rel="noopener noreferrer" href="#">Responsive Design</Link>
              <Link rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</Link>
              <Link rel="noopener noreferrer" href="#">Dark Mode</Link>
              <Link rel="noopener noreferrer" href="#">Adding Base Styles</Link>
              <Link rel="noopener noreferrer" href="#">Extracting Components</Link>
              <Link rel="noopener noreferrer" href="#">Adding New Utilities</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Customization</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link rel="noopener noreferrer" href="#">Configuration</Link>
              <Link rel="noopener noreferrer" href="#">Theme Configuration</Link>
              <Link rel="noopener noreferrer" href="#">Breakpoints</Link>
              <Link rel="noopener noreferrer" href="#">Customizing Colors</Link>
              <Link rel="noopener noreferrer" href="#">Customizing Spacing</Link>
              <Link rel="noopener noreferrer" href="#">Configuring Variants</Link>
              <Link rel="noopener noreferrer" href="#">Plugins</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Community</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link rel="noopener noreferrer" href="#">GitHub</Link>
              <Link rel="noopener noreferrer" href="#">Discord</Link>
              <Link rel="noopener noreferrer" href="#">Twitter</Link>
              <Link rel="noopener noreferrer" href="#">YouTube</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="dark:text-gray-400">© Copyright 2022. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;