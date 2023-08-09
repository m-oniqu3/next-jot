"use client";

type Props = {
  children: string;
  onClick: () => void;
};

const Button = (props: Props) => {
  const { children, onClick } = props;

  const handleClick = () => onClick();

  return (
    <button
      onClick={handleClick}
      className=" bg-black text-white px-4 py-1.5 w-full hover:bg-gray-900 rounded-md duration-300 text-[.9rem]"
    >
      {children}
    </button>
  );
};

export default Button;
