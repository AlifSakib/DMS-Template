import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "rizzui";

interface HolidayTableProps {
  name: string;
}

const HolidayTable: React.FC<HolidayTableProps> = ({ name }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  console.log(fields);

  return (
    <div className="flex flex-col items-start space-y-4 ">
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
              <tr key={field.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md"
                    {...control.register(`holidays.${index}.date`)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex space-x-2">
        <Button variant="flat" onClick={() => append({ date: "" })}>
          + Add Holiday
        </Button>
        <Button variant="flat" onClick={() => remove(fields.length - 1)}>
          - Remove Holiday
        </Button>
      </div>
    </div>
  );
};

export default HolidayTable;
