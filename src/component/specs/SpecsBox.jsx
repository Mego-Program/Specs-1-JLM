import { Stack, Box } from "@mui/material";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const SpecsBox = ({ editSpecs, specs, editStatus }) => {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "55% 15% 15% 15%",
        padding: "10px 15px",
        border: "1px solid #F6C927",
        borderRadius: "7px",
        background: specs.status ? "#1a1a1a" : "#121231",
        marginLeft: "7px",
        color: specs.status ? "#555" : "#eee",
        fontSize: ".835rem",
      }}
    >
      {/* TITLE */}
      <Box
        sx={{
          padding: "0 5px",
        }}
      >
        <Box sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>{specs.title}</Box>
        <Box
          sx={{
            fontSize: ".6rem",
            paddingRight: "7px",
            fontWeight: "400",
            maxHeight: "59px",
            overflow: "hidden",
          }}
        >
          {specs.content}
        </Box>
      </Box>
      {/* STATUS */}
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          transition: "all 150ms",
          // color: specs.status ? "#eee" : "#555",   < done
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            ":hover": {
              color: "#a49b9b",
            },
          }}
          onClick={() => editStatus(specs)}
        >
          {specs.status ? "Done" : "in progress"}
        </Box>
      </Box>
      {/* EDIT */}
      <Box
        component={NavLink}
        to="/editor"
        sx={{
          display: "grid",
          placeItems: "center",
          transition: "all 150ms",
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            ":hover": {
              color: specs.status ? "#a49b9b" : "#eee",
            },
          }}
          onClick={editSpecs}
        >
          Edit
        </Box>
      </Box>
      {/* USERS */}
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        Users
      </Box>
    </Stack>
  );
};

SpecsBox.propTypes = {
  editSpecs: PropTypes.func,
  specs: PropTypes.object,
};
