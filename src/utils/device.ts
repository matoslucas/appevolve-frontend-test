import { useEffect, useRef } from "react";
const Device = () => {

  const _width = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };

  const _height = () => {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    );
  };

  return { with: _width, height: _height };
};
export default Device();
