import { getErrorMessageByPropertyName } from "../../../utils/schema-validators";
import { useFormContext, Controller } from "react-hook-form";
import { Select as RizzuiSelect } from "rizzui"; // Assuming this is how you import Select from rizzui

interface ISelectOption {
  id: string;
  value: string;
  label: string;
}

interface ISelect {
  name: string;
  options: ISelectOption[];
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormSelect = ({
  name,
  options,
  size = "large",
  value,
  id,
  placeholder,
  validation,
  label,
  required,
}: ISelect) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div
      className={`form-select-container ${
        size === "large" ? "w-full" : "w-1/2"
      } my-4`}
    >
      <div className="form-select-wrapper">
        {label && (
          <label
            htmlFor={id}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="form-select-field">
          <Controller
            control={control}
            name={name}
            rules={validation}
            render={({ field }) => (
              <RizzuiSelect
                id={id}
                label={placeholder}
                options={options}
                value={field.value}
                onChange={(newValue: ISelectOption) =>
                  field.onChange(newValue.value)
                }
              />
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

export default FormSelect;
