import React from 'react';
import './Button.scss';

const Button = ({ onClick }) => {
  return (
    <>
      <button className="Button" onClick={onClick}>
        Load more
      </button>
    </>
  );
};

export default Button;
