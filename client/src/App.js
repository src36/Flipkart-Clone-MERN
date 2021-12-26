import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import TemplateProvider from "./templates/TemplateProvider";
import { ContextProvider } from "./context/ContextProvider";
import DetailView from "./components/itemDetail/DetailView";
import { Box } from "@material-ui/core";

const App = () => {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 55 }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/product/:id" element={<DetailView />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
};

export default App;
