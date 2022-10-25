import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/courses'>Courses</Link>
      <Link to='/faq'>FAQ</Link>
      <Link to='/blog'>Blog</Link>
      {
        user?.uid ?
          <>
            <span> {user.displayName} </span>
            <button>logout</button>
          </>
          :
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
      }
    </nav>
  );
};

export default Header;