import HeaderNavItem from "./HeaderNavItem";
import { NAV_LIST } from "../../utils/nav-list";
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.mainHeader}>
      <div className="container">
        <nav>
          <ul className={classes.mainNavList}>
            {NAV_LIST.map(item => (
              <HeaderNavItem key={item.path} path={item.path}>
                {item.name}
              </HeaderNavItem>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;