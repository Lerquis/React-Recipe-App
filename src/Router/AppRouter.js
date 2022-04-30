import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Food } from "../components/food/Food";
import { Recipe } from "../components/food/Recipe";
import { Homepage } from "../components/homepage/Homepage";
import { Navbar } from "../components/navbar/Navbar";
import { Searched } from "../components/navbar/Searched";
import { Logo, Nav } from "../styled/styles";
import { GiKnifeFork } from "react-icons/gi";
import { AnimatePresence } from "framer-motion";

export const AppRouter = () => {
  // ?El browser router lo pusimos afuera, en el RecipeApp, porque
  // ?sino no servia

  const location = useLocation();
  return (
    <>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Delicioussss</Logo>
      </Nav>
      <Navbar />
      {/* El AnimatePresence sirve para que se hagan bien las animaciones
      del frame motion. Es necesario poner la location y el key
      para que las animaciones funcionen bien. Porque asi es la unica
      manera para que el programa sepa cuando ejecutar la funcion de 
      'exit' del frame motion */}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/food/:food" element={<Food />} />
          <Route path="/searched/:food" element={<Searched />} />
          <Route path="/recipe/:food" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
