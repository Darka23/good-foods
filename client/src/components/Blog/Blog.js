import Header2 from '../Header/Header2'
import BlogPost from '../BlogPost/BlogPost';

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
                            <BlogPost/>
                            {/*single post*/}
                            
                            <ul className="page-nav">
                                <li className="current">
                                    <a href="/">1</a>
                                </li>
                                <li>
                                    <a href="/">2</a>
                                </li>
                                <li>
                                    <a href="/">3</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            {/*sidebar*/}
                            <aside>
                                <div className="side-bar">
                                    
                                    {/*widget category*/}
                                    <div className="widget category-widget">
                                        <h2>Categories</h2>
                                        <ul>
                                            <li>
                                                <a href="/">good dishes</a>
                                            </li>
                                            <li>
                                                <a href="/">seasonal eats</a>
                                            </li>
                                            <li>
                                                <a href="/">recipes</a>
                                            </li>
                                            <li>
                                                <a href="/">potato</a>
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