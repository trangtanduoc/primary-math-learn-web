import React from 'react';
import { Link } from 'react-router-dom';

const ManageAccounts = () => {
  return (
    <div>
      <h2>Manage Accounts</h2>
      <button><Link to="/admin/verify-center">Verify Center</Link></button>
      <button><Link to="/admin/ban-user">Ban User</Link></button>
      <button><Link to="/admin/update-user">Update User</Link></button>
      <br /><br />
      <button><Link to="/admin">Back</Link></button>
    </div>
  );
};

export default ManageAccounts;
