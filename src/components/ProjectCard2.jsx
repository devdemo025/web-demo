import { projectList } from "../constants";
import Reveal from "./Reveal";
const ProjectCard2 = () => {
  return (
    <div id="project">
      <div className="w-3 h-3 bg-black rounded-full max-sm:block hidden relative top-[50px] left-[16px] " />
      <Reveal>
        <h3
          className="font-montserrat  tracking-tight w-[100px]  font-black text-4xl md:text-[30px] text-black-gray relative
          max-sm:text-xl max-sm:pl-3 left-[15%] top-[60px] max-sm:left-[25px] max-sm:top-[30px] 
          max-md:left-[130px] max-md:top-[80px]
        "
        >
          PROJECTS
        </h3>
      </Reveal>

      {projectList.map((project, index) => (
        <div
          className="max-container xl:min-h-screen w-full pt-10 max-sm:p-0 max-sm:pl-10 max-sm:pt-5 max-sm:pb-10"
          key={index}
        >
          <div className="w-3 h-3 bg-black rounded-full max-sm:block hidden relative top-[85px] -left-[24px]" />

          <Reveal>
            <div className=" w-full ">
              <img
                src={project.image}
                alt="project"
                className="w-[70%] h-[80%] max-sm:w-[70%] max-sm:h-[75%] relative top-[80px] left-[200px] 
              max-sm:top-[17px] max-sm:left-[2px]  max-md:top-[60px] max-md:left-[20%] "
              />

              <a
                href={project.href}
                target="_blank"
                className=" font-montserrat font-semibold hover:underline underline-offset-8
              text-black-gray relative xl:left-[240px] md:left-[220px] -bottom-[38px] md:-bottom-[45px] px-[20px] py-[20px] cursor-pointer
                max-sm:px-[0px] max-sm:py-[2px] max-sm:text-[10px] md:text-sm max-md:text-[12px] max-sm:bg-transparent max-sm:text-black-gray
                max-sm:left-[245px] max-sm:bottom-[70px] max-md:left-[140px] max-md:-bottom-[30px]
                "
              >
                VIEW PROJECT
              </a>
            </div>
          </Reveal>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard2;
