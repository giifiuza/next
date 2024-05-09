"use client";

import ButtonIcon from "@/components/ButtonIcon";
import Filter from "@/components/Filter";
import Header from "@/components/Header";
import { PaginationRegister } from "@/components/PaginationRegister";
import Register from "@/components/RegisterCard";
import Search from "@/components/Search";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import Modal from "@/components/Modal";
import CreateClassForm from "@/components/Forms/createClassForm";

const Diario = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const registerData = [
    { id: 1, title: "Registro 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusenim ad minim veniam, quis nostrud exercitationascsae", date: "01/02/2024" },
    { id: 2, title: "Registro 2", description: "Conteúdo do registro 2", date: "01/02/2024" },
    { id: 3, title: "Registro 3", description: "Conteúdo do registro 3", date: "01/02/2024" },
    { id: 4, title: "Registro 1", description: "Conteúdo do registro 1", date: "01/02/2024" },
    { id: 5, title: "Registro 2", description: "Conteúdo do registro 2", date: "01/02/2024" },
    { id: 6, title: "Registro 3", description: "Conteúdo do registro 3", date: "01/02/2024" },
  ];

  return (
    <>
      <Header title={"Registros"} userImg={"bg-[url('/avatar.jpg')]"} />
      <div className="flex justify-center gap-[10.5em] my-12">
        <Search />
        <Filter />
        <ButtonIcon
          color="bg-palette-blue"
          onClick={() => setShowModal(true)}
          icon={<PlusIcon className="h-5 w-5 ml-1 text-white" />}
        />
      </div>

      <div className="flex flex-col gap-12 justify-center items-center">
        {registerData.map(
          (data, index) =>
            index % 3 === 0 && (
              <div
                key={`row_${index}`}
                className="flex flex-row gap-12 justify-center items-center"
              >
                {registerData.slice(index, index + 3).map((data) => (
                  <Register
                    key={data.id}
                    title={data.title}
                    description={data.description}
                    date={data.date}

                  />
                ))}
              </div>
            )
        )}
        <div className="mb-10 mt-4">
          <PaginationRegister />
        </div>
      </div>
      
    </>
  );
};

export default Diario;
