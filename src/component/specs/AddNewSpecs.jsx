import * as React from "react";
import { useState } from "react";
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";
import { Step4 } from "./steps/step4";
import { Step5 } from "./steps/step5";
import { Step6 } from "./steps/step6";
import { useNavigate } from "react-router-dom";

export default function AddNewSpecs() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [newSpecsData, setNewSpecsData] = useState({
    kpls: [
      {
        ind: 111111111,
        we_will: "",
        select: "within",
        inputL: "",
      },
      {
        ind: 222222222,
        we_will: "",
        select: "within",
        inputL: "",
      },
      {
        ind: 333333333,
        we_will: "",
        select: "within",
        inputL: "",
      },
    ],
  });

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
      title: "KPls",
      Component: () => <Step3 {...{ setStep, newSpecsData, setNewSpecsData }} />,
    },
    {
      ind: 4,
      title: "Some Text",
      Component: () => <Step4 {...{ setStep, newSpecsData, setNewSpecsData }} />,
    },
    {
      ind: 5,
      title: "Some Text",
      Component: () => <Step5 {...{ setStep, newSpecsData, setNewSpecsData }} />,
    },
    {
      ind: 6,
      title: "Some Text",
      Component: () => <Step6 {...{ setStep, newSpecsData, setNewSpecsData }} />,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newSpecsData);
    const getSpecs = localStorage.getItem("specs");

    if (getSpecs) {
      localStorage.setItem("specs", JSON.stringify([...JSON.parse(getSpecs), { id: new Date().getTime() }]));
    } else localStorage.setItem("specs", JSON.stringify([{ id: new Date().getTime() }]));

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
              {ind === step ? title : ind}
            </div>
          </li>
        ))}
      </ul>
      <form action="!#" onSubmit={handleSubmit}>
        {stepData[step - 1].Component()}
      </form>
    </div>
  );
}
