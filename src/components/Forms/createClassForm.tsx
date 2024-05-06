import { TCreateTaskSchema } from "@/lib/types";
import { FieldValues, useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";


export default function CreateClassForm({ setShowModal }: any) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<TCreateTaskSchema>();

    

    return (
        <form id="formTaskCreate" className="p-8 py-4 flex flex-col justify-items-start ">
            <div>
                <div className={`w-full flex flex-col mb-4 lg:mb-2`}>
                    <label className={`text-md font-semibold text-start `}>Digital Solutions</label>
                    <input className={`rounded h-9 p-2 'border border-palette-line`} />
                    
                </div>
            </div>

            <div className={`w-[45%] flex flex-col mb-4 lg:mb-2`}>
                <label className={`text-md lg:text-sm  font-semibold  text-start`}>Padrinho ou Madrinha</label>
                <input  className={`rounded h-9 p-2 'border border-palette-line`} />
                
            </div>

            <div className={` flex flex-col mb-4`}>
                <label className={`text-md font-semibold text-start`}>Período</label>
                <select className={`'border border-palette-line bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                    <option defaultValue={true} value="NA"></option>
                    <option value="Manha">Manhã</option>
                    <option value="Tarde">Tarde</option>
                </select>
            
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