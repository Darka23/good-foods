import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { DeleteRecipeComment } from "../../services/CommentServices";


const RecipeComment = (comment) => {

    let data = comment.comment.comment;
    let recipeId = comment.comment.recipeId
    const [user] = useAuthState(auth);
    let isAuthor = user.uid == data.userId

    return (
        <li id={data.id}>
            <div className="gravatar">
                <img
                    src={data.userPhotoURL}
                    alt="avatar"
                />
            </div>
            <div className="comment">
                <h5>
                    <a href="">{data.name}</a>
                </h5>
                <span className="time">{data.date}</span>
                <p>
                    {data.message}
                </p>
            </div>
            {
                isAuthor
                    ?
                    <Link
                        to={`/recipe-detail/${recipeId}`}
                        className="default-btn small-button tag-border"
                        onClick={() => DeleteRecipeComment(data, recipeId)}
                    >
                        Delete Comment
                    </Link>
                    : <></>
            }
        </li>
    );
}

export default RecipeComment;