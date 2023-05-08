import "./Destination.css";
function Destination(porops) {
  return (
    <div className="Dest">
     

      <div className="container">
        <div className="row">
          <div className={porops.cname}>
            <h1>{porops.h}</h1>
            <p>
              {porops.p}
            </p>
          </div>
          <div className="img-section row col-md-7 col-sm-12">
            <img className="col-md-5 col-sm-12 " src={porops.imgR}></img>
            <img className="col-md-5  col-sm-12 img2" src={porops.imgL}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Destination;
