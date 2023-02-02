
import Menu from "./components/Menu/Menu";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Story from "./components/Story/Story";
import NavBar from "./pages/NavBar";
import Rewards from "./components/Rewards/Rewards";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Story" element={<Story />}/>
        <Route path="/Menu" element={<Menu />}/>
        <Route path="/Rewards" element={<Rewards />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
