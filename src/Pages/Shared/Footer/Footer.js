import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const copyrightDate = new Date().getFullYear();

  return (
    <div className='bg-slate-800 text-gray-300 dark:bg-gray-800'>
      <footer className="p-6 dark:text-gray-100">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4 ">
            <h2 className="font-medium">Getting started</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link className="hover:text-white" to='/home'>Home</Link>
              <Link className="hover:text-white" to='/courses'>Courses</Link>
              <Link className="hover:text-white" to='/faq'>FAQs</Link>
              <Link className="hover:text-white" to='/blog'>Blog</Link>
              <Link className="hover:text-white" to="/">Production</Link>
              <Link className="hover:text-white" to="/">Browser Support</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Core Concepts</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link className="hover:text-white" to="/">Private Route</Link>
              <Link className="hover:text-white" to="/">Responsive Design</Link>
              <Link className="hover:text-white" to="/">Hover, Focus</Link>
              <Link className="hover:text-white" to="/">Dark Mode</Link>
              <Link className="hover:text-white" to="/">Components</Link>
              <Link className="hover:text-white" to="/">Utilities</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Customization</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link className="hover:text-white" to="/">Configuration</Link>
              <Link className="hover:text-white" to="/">Theme</Link>
              <Link className="hover:text-white" to="/">Breakpoints</Link>
              <Link className="hover:text-white" to="/">Colors</Link>
              <Link className="hover:text-white" to="/">Variants</Link>
              <Link className="hover:text-white" to="/">Plugins</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Community</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link className="hover:text-white" to="/">GitHub</Link>
              <Link className="hover:text-white" to="/">Discord</Link>
              <Link className="hover:text-white" to="/">Twitter</Link>
              <Link className="hover:text-white" to="/">YouTube</Link>
              <Link className="hover:text-white" to="/">Facebook</Link>
              <Link className="hover:text-white" to="/">LinkedIn</Link>
            </div>
          </div>
        </div>
        <div className="text-sm bg-gray-600 rounded-lg mt-8 px-8 py-8 text-center">
          <p className="dark:text-gray-400">&copy; Copyright {copyrightDate} - <Link to={`/home`} className='text-gray-200'>Invest In knowledge</Link>  - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;