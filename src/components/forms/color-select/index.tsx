import { getErrorMessageByPropertyName } from "../../../utils/schema-validators";
import { useFormContext, Controller } from "react-hook-form";
import React from "react";

interface IColorSelect {
  name: string;
  size?: "large" | "small";
  value?: string | undefined;
  id?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const ColorSelect = ({
  name,
  size = "large",
  id,
  validation,
  label,
  required,
}: IColorSelect) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  const options = [
    // black, blue , green, red , yellow
    {
      id: "1",
      value: "black",
      label: "Black",
      colorCode: "rgb(53, 53, 53)",
    },
    { id: "2", value: "blue", label: "Blue", colorCode: "rgb(0, 137, 207)" },
    { id: "3", value: "green", label: "Green", colorCode: "rgb(54, 141, 46)" },
    { id: "4", value: "red", label: "Red", colorCode: "rgb(187, 57, 55)" },
    {
      id: "5",
      value: "yellow",
      label: "Yellow",
      colorCode: "rgb(252, 178, 0)",
    },
  ];

  // Set the default value to "Green"
  React.useEffect(() => {
    setValue(name, "green");
  }, [setValue, name]);

  return (
    <div
      className={`color-select-container ${
        size === "large" ? "w-full" : "w-1/2"
      } my-4`}
    >
      <div className="color-select-wrapper">
        {label && (
          <label
            htmlFor={id}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="color-select-field flex flex-wrap gap-0.5">
          <Controller
            control={control}
            name={name}
            rules={validation}
            defaultValue="Green"
            render={({ field }) => (
              <div className="flex gap-1">
                {options.map((option, index) => (
                  <label
                    key={option.value}
                    className={`color-option-label flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition duration-300 ${
                      field.value === option.value
                        ? "border-2 border-gray-950 transform scale-50"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={name}
                      value={option.value}
                      className="sr-only"
                      onChange={() => field.onChange(option.value)}
                      checked={field.value === option.value}
                    />
                    <span className="sr-only">{option.label}</span>
                    <span
                      className="block w-5 h-5 rounded-full"
                      style={{ backgroundColor: option.colorCode }}
                    ></span>
                  </label>
                ))}
              </div>
            )}
          />
          {errorMessage && (
            <small className="text-red-500 text-xs italic mt-2">
              {errorMessage}
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorSelect;
