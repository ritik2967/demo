import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3000/users/" + id)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, 1000);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center bg-lime-50">
        <div className="w-auto border bg-lime-100 shadow-md px-5 pt-4 rounded-md">
          <h2>Details of Users</h2>
          <div>
            <strong>Name: {data.name}</strong>
          </div>
          <div>
            <strong>Email: {data.email}</strong>
          </div>
          <div>
            <strong>Age: {data.age}</strong>
          </div>
          <button className="h-8 w-20 bg-blue-600 me-2 md:hover:bg-blue-700 rounded-md text-white">
            <Link to={`/update/${id}`}>Edit</Link>
          </button>
          <button className="h-8 w-20 bg-green-600 md:hover:bg-green-700 rounded-md text-white">
            <Link to="/">Back</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Read;
