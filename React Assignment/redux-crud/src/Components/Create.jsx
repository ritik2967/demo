import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./UserReducer";
import { Link, useNavigate } from "react-router";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };

  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
          <h3>Add New User</h3>
          <form action="#" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>{" "}
            <br />
            <button className="btn btn-info">Submit</button>
            <Link to="/" className="btn btn-success ms-2">
              Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
