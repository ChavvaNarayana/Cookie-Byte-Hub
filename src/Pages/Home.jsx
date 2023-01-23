import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";
import Navbar from "../Components/Navbar";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
    if (user) {
      navigate("/home");
    }
  }, []);

  const [loader, setloader] = useState(true);

  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar></Navbar>
      <div className="postContainer">
        {loader && <h2 className="loading">Thank you for the login.</h2>}
      </div>
    </div>
  );
}
