import Popup from './popup'
import {useState} from 'react'
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export const Settings=()=>{
const[open,setOpen]=useState(false)
const initialFValues = {
    id: 0,
    name: '',
    email: '',
    role: '',
}
const[values,setValues]=useState(initialFValues)
const[users,setUsers]=useState([])
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
{users?.map((u,index)=><>
<tr>
    <td>
       {index+1} 
    </td>
    <td>
       {u.email} 
    </td>
    <td>
        {Math.floor(Math.random()*10)} day ago
    </td>
    <td>
        {u.role}
    </td>
    <td>
    <DeleteRoundedIcon/>
    </td>
</tr>
</>)}
    </table>
</div>
        </div>
        <Popup open={open} setOpen={setOpen} values={values} setValues={setValues} users={users} setUsers={setUsers}/>
        </>
    )
}

export default Settings