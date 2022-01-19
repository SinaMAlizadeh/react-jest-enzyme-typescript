import React from "react";
import { PageType } from "../App";

type NavbarProps = {
  setPage: React.Dispatch<React.SetStateAction<PageType>>;
};

const Navbar = ({ setPage }: NavbarProps) => {
  return (
    <div>
      <button onClick={() => setPage("planets")}>Planets</button>
      <button onClick={() => setPage("people")}>People</button>
    </div>
  );
};

export default Navbar;
