import Header from "./header"
import Sidebar from "./sidebar"
import Rightbar from "./rightbar"
import { useState } from "react"

export const Home=()=>{
    const [category,setCategory]=useState('settings')
    return(
        <>
    <div className="home">
       <Header/>
    <div className="maindiv">
<Sidebar category={category} setCategory={setCategory}/>
<Rightbar category={category}/>
    </div>
       </div>
        </>
    )
}

export default Home