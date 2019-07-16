import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import Overlay from "./components/overlay";
import SectionA from "./components/section-a";
import SectionB from "./components/section-b";
import SectionC from "./components/section-c";
import SectionD from "./components/section-d";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Overlay />

      <main id="main">
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <Footer />
      </main>
    </div>
  );
}

export default App;
