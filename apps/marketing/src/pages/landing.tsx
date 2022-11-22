import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Landing = ({}: Props) => {
  return (
    <>
      <div>Hello Galaxy Marketing</div>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">Features</Link> |{' '}
        <Link to="/pricing">Pricing</Link>
      </div>
    </>
  );
};

export default Landing;
