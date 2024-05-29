import { useEffect, useState } from "react";
import { SCREEN_WIDTH } from "../utils/screen-width";


export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= SCREEN_WIDTH.SCREEN_SM && width <= SCREEN_WIDTH.SCREEN_MD,
  };
};