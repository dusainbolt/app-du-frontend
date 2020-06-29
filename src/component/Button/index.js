import React from "react";

export default function Button({ buttonTitle, ...props }) {
  return <button {...props}>{buttonTitle}</button>;
}
