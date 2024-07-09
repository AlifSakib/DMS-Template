import React, { useState, useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "rizzui";

interface HolidayTableProps {
  name: string;
}

const HolidayTable: React.FC<HolidayTableProps> = ({ name }) => {
  const { control, getValues, setValue, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  const [editableIndexes, setEditableIndexes] = useState<number[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [duplicates, setDuplicates] = useState<number[]>([]);

  const checkDuplicates = () => {
    const dates = fields.map((field, i) => ({
      date: getValues(`${name}.${i}.date`),
      index: i,
    }));

    const duplicateIndexes = dates
      .filter((v, i, a) => a.findIndex((t) => t.date === v.date) !== i)
      .map((v) => v.index);

    setDuplicates(duplicateIndexes);
  };

  useEffect(() => {
    checkDuplicates();
  }, [fields, getValues, name]);

  const handleRowClick = (index: number) => {
    if (!editableIndexes.includes(index)) {
      setEditableIndexes([...editableIndexes, index]);
    }
  };

  const handleDateChange = (index: number, value: string) => {
    setValue(`${name}.${index}.date`, value);

    // After the date is confirmed, check for duplicates
    const dates = fields.map((field, i) => getValues(`${name}.${i}.date`));
    const uniqueDates = new Set(dates);
    if (uniqueDates.size < dates.length) {
      setDuplicates(
        fields.filter((_, i) => dates.indexOf(dates[i]) !== i).map((_, i) => i)
      );
    } else {
      setDuplicates([]);
    }

    setEditableIndexes(editableIndexes.filter((i) => i !== index));
  };

  const addHoliday = () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    append({ date: today });
    setEditableIndexes([...editableIndexes, fields.length]); // Mark the newly added holiday as editable
  };

  const formatDate = (dateString: string) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    } as const;
    return new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString)
    );
  };

  return (
    <div className="flex flex-col items-start space-y-4 w-[400px]">
      <div className="overflow-x-auto border border-gray-200 rounded-lg w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fields.map((field, index) => (
              <tr
                key={field.id}
                onClick={() => {
                  handleRowClick(index);
                  setIndex(index);
                }}
                className={`${
                  editableIndexes.includes(index) ? "bg-gray-100" : ""
                } ${
                  duplicates.includes(index) ? "bg-red-100" : ""
                } cursor-pointer`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {editableIndexes.includes(index) ? (
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md"
                      {...control.register(`${name}.${index}.date`, {
                        onBlur: (e) => handleDateChange(index, e.target.value),
                      })}
                      defaultValue={watch(`${name}.${index}.date`) || ""}
                    />
                  ) : (
                    <span>
                      {formatDate(getValues(`${name}.${index}.date`)) ||
                        "No Date Selected"}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex space-x-2">
        <Button variant="flat" onClick={addHoliday}>
          + Add Holiday
        </Button>
        <Button
          variant="flat"
          onClick={(e) => {
            e.stopPropagation();
            remove(index);
          }}
        >
          - Remove
        </Button>
      </div>
    </div>
  );
};

export default HolidayTable;
