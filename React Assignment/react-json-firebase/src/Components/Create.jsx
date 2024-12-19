import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    age: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", value)
      .then((res) => console.log(res), navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col bg-lime-100 me-auto p-5">
        <div className="flex justify-center items-center flex-col gap-5 border bg-lime-100 shadow-md px-4 pt-3 rounded-md h-80 w-96">
          <h1>Add Users</h1>
          <form action="#" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setValue({ ...value, name: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                name="age"
                id="age"
                onChange={(e) => setValue({ ...value, age: e.target.value })}
              />
            </div>
            <input
              className="h-8 w-24 mr-3 text-white rounded-md md:hover:bg-green-600 cursor-pointer bg-green-500"
              type="submit"
              value="Submit"
            />
            <button className="h-8 me-2 rounded-md w-28 text-white bg-blue-600 md:hover:bg-blue-700">
              <Link to="/">BACK</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
