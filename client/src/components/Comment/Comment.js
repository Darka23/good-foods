import { Link } from "react-router-dom";


const Comment = (comment) => {
    
    let data = comment.comment;

    return (
        <li>
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
            </div>
        </li>
    );
}

export default Comment;