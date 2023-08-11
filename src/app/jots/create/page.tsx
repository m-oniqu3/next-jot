"use client";

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
    <form className="w-full max-w-xl mx-auto flex flex-col gap-4 text-[#373736]">
      <textarea
        className="textarea text-3xl font-bold h-10 focus:ring-0"
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
          <input type="radio" name="category" value="general" />
          <label htmlFor="general"> general</label>
        </span>

        <span className="flex justify-start items-center gap-1">
          <input type="radio" name="category" value="todo" />
          <label htmlFor="todo"> todo</label>
        </span>

        <span className="flex justify-start items-center gap-1">
          <input type="radio" name="category" value="random" />
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
