import React from "react";
import { Avatar } from "@material-tailwind/react";

interface ApprenticeProps {
  classAprentice: string;
  lider: boolean;
  profile: string;
  name: string;
}

const Apprentice: React.FC<ApprenticeProps> = ({
  classAprentice,
  lider,
  profile,
  name,
}) => {
  return (
    <div className="relative mb-5">
      <div className="flex w-full items-center justify-center">
        <div className="w-full h-[4em] rounded-md bg-gradient-to-r from-[#9E2896] to-[#18837E] pt-1 relative">
          <div className="flex h-full p-4 w-full items-center justify-center bg-[#F2F2F2]">
            <Avatar
              variant="circular"
              alt="user 1"
              className="w-[5em] h-[5em] border-2 mr-[60%] border-white hover:z-10 focus:z-10 absolute mt-[5em] transform -translate-x-1/2 -translate-y-1/2"
              src={profile}
            />
            <div className="flex flex-col gap-1 p-3">
              <span className="text-base font-bold text-black ml-4 md:ml-10">
                {name}
              </span>
              <span className="text-sm text-gray-800 font-normal ml-4 md:ml-10">
                {classAprentice}
                {lider ? (
                  <span className="font-bold"> - Lider do mês</span>
                ) : null}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apprentice;
