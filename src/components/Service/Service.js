import Hero from "../Hero/Hero";
import ServiceImg from "../../assets/3.jpg"
import "./Service.css"
import Trip from "../Trip/Trip";
import trip from "../Trip/tripInfo";

function Service(){
return(
  <div> 
       <div className="Service-hero">
<Hero h="Service" img={ServiceImg}/>
</div>
<div className="container my-5">
        <div className="row">
        {trip.map((item) => {
        return (
          
          
            <Trip

              h={item.title}
              p={item.description}
              img={item.img}

             
            />
         
        );
      })}
        </div>
      </div>
      </div>

)

}
export default Service;