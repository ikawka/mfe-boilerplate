import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Pricing = ({}: Props) => {
  return (
    <>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">Features</Link> |{' '}
        <Link to="/pricing">Pricing</Link>
      </div>
      <div>Hello Galaxy Pricing</div>
    </>
  );
};

export default Pricing;
