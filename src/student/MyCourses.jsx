import React, { useEffect, useState } from "react";
import { getAuth } from "../services/authenService";
import { getEnrollmentsByStudent } from "../services/enrollmentService";
import { getLessonsByCourse } from "../services/lessonService";
import { getCourseById } from "../services/courseService";

import CourseDetail from "../components/student/CourseDetail";
import LessonList from "../components/student/LessonList";

const EnrolledCoursesPage = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [expandedCourses, setExpandedCourses] = useState({});
  const auth = getAuth();

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const res = await getEnrollmentsByStudent(auth.studentId);

        const coursesWithLessons = await Promise.all(
          res.data.map(async (enrollment) => {
            const courseRes = await getCourseById(enrollment.courseId);
            const lessonsRes = await getLessonsByCourse(enrollment.courseId);
            return {
              ...courseRes.data,
              lessons: lessonsRes.data,
            };
          })
        );

        setEnrollments(coursesWithLessons);
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchEnrollments();
  }, [auth.studentId]);

  const toggleCollapse = (courseId) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  return (
    <div>
      <h2>My Enrolled Courses</h2>

      {enrollments.length === 0 ? (
        <p>You are not enrolled in any courses.</p>
      ) : (
        enrollments.map((course) => (
          <div
            key={course.id}
            style={{
              marginBottom: "1rem",
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <CourseDetail course={course} />
            <button onClick={() => toggleCollapse(course.id)}>
              {expandedCourses[course.id] ? "Hide Lessons" : "Show Lessons"}
            </button>
            {expandedCourses[course.id] && <LessonList lessons={course.lessons} />}
          </div>
        ))
      )}
    </div>
  );
};

export default EnrolledCoursesPage;
