import Header2 from "../Header/Header2";
import GridRecipe from "../Recipe/GridRecipe";
import { auth, useAuth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import RecipeListGrid from "../RecipeList/RecipeListGrid";
import Preloader from "../Preloader";
import { Navigate } from "react-router-dom";


const Profile = () => {

    const [user] = useAuthState(auth);	

    if(!user){
        return <Navigate to="/login" replace/>
    }

    return (
        <>
            <section className="wrapper-main-contents all-chefs">
                <div className="container">
                    <div className="line-heading">
                        <h2>My Profile</h2>
                    </div>
                    <div className="wrapper-head-chef">
                        <div className="head-chef">
                            <div className="left-side">
                                <a>
                                    <img src={user.photoURL} alt="head chef" />
                                </a>
                            </div>
                            <div className="right-side">
                                <h3>
                                    <a>{user.displayName}</a>
                                </h3>
                                <span className="type">{user.email}</span>
                               
                                <div className="separator-chef" />
                                <p>
                                    I find that the biggest difference between being a chef in New York
                                    City and being a chef. The Bay Area is that in NYC you work to MAKE
                                    the food taste good. Out here you work to LET the food taste good!
                                </p>
                                <br />                               
                            </div>
                        </div>
                        <div className="bg-corner-head-chef">
                            <img src="images/temp-images/bg-corner-shef.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="line-heading">
                        <h2>My Recipes</h2>
                    </div>
                    <div className="wrapper-chef-team">
                        <ul className="chef-team">
                            

                            <GridRecipe/>
                            
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;