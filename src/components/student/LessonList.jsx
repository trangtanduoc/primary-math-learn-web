// LessonList.jsx
import React from "react";
import { Link } from "react-router-dom";

const LessonList = ({ lessons }) => {
  if (!lessons || lessons.length === 0) return <p>No lessons available.</p>;

  const sortedLessons = [...lessons].sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <ul style={{ paddingLeft: 0, listStyleType: "none" }}>
      {sortedLessons.map((lesson) => (
        <li key={lesson.id} style={{ marginBottom: "1rem" }}>
          <Link
            to={`/lessons/${lesson.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block",
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
              transition: "background-color 0.2s",
            }}
          >
            <h4>{lesson.title}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LessonList;
