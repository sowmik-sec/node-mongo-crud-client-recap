import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  return (
    <div>
      {users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Home;
