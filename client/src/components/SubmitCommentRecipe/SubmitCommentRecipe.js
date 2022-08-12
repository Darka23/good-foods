import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { AddCommentToRecipe } from "../../services/CommentServices";


const SubmitCommentRecipe = (recipe) => {

    const recipeId = recipe.recipeId;

    const [user] = useAuthState(auth);
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    
    
    function submitCommentHandler() {
        console.log(user);
        AddCommentToRecipe(name, email, message, recipeId,user.photoURL,user.uid)
            .then((data) => {
                setName("");
                setEmail("");
                setMessage("");
                recipe.addCommentHandler(data)
            })
        navigate(`/recipe-detail/${recipeId}`)
    }

    let isSubmitable =  (name && email && message) ? true : false;

    return (
        <div className="comment-form">
            <h3 className="lined">Leave Comment</h3>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <textarea
                    name="comment"
                    id="comment"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}       
                />
                
                <button 
                    id="recipe-comment"
                    to={`/recipe-detail/${recipeId}`}
                    className="default-btn min-width-button theme-color"
                    disabled={!isSubmitable}
                    onClick={submitCommentHandler}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default SubmitCommentRecipe;