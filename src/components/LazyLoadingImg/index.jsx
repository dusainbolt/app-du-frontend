import React from "react";
import Lazyload from "react-lazyload";

export default function LazyloadImg({
  delayThrottle,
  height,
  ...props
}) {
  return (
    <Lazyload throttle={delayThrottle ? delayThrottle : 400} height={height}>
      <img {...props} />
    </Lazyload>
  );
}

