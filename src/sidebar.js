


export const Sidebar=({category,setCategory})=>{
const components=['Products','demo script','customers','sales team','demos','settings']
    const handleclick=(a)=>{
setCategory(a)
    }
    return(
        <>
        <div className="sidebar">
{components.map((c)=><>
<div  onClick={()=>handleclick(c)} className={c===category?'category selected':'category'}>
    {c}
</div>
</>)}
        </div>
        </>
    )
}

export default Sidebar