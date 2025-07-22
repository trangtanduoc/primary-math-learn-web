import api from "../api/axios";

export const getAllCourses = () => api.get("/Courses");
export const getCourseById = (id) => api.get(`/Courses/${id}`);
