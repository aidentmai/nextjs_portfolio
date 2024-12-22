"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import AspNetIcon from "@/assets/icons/aspnet.svg";
import PythonIcon from "@/assets/icons/python.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "ASP.NET Core",
    iconType: AspNetIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Tennis",
    emoji: "🎾",
    left: "5%",
    top: "5%",
  },
  {
    title: "Running",
    emoji: "🏃‍♂️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Video Games",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Movies",
    emoji: "🎥",
    left: "60%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "65%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
    left: "45%",
    top: "65%",
  },
];

export const AboutSection = () => {
  const constrantRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am and what I do!"
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Technical Toolbox"
              description="Explore the technologies and tools I use to craft my applications"
              className=""
            />
            <ToolboxItems
              items={toolboxItems}
              className=""
              itemsWrapperClassName="animate-move-left [animation-duration:30s]"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:15s]"
            />
          </Card>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3">
              <CardHeader
                title="My Hobbies"
                description="Explore my interests and hobbies beyond just coding"
                className="px-6 py-6"
              />
              <div className="relative flex-1 " ref={constrantRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-green-400 to-cyan-600 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constrantRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-3">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-[-20px] -translate-y-[-15px] lg:-translate-x-[-50px] lg:-translate-y-[-30px] size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-cyan-600 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-cyan-600 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20 bg-transparent"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
