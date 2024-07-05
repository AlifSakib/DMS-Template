import { useEffect, useState, ChangeEvent } from "react";
import { Student } from "../../tan-table/editable-table/types";
import useStudents from "./useStudents";

const Table = () => {
  const { data: originalData, addRow, updateRow, deleteRow } = useStudents();
  const [data, setData] = useState<Student[]>([]);
  const [editedRows, setEditedRows] = useState<Record<number, boolean>>({});
  const [validRows, setValidRows] = useState<Record<number, boolean>>({});
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  useEffect(() => {
    setData([...originalData]);
  }, [originalData]);

  const handleInputChange = (
    rowIndex: number,
    columnId: string,
    value: string,
    isValid: boolean
  ) => {
    setData((prevData) =>
      prevData.map((row, index) =>
        index === rowIndex ? { ...row, [columnId]: value } : row
      )
    );
    setValidRows((prevValidRows) => ({
      ...prevValidRows,
      //   @ts-ignore
      [rowIndex]: { ...prevValidRows[rowIndex], [columnId]: isValid },
    }));
  };

  const handleEditRow = (rowIndex: number) => {
    setEditedRows((prevEditedRows) => ({
      ...prevEditedRows,
      [rowIndex]: !prevEditedRows[rowIndex],
    }));
  };

  const handleAddRow = () => {
    const id = Math.floor(Math.random() * 10000);
    const newRow: Student = {
      id,
      studentNumber: id,
      name: "",
      dateOfBirth: "",
      major: "",
    };
    setData((prevData) => [...prevData, newRow]);
  };

  const handleDeleteRow = (rowIndex: number) => {
    setData((prevData) => prevData.filter((_, index) => index !== rowIndex));
  };

  const handleFinalSubmit = () => {
    console.log("Final data:", data);
  };

  const handleSelectRow = (rowIndex: number) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(rowIndex)) {
        newSelectedRows.delete(rowIndex);
      } else {
        newSelectedRows.add(rowIndex);
      }
      return newSelectedRows;
    });
  };

  const handleSelectAllRows = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map((_, index) => index)));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">
              <input
                type="checkbox"
                checked={selectedRows.size === data.length}
                onChange={handleSelectAllRows}
              />
            </th>
            <th className="py-2">Student Id</th>
            <th className="py-2">Full Name</th>
            <th className="py-2">Date Of Birth</th>
            <th className="py-2">Major</th>
            <th className="py-2">Actions</th>
            <th className="py-2">Select Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row.id} className="border-t">
              <td className="py-2">
                <input
                  type="checkbox"
                  checked={selectedRows.has(rowIndex)}
                  onChange={() => handleSelectRow(rowIndex)}
                />
              </td>
              <td className="py-2">
                {editedRows[rowIndex] ? (
                  <input
                    type="number"
                    value={row.studentNumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(
                        rowIndex,
                        "studentNumber",
                        e.target.value,
                        true
                      )
                    }
                    className="border px-2 py-1 w-full"
                  />
                ) : (
                  <span>{row.studentNumber}</span>
                )}
              </td>
              <td className="py-2">
                {editedRows[rowIndex] ? (
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(rowIndex, "name", e.target.value, true)
                    }
                    className="border px-2 py-1 w-full"
                  />
                ) : (
                  <span>{row.name}</span>
                )}
              </td>
              <td className="py-2">
                {editedRows[rowIndex] ? (
                  <input
                    type="date"
                    value={row.dateOfBirth}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(
                        rowIndex,
                        "dateOfBirth",
                        e.target.value,
                        true
                      )
                    }
                    className="border px-2 py-1 w-full"
                  />
                ) : (
                  <span>{row.dateOfBirth}</span>
                )}
              </td>
              <td className="py-2">
                {editedRows[rowIndex] ? (
                  <select
                    value={row.major}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      handleInputChange(rowIndex, "major", e.target.value, true)
                    }
                    className="border px-2 py-1 w-full"
                  >
                    <option value="">Select Major</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Communications">Communications</option>
                    <option value="Business">Business</option>
                    <option value="Psychology">Psychology</option>
                  </select>
                ) : (
                  <span>{row.major}</span>
                )}
              </td>
              <td className="py-2 flex gap-2">
                <button
                  onClick={() => handleEditRow(rowIndex)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {editedRows[rowIndex] ? "Save" : "Edit"}
                </button>
                <button
                  onClick={() => handleDeleteRow(rowIndex)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
              <td className="py-2">
                {editedRows[rowIndex] ? (
                  <select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      handleInputChange(
                        rowIndex,
                        "action",
                        e.target.value,
                        true
                      )
                    }
                    className="border px-2 py-1 w-full"
                  >
                    <option value="">Select Action</option>
                    <option value="Approve">Approve</option>
                    <option value="Reject">Reject</option>
                  </select>
                ) : (
                  <span>Select Action</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={handleAddRow}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add New
        </button>
        <button
          onClick={handleFinalSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Submit Changes
        </button>
      </div>
    </div>
  );
};

export default Table;
