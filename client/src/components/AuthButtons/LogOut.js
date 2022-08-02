import { logout } from "../../firebase";
import { Link } from "react-router-dom";

const LogOut = () => {
    return (
        <span className="sign-in-buttons" onClick={logout}>
            <Link to="#">LogOut</Link>
        </span>
    );
}

export default LogOut;