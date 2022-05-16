import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const { name, email, contact } = user;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/get/${id}`)
      .then((res) => setUser({ ...res.data[0] }));
  }, [id]);

  return (
    <div className="view-main">
      <h1>View</h1>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Contact: {contact}</h2>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default View;
