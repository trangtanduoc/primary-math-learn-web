import React from "react";
import { Link } from "react-router-dom";
import { getAuth } from "../../services/authenService";

const CourseList = ({ courses }) => {
  const user = getAuth();
  return (
    <>
      {user.role === "MathCenter" ? (
        <div style={{ margin: "1rem 0" }}>
          <h2>Courses</h2>
          {courses.map((course) => (
            <div
              key={course.id}
              style={{
                marginBottom: "0.5rem",
                borderTop: "1px solid #ccc",
                paddingBottom: "0.5rem",
              }}
            >
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
          <Link to={`/mathcenter/courses`}>
            <button
              style={{
                padding: "5px 10px",
                backgroundColor: "#0077cc",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              View All Courses Management
            </button>
          </Link>
        </div>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id} style={{ marginBottom: "0.5rem" }}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link to={`/courses/${course.id}`}>
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#0077cc",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  View Course
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CourseList;
