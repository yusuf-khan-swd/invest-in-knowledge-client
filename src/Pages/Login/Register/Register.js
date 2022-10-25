import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Register Page {user.displayName} </h2>
    </div>
  );
};

export default Register;