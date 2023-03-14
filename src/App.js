import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./render/LandingPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
