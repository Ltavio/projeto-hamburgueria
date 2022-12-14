import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const Toast = () => {
  return (
    <div>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
