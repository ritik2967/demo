import React, { useEffect, useState } from "react";

const UseEffectAPI = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div>
        <h1>API EXAMPLE</h1>
        <div>
          <h1>API Data</h1>
          {loading && <p>Loading data...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}{" "}
          {!loading && !error && (
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <strong>{item.title}</strong>: {item.body}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;
