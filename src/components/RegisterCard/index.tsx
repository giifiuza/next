'use client'
import React, { useState } from "react";
import CalendarIcon from "./calendarIcon";

interface RegisterProps {
    title: string;
    date: string;
    description: string;
}

const Register: React.FC<RegisterProps> = ({ title, date, description }) => {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const truncatedDescription: string = description.length > 104 ? description.substring(0, 104) + '...' : description;

    return (
        <div>
            <div className="border w-[17em] h-[17.5em] rounded-xl drop-shadow-sm space-y-1">
                <div className="p-4">
                    <div className="p-2">
                        <h1 className="font-bold text-xl">{title}</h1>
                    </div>
                    <div className="p-2 flex space-x-2 items-center">
                        <CalendarIcon />
                        <h2 className="text-lyricsDark text-sm">{date}</h2>
                    </div>
                    <div className="p-2 w-[14em] h-[6em]">
                        <h3 className="text-lyricsDark text-sm size-30">
                            {truncatedDescription}
                        </h3>
                    </div>
                </div>

                <div className="m-0">
                    <hr className="h-px bg-palette-line border-0 w-[17em] " />
                </div>
                <div className="p-2 w-[8em] h-[30px] ml-[4em] ">
                    <button className="bg-palette-blue w-[8em] text-center h-[36px] text-white font-semibold rounded" onClick={() => setShowDetail(true)}>Ver mais</button>
                </div>
            </div>
            
        </div>
    );
}

export default Register;
