import React, { useEffect, useState } from "react";
import { fetchData } from "../Api/api";
type Name = {
  title: string;
  first: string;
  last: string;
};

type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type Follower = {
  name: Name;
  picture: Picture;
};
const AsyncAwait = () => {
  const [list, setList] = useState<Array<Follower>>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetchData();
    setList(data.results);
  };

  return (
    <div>
      <div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              data-testid={`list-item-${index}`}
              className="list-item"
            >
              {item?.name?.first}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AsyncAwait;
