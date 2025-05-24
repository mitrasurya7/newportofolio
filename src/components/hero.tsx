"use client";

import { dataSocialMedia } from "@/data/sosmed";
import Link from "next/link";
import Terminal from "./terminal";

export default function Hero() {
  return (
    <div className="lg:h-[50vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8  items-center justify-between lg:p-10 rounded-xl container mx-auto ">
      <section className="lg:flex flex-col my-2 p-5 pb-0 h-[200px] flex justify-center ">
        <h1
          className={`lg:text-5xl text-3xl   font-bold `}
        >{`I'm Mitrasurya`}</h1>
        <p className={`text-2xl  `}>A Software Engineer</p>
        <ul className="flex gap-2 mt-5">
          <li className="flex gap-2 ">
            {dataSocialMedia.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                title="{social.name}"
              >
                {social.icon}
              </Link>
            ))}
          </li>
        </ul>
      </section>
      <section className="lg:p-10 py-5 w-full">
        {/* buatkan terminal */}
        <Terminal />
      </section>
    </div>
  );
}
