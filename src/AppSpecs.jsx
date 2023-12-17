import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Spec from "./component/specs/specs";
import AddNewSpecs from "./component/specs/AddNewSpecs";
import Editor from "./component/specs/Editor";
import { Nav } from "./component/NavBar/Nav";

import { Stack } from "@mui/material";

export const AppSpecs = (
  <Route>
    <Route
      path=""
      element={
        <ErrorBoundary fallback={<h1>ErrorConection </h1>}>
          <Spec />
        </ErrorBoundary>
      }
    />
    <Route
      path="add-new-specs"
      element={
        <ErrorBoundary fallback={<h1>ErrorConection </h1>}>
          <AddNewSpecs />
        </ErrorBoundary>
      }
    />
    <Route
      path="editor/:id"
      element={
        <ErrorBoundary fallback={<h1>ErrorConection </h1>}>
          <Editor />
        </ErrorBoundary>
      }
    />
  </Route>
);

export function App() {
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
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/*">{AppSpecs}</Route>
        </Routes>
      </BrowserRouter>
    </Stack>
  );
}
export default AppSpecs;
