import { Toast } from "react-bootstrap";
import { createContext, useContext, useState } from "react";
import { ToastContainer } from "react-bootstrap";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, variant = 'info') => {
    setToasts([...toasts, { message, variant, id: Date.now() }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer position="top-end" className="p-3">
        {
          toasts.map(({ id, message, variant }) => (
            <Toast
              key={id}
              onClose={() => removeToast(id)}
              delay={3000}
              autohide
              bg={variant}>
              <Toast.Body>{message}</Toast.Body>
            </Toast>
          ))
        }
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
