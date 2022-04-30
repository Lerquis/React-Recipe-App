import React from "react";
import { AppRouter } from "./Router/AppRouter";
import { BrowserRouter } from "react-router-dom";

export const RecipeApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};
