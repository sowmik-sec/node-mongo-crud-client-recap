import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});
  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User added successfully");
          event.target.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <h2>Please add a new user</h2>
      <form onSubmit={handleAddUser}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          id=""
          placeholder="name"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          id=""
          placeholder="Address"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          id=""
          placeholder="email"
          required
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
