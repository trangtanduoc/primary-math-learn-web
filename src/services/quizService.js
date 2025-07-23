import api from "../api/axios";

export const getQuizzesByLessonId = (lessonId) =>
  api.get(`/Quizzes/by-lesson/${lessonId}`);