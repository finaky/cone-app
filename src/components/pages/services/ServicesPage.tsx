import { SectionHeader } from "@/components/layout/SectionHeader";
import { services } from "@/data/services";
import { Service } from "./article/Service";

export const ServicesPage = () => {
  return (
    <main className="max-w-[2000px] relative left-1/2 -translate-x-1/2">
      <SectionHeader
        whiteText="Our Comprehensive "
        yellowText="Digital Solutions"
        description="At DigitX, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake. From captivating web design that leaves a lasting impression to seamless web development that ensures optimal functionality, we cover every aspect of your online presence."
      />

      <section className="text-center mt-24 ">
        <header className="max-w-[900px] mx-auto ">
          <h2 className="text-5xl font-semibold">
            <span className="text-(--yellow)">Our</span> Services
          </h2>
          <p className="text-white/50 mx-2">
            At DigitX, we are committed to providing exceptional digital
            solutions tailored to suit your unique business needs. Our
            comprehensive service offerings cover a wide spectrum of digital
            disciplines, including web design, app development, web development,
            and marketing.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-5 mt-16">
          {services.map((service, index) => (
            <Service key={index} {...service}></Service>
          ))}
        </div>
      </section>
    </main>
  );
};
