import Settings from "./settings"


export const Rightbar=({category})=>{
    return(
        <>
        <div className="rightbar">
{category==='settings'?<Settings/>:category}
        </div>
        </>
    )
}

export default Rightbar