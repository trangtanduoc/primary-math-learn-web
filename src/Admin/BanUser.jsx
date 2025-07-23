import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth } from '../services/authenService';
import { Link, useNavigate } from 'react-router-dom';

const BanUser = () => {
  const [users, setUsers] = useState([]);
  const auth = getAuth(); // Lấy token và role từ localStorage
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth || auth.role !== 'Admin') {
      alert("Bạn không có quyền truy cập trang này.");
      navigate('/login');
      return;
    }

    axios.get("https://localhost:7226/api/Accounts", {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        if (error.response?.status === 403) {
          alert("Bạn không có quyền truy cập. Vui lòng đăng nhập lại.");
          navigate('/login');
        }
      });
  }, [auth, navigate]);

  const handleBan = (userId) => {
    if (!window.confirm("Bạn có chắc chắn muốn ban người dùng này không?")) return;

    axios.post(`https://localhost:7226/api/Accounts/${userId}`, {}, {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
      .then(() => {
        alert("Ban thành công.");
        setUsers(users.map(u => u.id === userId ? { ...u, status: false } : u));
      })
      .catch(error => {
        console.error('Error banning user:', error);
        alert("Không thể ban user.");
      });
  };

  return (
    <div>
      <h2>Ban User</h2>
      <p>Function to ban users.</p>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>MathCenterId</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
              <td>{user.mathCenterId ?? 'NULL'}</td>
              <td>{user.status ? 'Active' : 'Banned'}</td>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
              <td>
                {user.status && (
                  <button onClick={() => handleBan(user.id)}>Ban</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <button>
        <Link to="/admin/manage-accounts">Back</Link>
      </button>
    </div>
  );
};

export default BanUser;
