import { getErrorMessageByPropertyName } from "../../../utils/schema-validators";
import { useFormContext, Controller } from "react-hook-form";
import { Radio } from "rizzui"; // Assuming you have this component available

interface IRadioOption {
  id: string;
  label: string;
  value: string;
}

interface IRadioInput {
  name: string;
  options: IRadioOption[];
  id?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormRadio = ({
  name,
  options,
  id,
  validation,
  label,
  required,
}: IRadioInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="my-4">
      <div>
        {label && (
          <label
            htmlFor={id}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div>
          <Controller
            control={control}
            name={name}
            rules={validation}
            render={({ field }) => (
              <div>
                {options.map((option) => (
                  <Radio
                    key={option.value}
                    label={option.label}
                    size="sm"
                    checked={field.value === option.value}
                    onChange={() => field.onChange(option.value)}
                    className="m-2"
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

export default FormRadio;
