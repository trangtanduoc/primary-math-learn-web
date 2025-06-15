import React from 'react';
import MathCenterList from '../components/MathCenterList';
import mockCenters from '../mock/mockData';

const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Math Centers & Courses</h1>
      <MathCenterList centers={mockCenters} />
    </div>
  );
};

export default HomePage;
