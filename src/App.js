import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav";
import Foo from "./components/Foo/Foo";
import { Outlet } from "react-router";
import Home from "./components/Home/Home";


function App() {
  
  return (
    <div className="App">
      <Nav />
      <Outlet/>
      <Home/>
      <Foo />
    </div>
  );
}

export default App;
