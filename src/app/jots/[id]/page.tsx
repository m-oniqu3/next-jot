"use client";

import Loading from "@/components/Loading";
import { getNoteDetails } from "@/components/firebase/firebase";
import { Jot } from "@/types/jot";
import { useEffect, useRef, useState } from "react";

const NoteDetail = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState<Jot | null>(null);
  const [error, setError] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");

    if (user) {
      setLoading(true);
      const note = getNoteDetails(user, params.id);
      note.then((data) => setDetails(data)).catch(() => setError(true));
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    if (details && contentRef.current) {
      contentRef.current.innerHTML = details.content.replace(
        "\n",
        "<br><br />"
      );
    }
  }, [details]);
  if (loading || !details) return <Loading />;
  if (error) return <p>error</p>;

  return (
    <article className="flex flex-col gap-4 mb-16 max-w-xl mx-auto">
      <h1 className="border-l-8 border-orange-500  pl-6 font-bold text-3xl text-orange-500 md:text-4xl">
        {details.title}
      </h1>
      <p className="border-l-8 border-gray-200 pl-6 font-medium text-2xl text-[#373736]">
        {details.subtitle}
      </p>
      <p className="border-l-8 border-gray-200 pl-6 font-medium text-[#373736] flex gap-8 md:gap:-16">
        <span> &gt; {details.category}</span>

        <span className="lowercase">
          &gt; &nbsp;
          {new Date(details.id).toDateString().split(" ").slice(1).join(" ")}
        </span>
      </p>
      <p
        ref={contentRef}
        className="border-l-8 border-gray-200 pl-6 text-base font-light leading-8 text-[#373736]"
      />
    </article>
  );
};

export default NoteDetail;
