import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Sobre from "./components/Sobre/Sobre";
import Home from "./components/Home/Home";
import Novidades from "./components/Novidades/Novidades";
import "./GlobalStyle.css";
export default function App() {
  return (
    <>
      <BrowserRouter>
    <Header/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/novidades" element={<Novidades/>}/>
         <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}