import React from "react";
export default function Modal({ title, children, dismissable, onClose }) {
  return (
    <div>
      <div className="modal black">
        <div className="modal-content">
          {dismissable && (
            <div className="close" onClick={onClose}>
              &times;
            </div>
          )}
          <div className="modal-flex-row">
            {title && (
              <div>
                <h2>{title}</h2>
                <hr />
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
