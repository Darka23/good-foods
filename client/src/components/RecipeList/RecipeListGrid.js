import { Link, useSearchParams } from "react-router-dom";
import GridRecipe from "../Recipe/GridRecipe";
import { GetAllRecipes } from "../../services/RecipeServices";
import React, { useState, useEffect } from 'react';
import Preloader from "../Preloader";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import DishTypeSideNav from "../DishTypeSideNav/DishTypeSideNav";


const RecipeListGrid = () => {

	const [searchParams, setSearchParams] = useSearchParams();

	let dishType = searchParams.get("dishType");

	const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const [user] = useAuthState(auth);

	useEffect(() => {
		GetAllRecipes()
			.then((data) => {
				if (dishType) {
					setRecipes(data.filter(x => x.dishType == dishType));
				} else {
					setRecipes(data);
				}
				setIsLoading(false);
			})

	}, [searchParams]);

	if (isLoading) {
		return <Preloader />
	}

	return (
		<>
			{/*banner*/}
			<div className="banner banner-blog">
				<div className="container ">
					<div className="main-heading">
						<h1>Recipe listing page</h1>
					</div>
				</div>
			</div>
			{/*banner ends*/}

			<div className="recipes-home-body inner-page">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-lg-9">
							<div className="recipe-set">
								<h2>Recent Recipes</h2>
								<div className="recipe-listing listing-grid">

									{recipes.length
										?
										recipes.map((recipe) => {
											return <GridRecipe key={recipe.id} props={recipe} />
										}
										)
										: <h1>No recipes...</h1>
									}

								</div>
							</div>
						</div>
						<DishTypeSideNav />
					</div>
				</div>
			</div>
		</>
	);
}

export default RecipeListGrid;