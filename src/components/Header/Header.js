import "./Header.css"
function Header(props){
    return(
        <div className="header">
        <h1>{props.h}</h1>
        <p>{props.p}</p>
      </div>
    )
}
export default Header;