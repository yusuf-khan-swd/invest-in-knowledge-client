import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const { courseName } = useLoaderData();
  return (
    <div>
      <h2>This is checkout route {courseName} </h2>
    </div>
  );
};

export default Checkout;