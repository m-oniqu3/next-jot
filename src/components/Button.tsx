type Props = {
  children: string;
};

const Button = (props: Props) => {
  const { children } = props;

  return (
    <button className="bg-black text-white px-4 py-1.5 w-full hover:bg-gray-900 rounded-md duration-300">
      {children}
    </button>
  );
};

export default Button;
