import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

export function Step1({ setStep, newSpecsData, setNewSpecsData }) {
  // const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

  const handleUsernameChange = (e) => {
    setNewSpecsData({ ...newSpecsData, step1: e.target.value });
  };
  // const handleUsernameChange = (editorState) => {
  //   setEditorState(editorState);
  //   const text = editorState.getCurrentContent().getPlainText();
  //   setNewSpecsData({ ...newSpecsData, step1: text });
  // };
  return (
    <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
      <div className="text-4xl text-white">step 1</div>;
      {/* <input
        //  type="text" onChange={handleUsernameChange} className="bg-[#21213E] text-white min-h-[100px]" <input
        type="text"
        onChange={handleUsernameChange}
        // className="bg-[#21213E] text-white min-h-[100px] block resize-none overflow-auto"
        className="bg-[#21213E] text-white  h-[100px] block w-full resize-none p-2"
      /> */}
      <textarea
        onChange={handleUsernameChange}
        className="bg-[#21213E] text-white min-h-[100px]"
        style={{ resize: "none", overflow: "auto" }}
      />
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
