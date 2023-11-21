import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import React from "react";

export function Step1({ setStep, newSpecsData, setNewSpecsData }) {
  const handleUsernameChange = (e) => {
    setNewSpecsData({ ...newSpecsData, title: e.target.value });
  };
  const handleUsernameChange2 = (e) => {
    setNewSpecsData({ ...newSpecsData, content: e.target.value });
  };
  return (
    <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
      <div className="text-4xl text-white">step 1</div>
      <p className="m-2 mt-3 text-white">Title</p>
      <input
        type="text"
        onChange={handleUsernameChange}
        required
        autoFocus
        value={newSpecsData.title || ""}
        className="bg-[#21213E] text-white min-h-[50px] p-5 text-xl rounded"
        style={{ resize: "none", overflow: "auto", outline: "none" }}
        placeholder="Type here the title..."
      />
      <p className="m-2 mt-4 text-white">Discription</p>
      <textarea
        onChange={handleUsernameChange2}
        required
        rows={4}
        value={newSpecsData.content || ""}
        className="bg-[#21213E] text-white p-5 text-xl rounded"
        style={{ resize: "none", overflow: "auto", outline: "none" }}
        placeholder="Type here the discription..."
      />
      <div className="mt-6 flex justify-between">
        <NavLink
          to={"/"}
          className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
        >
          Close
        </NavLink>

        <Button
          variant="contained"
          type={"submit"}
          sx={{
            background: "#21213E",
            fontWeight: "600",
            paddingX: "1.5rem",

            ":hover": {
              background: "#1c1d32",
            },
          }}
          onClick={() => {
            if (
              !newSpecsData.title ||
              newSpecsData.title.trim() === "" ||
              !newSpecsData.content ||
              newSpecsData.content.trim() === ""
            ) {
              // alert("Please fill in the text field");
            } else {
              setStep(2);
            }
          }}
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
