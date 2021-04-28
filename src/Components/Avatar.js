import React from "react";

export function Avatar({ src, size, alt, children, color, variant }) {
  let fontSize = 20;
  if (size) {
    fontSize = size.split(`px`);
  } else {
    fontSize = 20;
  }

  return (
    <div
      style={{
        background: color ? color : "orange",
        height: size,
        width: size
      }}
      className={
        variant === "square"
          ? `avatar-container square`
          : `avatar-container circle`
      }
    >
      {src && (
        <img
          src={src}
          alt={alt}
          className={variant === "square" ? `image square` : `image circle`}
        />
      )}
      {children && (
        <span
          className="txt-style"
          style={{ fontSize: size ? fontSize[0] / 2 : fontSize }}
        >
          {children}
        </span>
      )}
    </div>
  );
}
