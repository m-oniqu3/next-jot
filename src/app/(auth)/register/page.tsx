import Form from "@/components/form/Form";
import FormTitle from "@/components/form/FormTitle";

const Register = () => {
  const heading = "Create Account";
  const paragraph =
    "Lacus sed neque vel vestibulum ullamcorper purus. Erat semper dictumt.";

  return (
    <div className="max-w-xs mx-auto">
      <div className="flex flex-col h-[90vh] justify-center items-center gap-4">
        <FormTitle heading={heading} paragraph={paragraph} variant="medium" />
        <Form />
        <button className="bg-black text-white px-4 py-1.5 w-full hover:bg-gray-900 duration-300">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
