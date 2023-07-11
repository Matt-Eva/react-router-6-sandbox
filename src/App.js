import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet, Navigate } from 'react-router-dom';
import {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState([])

  const test = "test"
  
  console.log(data)

  // useEffect(() =>{
  //   fetch("http://localhost:3001/data")
  //   .then(r => r.json())
  //   .then(setData)
  // }, [])

  return (
    <div className="App">
      {/* {data.length > 0 ? <Navigate to="/about"/> : null} */}
      <Navbar />
      <Outlet context={{data, test}}/>
    </div>
  );
}

export default App;
