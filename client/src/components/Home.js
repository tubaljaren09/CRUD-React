import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:3000/api/read");
    setData(response.data);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you wanted to delete that contact ?")) {
      axios.delete(`http://localhost:3000/api/delete/${id}`);
      toast.success("Contact deleted successfully !");
      setTimeout(() => loadData(), 500);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="home-main">
      <Link to={"/addedit"}>
        <button>Create Contact</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                  <Link to={`/view/${item.id}`}>
                    <button>View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
