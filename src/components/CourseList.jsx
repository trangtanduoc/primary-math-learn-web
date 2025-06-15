import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id} style={{ marginBottom: '0.5rem' }}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button style={{ padding: '5px 10px', backgroundColor: '#0077cc', color: '#fff', border: 'none', borderRadius: '4px' }}>
            View Course
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
