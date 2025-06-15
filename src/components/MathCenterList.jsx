import React from 'react';
import CourseList from './CourseList';

const MathCenterList = ({ centers }) => {
  return (
    <div>
      {centers.map((center) => (
        <div key={center.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
          <h2>{center.name}</h2>
          <p>{center.description}</p>
          <CourseList courses={center.courses} />
        </div>
      ))}
    </div>
  );
};

export default MathCenterList;
