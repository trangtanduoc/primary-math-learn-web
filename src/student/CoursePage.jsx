import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from '../services/courseService';
import { getLessonsByCourse } from '../services/lessonService';
import LessonList from '../components/student/LessonList';
import CourseDetail from '../components/student/CourseDetail';

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleEnroll = () => {
    // TODO: implement enroll logic
    alert("Enroll button clicked!");
  };

  if (loading) return <p>Loading...</p>;
  if (!course) return <p>Course not found.</p>;

  return (
    <div>
      <CourseDetail course={course} onEnroll={handleEnroll} />
      <h2 style={{ marginTop: "2rem" }}>Lessons</h2>
      <LessonList lessons={lessons} />
    </div>
  );
};

export default CoursePage;
