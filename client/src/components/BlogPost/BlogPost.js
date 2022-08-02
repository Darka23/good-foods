import { Link } from "react-router-dom";

const BlogPost = () => {
    return (
        <article className="post-single">
            <div className="post-visuals">
                <Link to="/blog-post-details">
                    <img src="images/temp-images/post-image-1.jpg" alt="image" />
                </Link>
            </div>
            <div className="post-contents">
                <div className="post-contents-inner">
                    <h2>
                        <Link to="/blog-post-details">pasto pizza with fillas cheese toppings</Link>
                    </h2>
                    <ul className="news-post-meta post-meta">
                        <li className="calendar">23/10/2015</li>
                        <li className="author">
                            <Link to="/">John Doe</Link>
                        </li>
                        <li className="comments">
                            <Link to="/">12 Comments</Link>
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                        eu vulputate arcu. Fusce consectetur varius nisi, in maximus
                        eros egestas sed. Proin non purus erat. Proin sed mauris id
                        metus pulvinar pretium. Etiam tristique metus lorem,
                        scelerisque pharetra dui blandit sit amet
                    </p>
                    <Link className="read-more-bordered" to="/blog-post-details">
                        Read More
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default BlogPost;