import Button from "@/components/Button";

const Form = () => {
  return (
    <div className="w-full flex flex-col gap-9 mb-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="mt-0 block w-full px-0.5 border-0 border-b-[1px] border-slate-500 focus:ring-0 focus:border-black text-sm "
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="mt-0 block w-full px-0.5 border-0 border-b-[1px] border-slate-500 focus:ring-0 focus:border-black text-sm"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="mt-0 block w-full px-0.5 border-0 border-b-[1px] border-slate-500 focus:ring-0 focus:border-black text-sm"
      />

      <Button>Register</Button>
    </div>
  );
};

export default Form;
