import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Hero from "./components/Hero";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Section3 />
        <Footer />
      </Container>
    </>
  );
}

export default App;
