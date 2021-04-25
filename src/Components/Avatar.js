import React from "react";

export function Avatar({ src, size, alt, children, color, variant }) {
  let fSize = 20;
  if (size) {
    fSize = size.split(`px`);
  } else {
    fSize = 20;
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
          style={{ fontSize: size ? fSize[0] / 2 : fSize }}
        >
          {children}
        </span>
      )}
    </div>
  );
}
