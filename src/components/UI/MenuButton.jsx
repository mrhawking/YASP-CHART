import { useEffect, useState } from 'react';
import HamburgerIcon from '../Icons/HamburgerIcon';
import classes from './MenuButton.module.css';

const MenuButton = () => {
  const [showButtonText, setShowButtonText] = useState(false);

  useEffect(() => {
    let timeout;
    if (showButtonText) {
      timeout = setTimeout(() => {
        setShowButtonText(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [showButtonText]);

  const handleClick = () => {
    setShowButtonText(true);
  };

  return (
    <button className={classes.menuButton} onClick={handleClick}>
      <HamburgerIcon color="#898290" />
      {showButtonText && <span className={classes.buttonMessage}>Я - маленькая кнопочка и пока ничего не умею:/</span>}
    </button>
  );
}

export default MenuButton;