import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../Admin/AdminDashboard';
import ManageAccounts from '../Admin/ManageAccounts';
import VerifyCenter from '../Admin/VerifyCenter';
import BanUser from '../Admin/BanUser';
import UpdateUser from '../Admin/UpdateUser';
import ManageCourses from '../Admin/ManageCourses';
import DeleteCourses from '../Admin/DeleteCourses';
import VerifyCourses from '../Admin/VerifyCourses';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/manage-accounts" element={<ManageAccounts />} />
      <Route path="/admin/verify-center" element={<VerifyCenter />} />
      <Route path="/admin/ban-user" element={<BanUser />} />
      <Route path="/admin/update-user" element={<UpdateUser />} />
      <Route path="/admin/manage-courses" element={<ManageCourses />} />
      <Route path="/admin/delete-courses" element={<DeleteCourses />} />
      <Route path="/admin/verify-courses" element={<VerifyCourses />} />
    </Routes>
  );
};

export default AdminRoutes;
