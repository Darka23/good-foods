import Header2 from "../Header/Header2";
import GridRecipe from "../Recipe/GridRecipe";
import { auth, useAuth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import Preloader from "../Preloader";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { GetAllRecipes } from "../../services/RecipeServices";


const Profile = () => {

    const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
    const [user] = useAuthState(auth);	

    useEffect(() => {
        setTimeout(() => {
            GetAllRecipes()
                .then((data) => {
                    setRecipes(data);
                    setIsLoading(false);
                })
        }, 750)

    }, []);

    if (isLoading) {
        return <Preloader />
    }


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
                            

                            {recipes.length
                                ?
                                recipes
                                    .filter(recipe=>recipe.userId==user.uid)
                                    .map((recipe)=>{
                                        return <GridRecipe key={recipe.id} props={recipe}/>
                                })
                                :
                                <h1>You haven't posted any recipes yet</h1>
                            }           
                            
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;