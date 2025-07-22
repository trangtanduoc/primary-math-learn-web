import React from 'react';
import { Link } from 'react-router-dom';

const ManageCourses = () => {
  return (
    <div>
      <h2>Manage Courses</h2>
      <button><Link to="/admin/delete-courses">Delete Courses</Link></button>
      <button><Link to="/admin/verify-courses">Verify Courses</Link></button>
      <br /><br />
      <button><Link to="/admin">Back</Link></button>
    </div>
  );
};

export default ManageCourses;
