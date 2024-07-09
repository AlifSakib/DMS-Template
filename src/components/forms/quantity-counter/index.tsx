import { useState } from "react";
import { Input } from "rizzui";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

interface QuantityCounterProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
}

const QuantityCounter = ({
  label = "Quantity",
  min = 0,
  max,
  step = 1,
  initialValue = 0,
}: QuantityCounterProps) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    if (max !== undefined && value >= max) return;
    setValue((prevValue) => prevValue + step);
  };

  const handleDecrement = () => {
    if (value <= min) return;
    setValue((prevValue) => prevValue - step);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= min && (max === undefined || newValue <= max)) {
      setValue(newValue);
    }
  };

  return (
    <Input
      type="number"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
      suffix={
        <div className="-mr-3.5 grid gap-[2px] p-0.5 rtl:-ml-3.5 rtl:-mr-0">
          <button
            type="button"
            className="rounded-[3px] bg-gray-100 py-0.5 px-1.5 hover:bg-gray-200 focus:bg-gray-200"
            onClick={handleIncrement}
          >
            <ChevronUpIcon className="h-3 w-3" />
          </button>
          <button
            type="button"
            className="rounded-[3px] bg-gray-100 py-0.5 px-1.5 hover:bg-gray-200 focus:bg-gray-200"
            onClick={handleDecrement}
          >
            <ChevronDownIcon className="h-3 w-3" />
          </button>
        </div>
      }
    />
  );
};

export default QuantityCounter;
