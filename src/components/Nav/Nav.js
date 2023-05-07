import React, { useState } from "react"
import Links from "../Links/Links"
import "./Nav.css"
import info from "../Links/info"

function Nav(){

  const[state,setstate]=useState(false);
   function show() {
setstate(state=>!state)
  }
return (

    
       
<nav >
    <div className="logo">
    <h3>Trippy</h3>
      <i className={state ? 'fa-solid fa-times bars' :'fa-solid fa-bars bars' } onClick={show}></i>
    </div>
   
        <ul className={state ? 'active':'down'}>
          {info.map((item,index)=>{return(<Links name={item.content} cname={item.cname} key={index}/>)
            
          })}
                  <button className="btn btn-light">Sign-up</button>

        </ul>
</nav>



    
 
)
}
export default Nav