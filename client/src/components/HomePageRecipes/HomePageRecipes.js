import React, { useState, useEffect } from 'react';
import { GetAllRecipes } from '../../services/RecipeServices';
import Preloader from '../Preloader';
import GridRecipe from '../Recipe/GridRecipe';


const HomePageRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <>
            <section className="wrapper-main-contents all-chefs">
                <div className="container">
                    <div className="container-tags">
                        <span className="tag">
                            <span className="tag-inner">Most Recent</span>
                        </span>
                    </div>
                    <div className="wrapper-chef-team">
                        <ul className="chef-team">

                            {recipes.length
                                ?
                                recipes
                                    .map((recipe) => {
                                        return <GridRecipe key={recipe.id} props={recipe} />
                                    })
                                    .slice(0,3)
                                :
                                <h1>No recipes yet...</h1>
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePageRecipes;