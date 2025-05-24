'use client'
import React, { useState, useEffect } from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaDocker, FaAws } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiRedux,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDigitalocean,
  SiFirebase,
  SiGooglecloud,
  SiFigma,
  SiMongodb,
  SiNetlify,
} from "react-icons/si";

const icons = [
  <FaReact key="react" />,
  <FaCss3Alt key="css" />,
  <FaHtml5 key="html" />,
  <SiFigma key="figma" />,
  <SiRedux key="redux" />,
  <FaFlutter key="flutter" />,
  <SiFirebase key="firebase" />,
  <SiRedis key="redis" />,
  <SiPostgresql key="pgsql" />,
  <SiMysql key="mysql" />,
  <SiMongodb key="mongodb" />,
  <SiGooglecloud key="gcp" />,
  <RiNextjsFill key="Nextjs" />,
  <FaDocker key="docker" />,
  <SiDigitalocean key="do" />,
  <SiNetlify key="netlify" />,
  <FaAws key="aws" />,
];

const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

interface IconStyle {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
}

const TechDiagram: React.FC = () => {
  const [styles, setStyles] = useState<IconStyle[]>([]);

  useEffect(() => {
    const generatedStyles = icons.map(() => ({
      top: `${getRandom(5, 85)}%`,
      left: `${getRandom(5, 90)}%`,
      animationDuration: `${getRandom(20, 40)}s`,
      animationDelay: `${getRandom(0, 10)}s`,
    }));
    setStyles(generatedStyles);
  }, []);

  // Render placeholder dulu saat styles belum siap supaya SSR dan client sinkron
  if (styles.length === 0) {
    return <div className="relative w-full md:h-[350px] h-[200px] rounded-xl overflow-hidden my-2" />;
  }

  return (
    <div className="relative w-full md:h-[350px] h-[200px] rounded-xl overflow-hidden my-2">
      {icons.map((Icon, i) => (
        <div
          key={i}
          className="absolute md:text-4xl text-2xl hover:scale-125 cursor-pointer hover:text-9xl transition-all duration-500 hover:text-blue-400 ease-out animate-[floatRandom_linear_infinite]"
          style={styles[i]}
        >
          {Icon}
        </div>
      ))}
    </div>
  );
};

export default TechDiagram;
