import { Link } from "react-router-dom";

const LoginRegister = () => {
    return (
        <span className="sign-in-buttons">
            <Link className="login" to="/login">
                Login
            </Link>
            <Link className="register" to="/register">
                Register
            </Link>
        </span>
    );
}

export default LoginRegister;