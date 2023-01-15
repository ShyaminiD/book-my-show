import "./App.css";
import Signin from "./Signin";
import Home from "./Home";
import { Route, Routes, Link } from "react-router-dom";
import Navigationbar from "./Navbar";
import Navbarsmall from "./Navbarsmall";
import MovieDetails from "./MovieDetails";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Navbarsmall />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieDetails:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
