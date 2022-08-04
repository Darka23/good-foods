import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetUserById } from "../../services/UserServices";
import Preloader from "../Preloader";

const BlogPost = (props) => {

    let info = props.props;

    // const [user,setUser] = useState({});

    // useEffect(()=>{
    //     GetUserById() 
    //         .then(data=>console.log(data))                 
    // },[])


    return (
        <article className="post-single">
            <div className="post-visuals">
                <Link to={`/blog-post-details/${info?.id}`}>
                    <img src={info?.imageUrl} alt="image" />
                </Link>
            </div>
            <div className="post-contents">
                <div className="post-contents-inner">
                    <h2>
                        <Link to={`/blog-post-details/${info?.id}`}>{info?.title}</Link>
                    </h2>
                    <ul className="news-post-meta post-meta">
                        <li className="calendar">{info?.date}</li>
                        <li className="author">
                            <Link to="/">{info?.username}</Link>
                        </li>
                        <li className="comments">
                            <Link to="/">{info?.comments.length}</Link>
                        </li>
                    </ul>
                    <p>
                        {info?.description}
                    </p>
                    <Link className="read-more-bordered" to={`/blog-post-details/${info?.id}`}>
                        Read More
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default BlogPost;