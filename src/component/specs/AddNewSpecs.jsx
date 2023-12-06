import * as React from "react";
import { useState } from "react";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";
import { useNavigate } from "react-router-dom";
import GetTodayDate from "./steps/date";
import { INITIAL_NEW_SPECS_DATA } from "../../assets/initialData";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { addSpecs } from "../../services/specs.services";
import { ADD_SPECS } from "../../context/specs/specsTypes";

export default function AddNewSpecs() {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const [newSpecsData, setNewSpecsData] = useState(INITIAL_NEW_SPECS_DATA);

  const stepData = [
    {
      ind: 1,
      title: "Some Text",
      Component: () => <Step1 {...{ setStep, newSpecsData, setNewSpecsData }} />,
    },
    {
      ind: 2,
      title: "Some Text",
      Component: () => <Step2 {...{ setStep, newSpecsData, setNewSpecsData }} />,
    },
    {
      ind: 3,
      title: "Some Text",
      Component: () => <Step3 {...{ setStep, newSpecsData, setNewSpecsData }} />,
    },
    {
      ind: 4,
      title: "Some Text",
      Component: () => <Step4 {...{ setStep, newSpecsData, setNewSpecsData }} />,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSpecs = { Situation: "In progress", date: GetTodayDate(), ...newSpecsData };
    const createSpecs = await addSpecs(newSpecs);

    console.log(createSpecs);
    // dispatch({ type: ADD_SPECS, payload: newSpecs });

    console.log(createSpecs);

    navigate("/");
  };

  return (
    <div className="w-full mt-24 flex justify-start items-center flex-col">
      <ul className="flex max-w-[770px] m-0 p-0 relative select-none	w-full justify-evenly">
        {stepData.map(({ ind, title }) => (
          <li
            key={ind}
            className={
              ind === step
                ? "list-none min-w-[15%] rounded-[16px] text-center relative flex justify-center"
                : "list-none min-w-[15%] text-center relative flex justify-center rounded-full"
            }
          >
            <div
              className={`px-[11px] py-[4px] z-10 rounded-full text-white flex justify-center items-center text-sm bg-[#121231] ${
                ind === step && "w-full border-[1px] border-[#F4C927] border-solid"
              }`}
            >
              {/* {ind === step ? title : ind} */}
              {/* {ind === step ? <span style={{ color: "#FFD700" }}>{ind}</span> : ind} */}
              {ind < step ? (
                <span style={{ color: "#FFD700" }}>
                  <CheckCircleIcon />
                </span>
              ) : ind === step ? (
                <span style={{ color: "#FFD700" }}>{ind}</span>
              ) : (
                ind
              )}
            </div>
          </li>
        ))}{" "}
        {step > 1 && (
          <>
            <div className="absolute top-1/2 left-0 w-1/3 h-[2px] bg-[#F4C927]"></div>
            {step > 2 && <div className="absolute top-1/2 left-1/3 w-1/3 h-[2px] bg-[#F4C927]"></div>}
            {step > 3 && <div className="absolute top-1/2 left-2/3 w-1/3 h-[2px] bg-[#F4C927]"></div>}
          </>
        )}
      </ul>
      <form action="!#" onSubmit={handleSubmit}>
        {stepData[step - 1].Component()}
      </form>
    </div>
  );
}
