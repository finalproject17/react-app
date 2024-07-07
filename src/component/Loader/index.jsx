import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../Animation - 1720171669650.json';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Lottie animationData={animationData} loop={true} style={{ width: 300, height: 300 }} />
    </div>
  );
};

export default Loader;
