import Link from "next/link";

export const ProjectHeader = () => {
  return (
    <div className="bg-(--yellow) h-[448px] grid grid-cols-2">
      <header>
        <h2 className="max-w-[450px] font-black text-[#151515] text-5xl mx-auto mt-10">
          OUR RECENT PROJECTS WE DID
        </h2>
      </header>

      <Link
        href={"/"}
        className="w-[150px] h-14 bg-black flex items-center justify-center font-extrabold rounded-xl mt-14 mx-auto"
      >
        All Projects
      </Link>
    </div>
  );
};
