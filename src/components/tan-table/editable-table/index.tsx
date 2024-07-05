import { useEffect, useState } from "react";
import { Student } from "./types";
import "./table.css";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "./columns";
import { FooterCell } from "./footer-cell";
import useStudents from "./useStudent";

export const Table = () => {
  const {
    data: originalData,
    isValidating,
    addRow,
    updateRow,
    deleteRow,
  } = useStudents();

  const [data, setData] = useState<Student[]>(originalData);
  const [editedRows, setEditedRows] = useState<{ [key: number]: any }>({});
  const [validRows, setValidRows] = useState<{ [key: number]: any }>({});

  useEffect(() => {
    if (isValidating) return;
    setData([...originalData]);
  }, [isValidating, originalData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
    meta: {
      editedRows,
      setEditedRows,
      validRows,
      setValidRows,
      revertData: (rowIndex: number) => {
        setData((old) =>
          old.map((row, index) =>
            index === rowIndex ? originalData[rowIndex] : row
          )
        );
      },
      updateRow: (rowIndex: number) => {
        updateRow(data[rowIndex].id, data[rowIndex]);
      },
      updateData: (
        rowIndex: number,
        columnId: string,
        value: string,
        isValid: boolean
      ) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
        setValidRows((old) => ({
          ...old,
          [rowIndex]: { ...old[rowIndex], [columnId]: isValid },
        }));
      },
      addRow: () => {
        const id = Math.floor(Math.random() * 10000);
        const newRow: Student = {
          id,
          studentNumber: id,
          name: "",
          dateOfBirth: "",
          major: "",
        };
        setData([...data, newRow]);
      },
      removeRow: (rowIndex: number) => {
        setData(data.filter((_, index) => index !== rowIndex));
      },
      removeSelectedRows: (selectedRows: number[]) => {
        setData(data.filter((_, index) => !selectedRows.includes(index)));
      },
    },
  });

  const handleFinalSubmit = () => {
    console.log("Final data:", data);
  };

  return (
    <article className="table-container">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={table.getCenterLeafColumns().length} align="right">
              <FooterCell table={table} />
            </th>
          </tr>
        </tfoot>
      </table>
      <button onClick={handleFinalSubmit}>Submit Changes</button>
      {/* <pre>{JSON.stringify(data, null, "\t")}</pre> */}
    </article>
  );
};
