import Note from "@/components/notes/Note";
import { Jot } from "@/types/jot";

interface Props {
  data: { [key: string]: Jot };
}

const Notes = (props: Props) => {
  const { data } = props;
  const jots = Object.values(data).sort((a, b) => b.id - a.id);

  const renderContent = jots.map((jot) => <Note key={jot.id} data={jot} />);

  if (jots.length === 0 || !jots) {
    return <p>no jots yet</p>;
  }

  return (
    <div className="masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
      {renderContent}
    </div>
  );
};

export default Notes;
