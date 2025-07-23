import { Route, Routes } from "react-router-dom";
import MathCenter from "../pages/MathCenter/MathCenter";
import CourseManagement from "../pages/MathCenter/CourseManagement";
import CourseDetails from "../pages/MathCenter/CourseDetails";

const MathCentersRoutes = () => {
  return (
    <Routes>
      <Route path="/mathcenter" element={<MathCenter />} />
      <Route path="/mathcenter/courses" element={<CourseManagement />} />
      <Route path="/mathcenter/courses/:id" element={<CourseDetails />} />
    </Routes>
  );
};

export default MathCentersRoutes;
