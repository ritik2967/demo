import React from "react";

const UserCard = ({ name, age, location }) => {
  return (
    <>
      <h1>The Name is...{name}</h1>
      <h1>The Age is...{age}</h1>
      <h1>The Location is...{location}</h1>
    </>
  );
};

export default UserCard;
