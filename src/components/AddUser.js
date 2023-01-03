import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddUser = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [gender, setgender] = useState("");
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" className="input" placeholder="Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="text" className="input" placeholder="Email" />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwitdh">
                <select>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-success is-small">Save</button>
              <Link to="/">
                <button className="button is-info is-small ml-2">
                  List User
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
