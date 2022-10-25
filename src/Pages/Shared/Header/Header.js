import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logout is successful');
      })
      .catch(error => {
        console.error('error: ', error)
        toast.error('Logout is not successful');
      })
  };

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
            <button onClick={handleLogOut}>logout</button>
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