import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const Header = ({ title }) => {
  return (
    <AppBar 
      title={title}
      showMenuIconButton={true}
    />
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;