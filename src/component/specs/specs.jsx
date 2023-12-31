import { useReducer, useEffect, useState } from "react";
import { INITIAL_STATE_SPECS, specsReducer } from "../../context/specs/specsReducer";
import { DELETE_SPECS, DONE_SPECS, LOAD_SPECS_FROM_SERVER } from "../../context/specs/specsTypes";
import { NavLink } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { Add } from "@mui/icons-material/";
import { SpecsGrid } from "./SpecsGrid";
import { deletedSpecs, getAllSpecs, editSpecs } from "../../services/specs.services";
import Editor1 from "./etidor";

import Editor2 from "./information";

export default function Specs() {
  const [openEdit, setOpenEdit] = useState(!1);
  const [openEdit2, setOpenEdit2] = useState(!1);
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(specsReducer, INITIAL_STATE_SPECS);

  useEffect(() => {
    const getSpecses = async () => {
      try {
        const specsData = await getAllSpecs();
        console.log(specsData);
        dispatch({ type: LOAD_SPECS_FROM_SERVER, payload: specsData });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getSpecses();
  }, []);

  const deleteSpecs = async (id) => {
    const deleteSpecs = await deletedSpecs(id);
    console.log(deleteSpecs);

    dispatch({
      type: DELETE_SPECS,
      payload: { id },
    });
  };

  const editStatus = async (id, specs) => {
    const updatedSpecs = {
      ...specs,
      Situation: specs.Situation !== "Done" ? "Done" : "In progress",
    };
    const editStatus = await editSpecs(id, {
      Situation: specs.Situation !== "Done" ? "Done" : "In progress",
    });

    dispatch({
      type: DONE_SPECS,
      payload: updatedSpecs,
    });
  };

  return (
    <>
      {loading ? (
        <h1 className="text-white mt-[20px]">LOADDING...</h1>
      ) : (
        <>
          {openEdit && <Editor1 setOpenEdit={setOpenEdit} id={openEdit} dispatch={dispatch} />}
          {openEdit2 && <Editor2 setOpenEdit2={setOpenEdit2} id={openEdit2} />}
          <Stack
            sx={{
              width: "100%",
              minHeight: "100vh",
              filter: openEdit ? "blur(2px)" : "",
              filter: openEdit2 ? "blur(2px)" : "",
            }}
          >
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
              <NavLink to="add-new-specs">
                <Box
                  sx={{
                    padding: "7px 9px",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Add A New Specs
                </Box>
              </NavLink>
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

            {/* SPECS - CONTAINER */}

            <Stack direction={"column"}>
              {state.specs.map((specs, i) => (
                <SpecsGrid
                  key={i}
                  {...{ deleteSpecs, editStatus, setOpenEdit, setOpenEdit2 }}
                  specs={specs}
                />
              ))}
            </Stack>
          </Stack>
        </>
      )}
    </>
  );
}
