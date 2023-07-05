import Form from "@/components/form/Form";
import FormTitle from "@/components/form/FormTitle";

const Register = () => {
  const heading = "Create Account";
  const paragraph =
    "Lacus sed neque vel vestibulum ullamcorper purus. Erat semper dictumt.";

  return (
    <div className="max-w-xs mx-auto">
      <div className="flex flex-col h-[80vh] justify-center items-center gap-5">
        <FormTitle heading={heading} paragraph={paragraph} variant="medium" />
        <Form buttonText="Register" />
      </div>
    </div>
  );
};

export default Register;
