import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import flappyBird from "@/public/flappybird.jpg";
import skyguardianunity from "@/public/SkyGuardian-unity.jpg";
import gamedeveditor from "@/public/gamedevintro-editor.jpg";
import simpletank2d from "@/public/SimpleTank2D.jpg";
import tanksunity from "@/public/Tanks-Unity.jpg";
import niceengine from "@/public/NiceEngine-interface.jpg";
import wpffcmngm from "@/public/wpffcmngm.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Unreal Engine Game Developer at World@Meta",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Participating in a Metaverse project, creating an online learning support product for teaching centers and universities. Developed by Unreal Engine 5",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - Present",
  },
  {
    title: "Unity Game Developer Internship at Wolffun Game",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "This was the time I worked as an intern at Wolffun Game company. I am involved in the Front-end development of the Thetan Rivals product. In addition, I also participated in the process of developing the map generation algorithm for the game The Glass Bridge (an unreleased product).",
    icon: React.createElement(FaLaptopCode),
    date: "Oct 2022 - March 2023",
  },
  {
    title: "Student at Nguyen Chi Thanh gifted highschool",
    location: "Gia Nghia City, Vietnam",
    description:
      "I started getting acquainted with programming, specifically C++ competitive programming. I have participated in many provincial and national competitions (VOI18, VOI19) or olympics (Olympic April 30, 2018) and won many awards/medals for competitive programming during this period. I have improved my problem-solving skills, finding good algorithms for specific problems.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2019",
  },
] as const;

export const projectData = [
  {
    title: "NiceEngine",
    description:
      "2D game engine inspired by Unity, Cocos2D, Hazel Engine and UIT's \"Game Dev intro\" course. Improved to suit students who are just starting to learn about Game Dev.",
    tags: ["Game Engine", "Java core", "OpenGL", "ImGUI", "JBox2D"],
    imageUrl: niceengine,
    link: "https://github.com/ductrungg01/NiceEngine"
  },
  {
    title: "uit-gamedevintro-editor",
    description:
      "A game tool that supports map editing for lecturers teaching the subject \"Game Development introduction\" at UIT.",
    tags: ["Game Tool", "Java core", "OpenGL", "ImGUI"],
    imageUrl: gamedeveditor,
    link: "https://github.com/ductrungg01/uit-gamedevintro-editor"
  },
  {
    title: "Tanks",
    description:
      "A tank shooting game developed using Unity.",
    tags: ["Unity", "C#", "NavMesh", "UniTask", "ObjectPool", "ScriptableObject", "Observers"],
    imageUrl: tanksunity,
    link: "https://github.com/ductrungg01/Tanks"
  },
  {
    title: "SkyGuardian",
    description:
      "A rail shooting game developed using Unity.",
    tags: ["Unity", "C#"],
    imageUrl: skyguardianunity,
    link: "https://github.com/ductrungg01/SkyGuardian"
  },
  {
    title: "SimpleTank2D",
    description:
      " Classic tank shooting game.",
    tags: ["Java core"],
    imageUrl: simpletank2d,
    link: "https://github.com/ductrungg01/GameTank2D"
  },
  {
    title: "FlappyBird clone",
    description:
      "Flappy Bird clone game make by Pygame.",
    tags: ["Python", "Pygame"],
    imageUrl: flappyBird,
    link: "https://github.com/ductrungg01/FlappyBirdPython"
  },
  {
    title: "Soccer time",
    description: "A window app to help management a football championship.",
    tags: ["Winform", "C#", ".NET", "SQL Server", "WPF", "MVVM"],
    imageUrl: wpffcmngm,
    link: "https://github.com/ductrungg01/SoccerTime"
  },
] as const;

export const skillsData = [
  "Unity",
  "C#",
  "Unreal Engine",
  "C++",
  "Java",
  "Python/Pygame",
  "OpenGL",
  "HTML/CSS/JavaScript",
  "SQL Server",
  ".NET",
  "Algorithm",
  "OOP"
] as const;
