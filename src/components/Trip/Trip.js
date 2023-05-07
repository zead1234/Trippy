import "./Trip.css"
function Trip(props){
    return(
        <div className="card col-lg-4  col-md-6 col-sm-12" >
  <img className="card-img-top" src={props.img} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.h}</h5>
    <p className="card-text">{props.p}</p>
    
  </div>
</div>

    )
}
export default Trip;