import "./Hero.css"
function Hero(props){

    return(
        <div className="Hero">
        <img src={props.img} alt="Travel"></img>
       <div className="text-section">
       <h1>{props.h}</h1>
        <p>{props.p}</p>
        <button className="btn btn-light"> {props.btn}</button>
       </div>
        </div>
    )

}
export default Hero;