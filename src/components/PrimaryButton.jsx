import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ children, to }) => {
  return (
    <Link to={to}>
      <Button className="btn bg-gradient-to-r from-primary to-secondary shadow-2xl">
        {children}
      </Button>
    </Link>
  );
};

export default PrimaryButton;
