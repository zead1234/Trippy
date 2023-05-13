import Hero from "../Hero/Hero";
import Form from "../Form/Form";
import "./Signup.css"
import SignupImg from "../../assets/2.jpg"
function Signup(){
    return(

        <div>
            <div className="Contact-hero">
              
        <Hero h="Contact" img={SignupImg}/>
             
  
  </div>
  <div className="container contact my-4"> 
        <div className="row">
            
          <h1 className="col-12 text-center my-3">Register Now</h1>
          <div className="Signup-section col-12 ">
    
          <Form value="Register"/>
          </div>
  
          </div> 
        </div>
  
        </div>
      )
}
export default Signup;