import Header2 from "../Header/Header2";
import React, { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, } from "../../firebase";
import { GetBlogPosts, CreateBlogPost } from "../../services/BlogServices";
import { Link } from "react-router-dom";


const SubmitToBlog = () => {

    const [user] = useAuthState(auth);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    let date = new Date().toLocaleDateString("en-GB");

    return (
        <>
            <div className="recipes-home-body inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-9">
                            <div className="recipe-set submit-recipe-set">
                                <h2>Submit Blog Post</h2>
                                <p>
                                    Food Recipe theme include a Recipe Submit Template. It allow users
                                    to submit a recipe with featured image and related details. A user
                                    should be logged in to submit a recipe.{" "}
                                </p>
                                <div className="submit-recipe-form">
                                    <div >
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <br />

                                        <label htmlFor="content">Desctiption</label>
                                        <textarea
                                            name="content"
                                            id="recipe-content"
                                            cols={30}
                                            rows={10}
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />

                                        <label htmlFor="imageUrl">ImageUrl</label>
                                        <input
                                            type="url"
                                            id="image-input"
                                            value={imageUrl}
                                            onChange={(e) => setImageUrl(e.target.value)}
                                        />

                                        <div className="text-center">
                                            <Link 
                                                to="/blog"
                                                className="recipe-submit-btn"
                                                onClick={()=>CreateBlogPost(title,description,imageUrl,user.uid,user.displayName,date)}
                                            >
                                                Submit Your Blog Post
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubmitToBlog;