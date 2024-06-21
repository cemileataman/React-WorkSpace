import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product";
import Container from "./Container";

function App() {
  return (
    <div>
      <Container>
        <Product productName="Telefon" price={10000}/> {/* buradaki product containerde ki propslara eşitir. */}
      </Container>
    
    </div>
  );
}

export default App;
