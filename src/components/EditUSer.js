import React,{useState,useEffect} from "react";
import { Link,useNavigate,useParams} from "react-router-dom";
import { methodRepository } from "../repository";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate=useNavigate();
  const {id}=useParams();

  useEffect (()=>{
    getById();
  },[])

  const updateDataUser=async (e)=>{
      e.preventDefault();
      try {
        await methodRepository.methodList.updateData(id,{name,email,gender})
        navigate("/")
      } catch (error) {
        console.log(error)
      }
  }

  const getById =async ()=>{
    const response = await methodRepository.methodList.getDataById(id);
    setEmail(response.data.email);
    setName(response.data.name);
    setGender(response.data.gender);
  }
  
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateDataUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" className="input" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="text" className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwitdh">
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-success is-small" type="submit">Update</button>
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

export default EditUser;
