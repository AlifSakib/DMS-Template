import { getErrorMessageByPropertyName } from "../../../utils/schema-validators";
import { useFormContext, Controller } from "react-hook-form";

interface ITimeSelect {
  name: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const TimeSelect = ({ name, validation, label, required }: ITimeSelect) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="my-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="mt-2 p-5 w-40 bg-white rounded-lg shadow-xl">
        <div className="flex">
          <Controller
            control={control}
            name={`${name}.hours`}
            rules={validation}
            render={({ field }) => (
              <select
                {...field}
                className="bg-transparent text-xl appearance-none outline-none"
              >
                {[...Array.from(Array(12).keys())].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            )}
          />
          <span className="text-xl mr-3">:</span>
          <Controller
            control={control}
            name={`${name}.minutes`}
            rules={validation}
            render={({ field }) => (
              <select
                {...field}
                className="bg-transparent text-xl appearance-none outline-none mr-4"
              >
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
            )}
          />
          <Controller
            control={control}
            name={`${name}.ampm`}
            rules={validation}
            render={({ field }) => (
              <select
                {...field}
                className="bg-transparent text-xl appearance-none outline-none"
              >
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select>
            )}
          />
        </div>
      </div>
      {errorMessage && (
        <small className="text-red-500 text-xs italic mt-2">
          {errorMessage}
        </small>
      )}
    </div>
  );
};

export default TimeSelect;
