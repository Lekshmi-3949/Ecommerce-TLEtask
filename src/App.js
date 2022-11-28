import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Store from './components/Cart/Cart';
import Default from "./components/Default";
import Modal from './components/Modal/Modal';


function App() {
  return (
    <React.Fragment>
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/cart" element={<Store/>} />
        <Route element={<Default/>} />
        </Routes>
      </BrowserRouter>
      <Modal />
    </React.Fragment>
  );
}

export default App;



