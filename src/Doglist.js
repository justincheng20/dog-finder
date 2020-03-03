import React from "react";
import { defaultProps } from "./App";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";
import whiskey from "./whiskey.jpg";

function Doglist() {
  let dogList = defaultProps.dogs.map((dog, idx) =>
    <div key={idx}>
      <h3>{dog.name}</h3>
      <ul>
        <li>Age: {dog.age}</li>
        <li><img src={dog.src} /></li>
      </ul>
    </div>
  );

  return dogList;
};

export default Doglist;