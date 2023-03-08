import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./render/LandingPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
