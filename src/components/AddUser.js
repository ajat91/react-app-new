import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import { methodRepository } from "../repository";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate=useNavigate();

  const saveDataUser=async (e)=>{
      e.preventDefault();
      try {
        await methodRepository.methodList.postData({name,email,gender})
        navigate("/")
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveDataUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" className="input" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="text" className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwitdh">
                <select value={gender} onChange={(e)=>setGender(e.target.value)} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-success is-small" type="submit">Save</button>
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
