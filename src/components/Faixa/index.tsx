'use client'

import React, { useState } from "react";
import { Avatar, Button } from "@material-tailwind/react";
import { CloudArrowUpIcon, PencilIcon } from "@heroicons/react/24/outline";
import FormInput from "../FormInput";
import ButtonIcon from "../ButtonIcon";


export default function Faixa() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <div className="h-48 w-full bg-[#eeeeee] rounded shadow-md z-10 relative">Div 1</div>

      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="Avatar" className="absolute border-2 border-white top-[6em] left-2 z-20 h-[12em] w-[12em] " />
      {/* <button>
        <PencilIcon className="h-3 w-3 ml-[13em]" />

      </button> */}
      <div className="h-96 w-full z-10 px-4 py-2 relative">
        <h1 className="ml-[11em] mt-4 font-semibold text-xl text-[#000000]"> João da Silva </h1>
        <button onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(true)}
          className="flex flex-row ml-[14em] mt-3 rounded-2xl gap-2 items-center justify-center h-auto p-2 border-[1px] border-[#007BC0] hover:bg-[#007BC0]">
          <CloudArrowUpIcon width={20} height={20} color={hovered ? "#ffffff" : "#007BC0"} />
          <h1 className="text-center text-sm font-medium text-[#007BC0] hover:text-white">Upload foto</h1>
        </button>
        <div className="mt-8 w-[70%] ml-[14em]">
          {/* <h1 className="text-[#5b5b5b]">Dados pessoais</h1>
          <hr className="h-px my-2 bg-[#a9a9a9] border-0" /> */}
          <FormInput labelText="Nome" />
          <FormInput labelText="Turma" />
          <FormInput labelText="E-mail" />
          <FormInput labelText="EDV" />
          <FormInput labelText="Senha" />
          <FormInput labelText="Confirmação de senha" />
          <div className="flex flex-row">
            <ButtonIcon color="#007BC0" title="Confirmar dados" />
            <ButtonIcon color="#f4f4f4" title="Cancelar"/>
          </div>
        </div>
      </div>
    </div>
  );
}