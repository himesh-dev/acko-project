import React from "react";
import Header from "./components/header";
import Tiles from "./components/tiles";
import Body from "./components/body";
import Footer from "./components/footer";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Tiles />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
