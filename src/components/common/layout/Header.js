import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
// import './Header.css';

const Header = ({ title }) => {
  // return (
  //   <header className="header">
  //     <h1 className="title">{title}</h1>
  //   </header>
  // );
  function handleFak (e) {
    console.log(e);
  }

  return (
    <AppBar 
      title={title}
      onTitleTouchTap={handleFak}
      showMenuIconButton={true}
    />
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;