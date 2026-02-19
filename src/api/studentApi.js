import axios from "axios";

const API_URL = "http://localhost:8080/api/student";

export const getAllStudents = () => axios.get(`${API_URL}/getall`);

export const createStudent = (student) => axios.post(`${API_URL}/add`, student);

export const deleteStudent = (id) => axios.delete(`${API_URL}/del/${id}`);

export const searchStudents = (name, course, page = 0, size = 5) =>
  axios.get(`${API_URL}/search`, {
    params: { name, course, page, size },
  });