import Header2 from '../Header/Header2'
import BlogPost from '../BlogPost/BlogPost';
import { Link } from "react-router-dom";
import { GetBlogPosts } from '../../services/BlogServices';
import Preloader from '../Preloader';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';


const Blog = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user] = useAuthState(auth);


    useEffect(() => {
        setTimeout(() => {
            GetBlogPosts()
                .then((data) => {
                    setPosts(data);
                    setIsLoading(false);
                })
        }, 750)

    }, []);

    if (isLoading) {
        return <Preloader />
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
                                : <h1>No Posts...</h1>}
                        </div>
                        <div className="col-md-4 col-lg-3">
                            {/*sidebar*/}
                            <aside>
                                {user
                                    ?
                                    <Link id="blogSubmit" className="submit-recipe" to="/submit-to-blog" >
                                        Post to the Blog Feed
                                    </Link>
                                    :
                                    <Link id="blogSubmit" className="submit-recipe" to="/login" >
                                        Log in to post on the blog
                                    </Link>
                                }

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