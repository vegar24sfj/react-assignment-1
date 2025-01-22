// src/components/ContainerComponent.jsx
import React from 'react';

const ContainerComponent = ({ children }) => {
  return (
    <div className="container-component">
      <h2>Container Component</h2>
      <div className="children-container">
        {children}
      </div>
    </div>
  );
};

export default ContainerComponent;
