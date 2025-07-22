import React from 'react';
import { Link } from 'react-router-dom';

const UpdateUser = () => {
  return (
    <div>
      <h2>Update User</h2>
      <p>Function to update user information.</p>
      <button><Link to="/admin/manage-accounts">Back</Link></button>
    </div>
  );
};

export default UpdateUser;
