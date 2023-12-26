import React from "react";
import Landing from "./components/landing/Landing";
import "./App.css";
import { Header } from "./components/navbar/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Reportcrime from "./components/crimereporting/Reportcrime";
import Casefile from "./components/casefiles/Casefile";
import Lawyers from "./components/Lawyers/Lawyers";
export default function App() {
  return (
    <div className="app">
      <Header />
      
      <Routes>
      <Route path="/reportcrime" element={<Reportcrime/>}/>
      <Route path="/" element={<Landing/>}/>
      <Route path="/casefiles" element={<Casefile/>}/>
      <Route path="/findalawywer!?" element={<Lawyers/>}/>
      </Routes>{" "}
      <Footer />

      
    </div>
  );
}
