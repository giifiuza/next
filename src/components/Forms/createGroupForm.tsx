import { TCreateClassSchema } from "@/lib/types";
import { FieldValues, useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import { PlusIcon } from "@heroicons/react/24/outline";
import TagNames from "../TagNames";


export default function CreateGroupForm({ setShowModal }: any) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<TCreateClassSchema>();


    const onSubmit = async (data: FieldValues) => {
        const response = await fetch('/api/users', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseData = await response.json();
        if (!response.ok) {
            alert("Submitting form failed!");
            return;
        }

        if (responseData.success) {
            setShowModal(false);
            toast('Grupo Registrado com sucesso!', {
                type: "success",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Bounce,
                className: "bg-[#C9FCFF] text-black",
                progressClassName: "bg-palette-sea-green",
                icon: ({ theme, type }) => <FaCheckCircle color="#18837E" />
            });
        }
    }

    return (
        <form id="formGroupCreate" onSubmit={handleSubmit(onSubmit)} className="p-8 py-4 flex flex-col justify-items-start ">
            <div>
                <div className={`w-full flex flex-col mb-4 lg:mb-2`}>
                    <label className={`text-md font-semibold text-start`}>Aprendiz</label>
                    <TagNames value={""}/>
                    {/* <input className={`rounded h-9 p-2 border-[1px] border-palette-line`} />
                    <input className={`rounded h-9 p-2 border-[1px] border-palette-line mt-3`} /> */}
                </div>
            </div>

            <div className={`w-full flex mb-6 lg:mb-2`}>
                <button className="flex flex-row gap-3 justify-center items-center">
                    <PlusIcon color={"#3b3b3b"} className="h-4 w-4" />
                    <h1 className="text-[#3b3b3b] text-sm">Novo integrante</h1>
                </button>
            </div>

            <div className={`w-full flex flex-col mb-4 lg:mb-2`}>
                <label className={`text-md font-semibold text-start`}>Padrinho ou madrinha</label>
                <input className={`rounded h-9 p-2 border border-palette-line`} />
            </div>

            <div className={`w-full flex flex-col mb-4 lg:mb-2`}>
                <label className={`text-md font-semibold text-start`}>Área de projetos</label>
                <input className={`rounded h-9 p-2 border border-palette-line`} />
            </div>
            <div className="flex gap-8 mt-4 items-center">
                <button type="submit" className="bg-palette-sea-green px-5 py-2 rounded text-white disabled:opacity-50">
                    {isSubmitting ? 'Carregando...' : 'Adicionar'}
                </button>
                <button onClick={() => { setShowModal(false); }} className="bg-[#F4F4F4] px-5 py-3 rounded text-palette-sea-green">
                    Cancelar
                </button>
            </div>
        </form>
    );
}
