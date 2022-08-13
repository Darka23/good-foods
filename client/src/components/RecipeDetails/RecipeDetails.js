import { Link, useParams } from 'react-router-dom';
import { GetAllRecipes, DeleteRecipe } from '../../services/RecipeServices';
import RatingIcons from '../RatingIcons/RatingIcons';
import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import RecipeComment from '../RecipeComment/RecipeComment';
import SubmitCommentRecipe from '../SubmitCommentRecipe/SubmitCommentRecipe';
import DishTypeSideNav from '../DishTypeSideNav/DishTypeSideNav';



const RecipeDetails = () => {

    const { recipeId } = useParams();

    const [recipe, setRecipe] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);

    const [user] = useAuthState(auth);
    let currentUserIsAuthor;

    if (user) {
        currentUserIsAuthor = user.uid == recipe.userId;
    }


    useEffect(() => {
        GetAllRecipes()
            .then((data) => {
                let desiredRecipe = data.find(x => x.id == recipeId)
                setComments(desiredRecipe.comments)
                setRecipe(desiredRecipe);
                setIsLoading(false);
            })
    }, [])

    function AddComment(comment) {
        setComments((state) => [...state, comment])
    }

    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            <div className="recipes-home-body inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-9">
                            <div className="recipe-set ">
                                <div className="wrapper-detail-contents">
                                    <div className="single-recipe-detail">
                                        <div className="wrapper-recipe-heading">
                                            <div className="heading">
                                                <h2>{recipe.title}</h2>
                                                <RatingIcons />
                                            </div>
                                        </div>
                                        <div className="slider-recipe-detail">
                                            <img src={recipe.imageUrl} alt="detailsImage"></img>
                                            <ul className="recipe-specs">
                                                <li><span className="count">{recipe.preparationTime}<span>m</span></span><span className="text">Prep Time</span></li>
                                                <li><span className="count">{recipe.cookTime}<span>m</span></span><span className="text">Cook Time</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="recipe-detail-body">

                                        <div className="separator-post" />
                                        <p>
                                            {recipe.description}
                                        </p>
                                        <br />
                                        <div className="ingredients-checkbox">
                                            <div className="ingredients">
                                                <h3>Ingredients</h3>
                                                <p>{recipe.contents}</p>
                                            </div>
                                            <div className="nutritional">
                                                <h3>Preparation</h3>
                                                <p>{recipe.preparation}</p>
                                                <div className="separator-post" />
                                            </div>
                                        </div>

                                        {currentUserIsAuthor
                                            ?
                                            <>
                                                <Link
                                                    to="/recipe-listing"
                                                    className="default-btn mid-button theme-tag-color"
                                                    onClick={() => DeleteRecipe(recipe.id)}>Delete Recipe
                                                </Link>
                                                <Link
                                                    to={`/recipe-edit/${recipe.id}`}
                                                    className="default-btn mid-button light-color">Edit Recipe
                                                </Link>
                                            </>
                                            : <></>
                                        }

                                    </div>
                                    <div className="about-chef">
                                        <h3 className="lined">Author</h3>
                                        <div className="listing">
                                            <div className="image">
                                                <div className="image-inner">
                                                    <img src={recipe.userPhotoUrl} alt="chef" />
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <h4>
                                                            <a href="/">{recipe.userDisplayName}</a>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="lined">Comments</h3>

                                    <div className="comments-list">
                                        <ul>
                                            {comments.length
                                                ?
                                                comments.map((comment) => {
                                                    return <RecipeComment key={comment.id} comment={{ comment, recipeId: recipe.id }} />
                                                })
                                                :
                                                <h1>No comments...</h1>
                                            }
                                        </ul>

                                    </div>
                                    {
                                        user ?
                                            <SubmitCommentRecipe recipeId={recipe.id} addCommentHandler={AddComment} />
                                            : <></>
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

export default RecipeDetails;