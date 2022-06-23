import Popup from './popup'
import {useState} from 'react'
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
export const Settings=()=>{
const[open,setOpen]=useState(false)
const handleclick=()=>{
    setOpen(true)
}
    return(
        <>
        <div className="settings">
<div>
    <button className="adduser" onClick={()=>handleclick()}>add user</button>
</div>
<div className="tablecontainer">
    <table className="table">
<tr id="table_header">
    <th>
#
    </th>
    <th>
user
    </th>
    <th>
        Last Signed in
    </th>
    <th>
Role
    </th>
    <th>

    </th>
</tr>
<tr>
    <td>
        
    </td>
    <td>
        
    </td>
    <td>
        
    </td>
    <td>
        
    </td>
    <td>
        
    </td>
</tr>

    </table>
</div>
        </div>
        <Popup open={open} setOpen={setOpen}/>
        </>
    )
}

export default Settings