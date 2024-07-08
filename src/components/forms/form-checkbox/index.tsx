import Label from "@/components/ui/label";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validators";
import { useFormContext, Controller } from "react-hook-form";
import { Checkbox } from "rizzui"; // Assuming you have this component available

interface ICheckboxOption {
  id: string;
  label: string;
  value: string;
}

interface ICheckboxInput {
  name: string;
  options: ICheckboxOption[];
  id?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormCheckbox = ({
  name,
  options,
  id,
  validation,
  label,
  required,
}: ICheckboxInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="my-4">
      <div >
        <div>
        {/* {label && (
          <Label
            htmlFor={id || name}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {label} {required && <span className="text-red-500">*</span>}
        
          </Label>
        )} */}
        </div>
        <div>
          <Controller
            control={control}
            name={name}
            defaultValue={[]} // Ensure the default value is an empty array
            rules={validation}
            render={({ field }) => (
              <div>
                {options.map((option) => (
                  <Checkbox
                    key={option.value}
                    label={option.label}
                    size="lg"
                    checked={field.value.includes(option.value)}
                    onChange={() => {
                      const newValue = field.value.includes(option.value)
                        ? field.value.filter((v: string) => v !== option.value)
                        : [...field.value, option.value];
                      field.onChange(newValue);
                    }}
                    className="mt-2"
                  />
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

export default FormCheckbox;
