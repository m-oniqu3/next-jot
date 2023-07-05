type Props = {
  heading: string;
  paragraph: string;
  variant: "medium" | "large";
};

const FormTitle = (props: Props) => {
  const { heading, paragraph, variant } = props;

  const headingSize = variant === "medium" ? "text-2xl" : "text-4xl";

  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${headingSize}  font-bold`}>{heading}</h1>
      <p className="font-light">{paragraph}</p>
    </div>
  );
};

export default FormTitle;
