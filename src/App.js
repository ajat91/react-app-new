import './App.css';
import UserList  from './components/UserList';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AddUser from './components/AddUser';
import EditUser from './components/EditUSer';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<UserList/>}/>
          <Route path='/add-data-user' element={<AddUser/>}/>
          <Route path='/edit-data-user/:id' element={<EditUser/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
