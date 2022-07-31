import { logout } from "../../firebase";

const LogOut = () => {
    return (
        <button onClick={logout}>
            LogOut
        </button>
    );
}

export default LogOut;