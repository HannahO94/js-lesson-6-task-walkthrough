import React from "react";
import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

export default function Aboutpage() {
  const { firstName, lastName } = useContext(UserContext);

  return (
    <div>
      <h1>About Page</h1>
      <p>
        Welcome {firstName} {lastName}
      </p>
    </div>
  );
}
