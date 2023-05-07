import "./Hero.css"
function Hero(props){

    return(
        <div className="Hero">
        <img src={props.img}></img>
       <div className="text-section">
       <h1>Your Journey Your Story</h1>
        <p>Choose You Favorite Destination.</p>
        <button className="btn btn-light">Travel Now</button>
       </div>
        </div>
    )

}
export default Hero;