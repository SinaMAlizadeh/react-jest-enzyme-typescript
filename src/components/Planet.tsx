import React from "react";
import { PlanetModel } from "./Planets";

type PlanetProps = {
  planet: PlanetModel;
};

function Planet({ planet }: PlanetProps) {
  return <div>{planet.name}</div>;
}

export default Planet;
