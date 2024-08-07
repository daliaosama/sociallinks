/* eslint-disable react/prop-types */
import './SelectionItem.css'
function SelectionItem(props) {
return(
    <button className='Selection' >
      {props.SelectionName}
    </button>
)
}
export default SelectionItem
