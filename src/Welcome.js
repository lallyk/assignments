
import { useHistory } from "react-router-dom";
const Welcome=()=>{
    const history=useHistory();
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        history.push('/login');
      }
    return(
        <div>
            <center>
            <h1>Hello World!</h1>
            <button onClick={handleLogout}>LogOut</button></center>
        </div>
    )
}
export default Welcome;