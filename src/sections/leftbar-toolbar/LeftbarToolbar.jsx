import React from 'react';
import './leftbar-toolbar.css';

const LeftbarToolbar = ({ children }) => {
  return <div className="leftbar-toolbar">
  {children}
  </div>;
}

export default LeftbarToolbar;