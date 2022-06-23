import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
// or


export const Popup=({open,setOpen})=>{
    const handleClose = () => {
        setOpen(!open)
      };
const handlesubmit=(e)=>{
e.preventDefault()
}
    return(
        <>
           <Dialog onClose={handleClose} open={open}>
        
        <div className="popup">
            <div className="popup_left">
        <div>
<ManageAccountsRoundedIcon style={{fontSize:'10vmax'}}/>
</div>
<div>
<p>I applied through internshala I applied through internshala I applied through internshala</p>
</div>
            </div>
            <div className="popup_right">
            <DialogTitle>Set backup account</DialogTitle>
<form className='form' onSubmit={handlesubmit}>
<input type='text'/>
<input type='text'/>
    <button className='cancel' onClick={handleClose}>cancel</button>
    <button className='add' type='submit'>add</button>
</form>

            </div>
        </div>

        </Dialog>
        </>
    )
}

export default Popup