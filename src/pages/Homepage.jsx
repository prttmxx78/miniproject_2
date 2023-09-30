import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import "./Homepage.css";

const Homepage = () => {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  const getMenus = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        const data = res?.data?.data?.Data;
        setMenus(data);

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="body">
        <div></div>
        <h1 style={{ fontFamily: "sans-serif", fontSize: "xxlarger", textAlign: "center" }}>Welcome to Warungku.id</h1>
        <br />
        <p style={{ fontFamily: "sans-serif", fontSize: "large", marginLeft: "100px" }}>
          easy way to order Indonesian food with us <button style={{ color: "blue" }}>Readmore</button>
        </p>
        <br />
        <br />
        {menus.map((item, key) => (
          <div key={key} style={{ marginButtom: "50px" }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleDetail(item.id)}>Detail</button>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <footer style={{ textAlign: "center", marginBottom: "20px" }}>Copyright © 2023 | warungku.id</footer>
    </>
  );
};

export default Homepage;
