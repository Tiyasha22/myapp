import { useState } from "react";

const ToastContainer = () => {
  const [toast, setToast] = useState([]);
  const handleDelete = () => {};
  const handleAdd = (message, type) => {
    const id = new Date().getTime();
    const newToasts = [...toast, { id, message, type }];
    setToast(newToasts);
  };
  return (
    <div className="toast-main-container">
      <div className="toast-container">
        {toast.map(({ id, message, type }) => {
          return (
            <div className="toast" key={id}>
              {message} toast
              <span className="toast-span" onClick={handleDelete}>
                x
              </span>
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button onClick={() => handleAdd("Success", "success")}>
          Success toast
        </button>
        <button onClick={() => handleAdd("Info", "info")}>Info toast</button>
        <button onClick={() => handleAdd("Warning", "warning")}>
          Warning toast
        </button>
        <button onClick={() => handleAdd("Error", "error")}>Error Toast</button>
      </div>
    </div>
  );
};

export default ToastContainer;
