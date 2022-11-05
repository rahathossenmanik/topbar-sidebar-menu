import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav, Container } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import IssueFreek from "./../../assets/images/if-white.png";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <img src={IssueFreek} alt="IssueFreek Logo" className="py-1 px-1 w-75" />
    </div>
    <hr className="m-0" />
    <div className="side-menu mt-4">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/home"}>
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faBriefcase} className="me-2" />
            About
          </NavLink>
        </NavItem>
        <SubMenu title="Pages" icon={faCopy} items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            <FontAwesomeIcon icon={faImage} className="me-2" />
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="me-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
