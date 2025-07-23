import { useNavigate } from "react-router-dom";
import { getAuth } from "../../services/authenService";
import { useEffect, useState } from "react";
import { getAllCourses, getCourseOfCenter } from "../../services/courseService";
import CourseList from "../../components/student/CourseList";

function MathCenter() {
  const navigate = useNavigate();
  const center = getAuth();
  console.log(center);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  const fetchCourseData = async () => {
    try {
      console.log(center.userId);
      const coursesRes = await getCourseOfCenter(center.userId);
      console.log(coursesRes.data);
      setCourses(coursesRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [center.userId]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>Welcome, {center.centerName}</h1>
          <div
            key={center.id}
            style={{
              border: "1px solid #ccc",
              padding: "0 1rem",
              margin: "1rem",
              borderRadius: "8px",
            }}
          >
            <h2>{center.name}</h2>
            <p>{center.description}</p>
            <CourseList courses={courses} />
          </div>
        </>
      )}
    </>
  );
}

export default MathCenter;
