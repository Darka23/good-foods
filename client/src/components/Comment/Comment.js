import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { DeleteComment } from "../../services/CommentServices";



const Comment = (comment) => {

    let data = comment.comment.comment;
    let blogPostId = comment.comment.blogPostId;
    const [user] = useAuthState(auth);
    let isAuthor = user.uid == data.userId

    return (
        <li id={data.id}>
            <div className="comment-inner">
                <div className="gravatar">
                    <Link to="/">
                        <img
                            src={data.userPhotoURL}
                            alt="gravatar"
                        />
                    </Link>
                </div>
                <div className="detail">
                    <h6>{data.name}</h6>
                    <span className="comment-date">
                        <i className="fa fa-calendar" /> {data.date}
                    </span>
                    <p>
                        {data.message}
                    </p>
                </div>
                {
                    isAuthor 
                    ?
                    <Link 
                        to={`/blog-post-details/${blogPostId}`}
                        className="default-btn small-button tag-border"
                        onClick={() => DeleteComment(data,blogPostId)}
                    >
                        Delete Comment
                    </Link>
                    : <></>
                }
            </div>
        </li>
    );
}

export default Comment;