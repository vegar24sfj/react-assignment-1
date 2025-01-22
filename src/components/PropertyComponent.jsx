// src/components/PropertyComponent.jsx
import React from 'react';

const PropertyComponent = ({ title, description }) => {
  return (
    <div className="property-component">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PropertyComponent;
