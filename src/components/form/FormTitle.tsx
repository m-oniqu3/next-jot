type Props = {
  heading: string;
  paragraph: string;
  variant: "medium" | "large";
};

const FormTitle = (props: Props) => {
  const { heading, paragraph, variant } = props;

  const headingSize =
    variant === "medium" ? "text-2xl xs:text-3xl" : "text - 4xl xs:text - 5xl";

  return (
    <div className="flex flex-col gap-1 ">
      <h1 className={`${headingSize}  font-bold `}>{heading}</h1>
      <p className="font-light text-sm">{paragraph}</p>
    </div>
  );
};

export default FormTitle;
