import React, { useState } from 'react';
import { Avatar } from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface ClassesProps {
  classCurrent: string;
}

const SideBarClasses: React.FC<ClassesProps> = ({ classCurrent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const items = ['Joãozinho e Mariazinha', 'Pedrinho e Aninha', 'Jurema e Cleitin'];

  return (
    <nav className='fixed font-inter h-full border-r-[1px] border-[#d3d3d3] w-56 px-1 py-2 flex flex-col justify-between'>
      <div className='flex flex-col gap-3 justify-start items-start'>
        <Avatar placeholder={""} src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="rounded" className='h-[6em] w-[6em]'/>
        <h1 className='font-inter font-semibold mt-6'>{classCurrent}</h1>
        <hr className='w-full border-t-[1px] border-[#d3d3d3]' />

        <button className="text-left text-sm flex text-pallete-gray w-full font-semibold" onClick={toggleAccordion}>
          <ChevronDownIcon className='mt-[2px] h-4 w-4 mr-4'/>
          Duplas por área   
        </button>

        {isOpen && (
          <div className="ml-4 mt-2">
            <ul>
              {items.map((item, index) => (
                <li className={"font-medium text-palette-gray text-sm mb-1"} key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SideBarClasses;
