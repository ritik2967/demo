import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useFetcher } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3000/users")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would You Like to Delete Record");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => location.reload())
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white h-auto">
        <h1 className="font-bold text-xl">List Of Users</h1>
        <div className="w-auto rounded-md bg-white shadow-lg p-8">
          <div className="flex justify-end p-2">
            <Link to="/create">
              <button className="bg-green-700 p-2 md:hover:bg-green-800 text-white rounded-md">
                Add +
              </button>
            </Link>
          </div>
          <table className="">
            <thead className="bg-slate-500">
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>ACTION</th>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td>
                      <Link to={`/read/${item.id}`}>
                        <button className="bg-sky-500 p-1 rounded-sm text-white md:hover:bg-sky-600 me-2">
                          READ
                        </button>
                      </Link>
                      <Link to={`/update/${item.id}`}>
                        <button className="me-2 bg-blue-600 p-1 text-white rounded-sm outline-none md:hover:bg-blue-800 ">
                          EDIT
                        </button>
                      </Link>
                      <button
                        onClick={(e) => handleDelete(item.id)}
                        className="bg-red-500 p-1 text-white rounded-sm outline-none md:hover:bg-red-700"
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
