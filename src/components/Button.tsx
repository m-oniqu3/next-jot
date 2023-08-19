"use client";

type Props = {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const Button = (props: Props) => {
  const { children, onClick, disabled, className } = props;

  const handleClick = () => onClick();

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`bg-black text-white px-4 py-1.5 w-full hover:bg-gray-900 rounded-md duration-300 text-[.9rem] ${disabledStyles} ${
        className ? className : ""
      }  `}
    >
      {children}
    </button>
  );
};

export default Button;
