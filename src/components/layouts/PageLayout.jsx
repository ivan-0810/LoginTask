import React from 'react';
const PagLayout = ({ children }) => {
  return (
    <div className="page-container container-fluid px-0">
      {children}
    </div>
  );
};

export default PagLayout;
