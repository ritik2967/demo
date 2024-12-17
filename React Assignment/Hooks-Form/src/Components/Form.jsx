import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const ValidateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is not valid.";
    }
    return "";
  };

  const saveData = (e) => {
    e.preventDefault();
    const EmailValidator = ValidateEmail(data.email);
    if (EmailValidator) {
      setEmail(EmailValidator);
      return;
    }
    setUsers([...users, data]);
    setData({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    if (name === "email") {
      setEmail(ValidateEmail(value));
    }
  };

  return (
    <>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleChange}
        />
        {email && <p style={{ color: "red" }}>{email}</p>}
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Save" />
      </form>

      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;
