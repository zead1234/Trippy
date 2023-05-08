import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav";
import Foo from "./components/Foo/Foo";
import { Outlet } from "react-router";
import { Navigate } from "react-router";


function App() {
  
  return (
    <div className="App">
      <Nav />
      <Navigate to="/Trippy/Home"/>
      <Outlet/>
      <Foo />
    </div>
  );
}

export default App;
