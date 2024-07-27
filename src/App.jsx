import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState(studentsData);


  return (
    <div className="App pt-20">
      <Navbar />

      <StudentForm />

      {/* FORM */}

      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
