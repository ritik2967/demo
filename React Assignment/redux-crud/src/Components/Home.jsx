import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { deleteUser } from "./UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <>
      <div className="conatainer">
        <h2>CRUD Operation With Redux</h2>
        <Link to="/create" className="btn btn-success my-3">
          Create +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={`/update/${item.id}`} className="btn btn-primary">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      oncli
                      className="btn btn-danger ms-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
