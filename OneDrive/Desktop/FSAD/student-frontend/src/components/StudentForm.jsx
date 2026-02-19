                                                                                                   import { useState } from "react";
import { createStudent } from "../api/studentApi";

const StudentForm = ({ onStudentAdded }) => {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStudent(student);
    onStudentAdded();
    setStudent({ id: "", name: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Student</h3>

      <input name="id" placeholder="ID" value={student.id} onChange={handleChange} />
      <input name="name" placeholder="Name" value={student.name} onChange={handleChange} />
      <input name="course" placeholder="Course" value={student.course} onChange={handleChange} />

      <button type="submit">Add</button>
    </form>
  );
};

export default StudentForm;