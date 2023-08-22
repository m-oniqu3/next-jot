"use client";

import Button from "@/components/Button";
import Loading from "@/components/Loading";
import { createNewUser, logUserIn } from "@/components/firebase/firebase";
import FormTitle from "@/components/form/FormTitle";
import Input from "@/components/form/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  buttonText: "login" | "register";
  heading: string;
  paragraph: string;
  variant: "medium" | "large";
};

const Form = (props: Props) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const { buttonText, heading, paragraph, variant } = props;

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
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (buttonText.toLowerCase() === "register") {
      setLoading(true);
      try {
        await createNewUser(name, email, password);
        toast.success("Account created");
        router.push("/jots");
      } catch (error: any) {
        toast.error(error.message);
      }
      setLoading(false);
    } else if (buttonText.toLowerCase() === "login") {
      setLoading(true);
      try {
        const isLoggedIn = await logUserIn(email, password);
        if (isLoggedIn) {
          toast.success("Welcome back");
          router.push("/jots");
        }
      } catch (error: any) {
        toast.error(error.message);
      }
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      <FormTitle heading={heading} paragraph={paragraph} variant={variant} />
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
            onValidityChange={(isValid) =>
              handleValidityChange("name", isValid)
            }
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
    </>
  );
};

export default Form;
