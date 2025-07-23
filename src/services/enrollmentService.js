import api from "../api/axios";

export const enrollInCourse = (studentId, courseId) =>
  api.post("/Enrollments", { studentId, courseId });

export const getEnrollmentsByStudent = (studentId) =>
  api.get(`/Enrollments/student/${studentId}`);