// import { Stack } from "@mui/material";
// import { Suspense, lazy } from "react";
// import AddNewSpecs from "./component/specs/AddNewSpecs";

import Specs from "./component/specs/specs";
import { Nav } from "./component/NavBar/Nav";
import { RouterProvider, createBrowserRouter, Routes, Route } from "react-router-dom";
// import Editor from "./component/specs/Editor";
import AddNewSpecs from "./component/specs/AddNewSpecs";
import { Stack } from "@mui/material";
// const AddNewSpecs = lazy(() => import("./component/specs/AddNewSpecs"));
// const Editor = lazy(() => import("./component/specs/Editor"));

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
// export const RouterSpecs = (
//   <Routes>
//     <Route path="/" element={<Specs />} />
//     <Route path="add-new-specs" element={<AddNewSpecs />} />
//     <Route path="editor/*" element={<Editor />} />
//   </Routes>
// );

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
      {/* <RouterProvider router={createBrowserRouter(RouterSpecs)} /> */}
      <RouterProvider router={createBrowserRouter(RouterSpecs)} />
    </Stack>
  );
}

export default App;
