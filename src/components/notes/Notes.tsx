import Note from "@/components/notes/Note";
import { Jot } from "@/types/jot";

interface Props {
  data: { [key: string]: Jot };
}

const Notes = (props: Props) => {
  const { data } = props;
  const jots = Object.values(data);
  console.log(Object.values(data));

  const renderContent = jots.map((jot) => <Note key={jot.id} data={jot} />);

  if (jots.length === 0 || !jots) {
    return <p>no jots yet</p>;
  }

  return (
    <div className="grid grid-cols-1  gap-8  xs:grid-cols-2 lg:grid-cols-3 sm:gap-16">
      {renderContent}{" "}
    </div>
  );
};

export default Notes;
