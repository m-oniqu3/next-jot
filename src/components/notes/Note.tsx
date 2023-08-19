import { Jot } from "@/types/jot";

interface Props {
  data: Jot;
}

const Note = (props: Props) => {
  const { data } = props;
  return (
    <article className="h-fit pl-6  border-l-8 border-gray-100 mb-8 md:mb-16 break-inside max-w-xs  hover:border-black transition-all ease-in-out \ cursor-pointer">
      <h2 className="font-bold text-xl line-clamp-2 text-slate-800 lowercase">
        {data.title}
      </h2>
      <p className="text-base">{data.subtitle}</p>
    </article>
  );
};

export default Note;
