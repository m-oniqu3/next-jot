import {
  validateEmail,
  validateName,
  validatePassword,
} from "@/components/form/validateForm";
import { useEffect, useState } from "react";

interface Props {
  type: string;
  placeholder: string;
  state: {
    state: string;
    setState: (state: string) => void;
  };
  isValid: boolean;
  onValidityChange: (isValid: boolean) => void;
}
type Feedback = {
  error: null | string;
  valid: boolean;
};

const Input = (props: Props) => {
  const [feedBack, setFeedBack] = useState<Feedback>({
    error: null,
    valid: false,
  });

  const {
    type,
    placeholder,
    state: { state, setState },
    isValid,
    onValidityChange,
  } = props;

  function validator(type: string) {
    if (type === "text") {
      return validateName;
    } else if (type === "email") {
      return validateEmail;
    } else if (type === "password") {
      return validatePassword;
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);

    const result = validator(type);
    if (result) {
      setFeedBack(result(e.target.value));
    }
  };

  useEffect(() => {
    onValidityChange(feedBack.valid);
  }, [feedBack]);

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-0 block w-full px-0.5 border-0 border-b-[1px] border-slate-500 focus:ring-0 focus:border-black text-sm font-light"
        value={state}
        onChange={handleChange}
      />
      <p className="text-sm text-red-600 h-6">{feedBack.error}</p>
    </div>
  );
};

export default Input;
