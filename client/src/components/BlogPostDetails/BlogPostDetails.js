import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetBlogPosts } from "../../services/BlogServices";
import Comment from "../Comment/Comment";
import Header2 from "../Header/Header2";
import SubmitComment from "../SubmitComment/SubmitComment";


const BlogPostDetails = () => {

    const { blogPostId } = useParams();

    const [blogPost, setBlogPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        GetBlogPosts()
            .then((data) => {
                let desiredPost = data.find(x => x.id == blogPostId)
                setBlogPost(desiredPost);
                setComments(desiredPost.comments);
            })
    }, [])

    function AddComment(comment){

        setComments((state)=>[...state, comment])
        console.log(comment);
    }

    return (
        <>
            <div className="wrapper-main-contents">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-9">
                            {/*single post*/}
                            <article className="post-single">
                                <div className="post-visuals">
                                    <Link to="">
                                        <img src={blogPost.imageUrl} alt="image" />
                                    </Link>
                                </div>
                                <div className="post-contents">
                                    <div className="post-contents-inner">
                                        <h2>
                                            <Link to="/">{blogPost.title}</Link>
                                        </h2>
                                        <ul className="news-post-meta post-meta">
                                            <li className="calendar">
                                                <Link to="/">{blogPost.date}</Link>
                                            </li>
                                            <li className="author">
                                                <Link to="/">{blogPost.username}</Link>
                                            </li>
                                            <li className="comments">
                                                <Link to="/">{blogPost?.comments?.length} Comments</Link>
                                            </li>
                                        </ul>
                                        <p>
                                            {blogPost.description}
                                        </p>
                                        <br />


                                        <div className="separator-post" />

                                        <div className="post-author">
                                            <div className="avatar">
                                                <Link to="/">
                                                    <img
                                                        src="../../images/temp-images/author-avatar.jpg"
                                                        alt="avatar"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="detail">
                                                <h5>
                                                    <Link to="/">{blogPost.username}</Link>
                                                </h5>
                                                <span className="type">author</span>
                                            </div>
                                        </div>
                                        <div className="separator-post" />
                                        <div className="post-comments">
                                            <h3>comments</h3>
                                            <ul className="comments-list">

                                                {comments.length 
                                                    ?
                                                    comments.map((comment)=>{
                                                        return <Comment key={comment.id} comment={comment}/>
                                                    })
                                                    :
                                                    <h1>No comments...</h1>
                                                }

                                            </ul>
                                            <div className="separator-post" />
                                            <SubmitComment postId={blogPostId} addCommentHandler={AddComment}/>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/*single post*/}
                        </div>
                        <div className="col-md-4 col-lg-3">
                            {/*sidebar*/}
                            <aside>
                                <div className="side-bar">

                                </div>
                            </aside>
                            {/*sidebar ends*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogPostDetails;