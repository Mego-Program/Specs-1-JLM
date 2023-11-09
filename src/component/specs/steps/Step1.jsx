import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

export function Step1({ setStep, newSpecsData, setNewSpecsData }) {
  return (
    <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
      <div className="text-4xl text-white">step 1</div>;
      <div className="flex justify-between">
        <NavLink
          to={"/"}
          className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
        >
          Close
        </NavLink>
        <Button
          variant="contained"
          type={"button"}
          sx={{
            background: "#21213E",
            fontWeight: "600",
            paddingX: "1.5rem",

            ":hover": {
              background: "#1c1d32",
            },
          }}
          // className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
          onClick={() => setStep(2)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

Step1.propTypes = {
  setNewSpecsData: PropTypes.func,
  setStep: PropTypes.func,
  newSpecsData: PropTypes.object,
};
