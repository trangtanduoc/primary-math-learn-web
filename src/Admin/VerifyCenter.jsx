import React from 'react';
import { Link } from 'react-router-dom';

const VerifyCenter = () => {
  return (
    <div>
      <h2>Verify Center</h2>
      <p>Function to verify centers.</p>
      <button><Link to="/admin/manage-accounts">Back</Link></button>
    </div>
  );
};

export default VerifyCenter;
