"use client"

import ButtonIcon from "@/components/ButtonIcon";
import Header from "@/components/Header";
import Search from "@/components/Search";
import { TiUserAddOutline } from "react-icons/ti";
import { FiFilter } from "react-icons/fi";
import Table from "@/components/Table";

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        job: "Digital Solutions 6",
        permission: "Membro",
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Digital Solutions 6",
        permission: "Membro",
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        job: "Digital Solutions 6",
        permission: "Membro",
        date: "19/09/17 ",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        job: "Digital Solutions 6",
        permission: "Membro",
        date: "Nunca",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Instrutor",
        permission: "Administrador",
        date: "04/10/21",
    },
];


export default function UsersPage() {
    return (
        <>
            <Header title={"Users"} userImg={""} status={false} />

            <div className="mt-6">
                <h3 className="font-semibold">All Users</h3>
                <div className="w-full flex justify-between pr-10 py-1.5 items-center ">
                    <div className="flex gap-6">
                    <Search/>
                    <button className="text-[#9F9F9F] flex justify-center items-center gap-2">
                    <FiFilter color="#9F9F9F"/> Filter
                    </button>
                    </div>
                    <ButtonIcon color="bg-palette-pink" icon={<TiUserAddOutline  color="white" size={23} />} title={"Novo usuário"} colorHover={'hover:bg-palette-sea-greenDark'} onClick={() => console.log("first")} />
                </div>

                <Table rows={TABLE_ROWS}/>
            </div>
        </>
    );
}