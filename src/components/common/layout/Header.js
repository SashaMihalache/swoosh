import React, { PropTypes } from 'react';
import './Header.css';

const componentName = ({ title }) => {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
    </header>
  );
};

componentName.propTypes = {
  title: PropTypes.string.isRequired
};

export default componentName;