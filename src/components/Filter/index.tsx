import React, { useState } from "react";

export default function Filter() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex font-inter items-center space-x-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="text-palette-blue"
          name="option"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        <span className="ml-2 font-normal text-sm text-[#3C3C3C]">Mais recentes</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-palette-blue"
          name="option"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        <span className="ml-2 font-normal text-sm text-[#3C3C3C]">Mais antigos</span>
      </label>
    </div>
  );
}