import React from "react";

function Icon({ alt = "", className, onClick, src }) {
  return <img src={src} className={className} alt={alt} onClick={onClick} />;
}

export default Icon;
