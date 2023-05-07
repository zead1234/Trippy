import "./App.css";
import Hero from "./components/Hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Heroimg from "./assets/12.jpg";
import Nav from "./components/Nav/Nav";
import Destination from "./components/Destination/Destination";
import content from "./components/Destination/content";
import Header from "./components/Header/Header";
import Trip from "./components/Trip/Trip";
import trip from "./components/Trip/tripInfo";
import Foo from "./components/Foo/Foo";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero img={Heroimg} />
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
  <Foo/>
    </div>
  );
}

export default App;
