import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CoursePage from '../student/CoursePage';

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses/:id" element={<CoursePage />} />
    </Routes>
  );
};

export default StudentRoutes;