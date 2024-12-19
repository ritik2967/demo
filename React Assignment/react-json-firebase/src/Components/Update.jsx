import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    age: "",
  });

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, value)
      .then((res) => console.log(res), navigate("/"))
      .catch((err) => console.log(err));
  };

  const { id } = useParams();
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3000/users/" + id, value)
        .then((res) => setValue(res.data))
        .catch((err) => console.log(err));
    }, 1000);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center flex-col bg-lime-100 me-auto p-5">
        <div className="flex justify-center items-center flex-col gap-5 border bg-lime-100 shadow-md px-4 pt-3 rounded-md h-80 w-96">
          <h1>Update User</h1>
          <form action="#" onSubmit={handleUpdate}>
            <div className="mb-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                name="age"
                id="age"
                value={value.age}
                onChange={(e) => setValue({ ...value, age: e.target.value })}
              />
            </div>
            <input
              className="h-8 w-24 mr-3 text-white rounded-md md:hover:bg-green-600 cursor-pointer bg-green-500"
              type="submit"
              value="Update"
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

export default Update;
