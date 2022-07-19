import {Route,Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import SingleMovie from "./components/SingleMovie";

function App() {
  return ( <div className="container">
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/movie/:ids" element={<SingleMovie/>}/>
    </Routes>
       
      </div>

  );
}

export default App;
