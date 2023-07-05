import Form from "@/components/form/Form";
import FormTitle from "@/components/form/FormTitle";

const Login = () => {
  const heading = "Login";
  const paragraph =
    "Welcome back! Login to your account to jot down your thoughts and ideas.";

  return (
    <div className="max-w-xs mx-auto">
      <div className="flex flex-col h-[80vh] justify-center items-center gap-5">
        <FormTitle heading={heading} paragraph={paragraph} variant="medium" />
        <Form buttonText="Login" />
      </div>
    </div>
  );
};

export default Login;
