import api from "../api/axios";

export const getAllCourses = () => api.get("/Courses");
export const getCourseById = (id) => api.get(`/Courses/${id}`);
export const getCourseOfCenter = (centerId) =>
  api.get(`/Courses/by-mathcenter/${centerId}`);
