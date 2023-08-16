interface Props {
  type: string;
  placeholder: string;
  state: {
    state: string;
    setState: (state: string) => void;
  };
}

const Input = (props: Props) => {
  const {
    type,
    placeholder,
    state: { state, setState },
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="mt-0 block w-full px-0.5 border-0 border-b-[1px] border-slate-500 focus:ring-0 focus:border-black text-sm font-light"
      value={state}
      onChange={handleChange}
    />
  );
};

export default Input;
