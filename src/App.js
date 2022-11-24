import React from "react";
import NavBar from "./components/NavBar";
import Present from "./components/Present"
import Footer from "./components/Footer";
import Instrument from "./components/Instrument"


function App() {
  return (
    <div>
      <NavBar/>
      <Present/>
      <Instrument/>
      <Footer />
    </div>
  );
}

export default App;
