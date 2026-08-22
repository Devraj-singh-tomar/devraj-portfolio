import EngineeringPreview from "@/components/sections/engineering/engineering-preview";
import Experience from "@/components/sections/experience/experience";
import Hero from "@/components/sections/hero/hero";
import ProjectsPreview from "@/components/sections/project/projects-preview";

export default function Home() {
  return (
    <>
      {/*=======
       HERO SECTION 
       =======*/}
      <Hero />

      {/*=======
        EXPERIENCE & OPENSOURCE SECTION 
       =======*/}

      <Experience />

      {/*=======
       PROJECT SECTION 
       =======*/}

      <ProjectsPreview />

      {/*=======
        ENGINEERING SECTION 
       =======*/}

      <EngineeringPreview />

      {/*=======
        CONTACT SECTION 

        IF WANTED
       =======*/}
    </>
  );
}
