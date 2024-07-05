import { getErrorMessageByPropertyName } from "../../../utils/schema-validators";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "rizzui";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormInput = ({
  name,
  type,
  size = "large",
  value,
  id,
  placeholder,
  validation,
  label,
  required,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className={`mb-4 ${size === "large" ? "w-full" : "w-1/2"}`}>
      <Controller
        control={control}
        name={name}
        rules={validation}
        render={({ field }) => (
          <Input
            label={label ? `${label} ${required ? "*" : ""}` : ""}
            placeholder={placeholder}
            type={
              type as
                | "number"
                | "search"
                | "text"
                | "time"
                | "email"
                | "tel"
                | "url"
                | "date"
                | "week"
                | "month"
                | "datetime-local"
                | undefined
            }
            {...field}
            value={value ?? field.value}
            id={id}
          />
        )}
      />
    </div>
  );
};

export default FormInput;
