import Image from "next/image";
import { FeaturedTitle } from "../ui/FeaturedTitle";
import creativeProcessImg from "@/assets/images/creative-process-bg.png";
import { creativeProcess } from "@/data/creativeProcess";
import { CreativeProcessArticle } from "./CreativeProcessArticle";

export const CreativeProcess = () => {
  return (
    <section className="grid xl:grid-cols-2 grid-cols-1 mt-12">
      <div className="mx-auto max-xl:text-center">
        <header>
          <FeaturedTitle
            whiteText="WHAT'S OUR CREATIVE "
            yellowText="PROCESS"
            end="?"
          />
        </header>

        {creativeProcess.map((process, index) => (
          <CreativeProcessArticle key={index} {...process} />
        ))}
      </div>

      <Image
        src={creativeProcessImg}
        width={710}
        height={522}
        alt="Creative process illustration"
        className="xl:ml-auto mx-auto max-xl:mt-12"
      />
    </section>
  );
};
