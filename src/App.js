import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { RootURL } from "./global/constants";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import MyAccountInfo from "./components/MyAccountInfo";
import UserCreatePage from "./pages/UserCreatePage";

const CustomerListContext = createContext({});

function App() {
  const [customerList, setCustomerList] = useState(null);
  const [myData, setMyData] = useState({});
  useEffect(() => {
    fetchData();
    getUserInfo();
  }, []);
  function fetchData() {
    const url = `${RootURL}api/v1/customers/`;
    const token = localStorage.getItem("examination1");

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setCustomerList(data.results);
      });
  }
  function getUserInfo() {
    const token = localStorage.getItem("examination1");
    fetch("https://frebi.willandskill.eu/api/v1/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      });
  }
  return (
    <CustomerListContext.Provider
      value={{
        customerList,
        setCustomerList,
        fetchData,
        getUserInfo,
        myData,
        setMyData,
      }}
    >
      <Navigation />
      {/* <MyAccountInfo /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer/:index" element={<CustomerDetailPage />} />
        <Route path="/user/create" element={<UserCreatePage />} />
      </Routes>
    </CustomerListContext.Provider>
  );
}
export { CustomerListContext };
export default App;
