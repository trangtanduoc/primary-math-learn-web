import React from 'react';
import { Link } from 'react-router-dom';

const BanUser = () => {
  return (
    <div>
      <h2>Ban User</h2>
      <p>Function to ban users.</p>
      <button><Link to="/admin/manage-accounts">Back</Link></button>
    </div>
  );
};

export default BanUser;
