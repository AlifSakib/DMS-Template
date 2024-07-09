// import React, { useState, useEffect } from "react";
// import { useFieldArray, useFormContext } from "react-hook-form";
// import { Button, Input } from "rizzui";

// interface HolidayTableProps {
//   name: string;
// }

// const HolidayTable: React.FC<HolidayTableProps> = ({ name }) => {
//   const { control, getValues, setValue, watch } = useFormContext();
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: name,
//   });

//   const [editableIndexes, setEditableIndexes] = useState<number[]>([]);
//   const [index, setIndex] = useState<number>(0);
//   const [duplicates, setDuplicates] = useState<number[]>([]);

//   useEffect(() => {
//     const checkDuplicates = () => {
//       const dates = fields.map((field, i) => ({
//         date: getValues(`${name}.${i}.date`),
//         index: i,
//       }));

//       const duplicateIndexes = dates
//         .filter((v, i, a) => a.findIndex((t) => t.date === v.date) !== i)
//         .map((v) => v.index);

//       setDuplicates(duplicateIndexes);
//     };

//     checkDuplicates();
//   }, [fields, getValues, name]);

//   const handleRowClick = (index: number) => {
//     if (!editableIndexes.includes(index)) {
//       setEditableIndexes([...editableIndexes, index]);
//     }
//   };

//   const handleDateChange = (index: number, value: string) => {
//     setValue(`${name}.${index}.date`, value);

//     // After the date is confirmed, check for duplicates
//     const dates = fields.map((field, i) => getValues(`${name}.${i}.date`));
//     const uniqueDates = new Set(dates);
//     if (uniqueDates.size < dates.length) {
//       setDuplicates(
//         fields.filter((_, i) => dates.indexOf(dates[i]) !== i).map((_, i) => i)
//       );
//     } else {
//       setDuplicates([]);
//     }

//     setEditableIndexes(editableIndexes.filter((i) => i !== index));
//   };

//   const addHoliday = () => {
//     const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
//     append({ date: today });
//     setEditableIndexes([...editableIndexes, fields.length]); // Mark the newly added holiday as editable
//   };

//   const formatDate = (dateString: string) => {
//     const options = {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     } as const;
//     return new Intl.DateTimeFormat("en-US", options).format(
//       new Date(dateString)
//     );
//   };

//   return (
//     <div className="flex flex-col items-start space-y-4 w-[400px] ">
//       <div className="overflow-x-auto border border-gray-200 rounded-lg w-full h-[400px]">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 Date
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {fields.map((field, index) => (
//               <tr
//                 key={field.id}
//                 onClick={() => {
//                   handleRowClick(index);
//                   setIndex(index);
//                 }}
//                 className={`${
//                   editableIndexes.includes(index) ? "bg-gray-100" : ""
//                 } ${
//                   duplicates.includes(index) ? "bg-red-100" : ""
//                 } cursor-pointer`}
//               >
//                 <td className="px-6  whitespace-nowrap text-sm text-gray-500">
//                   {editableIndexes.includes(index) ? (
//                     <Input
//                       type="date"
//                       className="w-full border border-gray-300 rounded-md"
//                       {...control.register(`${name}.${index}.date`, {
//                         onBlur: (e) => handleDateChange(index, e.target.value),
//                       })}
//                       defaultValue={watch(`${name}.${index}.date`) || ""}
//                     />
//                   ) : (
//                     <div className="py-3">
//                       <span>
//                         {formatDate(getValues(`${name}.${index}.date`)) ||
//                           "No Date Selected"}
//                       </span>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="flex space-x-2">
//         <Button variant="flat" onClick={addHoliday}>
//           + Add Holiday
//         </Button>
//         <Button
//           variant="flat"
//           onClick={(e) => {
//             e.stopPropagation();
//             remove(index);
//           }}
//         >
//           - Remove
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HolidayTable;

import React, { useState } from "react";

interface Holiday {
  id: number;
  date: string;
  isEditing: boolean;
}

const HolidayTable: React.FC = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [newDate, setNewDate] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAddHoliday = () => {
    if (!newDate) return;

    const dateExists = holidays.some((holiday) => holiday.date === newDate);

    if (dateExists) {
      setError("This date already exists.");
      return;
    }

    setHolidays([
      ...holidays,
      { id: holidays.length + 1, date: newDate, isEditing: false },
    ]);
    setNewDate("");
    setError("");
  };

  const handleEditHoliday = (id: number, date: string) => {
    const updatedHolidays = holidays.map((holiday) =>
      holiday.id === id ? { ...holiday, date, isEditing: false } : holiday
    );
    setHolidays(updatedHolidays);
  };

  const handleDeleteHoliday = (id: number) => {
    setHolidays(holidays.filter((holiday) => holiday.id !== id));
  };

  const handleToggleEdit = (id: number) => {
    const updatedHolidays = holidays.map((holiday) =>
      holiday.id === id
        ? { ...holiday, isEditing: !holiday.isEditing }
        : holiday
    );
    setHolidays(updatedHolidays);
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="border border-gray-300 p-2 mr-2"
        />
        <button
          type="button"
          onClick={handleAddHoliday}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add
        </button>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Holiday Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday) => (
            <tr
              key={holiday.id}
              className={`${
                holiday.date === newDate && error ? "border-red-500" : ""
              }`}
            >
              <td className="py-2 px-4 border-b">
                {holiday.isEditing ? (
                  <input
                    type="date"
                    value={holiday.date}
                    onChange={(e) =>
                      handleEditHoliday(holiday.id, e.target.value)
                    }
                    className="border border-gray-300 p-2"
                  />
                ) : (
                  <span>{holiday.date}</span>
                )}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  type="button"
                  onClick={() => handleToggleEdit(holiday.id)}
                  className="bg-yellow-500 text-white p-2 rounded mr-2"
                >
                  {holiday.isEditing ? "Save" : "Edit"}
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteHoliday(holiday.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HolidayTable;
