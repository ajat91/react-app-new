import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const val = await axios.get(
      "https://http-nodejs-production-6360.up.railway.app/users"
    );
    setUser(val.data);
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <Link to="/add">
            <button className="button is-info is-small mt-2">Add Data</button>
        </Link>
        <table className="table is-striped is-fullwidth mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((val, idx) => (
              <tr key={val.id}>
                <th>{idx + 1}</th>
                <th>{val.name}</th>
                <th>{val.email}</th>
                <th>{val.gender}</th>
                <th>
                  <button className="button is-info is-small mr-2">Edit</button>
                  <button className="button is-danger is-small">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
