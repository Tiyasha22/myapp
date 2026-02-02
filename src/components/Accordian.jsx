import { useState } from "react";

const Accordian = ({ qna }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="accordian-container">
      <h3>
        {qna.question}
        <span className="faq-span" onClick={() => setShow(!show)}>
          {show ? "-" : "+"}
        </span>
      </h3>

      {show ? <p>{qna.answer}</p> : ""}
    </div>
  );
};

export default Accordian;
