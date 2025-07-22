import React from 'react';
import { Link } from 'react-router-dom';

const VerifyCourses = () => {
  return (
    <div>
      <h2>Verify Courses</h2>
      <p>Function to verify courses.</p>
      <button><Link to="/admin/manage-courses">Back</Link></button>
    </div>
  );
};

export default VerifyCourses;
