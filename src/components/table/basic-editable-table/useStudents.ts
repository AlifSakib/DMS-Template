import { useState } from "react";
import { Student } from "../../tan-table/editable-table/types";

// Mock implementation of useStudents hook
const useStudents = () => {
  const [data, setData] = useState<Student[]>([
    {
      id: 1,
      studentNumber: 101,
      name: "John Doe",
      dateOfBirth: "2000-01-01",
      major: "Computer Science",
    },
    {
      id: 2,
      studentNumber: 102,
      name: "Jane Smith",
      dateOfBirth: "1999-05-15",
      major: "Business",
    },
  ]);

  const addRow = (newRow: Student) => {
    setData([...data, newRow]);
  };

  const updateRow = (id: number, updatedRow: Student) => {
    setData(data.map((row) => (row.id === id ? updatedRow : row)));
  };

  const deleteRow = (id: number) => {
    setData(data.filter((row) => row.id !== id));
  };

  return {
    data,
    addRow,
    updateRow,
    deleteRow,
  };
};

export default useStudents;
