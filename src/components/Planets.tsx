import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";
export type PlanetModel = {
  name: string;
};
type ResponsePlanet = {
  results: Array<PlanetModel>;
};
const fetchPlanets = async (page: number) => {
  const res = await axios.get<ResponsePlanet>(
    `https://swapi.dev/api/planets?page=${page}`
  );
  return res.data.results;
};
function Planets() {
  const [page, setPage] = useState<number>(1);
  const { data, status } = useQuery<Array<PlanetModel>, Error>(
    ["planets", page],
    () => fetchPlanets(page),
    {
      onSuccess: (res) => {
        return res;
      },
    }
  );
  console.log(data);
  return (
    <div>
      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading data...</div>}
      {status === "success" && (
        <div>
          {data?.map((planet: PlanetModel, index: number) => {
            return <Planet planet={planet} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}
export default Planets;
