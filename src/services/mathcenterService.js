import api from "../api/axios";

export const getCenter = () => api.get("/MathCenters");
export const getCourseById = (id) => api.get(`/MathCenters/${id}`);
