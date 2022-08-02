import Header2 from '../Header/Header2'
import BlogPost from '../BlogPost/BlogPost';
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <>
            <Header2 />
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

                            {/*single post*/}
                            <BlogPost />
                            {/*single post*/}

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

                                    {/*widget category*/}
                                    <div className="widget category-widget">
                                        <h2>Categories</h2>
                                        <ul>
                                            <li>
                                                <Link to="/">good dishes</Link>
                                            </li>
                                            <li>
                                                <Link to="/">seasonal eats</Link>
                                            </li>
                                            <li>
                                                <Link to="/">recipes</Link>
                                            </li>
                                            <li>
                                                <Link to="/">potato</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*widget category ends*/}
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