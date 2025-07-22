import React from "react";

const CourseDetail = ({ course, onEnroll }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p><strong>Price:</strong> ${course.price}</p>
      <button
        onClick={onEnroll}
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
    </div>
  );
};

export default CourseDetail;
