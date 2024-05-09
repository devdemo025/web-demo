import { ProjectCard, ProjectCard2 } from "../components";
import { ProjectBackground } from "../components";
import Reveal from "../components/Reveal";

const Project = () => {
  return (
    <section className="max-container w-full max-xl:pb-[80px] h-[100%]">
      <ProjectBackground />
      <ProjectCard2 />
    </section>
  );
};

export default Project;
