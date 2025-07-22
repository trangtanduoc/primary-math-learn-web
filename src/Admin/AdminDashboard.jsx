import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button><Link to="/admin/manage-accounts">Manage Accounts</Link></button>
      <button><Link to="/admin/manage-courses">Manage Courses</Link></button>
    </div>
  );
};

export default AdminDashboard;
