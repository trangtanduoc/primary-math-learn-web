import React from "react";

const LessonList = ({ lessons }) => {
  if (!lessons || lessons.length === 0) return <p>No lessons available.</p>;

  // Sort lessons by orderIndex
  const sortedLessons = [...lessons].sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <ul style={{ paddingLeft: 0, listStyleType: "none" }}>
      {sortedLessons.map((lesson) => (
        <li
          key={lesson.id}
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h4>{lesson.title}</h4>
        </li>
      ))}
    </ul>
  );
};

export default LessonList;
