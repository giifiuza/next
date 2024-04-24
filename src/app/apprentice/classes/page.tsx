"use client";

import React, { useState } from "react";
import SideBarClasses from "@/components/SideBarClasses";
import Header from "@/components/Header";
import ChooseClass from "@/../public/ChooseGroup.svg";
import Image from "next/image";

export default function Classes() {
  return (
    <>
      <SideBarClasses classCurrent="Digital Solutions 6" />
      <section className="h-full pt-4 pl-60">
        <Header title="DS6" />
        <div className="flex flex-col justify-center items-center">
          <Image alt="Image choose group" src={ChooseClass} className="h-auto w-[40%]" />
          <h1 className="text-center text-palette-gray font-medium">Selecione uma equipe para obter mais informações</h1>
        </div>
      </section>
    </>
  );
}
