import React from 'react';
import { Link } from 'react-router-dom';

const DeleteCourses = () => {
  return (
    <div>
      <h2>Delete Courses</h2>
      <p>Function to delete courses.</p>
      <button><Link to="/admin/manage-courses">Back</Link></button>
    </div>
  );
};

export default DeleteCourses;
