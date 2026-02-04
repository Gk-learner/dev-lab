import { useEffect, useState } from "react";

const Toast = ({message, type,duration}) => {
    const toastData = {message, type, duration};
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!toastData.message) return;
        setHide(false);

    const timer = setTimeout(() => {
      setHide(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!toastData.message || hide) return null;


  return (
    <div>
      {/* <button style={{ backgroundColor: "green", color: "white" }}>
        {toastData.message}
      </button> */}
      {toastData.type === "Success" && <button style={{ backgroundColor: "green", color: "white" }}>
        {toastData.message}
      </button>}
      {toastData.type === "Error" && <button style={{ backgroundColor: "red", color: "white" }}>
        {toastData.message}
        </button>}
        {toastData.type === "Info" && <button style={{ backgroundColor: "blue", color: "white" }}>
        {toastData.message}     

      </button>}
    </div>
  );
};

export default Toast;
