import PropTypes from "prop-types";

export function Step6({ setStep, newSpecsData, setNewSpecsData }) {
  return (
    <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
      <div className="text-4xl text-white">step 6</div>;
      <div className="flex justify-between">
        <button
          onClick={() => setStep(5)}
          className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
        >
          Prev
        </button>
        <button
          type={"submit"}
          className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

Step6.propTypes = {
  setNewSpecsData: PropTypes.func,
  setStep: PropTypes.func,
  newSpecsData: PropTypes.object,
};
