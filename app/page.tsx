"use client";

import { Hero } from "@/components/sections/Hero";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Chatbot } from "@/components/features/Chatbot";
import { LoadingScreen } from "@/components/layout/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="flex flex-col gap-0">
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
        <Chatbot />
      </div>
    </>
  );
}
