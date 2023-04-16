import { NavLink } from "react-router-dom";
import classes from './Header.module.css';
const Header=()=>{
return(
    <div>
      <header>
    <nav>
      <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/welcome">Welcome</NavLink>
    </nav></header>
    </div>
  )
}
export default Header;