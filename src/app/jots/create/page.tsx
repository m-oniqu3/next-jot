"use client";

import { createJot } from "@/components/firebase/firebase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RefObject, useRef, useState } from "react";
import { toast } from "react-toastify";

const CreateNote = () => {
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const subtitle = useRef<HTMLTextAreaElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);
  const [category, setCategory] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);
  const router = useRouter();

  const handleInput = function (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    ref: RefObject<HTMLTextAreaElement>,
    height: number
  ) {
    ref.current!.style.height = `${height}rem`;
    ref.current!.style.height = `${e.target.scrollHeight}px`;
  };

  const handleRadioInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleFormValidity = () => {
    const validTitle = titleRef && titleRef.current && titleRef.current.value;
    const validSubtitle =
      subtitle && subtitle.current && subtitle.current.value;
    const validContent = content && content.current && content.current.value;

    if (validTitle && validSubtitle && validContent && !!category) {
      setIsValidForm(true);
    } else setIsValidForm(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user") || "");

    if (user) {
      const data = {
        id: Date.now(),
        title: titleRef.current!.value,
        subtitle: subtitle.current!.value,
        category,
        content: content.current!.value,
      };
      createJot(user, data).catch((error) => toast.error(error.message));

      toast.success("Jot created");
      router.push("/jots");
    }
  };

  const disabledStyles = !isValidForm
    ? "bg cursor-not-allowed"
    : "bg-black  transition-all ease-in-out duration-300 cursor-pointer";

  return (
    <form
      className="w-full max-w-xl mx-auto flex flex-col gap-5  text-[#373736] relative mb-16"
      onChange={handleFormValidity}
      onSubmit={handleSubmit}
    >
      <button
        type="submit"
        disabled={!isValidForm}
        className={` p-2 h-[40px] w-[40px] rounded-[100%] absolute right-0 ${disabledStyles} `}
      >
        <Image
          src="/assets/checkmark.svg"
          alt="checkmark"
          className="w-full h-full"
          width={20}
          height={20}
        />
      </button>
      <textarea
        className="textarea text-3xl font-bold h-10 focus:ring-0 w-[88%] border-l-8 "
        placeholder="title..."
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleInput(e, titleRef, 2.5)
        }
        ref={titleRef}
      ></textarea>

      <textarea
        className="textarea text-xl h-7 focus:ring-0 border-l-8  "
        placeholder="subtitle..."
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleInput(e, subtitle, 1.75)
        }
        ref={subtitle}
      ></textarea>

      <div
        className="grid grid-cols-3 max-w-xs border-l-8 border-gray-200   pl-4"
        onChange={handleRadioInput}
      >
        <span className="flex justify-start items-center gap-1">
          <input
            type="radio"
            name="category"
            value="general"
            className="checked:bg-black checked:hover:bg-black checked:active:bg-black checked:focus:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-black"
          />
          <label htmlFor="general"> general</label>
        </span>

        <span className="flex justify-start items-center gap-1">
          <input
            type="radio"
            name="category"
            value="todo"
            className="checked:bg-black checked:hover:bg-black checked:active:bg-black checked:focus:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-black"
          />
          <label htmlFor="todo"> todo</label>
        </span>

        <span className="flex justify-start items-center gap-1">
          <input
            type="radio"
            name="category"
            value="random"
            className="checked:bg-black checked:hover:bg-black checked:active:bg-black checked:focus:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-black"
          />
          <label htmlFor="random"> random</label>
        </span>
      </div>

      <textarea
        className="textarea text-base h-32 focus:ring-0 border-l-8 font-light leading-8"
        placeholder="jot it down..."
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleInput(e, content, 8)
        }
        ref={content}
      ></textarea>
    </form>
  );
};

export default CreateNote;
