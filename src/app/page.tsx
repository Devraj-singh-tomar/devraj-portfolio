import EngineeringPreview from "@/components/sections/engineering/engineering-preview";
import Experience from "@/components/sections/experience/experience";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/project/projects";

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

      <Projects />

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
