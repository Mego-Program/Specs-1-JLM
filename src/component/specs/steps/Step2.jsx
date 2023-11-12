import PropTypes from "prop-types";

export function Step2({ setStep, newSpecsData, setNewSpecsData }) {
  return (
    <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
      <div className="text-4xl text-white">step 2</div>;
      <div className="flex justify-between">
        <button
          onClick={() => setStep(1)}
          className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
        >
          Prev
        </button>
        <button
          type={"button"}
          className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
          onClick={() => setStep(3)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

Step2.propTypes = {
  setNewSpecsData: PropTypes.func,
  setStep: PropTypes.func,
  newSpecsData: PropTypes.object,
};
