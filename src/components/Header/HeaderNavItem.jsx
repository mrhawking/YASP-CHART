import { NavLink } from 'react-router-dom'
import classes from './HeaderNavItem.module.css'

const HeaderNavItem = ({children,path}) => {
  return (
    <li className={classes.mainNavItem}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? classes.active : undefined
        }
        end>
        {children}
      </NavLink>
    </li>
  );
}

export default HeaderNavItem;