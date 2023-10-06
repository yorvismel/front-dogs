import "./App.css";
import { Route, Routes } from "react-router-dom";

import Landing from "./componentes/landing/Landing";
import Home from "./componentes/home/Home";
import Detail from "./componentes/detail/Detail";
import DogCreate from "./componentes/dogcreate/DogCreate";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dog/:id" element={<Detail />} />
        <Route path="/create" element={<DogCreate />} />
      </Routes>
    </div>
  );
};

export default App;
