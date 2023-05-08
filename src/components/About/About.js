import Hero from "../Hero/Hero";
import night from "../../assets/night.jpg"
import "./About.css"
import aboutContent from "./aboutContent";

function About(){
    return(
        <div>
        <div className="About-hero" >
<Hero   h="About" img={night}  />
        </div>
        
<div className="container mt-5 mb-0">
    <div className="row">
        {aboutContent.map((item)=>{
            return(
                <div className="col-12">
                    <h1>{item.h}</h1>
                    <p>{item.p}</p>
                </div>
            )
        })}
    </div>

</div>

        </div>
    )
}
export default About;