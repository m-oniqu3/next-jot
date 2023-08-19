"use client";

import Button from "@/components/Button";
import { createNewUser } from "@/components/firebase/firebase";
import Input from "@/components/form/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  buttonText: "login" | "register";
};

const Form = (props: Props) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [inputValidities, setInputValidities] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleValidityChange = (inputName: string, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [inputName]: isValid,
    }));
  };

  const { buttonText } = props;

  const handleCheckFormValidity = () => {
    if (buttonText.toLowerCase() === "login") {
      setIsFormValid(inputValidities.email && inputValidities.password);
    } else {
      setIsFormValid(
        inputValidities.name &&
          inputValidities.email &&
          inputValidities.password
      );
    }

    // console.log(name, email, password);
    // router.push("/jots");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (buttonText.toLowerCase() === "register") {
      createNewUser(name, email, password)
        .then(() => toast.success("Account created"))
        .catch((error) => {
          console.log(error);
        });

      router.push("/jots");
    } else {
    }
  };

  return (
    <div
      className="w-full flex flex-col gap-4 mb-4"
      onKeyUp={handleCheckFormValidity}
    >
      {buttonText.toLowerCase() === "register" && (
        <Input
          type="text"
          placeholder="Name"
          state={{ state: name, setState: setName }}
          isValid={inputValidities.name}
          onValidityChange={(isValid) => handleValidityChange("name", isValid)}
        />
      )}
      <Input
        type="email"
        placeholder="Email"
        state={{ state: email, setState: setEmail }}
        isValid={inputValidities.email}
        onValidityChange={(isValid) => handleValidityChange("email", isValid)}
      />
      <Input
        type="password"
        placeholder="Password"
        state={{ state: password, setState: setPassword }}
        isValid={inputValidities.password}
        onValidityChange={(isValid) =>
          handleValidityChange("password", isValid)
        }
      />

      <Button
        disabled={!isFormValid}
        onClick={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Form;
