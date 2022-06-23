import Popup from './popup'
import {useState,useEffect} from 'react'
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
useEffect(()=>{
    const user=localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users")):false
    if(user){
    setUsers(user)
    }
    console.log(user)
},[])

const handleclick=()=>{
    setOpen(true)
}
const handledelete=async (i)=>{
var u=users.filter((h,index)=>!(index===i))
 setUsers(u,()=>{
    localStorage.setItem("users", JSON.stringify(users))
 })


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
       {u.name} 
    </td>
    <td>
        {Math.floor(Math.random()*10)} day ago
    </td>
    <td>
        {u.role}
    </td>
    <td style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{backgroundColor:'#57CA85',width:'3vw',height:'6vh',color:'#ffffff',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <DeleteRoundedIcon  style={{color:'#ffffff',width:'1.4vw',boxSizing:'border-box'}} onClick={()=>handledelete(index)}/>
    </div>
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