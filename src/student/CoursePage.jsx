import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from '../services/courseService';
import { getLessonsByCourse } from '../services/lessonService';
import { enrollInCourse } from "../services/enrollmentService";
import LessonList from '../components/student/LessonList';
import CourseDetail from '../components/student/CourseDetail';
import { getAuth } from '../services/authenService';

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseRes, lessonRes] = await Promise.all([
          getCourseById(id),
          getLessonsByCourse(id),
        ]);
        setCourse(courseRes.data);
        setLessons(lessonRes.data);
      } catch (error) {
        console.error("Failed to fetch course or lessons", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleEnroll = async () => {
    try {
      await enrollInCourse(auth.studentId, parseInt(id));
      alert("Successfully enrolled!");
    } catch (error) {
      console.error("Enrollment failed", error);
      alert(`Failed to enroll.\nStudent ID: ${auth.studentId}\nCourse ID: ${parseInt(id)}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!course) return <p>Course not found.</p>;

  return (
    <div>
      <CourseDetail course={course} />
      <button
        onClick={handleEnroll}
        style={{
          padding: "8px 16px",
          marginTop: "1rem",
          backgroundColor: "#0077cc",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Enroll in Course
      </button>
      <h2 style={{ marginTop: "2rem" }}>Lessons</h2>
      <LessonList lessons={lessons} />
    </div>
  );
};

export default CoursePage;
