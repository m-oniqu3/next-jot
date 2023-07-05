import Button from "@/components/Button";

type Props = {
  buttonText: string;
};
const Form = (props: Props) => {
  const { buttonText } = props;
  return (
    <div className="w-full flex flex-col gap-9 mb-4 ">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="mt-0 block w-full px-0.5 border-0 border-b-[1px] border-slate-500 focus:ring-0 focus:border-black text-sm font-light "
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="mt-0 block w-full px-0.5 border-0 border-b-[1px] border-slate-500 focus:ring-0 focus:border-black text-sm font-light"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="mt-0 block w-full px-0.5 border-0 border-b-[1px] border-slate-500 focus:ring-0 focus:border-black text-sm font-light"
      />

      <Button>{buttonText}</Button>
    </div>
  );
};

export default Form;
