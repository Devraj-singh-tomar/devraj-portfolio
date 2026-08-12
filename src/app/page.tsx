import Engineering from "@/components/sections/engineering/engineering";
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

      <Engineering />

      {/*=======
        CONTACT SECTION 

        IF WANTED
       =======*/}
    </>
  );
}
