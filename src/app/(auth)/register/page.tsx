import Form from "@/components/form/Form";

const Register = () => {
  const heading = "Create Account";
  const paragraph =
    "Lacus sed neque vel vestibulum ullamcorper purus. Erat semper dictumt.";

  return (
    <div className="max-w-xs mx-auto">
      <div className="flex flex-col h-[80vh] justify-center items-center gap-5">
        <Form
          buttonText="register"
          heading={heading}
          paragraph={paragraph}
          variant="medium"
        />
      </div>
    </div>
  );
};

export default Register;
