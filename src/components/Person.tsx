import React from "react";
import { PlanetModel } from "./Planets";

type PersonProps = {
  person: PlanetModel;
};

function Person({ person }: PersonProps) {
  return <div>{person.name}</div>;
}

export default Person;
