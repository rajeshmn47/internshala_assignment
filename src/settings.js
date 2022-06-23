import Popup from './popup'
import {useState} from 'react'
export const Settings=()=>{
const[open,setOpen]=useState(false)
    return(
        <>
        <div className="settings">
<div>
    <button className="adduser">add user</button>
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
        </>
    )
}

export default Settings