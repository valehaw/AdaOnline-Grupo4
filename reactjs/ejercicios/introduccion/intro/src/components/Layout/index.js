
import React from "react";

import { Aside, Footer, Header, Nav } from "./components";
import { Main } from "../Main";

import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      
      <Nav />
      <div className="content">
        <Aside />
        <Main>
          { children }
        </Main>
      </div>
      <Footer />
    </div>
  );
};
