import { useReducer, useEffect } from "react";
import { INITIAL_STATE_SPECS, specsReducer } from "../../context/specs/specsReducer";
import {
  DELETE_SPECS,
  DUNE_SPECS,
  EDIT_SPECS,
  LOAD_SPECS_FROM_LOCAL_STORAGE,
} from "../../context/specs/specsTypes";
import { NavLink } from "react-router-dom";
import { Box, Stack } from "@mui/material";
// import Typography from "@mui/material/Typography";
import { Add } from "@mui/icons-material/";
import { SpecsGrid } from "./SpecsGrid";
import { getSpecs } from "../../services/specs.services";

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;

  return formattedDate;
}

export default function Specs() {
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
      type: DUNE_SPECS,
      payload: {
        ...specs,
        status: !specs.status,
      },
    });
  };

  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {/* BTN - ADD A NEW SPECS */}

      <Box
        component={NavLink}
        to="/add-new-specs"
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

      {/* SPECS - CONTAINER */}

      <Stack direction={"column"}>
        {state.specs.map((specs, i) => (
          <SpecsGrid key={i} {...{ deleteSpecs, editSpecs, editStatus }} specs={specs} />
        ))}
      </Stack>
    </Stack>
  );
}
