import Navbar from "../components/Navbar"
import DirectChild from "../components/DirectChild"
import { Outlet, useOutletContext } from "react-router-dom"
import {Navigate, useNavigate} from "react-router-dom"
import {useState} from "react"

function About() {
    // const {data, test} = useOutletContext()
    const [back, setBack] = useState(false)
    const navigate = useNavigate()

    // throw new Error()

    if(back) {
        navigate(-1)
    }

  return (
    <div>
        About
        <button onClick={() => setBack(true)}>Back</button>
        {/* { back? <Navigate to="/" /> : null } */}
        <DirectChild />
        {/* <Outlet context={{data, test}}/> */}
    </div>
  )

}

export default About