import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Versus from "./ShowDown"
import Navbar from "./NavBar"


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/showdown" element={<Versus/>}/>
     </Routes>
    </div>
  );
}

export default App;
