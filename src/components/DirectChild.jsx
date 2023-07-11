import {useOutletContext} from 'react-router-dom'

function DirectChild() {
    const {data} = useOutletContext()
    console.log("directChild", data)
  return (
    <div>DirectChild</div>
  )
}

export default DirectChild;