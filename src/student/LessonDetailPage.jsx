// LessonDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLessonById } from "../services/lessonService";
import { getQuizzesByLessonId } from "../services/quizService";

const LessonDetailPage = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lessonRes = await getLessonById(lessonId);
        const quizRes = await getQuizzesByLessonId(lessonId);

        setLesson(lessonRes.data);
        setQuizzes(quizRes.data);
      } catch (error) {
        console.error("Failed to load lesson or quizzes", error);
      }
    };

    fetchData();
  }, [lessonId]);

  if (!lesson) return <p>Loading lesson...</p>;

  return (
    <div>
      <h2>{lesson.title}</h2>
      <p>{lesson.description}</p>

      <h3>Quizzes</h3>
      {quizzes.length === 0 ? (
        <p>No quizzes available.</p>
      ) : (
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <strong>{quiz.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LessonDetailPage;
