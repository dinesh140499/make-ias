// IframeComponent.jsx
import React from 'react';

const IframeComponent = ({ src, title = "iframe", height = "", width = "100%", allowFullScreen = true }) => {
  return (
    <div className="w-full h-full">
      <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen={allowFullScreen}
        className="w-full rounded-md shadow-md"
      />
    </div>
  );
};

export default IframeComponent;
