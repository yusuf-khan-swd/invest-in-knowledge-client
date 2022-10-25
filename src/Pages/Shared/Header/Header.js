import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/courses'>Courses</Link>
      <Link to='/faq'>FAQ</Link>
      <Link to='/blog'>Blog</Link>
    </nav>
  );
};

export default Header;