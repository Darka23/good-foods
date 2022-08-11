import { useEffect, useReducer, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { GetAdminUser } from "../../services/UserServices";
import Preloader from "../Preloader";
import './AdminPanel.css'

const AdminPanel = () => {

    const [user] = useAuthState(auth);
    const [admin, setAdmin] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(()=>{
        GetAdminUser()
        .then((data)=>{
            setAdmin(data);
            setIsLoading(false);
        })
    },[])

    if(isLoading){
        return <Preloader/>
    }

    if(admin[0]?.uid != user?.uid){
        return <Navigate to="/not-found"/>
    }

    return (
        <>
            <h1 className="adminHeading">Admin Panel</h1>
            <div className="adminButtons">
            <Link id="adminButton" className="default-btn mid-button dark-color" to="/all-users">Show users</Link>
            </div>
        </>
    );
}

export default AdminPanel;