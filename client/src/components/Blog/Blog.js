import Header2 from '../Header/Header2'
import BlogPost from '../BlogPost/BlogPost';
import { Link } from "react-router-dom";
import { GetBlogPosts } from '../../services/BlogServices';
import Preloader from '../Preloader';
import { useEffect, useState } from 'react';

const Blog = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        GetBlogPosts()
        .then((data) => {
            setPosts(data);
            setIsLoading(false);
        })
    }, []);

    if(isLoading){
        return <Preloader/>
    }

    return (
        <>
            <div className="banner banner-blog">
                <div className="container ">
                    <div className="main-heading">
                        <h1>blog</h1>
                    </div>
                </div>
            </div>

            {/*main content area*/}
            <div className="wrapper-main-contents">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-9">

                            {posts.length ?
                            posts.map((post) => {
                                return <BlogPost key={post.id} props={post} />
                            })
                            :<h1>No Posts...</h1>}

                            <ul className="page-nav">
                                <li className="current">
                                    <Link to="/">1</Link>
                                </li>
                                <li>
                                    <Link to="/">2</Link>
                                </li>
                                <li>
                                    <Link to="/">3</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            {/*sidebar*/}
                            <aside>
                                <Link id="blogSubmit" className="submit-recipe" to="/submit-to-blog">
                                    Post to the Blog Feed
                                </Link>
                                <div className="side-bar">
                                    
                                </div>
                            </aside>
                            {/*sidebar ends*/}
                        </div>
                    </div>
                </div>
            </div>
            {/*main content area ends*/}
        </>

    );
}

export default Blog;