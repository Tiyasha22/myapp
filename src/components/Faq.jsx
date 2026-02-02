import React from "react";
import Accordian from "./Accordian";
import data from "../assets/accordianData.json";
const Faq = () => {
  return (
    <div>
      <h1>FAQ's</h1>
      {data.map((obj) => {
        return <Accordian qna={obj} key={obj.id} />;
      })}
    </div>
  );
};

export default Faq;
