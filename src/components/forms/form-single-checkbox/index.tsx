import Label from "@/components/ui/label";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validators";
import { useFormContext, Controller } from "react-hook-form";
import { Checkbox } from "rizzui"; // Assuming you have this component available

interface ICheckboxInput {
  name: string;
  id?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormSingleCheckbox = ({
  name,
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
      <div>
        {/* <div>
          {label && (
            <Label
              htmlFor={id || name}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {label} {required && <span className="text-red-500">*</span>}
            </Label>
          )}
        </div> */}
        <div>
          <Controller
            control={control}
            name={name}
            rules={validation}
            render={({ field }) => (
              <Checkbox
                label={label} // Optionally pass label here if needed
                size="lg"
                checked={field.value} // Use field.value directly for single checkbox
                onChange={(e) => field.onChange(e.target.checked)} // Update field.value directly with checkbox state
                className="mt-2"
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

export default FormSingleCheckbox;
