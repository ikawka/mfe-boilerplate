import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const About = ({}: Props) => {
  return (
    <>
      <div>Hello Galaxy About</div>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">Features</Link> |{' '}
        <Link to="/pricing">Pricing</Link>
      </div>
    </>
  );
};

export default About;
