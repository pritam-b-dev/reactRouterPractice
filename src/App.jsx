import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import { useState } from "react";
import ConditionalRendering from "./ConditionalRendering";
import PostDetails from "./PostDetails";
import OfferDisplaying from "./OfferDisplaying";
import Forms from "./Forms";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/about" element={<About name="prit" user={user} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/conditionalrendering"
          element={<ConditionalRendering />}
        />
        <Route path="/conditionalrendering/:id" element={<PostDetails />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/offerdisplaying" element={<OfferDisplaying />} />
      </Routes>
    </>
  );
}

export default App;
