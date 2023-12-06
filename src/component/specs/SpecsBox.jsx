import { Stack, Box } from "@mui/material";
import PropTypes from "prop-types";

export const SpecsBox = ({ specs, editStatus, setOpenEdit }) => {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "55% 15% 15% 15%",
        padding: "10px 15px",
        border: "1px solid #F6C927",
        borderRadius: "7px",
        background: specs.Situation === "Done" ? "#1a1a1a" : "#121231",
        marginLeft: "7px",
        color: specs.Situation === "Done" ? "#555" : "#eee",
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
          color: specs.Situation === "Done" ? "#" : "#eee",
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            ":hover": {
              color: "#a49b9b",
            },
          }}
          onClick={() => editStatus(specs.id, specs)}
        >
          {specs.Situation === "Done" ? (
            <span style={{ color: "#F6C927" }}>Done</span>
          ) : (
            <span>In progress</span>
          )}
        </Box>
      </Box>
      {/* EDIT */}

      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          transition: "all 150ms",

          cursor: "pointer",
          height: "100%",
          ":hover": {
            color: specs.Situation === "Done" ? "#a49b9b" : "#eee",
          },
        }}
        onClick={() => setOpenEdit(specs.id)}
      >
        Edit
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
