import React, { useEffect, useState } from "react";
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
    const data = await fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((res) => res);
    setList(data.results);
  };

  return (
    <div>
      {list.map((item, index) => {
        return (
          <div key={index} className="list-item">
            {item?.name?.first}
          </div>
        );
      })}
    </div>
  );
};

export default AsyncAwait;
