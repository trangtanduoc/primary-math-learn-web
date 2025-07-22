import { Route, Routes } from "react-router-dom";
import MathCenter from "../pages/MathCenter/MathCenter";

const MathCentersRoutes = () => {
  return (
    <Routes>
      <Route path="/mathcenter" element={<MathCenter />} />
    </Routes>
  );
};

export default MathCentersRoutes;
