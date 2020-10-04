import "../styles/snackbar.css";
import React from "react";
export default function snackbar({ isOpen, children, onDecline, onAccept }) {
  const { useState, useEffect } = React;
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSnackbar(isOpen);
    }, 100);
  }, [isOpen]);

  return (
    <div
      className={`snackbar${
        showSnackbar ? " snackbar--open" : " snackbar--closed"
      }`}
    >
      <div className="snackbar-content">{children}</div>
      {onDecline && (
        <div className="snackbar-decline" onClick={onDecline}>
          Nej
        </div>
      )}
      {onAccept && (
        <div className="snackbar-accept" onClick={onAccept}>
          Ja
        </div>
      )}
    </div>
  );
}
