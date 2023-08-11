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
        <main className="pt-9">{children}</main>
      </Container>
    </div>
  );
};

export default NotesLayout;
