import {useOutletContext} from 'react-router-dom'

function DirectChild({data}) {
    // const {data} = useOutletContext()
    // console.log("directChild", data)
    data.toUpperCase()
  return (
    <div>DirectChild</div>
  )
}

export default DirectChild;