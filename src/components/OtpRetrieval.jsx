import { useState, useRef, useEffect } from "react";
import "../App.css";
function OtpRetrieval({ otpLength = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);
  const handleKeyDown = (e, index) => {
    const key = e.key;
    const copyOtpInput = [...otpFields];
    if (key === "ArrowLeft") {
      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }
    if (key === "ArrowRight") {
      if (index + 1 < otpFields.length) {
        ref.current[index + 1].focus();
      }
    }
    if (key === "Backspace") {
      copyOtpInput[index] = "";
      setOtpFields(copyOtpInput);
      if (index > 0) {
        ref.current[index - 1].focus();
      }
      return;
    }
    if (isNaN(key)) return;

    copyOtpInput[index] = key;
    if (index + 1 < otpFields.length) {
      ref.current[index + 1].focus();
    }
    setOtpFields(copyOtpInput);
  };
  useEffect(() => {
    ref.current[0].focus();
  }, []);
  return (
    <div className="otp-container">
      {otpFields.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            value={value}
            ref={(curInput) => (ref.current[index] = curInput)}
            className="otpInput"
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}
export default OtpRetrieval;
