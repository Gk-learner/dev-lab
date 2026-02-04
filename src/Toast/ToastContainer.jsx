import React, { useState } from 'react';
import Toast from './Toast.jsx'
const ToastContainer = () => {
    const[toast, setToast] = useState(false)
    const successToast  = {
      message: "Data Saved Successfully",
      type: "Success",
      duration: 3000
    }
    const errorToast  = {
      message: "Something went wrong",
      type: "Error",
        duration: 3000
    }
    const infoToast  = {
      message: "This is an info toast",
      type: "Info",
        duration: 3000
    }



  return (
    <div>
      <div>
        <button onClick={() => {
          setToast(successToast)
        }}>Show Success</button>
        <button onClick={()=>{setToast(errorToast)}}>Show Error</button>
        <button onClick={()=>{setToast(infoToast)}}>Show Info</button>
      </div>
      <Toast toast={toast} />
    </div>
  );
};

export default ToastContainer;
