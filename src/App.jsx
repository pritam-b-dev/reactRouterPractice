import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/about" element={<About name="prit" user={user} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
