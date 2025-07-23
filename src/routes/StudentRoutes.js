import { Routes, Route } from 'react-router-dom';
import HomePage from '../student/HomePage';
import CoursePage from '../student/CoursePage';
import MyCourses from '../student/MyCourses';
import LessonDetailPage from "../student/LessonDetailPage";


const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses/:id" element={<CoursePage />} />
      <Route path="/MyCourses" element={<MyCourses />} />
      <Route path="/lessons/:lessonId" element={<LessonDetailPage />} />
    </Routes>
  );
};

export default StudentRoutes;