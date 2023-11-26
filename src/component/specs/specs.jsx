import { useReducer, useEffect, useState } from "react";
import { INITIAL_STATE_SPECS, specsReducer } from "../../context/specs/specsReducer";
import {
  DELETE_SPECS,
  DONE_SPECS,
  EDIT_SPECS,
  LOAD_SPECS_FROM_LOCAL_STORAGE,
} from "../../context/specs/specsTypes";
import { NavLink } from "react-router-dom";
import { Box, Stack } from "@mui/material";
// import Typography from "@mui/material/Typography";
import { Add } from "@mui/icons-material/";
import { SpecsGrid } from "./SpecsGrid";
import { getSpecs } from "../../services/specs.services";
import Editor1 from "./etidor";

export default function Specs() {
  const [openEdit, setOpenEdit] = useState(!1);
  const [state, dispatch] = useReducer(specsReducer, INITIAL_STATE_SPECS);

  useEffect(() => {
    const storageData = getSpecs();

    if (storageData) {
      dispatch({ type: LOAD_SPECS_FROM_LOCAL_STORAGE, payload: storageData });
    }
  }, []);

  const editSpecs = (id) => {
    dispatch({
      type: EDIT_SPECS,
      payload: {
        date: getTodayDate(),
        title: new Date().getTime(),
        id,
      },
    });
  };

  const deleteSpecs = (id) => {
    dispatch({
      type: DELETE_SPECS,
      payload: {
        id,
      },
    });
  };
  const editStatus = (specs) => {
    dispatch({
      type: DONE_SPECS,
      payload: {
        ...specs,
        status: !specs.status,
      },
    });
  };

  return (
    <>
      {openEdit && <Editor1 setOpenEdit={setOpenEdit} id={openEdit} dispatch={dispatch} />}
      <Stack
        sx={{
          width: "100%",
          minHeight: "100vh",
          filter: openEdit ? "blur(2px)" : "",
        }}
      >
        {/* BTN - ADD A NEW SPECS */}
        <NavLink to="add-new-specs">
          <Box
            sx={{
              margin: "3rem 0 2rem 0",
              marginLeft: "95px",
              width: "fit-content",
              display: "flex",
              background: "#F6C927",
              border: "2px solid #F6C927",
              color: "#21213E",
              borderRadius: "3px",
            }}
          >
            <Box
              sx={{
                padding: "7px 9px",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Add A New Specs
            </Box>
            <Box
              sx={{
                padding: "5px 16px",
                marginLeft: "4px",
                background: "#21213E",
                color: "#F6C927",
                borderRadius: "3px",
              }}
            >
              <Add />
            </Box>
          </Box>
        </NavLink>
        {/* SPECS - CONTAINER */}

        <Stack direction={"column"}>
          {state.specs.map((specs, i) => (
            <SpecsGrid key={i} {...{ deleteSpecs, editSpecs, editStatus, setOpenEdit }} specs={specs} />
          ))}
        </Stack>
      </Stack>
    </>
  );
}
