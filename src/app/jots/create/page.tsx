"use client";

import Image from "next/image";
import { RefObject, useRef } from "react";

const CreateNote = () => {
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const subtitle = useRef<HTMLTextAreaElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);

  const handleInput = function (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    ref: RefObject<HTMLTextAreaElement>,
    height: number
  ) {
    ref.current!.style.height = `${height}rem`;
    ref.current!.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <form className="w-full max-w-xl mx-auto flex flex-col gap-5 text-[#373736] relative">
      <figure className="bg p-2 h-[40px] w-[40px] rounded-[100%] absolute right-0 cursor-pointer hover:bg-black transition-all ease-in-out duration-300">
        <Image
          src="/assets/checkmark.svg"
          alt="checkmark"
          className="w-full h-full"
          width={20}
          height={20}
        />
      </figure>
      <textarea
        className="textarea text-3xl font-bold h-10 focus:ring-0 w-[88%]"
        placeholder="title..."
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleInput(e, titleRef, 2.5)
        }
        ref={titleRef}
      ></textarea>

      <textarea
        className="textarea text-xl h-7 focus:ring-0"
        placeholder="subtitle..."
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleInput(e, subtitle, 1.75)
        }
        ref={subtitle}
      ></textarea>

      <div className="grid grid-cols-3  max-w-xs">
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
        className="textarea  text-base h-32 focus:ring-0 "
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
