import "./Links.css"
import { Link } from "react-router-dom";
function Links (props,{key}){
return(
<>    
<Link className="li" to={props.name}><i className={props.cname}></i> &nbsp; {props.name}</Link>
{/* <li  key={key}>
<a href="#"><i className={props.cname}></i> &nbsp; 
{props.name}</a>
</li> */}
</>

)


}
export default Links;