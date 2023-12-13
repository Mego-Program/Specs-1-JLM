import { SpecsBox } from "./SpecsBox";
import { Stack, Box } from "@mui/material";
import { Delete } from "@mui/icons-material";
import PropTypes from "prop-types";

export function SpecsGrid({ specs, deleteSpecs, editStatus, setOpenEdit }) {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "85px calc(100% - 150px) 65px",
        margin: "1rem",
      }}
    >
      {/* DATE */}
      <Box
        sx={{
          paddingRight: ".4rem",
          color: "#eee",
          fontSize: "12px",
          fontWeight: "500",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            right: "5px",
            top: "0",
            borderRadius: "50%",
            width: "15px",
            height: "15px",
            background: "#121231",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            right: "10.6px",
            top: "0",
            width: "3px",
            height: "140%",
            background: "#121231",
          },
        }}
      >
        {specs.date}
      </Box>

      {/* DATA */}
      <SpecsBox {...{ specs, setOpenEdit, editStatus }} />
      {/* DELETE */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "#eee",
            cursor: "pointer",
            transition: "all 150ms",
            "&:hover": {
              color: "#a49b9b",
            },
          }}
          onClick={() => {
            const confirmDelete = window.confirm("Are you sure you want to delete?");

            if (confirmDelete) {
              deleteSpecs(specs.id);
            }
          }}
        >
          <Delete
            sx={{
              fontSize: "18px",
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
}

SpecsGrid.propTypes = {
  specs: PropTypes.object,
  deleteSpecs: PropTypes.func,
  editSpecs: PropTypes.func,
};
