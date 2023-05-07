import icon from "./icon";
import liContent from "./liContent";
import "./Foo.css"
function Foo(){
    return(
        <div className="bg-dark text-white">
            <div className="container">
                <div className="row">
                <div className=" col-md-10 col-sm-12 my-3">
                    <h1>Trippy</h1>
                    <p>Choose You Favorite Destination.</p>
                   

                    </div>
                    <div className="icons col-md-2 col-sm-12 my-3">
                    {
                    icon.map((item,id)=>{
                        return(
                            <i className={item.class}></i>
                        )
                    })
                    }
                    </div>
                </div>
                <div className="row links">
                   
                       {
                       <ul className="list-group text-white col-12 f-ul">
                       {liContent.map(item => (
                         <a className="list-group-item text-white" key={item.id}>
                           {item.h}
                           <ul className=" list-group text-white col-4 ">
                             {item.p.map(subitem => (
                               <a className="list-group-item text-white pointer" key={subitem}>{subitem}</a>
                             ))}
                           </ul>
                         </a>
                       ))}
                     </ul>
                       } 
                   
                </div>
            </div>
            
        </div>

    )
}
export default Foo;