import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser } from "./UserReducer";
import { useDispatch } from "react-redux";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUsers = users.filter((item) => item.id == id);
  const { name, email } = existingUsers[0];

  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
          <h3>Update A User</h3>
          <form action="#" onSubmit={handleUpdate}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={uname}
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
                value={uemail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>{" "}
            <br />
            <button className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
