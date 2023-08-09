import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

const NotesLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />

      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default NotesLayout;
