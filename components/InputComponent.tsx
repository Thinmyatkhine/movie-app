import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";
import { useForm, useFormContext } from "react-hook-form";

interface InputComponentProps {
    label: string;
    name: string;
    type?: HTMLInputTypeAttribute;
}

const InputComponent: React.FC<InputComponentProps> = ({label, name, type = "text"}) => {
    const {register} = useFormContext();
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="">{label}</label>
      <input
        className={clsx(
          "border-2 border-black/10 focus:border-black/70 outline-none",
          "px-3 py-1 rounded-lg"
        )}
        type={type}
        {...register(name)}
      />
    </div>
  );
};

export default InputComponent;
