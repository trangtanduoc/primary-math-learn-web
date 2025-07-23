import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";
import AdminRoutes from "./routes/AdminRoutes";
import StudentRoutes from "./routes/StudentRoutes";
import MathCentersRoutes from "./routes/MathCenterRoutes";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |<Link to="/login">Login</Link> |
        <Link to="/courses">Courses</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/*" element={<StudentRoutes />} />
      </Routes>

      <AdminRoutes />
      <MathCentersRoutes />
    </div>
  );
}

export default App;
