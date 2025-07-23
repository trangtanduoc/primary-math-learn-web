import React from "react";

const CourseDetail = ({ course }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p><strong>Price:</strong> ${course.price}</p>
    </div>
  );
};

export default CourseDetail;
