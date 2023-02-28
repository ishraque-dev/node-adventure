import { useState, useEffect } from 'react';

const useWindowResize = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return [activeMenu, setActiveMenu];
};
export default useWindowResize;
