import React from "react";
export default function Modal({ title, children, dismissable, onclose }) {
  return (
    <div>
      <div style={{ color: "black" }} className="modal">
        <div className="modal-content">
          {dismissable && (
            <div className="close" onClick={onclose}>
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
