import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Select from 'react-select'
import React, { useState, useEffect } from 'react';
import { errorHandler } from "../../services/ErrorServices";
import { CreateRecipe } from "../../services/RecipeServices";
import DishTypeSideNav from "../DishTypeSideNav/DishTypeSideNav";

const options = [
	{ value: 'breakfast', label: 'Breakfast' },
	{ value: 'starter', label: 'Starter' },
	{ value: 'lunch', label: 'Lunch' },
	{ value: 'dinner', label: 'Dinner' },
	{ value: 'dessert', label: 'Dessert' }
]

const SubmitRecipe = () => {

	let date = new Date().toLocaleDateString("en-GB");

	let navigate = useNavigate();
	const [user] = useAuthState(auth);
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		contents: "",
		preparation: "",
		imageUrl: "",
		preparationTime: "",
		cookTime: "",
		dishType: "",
	});
	const [errors, setErrors] = useState([]);


	function formDataHandler(e) {
		setFormData(state => ({ ...state, [e.target.name]: e.target.value }))
	}

	function selectChangeHandler(selectedOption) {
		setFormData(state => ({ ...state, dishType: selectedOption.label }))
	}

	function checkForErrors(e) {
		errorHandler(e.target.name, e.target.value, setErrors)
	}

	function onClickHandler(){
		CreateRecipe(
			formData.title,
			formData.description,
			formData.contents,
			formData.preparation,
			formData.imageUrl,
			formData.preparationTime,
			formData.cookTime,
			formData.dishType,
			user.uid,
			user.displayName,
			user.photoURL,
			date,
			)
		navigate("/recipe-listing")
	}

	if (!user) {
		return <Navigate to="/login" replace />
	}

	return (
		<>
			<div className="banner banner-blog">
				<div className="container ">
					<div className="main-heading">
						<h1>Submit Recipe</h1>
					</div>
				</div>
			</div>



			<div className="recipes-home-body inner-page">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-lg-9">
							<div className="recipe-set submit-recipe-set">
								<h2>Submit Recipe</h2>
								<div className="submit-recipe-form">
									<div>
										<label htmlFor="title">Recipe Title</label>
										<input
											type="text"
											name="title"
											id="title"
											value={formData.title}
											onChange={formDataHandler}
											onBlur={checkForErrors}
										/>
										{
											errors.some(error => error.field == "title") ?
												<p className="errorMessage">{errors.find(error => error.field == "title").errorMessage}</p>
												: <></>
										}
										<br />
										<label htmlFor="description">Short Description</label>
										<textarea
											className="short-text"
											name="description"
											id="description"
											cols={30}
											rows={10}
											value={formData.description}
											onChange={formDataHandler}
											onBlur={checkForErrors}
										/>
										{
											errors.some(error => error.field == "description") ?
												<p className="errorMessage">{errors.find(error => error.field == "description").errorMessage}</p>
												: <></>
										}
										<label htmlFor="contents">Recipe Contents</label>
										<textarea
											name="contents"
											id="contents"
											cols={30}
											rows={10}
											value={formData.contents}
											onChange={formDataHandler}
											onBlur={checkForErrors}
										/>
										{
											errors.some(error => error.field == "contents") ?
												<p className="errorMessage">{errors.find(error => error.field == "contents").errorMessage}</p>
												: <></>
										}
										<label htmlFor="preparation">Method of preparation</label>
										<textarea
											name="preparation"
											id="preparation"
											cols={30}
											rows={10}
											value={formData.preparation}
											onChange={formDataHandler}
											onBlur={checkForErrors}
										/>
										{
											errors.some(error => error.field == "preparation") ?
												<p className="errorMessage">{errors.find(error => error.field == "preparation").errorMessage}</p>
												: <></>
										}
										<label htmlFor="imageUrl">ImageUrl</label>
										<input
											type="url"
											name="imageUrl"
											id="imageUrl"
											value={formData.imageUrl}
											onChange={formDataHandler}
										/>

										<br />

										<div className="row">
											<div className="col-sm-4">
												<label htmlFor="preparationTime">Preparation Time</label>
												<input
													type="text"
													name="preparationTime"
													id="preparationTime"
													value={formData.preparationTime}
													onChange={formDataHandler}
												/>
											</div>
											<div className="col-sm-4">
												<label htmlFor="cookTime">Cook Time</label>
												<input
													type="text"
													name="cookTime"
													id="cookTime"
													value={formData.cookTime}
													onChange={formDataHandler}
												/>
											</div>
										</div>

										<label htmlFor="dishType">Dish Type</label>
										<div className="form-field">
											<Select
												options={options}
												onChange={selectChangeHandler}
											/>
										</div>
										<div className="text-center">
											<button 
												className="recipe-submit-btn" 
												disabled={Object.values(formData).some((x) => !x)}
												onClick={()=>onClickHandler()}							
											>
												
												Submit Your Recipe
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<DishTypeSideNav/>
					</div>
				</div>
			</div>
		</>

	);
}

export default SubmitRecipe;