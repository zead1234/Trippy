import "./Links.css"
function Links (props,{key}){
return(
<li className="li" key={key}>
<a href="#"><i className={props.cname}></i> &nbsp; 
{props.name}</a>
</li>

)


}
export default Links;