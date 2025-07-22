import api from "../api/axios";

export const getCenter = () => api.get("/MathCenters");
export const getCenterById = (id) => api.get(`/MathCenters/${id}`);
