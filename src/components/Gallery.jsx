// src/components/Gallery.jsx
import React from 'react';
import StaticComponent from './StaticComponent';
import PropertyComponent from './PropertyComponent';
import ContainerComponent from './ContainerComponent';

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>React Component Gallery</h1>

      <StaticComponent />

      <PropertyComponent title="Dynamic Title" description="This is a dynamic description" />

      <ContainerComponent>
        <p>This is a child inside the container component.</p>
        <p>Here is another child element.</p>
      </ContainerComponent>
    </div>
  );
};

export default Gallery;
