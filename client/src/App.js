import React, { Component, useState, useEffect } from "react";
import SupplyChainContract from "./contracts/SupplyChain.json";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RoleDataContextProvider } from "./context/RoleDataContext";
// import history from "./history";
import { createBrowserHistory } from 'history';
import getWeb3 from "./getWeb3";
import { ethers } from "ethers";

import Manufacture from "./pages/Manufacturer/Manufacture";
import AllManufacture from "./pages/Manufacturer/AllManufacture";
import ShipManufacture from "./pages/Manufacturer/ShipManufacture";

import "./App.css";
import ReceiveThirdParty from "./pages/ThirdParty/ReceiveThirdParty";
import PurchaseCustomer from "./pages/Customer/PurchaseCustomer";
import ShipThirdParty from "./pages/ThirdParty/ShipThirdParty";
import ReceiveDeliveryHub from "./pages/DeliveryHub/ReceiveDeliveryHub";
import ShipDeliveryHub from "./pages/DeliveryHub/ShipDeliveryHub";
import ReceiveCustomer from "./pages/Customer/ReceiveCustomer";
import ReceivedByCustomer from "./pages/Customer/ReceivedByCustomer";
import PurchaseThirdParty from "./pages/ThirdParty/PurshaseThirdParty";
import RoleAdmin from "./pages/RoleAdmin";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme";

import Explorer from './pages/Explorer';
import Home from "./pages/Home";
import { SalesRep } from "./pages/SalesRep/SalesRep";
import ProductionManager from "./pages/ProductionManager/ProductionManager";
import Lottie from "react-lottie";
import * as globeLoaderData from "./assets/globe.json";
import * as successLoaderData from "./assets/success.json";

const globeLoader = {
  loop: true,
  autoplay: true,
  animationData: globeLoaderData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const successLoader = {
  loop: true,
  autoplay: true,
  animationData: successLoaderData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function App() {

  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [loaderSize, setLoaderSize] = useState(320);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setCompleted(true);
      }, 1000);
    }, 4000);
  }, []);



  return (
    <>
      {!completed ? (
        <div className="loading-container container">
          {!loading ? (
            <Lottie
              options={globeLoader}
              height={loaderSize}
              width={loaderSize}
            />
          ) : (
            <Lottie
              options={successLoader}
              height={loaderSize}
              width={loaderSize}
            />
          )}
        </div>
      ) : (
        <div className="App">
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes>

                <Route exact path="/roleAdmin" element={
                  <RoleAdmin />
                } />
                <Route exact path="/explorer" element={
                  <Explorer />
                } />
                <Route exact path="/salesRep" element={
                  <SalesRep />
                } />
                <Route exact path="/productionManager" element={
                  <ProductionManager />
                } />
                <Route exact path="/" element={
                  <Home />
                } />
              </Routes>
            </BrowserRouter>


          </ThemeProvider>
        </div>

      )}

    </>
  );

}

export default App;
