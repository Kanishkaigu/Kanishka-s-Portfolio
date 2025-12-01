"use client";

import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Chatbot } from "@/components/Chatbot";
import { LoadingScreen } from "@/components/LoadingScreen";

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
