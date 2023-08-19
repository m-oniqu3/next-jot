import { Jot } from "@/types/jot";

interface Props {
  data: Jot;
}

const Note = (props: Props) => {
  const { data } = props;
  return (
    <div className="p-6 rounded-lg shadow-sm border border-gray-100 mb-5 md:mb-10 break-inside">
      <article className=" h-fit  flex flex-col gap-2 ">
        <h2 className="font-bold text-xl line-clamp-2 md:text-2xl ">
          {data.title}
        </h2>
        <p>{data.subtitle}</p>
      </article>
    </div>
  );
};

export default Note;
