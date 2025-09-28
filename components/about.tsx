"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.8);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
        Graduated as an{" "}
        <span className="font-bold">
        Engineer majoring in Software Engineering 
        </span>
        {" "}from the {" "} 
        <span className="font-bold">
        University of Information Technology - Vietnam National University Ho Chi Minh City
        </span>
        . I&apos;ve embarked on a fulfilling journey to follow my passion for
        software development. I thrive in{" "}
        <span className="font-bold">game development</span> and
        {" "}<span className="font-bold">problem-solving.</span>

      </p>
      <p className="mb-4">
        Eager to stay ahead in the dynamic tech landscape, I am always open to
        learning new technologies. Currently on the lookout for a{" "}
        <span className="font-bold">
          full-time position as a software developer
        </span>
        , I bring a blend of skills, enthusiasm, and a commitment to continuous
        growth.
      </p>
      <p className="mb-4">
        My programming expertise extends across various aspects, with a core
        focus on{" "}
        <span className="font-bold">
          Unreal Engine (Blueprint), Unity, Python, Natural Languague Processing (NLP), C++, C#, Java, .NET, SQL Database, Algorithm, Golang, HTML/CSS/JavaScript, Unit Test, SDL/SDL2.
        </span>
      </p>
      <p>
        Outside the coding realm, I indulge in reading, leveraging E-learning
        platforms (like Udemy, Coursera), participate in algorithm/hackathon competitions
        /Codeforce contest every week, exploring the world history, playing Badminton/Football/Billiard,
        planting tree and making Terrarium.
      </p>
    </motion.section>
  );
};

export default About;
