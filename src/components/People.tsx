import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

export type PeopleModel = {
  name: string;
};

const fetchPeople = async () => {
  const res = await axios.get("https://swapi.dev/api/people/");
  return res.data;
};

function People() {
  const { data, status } = useQuery("people", fetchPeople, {
    staleTime: 2000,
    // cacheTime: 10,
    onSuccess: () => console.log("asdasd"),
  });
  return (
    <div>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading data...</div>}
      {status === "success" && (
        <div>
          {data.results.map((person: PeopleModel, index: number) => {
            return <Person person={person} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}

export default People;
