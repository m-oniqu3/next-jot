type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    // todo fix media query
    <div className={`w-[85%]  my-0 mx-auto  ${className ?? ""} md:w-[95%]`}>
      {children}
    </div>
  );
};

export default Container;
