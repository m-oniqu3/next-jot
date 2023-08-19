"use client";

import Button from "@/components/Button";
import Input from "@/components/form/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  buttonText: "login" | "register";
};

const Form = (props: Props) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { buttonText } = props;
  console.log(buttonText);

  const handleClick = () => {
    console.log(name, email, password);
    // router.push("/jots");
  };

  return (
    <div className="w-full flex flex-col gap-6 mb-4">
      {buttonText.toLowerCase() === "register" && (
        <Input
          type="text"
          placeholder="Name"
          state={{ state: name, setState: setName }}
        />
      )}
      <Input
        type="email"
        placeholder="Email"
        state={{ state: email, setState: setEmail }}
      />
      <Input
        type="password"
        placeholder="Password"
        state={{ state: password, setState: setPassword }}
      />

      <Button onClick={handleClick}>{buttonText}</Button>
    </div>
  );
};

export default Form;
