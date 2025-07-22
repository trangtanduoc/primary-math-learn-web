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
      //   const courses = coursesRes.data;

      // Combine courses into their respective centers
      //   const coursesOfCenter = courses.filter(
      //     (course) => course.mathCenterId === center.id
      //   );
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
      <h1 style={{ textAlign: "center" }}>Welcome</h1>
      <div
        key={center.id}
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          marginBottom: "1rem",
          borderRadius: "8px",
        }}
      >
        <h2>{center.name}</h2>
        <p>{center.description}</p>
        <CourseList courses={courses} />
      </div>
    </>
  );
}

export default MathCenter;
