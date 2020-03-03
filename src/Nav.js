import React from 'react';
import { NavLink } from "react-router-dom";
import { defaultProps } from "./App";

function Nav() {
  let dogList = defaultProps.dogs.map(
    (dog, idx) => <NavLink exact to={`/dogs/${dog.name}`} key={idx}> {dog.name} </NavLink>);

  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">
        Dogs
      </NavLink> <br />
      {dogList}

    </nav>
  );
};

export default Nav;