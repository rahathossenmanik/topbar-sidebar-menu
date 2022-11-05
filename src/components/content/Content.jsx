import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";

import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container className={classNames("p-0", { "is-open": sidebarIsOpen })}>
    <Topbar toggleSidebar={toggleSidebar} />
    <Container fluid className="content mt-3">
      <Routes>
        <Route exact path="/" element={<h2>Hello</h2>} />
        <Route exact path="/about" element={<h2>About</h2>} />
        <Route exact path="/Pages" element={<h2>Pages</h2>} />
        <Route exact path="/faq" element={<h2>FAQ</h2>} />
        <Route exact path="/contact" element={<h2>Contact</h2>} />
        <Route exact path="/home" element={<h2>Home</h2>} />
        <Route exact path="/Page-1" element={<h2>Page-1</h2>} />
        <Route exact path="/Page-2" element={<h2>Page-2</h2>} />
        <Route exact path="/mongo" element={<h2>Mongo DB</h2>} />
        <Route exact path="/express" element={<h2>Express JS</h2>} />
        <Route exact path="/react" element={<h2>React JS</h2>} />
        <Route exact path="/node" element={<h2>Node JS</h2>} />
      </Routes>
    </Container>
  </Container>
);

export default Content;
