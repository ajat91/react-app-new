import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {methodRepository} from "../repository";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const val = await methodRepository.methodList.getData()
    setUser(val.data);
  };

  const deleteData= async (id)=>{
      try {
          await methodRepository.methodList.deleteData(id);
          getUsers();
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <div className="columns">
      <div className="column is-half">
        <Link to="/add" className="button is-info is-small mt-2">
           Add Data
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
              <tr key={idx}>
                <th>{idx + 1}</th>
                <th>{val.name}</th>
                <th>{val.email}</th>
                <th>{val.gender}</th>
                <th>
                  <Link to={`/edit/${val.id}`} className="button is-info is-small mr-2">Edit</Link>
                  <button onClick={()=>deleteData(val.id)} className="button is-danger is-small">Delete</button>
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
