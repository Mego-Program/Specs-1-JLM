import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MyForm() {
  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="input1"
          value={inputs.input1}
          onChange={handleInputChange}
          placeholder="כאן התווית הרלוונטית ל-input 1"
        />
        <input
          type="text"
          name="input2"
          value={inputs.input2}
          onChange={handleInputChange}
          placeholder="כאן התווית הרלוונטית ל-input 2"
        />
      </div>
      <div>
        <input
          type="text"
          name="input3"
          value={inputs.input3}
          onChange={handleInputChange}
          placeholder="כאן התווית הרלוונטית ל-input 3"
        />

        <input
          type="text"
          name="input4"
          value={inputs.input4}
          onChange={handleInputChange}
          placeholder="כאן התווית הרלוונטית ל-input 4"
        />
      </div>
      <div>
        <input
          type="text"
          name="input5"
          value={inputs.input5}
          onChange={handleInputChange}
          placeholder="כאן התווית הרלוונטית ל-input 5"
        />
        <input
          type="text"
          name="input6"
          value={inputs.input6}
          onChange={handleInputChange}
          placeholder="use"
        />
      </div>
      <NavLink to="/">AddNewSpecs</NavLink>
      <button>next page</button>
    </div>
  );
}
