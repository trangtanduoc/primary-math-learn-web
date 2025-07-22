import api from "../api/axios";

export const getLessonsByCourse = (courseId) => api.get(`/Lessons/by-course/${courseId}`);
export const getLessonById = (id) => api.get(`/Lessons/${id}`);
export const createLesson = (data) => api.post("/Lessons", data);
export const updateLesson = (id, data) => api.put(`/Lessons/${id}`, data);
export const deleteLesson = (id) => api.delete(`/Lessons/${id}`);
