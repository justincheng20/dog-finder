import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { defaultProps } from "./App";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";
import whiskey from "./whiskey.jpg";

function DogDetail() {
  const { name } = useParams();
  let dog;

  // Filtering would be cleaner
  for (let i = 0; i < defaultProps.dogs.length; i++) {
    if (defaultProps.dogs[i].name === name) {
      dog = (defaultProps.dogs[i]);
    };
  };

  let facts = dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>);

  let DogDetails =
    <div>
      <h3>{dog.name}</h3>
      <p>Age: {dog.age}</p>
      <img src={dog.src} />
      <ul>{facts}</ul>
    </div>;

  return (DogDetails)
};

export default DogDetail;