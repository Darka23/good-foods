import { Link } from "react-router-dom";
import './AdminPanel.css'

const AdminPanel = () => {
    return (
        <>

            <h1 className="adminHeading">Admin Panel</h1>
            <div className="adminButtons">
            <Link id="adminButton" className="default-btn mid-button dark-color" to="/all-users">Show users</Link>
            <Link id="adminButton" className="default-btn mid-button dark-color" to="/all-users">Show users</Link>
            <Link id="adminButton" className="default-btn mid-button dark-color" to="/all-users">Show users</Link>
            </div>
        </>
    );
}

export default AdminPanel;