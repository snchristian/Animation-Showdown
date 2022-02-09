import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Navbar from "./NavBar"
import CharacterList from "./CharacterList";
import Versus from "./Versus";




function App() {

  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/versus" element={<Versus/>}/>
       <Route path="/charcterList" element={<CharacterList/>}/>
     </Routes>
    </div>
  );
}

export default App;
