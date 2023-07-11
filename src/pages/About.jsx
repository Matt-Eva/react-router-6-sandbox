import Navbar from "../components/Navbar"
import DirectChild from "../components/DirectChild"
import { Outlet, useOutletContext } from "react-router-dom"
import {Navigate, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"

function About() {
    // const {data, test} = useOutletContext()
    const [data, setData] = useState("value")
    const [back, setBack] = useState(false)
    const navigate = useNavigate()

    // throw new Error()
    useEffect(() =>{
    fetch("http://localhost:3001/data")
    .then(r => r.json())
    .then(setData)
  }, [])

    if(back) {
        navigate(-1)
    }

  return (
    <div>
        About
        <button onClick={() => setBack(true)}>Back</button>
        {/* { back? <Navigate to="/" /> : null } */}
        <DirectChild data={data}/>
        {/* <Outlet context={{data, test}}/> */}
    </div>
  )

}

export default About