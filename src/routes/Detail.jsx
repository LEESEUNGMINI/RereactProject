import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useLocation, useParams } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();
  const item = state?.item;
 

  return (
    <div>
      <Header />
<div>{item?.RCP_NM}</div>
      <Footer />
    </div>
  );
}