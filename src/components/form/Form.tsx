const Form = () => {
  return (
    <div className="w-full flex flex-col gap-5 mb-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="mt-0 block w-full px-0.5 border-0 border-b-[1px] border-neutral-500 focus:ring-0 focus:border-black "
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="mt-0 block w-full px-0.5 border-0 border-b-[1px] border-neutral-500 focus:ring-0 focus:border-black "
      />
      <input
        type="password"
        name="password"
        id=""
        placeholder="Password"
        className="mt-0 block w-full px-0.5 border-0 border-b-[1px] border-neutral-500 focus:ring-0 focus:border-black "
      />
    </div>
  );
};

export default Form;
