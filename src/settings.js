import Popup from './popup'
import {useState,useEffect} from 'react'
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close'

export const Settings=()=>{
const[open,setOpen]=useState(false)
const[ok,setOk]=useState(false)
const[notification,setNotification]=useState(false)
const[message,setMessage]=useState()
const initialFValues=({
    id: 0,
    name: '',
    email: '',
    role: '',
})
const[values,setValues]=useState(initialFValues)
const[users,setUsers]=useState([])
useEffect(()=>{
    const user=localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users")):false
    if(user){
    setUsers(user)
    }
    console.log(user)
    setOk(true)
},[])
useEffect(()=>{
if(ok){
    localStorage.setItem("users", JSON.stringify(users))
}
},[users])
useEffect(()=>{
if(notification){
    setTimeout(() => {
        setNotification(false)
    }, 2000);
}
},[notification])


const handleclick=()=>{
    setOpen(true)
}
const handledelete=async (i)=>{
var u=users.filter((h,index)=>!(index===i))
 setUsers(u)
 setMessage('Successfully Deleted!')
setNotification(true)
}
    return(
        <>
<Collapse in={notification}>
        <Alert open={notification}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setNotification(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
        </Collapse>
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

        <Popup open={open} setOpen={setOpen} values={values} setValues={setValues} 
        users={users} setUsers={setUsers} setNotification={setNotification} setMessage={setMessage}/>
        
        </>
    )
}

export default Settings