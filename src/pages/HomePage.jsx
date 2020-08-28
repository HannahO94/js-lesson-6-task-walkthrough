import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function HomePage() {
  const { firstName, setFirstName, lastName, setLastName } = useContext(
    UserContext
  );
  return (
    <div>
      <h1>Home Page</h1>
      <input
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="First Name"
        type="text"
      />
      <input
        onChange={(event) => setLastName(event.target.value)}
        placeholder="Last Name"
        type="text"
      />

      <p>Firstname: {firstName}</p>
      <p>Lastname: {lastName}</p>
    </div>
  );
}
