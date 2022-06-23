import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {useState} from 'react'
import { useScrollTrigger } from '@mui/material';
// or


export const Popup=({open,setOpen,values,setValues,users,setUsers})=>{
   
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        console.log('rajesh')
    }
    const handleClose = () => {
        setOpen(!open)
      };
const handlesubmit=(e)=>{
e.preventDefault()
setUsers([...users,values],()=>{
    localStorage.setItem("users", JSON.stringify(users))
})
setOpen(!open)
}
    return(
        <>
              <div className="popup">
           <Dialog onClose={handleClose} open={open}>
        
           <div className="popp">
            <div className="popup_left">
        <div>
<ManageAccountsRoundedIcon style={{fontSize:'10vmax'}}/>
</div>
<div>
<p>Simple dialogs can provide additional details or actions about a
     list item. For example, they can display avatars, icons, 
     clarifying subtext, or orthogonal actions such as adding an account.
</p>
</div>
            </div>
            <div className="popup_right">
            <h2>User information</h2>
<form className='form' onSubmit={handlesubmit}>
<h5>Email id of the user</h5>
<input type='text' className='forminput' name='email'  value={values.email}
                        onChange={handleInputChange}/>
<h5>Name of the user</h5>
<input type='text' className='forminput' name='name'  value={values.name}
                        onChange={handleInputChange}/>
<h5>Role</h5>
<input type='text' className='forminput' name='role'  value={values.role}
                        onChange={handleInputChange}/>
<div>
    <button className='cancel' onClick={handleClose}>cancel</button>
    <button className='add' type='submit'>add</button>
    </div>
</form>

            </div>
            </div>

        </Dialog>
        </div>
        </>
    )
}

export default Popup