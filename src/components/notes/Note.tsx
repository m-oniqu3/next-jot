import { Jot } from "@/types/jot";

interface Props {
  data: Jot;
}

const Note = (props: Props) => {
  const { data } = props;
  return (
    <article className="border-l-8 border-orange-200 h-fit pl-4 flex flex-col gap-2">
      <h2 className="font-bold text-xl md:text-2xl">{data.title}</h2>
      <p>{data.subtitle}</p>
    </article>
  );
};

export default Note;
