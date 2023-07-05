type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={`w-[95%] h-[10vh] my-0 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
