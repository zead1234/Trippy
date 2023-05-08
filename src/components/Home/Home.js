import Destination from "../Destination/Destination";
import content from "../Destination/content"; 
import Header from "../Header/Header";
import Trip from "../Trip/Trip";
import trip from "../Trip/tripInfo";
import Hero from "../Hero/Hero";
import Heroimg from "../../assets/12.jpg"



function Home(){

return(
    <div>
        <Hero
        h="Your Journey Your Story"
        p="Choose You Favorite Destination."
        btn="Travel Now"
        img={Heroimg}
      />
      <Header
        h="Popular Destinations"
        p=" Tours dive you the opportunity to see a lot, within a time frame."
      />
      {content.map((item) => {
        return (
          <div>
            <Destination
              h={item.h}
              p={item.description}
              imgL={item.imgL}
              imgR={item.imgR}
              cname={item.cname}
            />
          </div>
        );
      })}
      <Header
        h="Recent Trips"
        p="You can discover unique destination using Google Maps."
      />
      <div className="container">
        <div className="row">
          {trip.map((item) => {
            return <Trip h={item.title} p={item.description} img={item.img} />;
          })}
        </div>
      </div>
    </div>
)
}
export default Home;