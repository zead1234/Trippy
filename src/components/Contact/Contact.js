import Hero from "../Hero/Hero";
import "./Contact.css"
import ContactImg from "../../assets/2.jpg"
import Form from "../Form/Form";
function Contact(){
    return(

      <div>
          <div className="Contact-hero">
            
      <Hero h="Contact" img={ContactImg}/>
           

</div>
<div className="container contact my-4"> 
      <div className="row">
          
        <h1 className="col-12 text-center my-3">Send a message to us!</h1>
        <div className="form-section col-12 ">
        <Form value="Send Message"/>
        </div>

        </div> 
      </div>

      </div>
    )
}
export default Contact;