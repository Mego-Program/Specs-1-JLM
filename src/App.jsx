import Specs from "./component/specs/specs";
import { Nav } from "./component/NavBar/Nav";
import { RouterProvider, createBrowserRouter, Routes, Route } from "react-router-dom";

import AddNewSpecs from "./component/specs/AddNewSpecs";
import { Stack } from "@mui/material";

export const RouterSpecs = [
  {
    path: "",
    element: <Specs />,
  },
  {
    path: "add-new-specs",
    element: <AddNewSpecs />,
  },
];

function App() {
  return (
    <Stack
      direction={"row"}
      display={"grid"}
      sx={{
        backgroundColor: "#21213E",
        gridTemplateColumns: "161px calc(100% -  161px)",
        minHeight: "100vh",
      }}
    >
      <Nav />

      <RouterProvider router={createBrowserRouter(RouterSpecs)} />
    </Stack>
  );
}

export default App;
