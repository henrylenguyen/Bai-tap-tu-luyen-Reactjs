import React from 'react';

const LoadingSkeleton = ({ height, width, borderRadius }) => {
  return (
    <div
      className="skeleton"
      style={{
        height: height||"100%",
        width: width||"100%",
        borderRadius: borderRadius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;