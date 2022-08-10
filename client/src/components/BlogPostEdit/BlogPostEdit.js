import Header2 from "../Header/Header2";
import React, { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, } from "../../firebase";
import { GetBlogPosts, CreateBlogPost, EditBlogPost } from "../../services/BlogServices";
import { Link, Navigate, useParams } from "react-router-dom";
import Preloader from "../Preloader";


const BlogPostEdit = () => {

    const {blogPostId} = useParams();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [previousBlogPost, setPreviousBlogPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [user] = useAuthState(auth);

    let date = new Date().toLocaleDateString("en-GB");

    useEffect(() => {
        GetBlogPosts()
            .then((data) => {
                let desiredPost = data.find(x => x.id == blogPostId)
                setPreviousBlogPost(desiredPost);
                setIsLoading(false);
            })
    }, [])

    if (!user) {
		return <Navigate to="/login" replace />
	}
    
    if(isLoading){
        return <Preloader/>
    }
    
    return ( 
        <div className="recipes-home-body inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-9">
                            <div className="recipe-set submit-recipe-set">
                                <h2>Edit Blog Post</h2>
                                <div className="submit-recipe-form">
                                    <div >
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder={previousBlogPost.title}
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
                                            placeholder={previousBlogPost.description}
                                        />

                                        <label htmlFor="imageUrl">ImageUrl</label>
                                        <input
                                            type="url"
                                            id="image-input"
                                            value={imageUrl}
                                            onChange={(e) => setImageUrl(e.target.value)}
                                            placeholder={previousBlogPost.imageUrl}
                                        />

                                        <div className="text-center">
                                            <Link
                                                to={`/blog-post-details/${blogPostId}`}
                                                className="recipe-submit-btn"
                                                onClick={() => EditBlogPost(blogPostId,title, description, imageUrl)}
                                            >
                                                Edit Blog Post
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default BlogPostEdit;