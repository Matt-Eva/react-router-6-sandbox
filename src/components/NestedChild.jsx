import {useOutletContext} from "react-router-dom"

function NestedChild() {
    const {data, test} = useOutletContext()
    console.log(data, test)
  return (
    <div>NestedChild</div>
  )
}

export default NestedChild