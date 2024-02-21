import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function NewResipy() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px]">
          <h1 className=" text-center font-bold mt-16 mb-12">신규 레시피</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
