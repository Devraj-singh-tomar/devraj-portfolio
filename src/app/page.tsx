import Engineering from "@/components/layout/engineering-section/engineering";
import Experience from "@/components/layout/experience-section/experience";
import Hero from "@/components/layout/hero-section.tsx/hero";
import Projects from "@/components/layout/project-section/projects";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
