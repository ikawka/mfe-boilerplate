import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Pricing = ({}: Props) => {
  return (
    <>
      <div>Hello Galaxy Pricing</div>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">Features</Link> |{' '}
        <Link to="/pricing">Pricing</Link>
      </div>
    </>
  );
};

export default Pricing;
