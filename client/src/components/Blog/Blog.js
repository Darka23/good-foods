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
                                    {/*search widget*/}
                                    <div className="widget search-bar-widget">
                                        <h2>Search</h2>
                                        <form action="#">
                                            <div className="search-field">
                                                <input type="search" name="search" placeholder="Search" />
                                                <button type="submit">
                                                    <i className="fa fa-search" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {/*search widget ends*/}
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
                                    {/* widget archives*/}
                                    <div className="widget archives-widget">
                                        <h2>Archives</h2>
                                        <ul>
                                            <li>
                                                <a href="/">feb 2015</a> <span>(25)</span>
                                            </li>
                                            <li>
                                                <a href="/">jan 2015</a> <span>(37)</span>
                                            </li>
                                            <li>
                                                <a href="/">dec 2014</a> <span>(56)</span>
                                            </li>
                                            <li>
                                                <a href="/">nov 2014</a> <span>(48)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*widget archives ends*/}
                                    {/*latest news widget*/}
                                    <div className="widget latest-news-widget">
                                        <h2>Latest News</h2>
                                        <ul>
                                            <li>
                                                <div className="thumb">
                                                    <a href="/">
                                                        <img
                                                            src="images/temp-images/widget-thumbnail.jpg"
                                                            alt="thumbnail"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="detail">
                                                    <a href="/">Pimento Cheese Potato Skins</a>
                                                    <span className="post-date">March 21,2015</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <a href="/">
                                                        <img
                                                            src="images/temp-images/widget-thumbnail.jpg"
                                                            alt="thumbnail"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="detail">
                                                    <a href="/">Pimento Cheese Potato Skins</a>
                                                    <span className="post-date">March 21,2015</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <a href="/">
                                                        <img
                                                            src="images/temp-images/widget-thumbnail.jpg"
                                                            alt="thumbnail"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="detail">
                                                    <a href="/">Pimento Cheese Potato Skins</a>
                                                    <span className="post-date">March 21,2015</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <a href="/">
                                                        <img
                                                            src="images/temp-images/widget-thumbnail.jpg"
                                                            alt="thumbnail"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="detail">
                                                    <a href="/">Pimento Cheese Potato Skins</a>
                                                    <span className="post-date">March 21,2015</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*latest news widget ends*/}
                                    {/*tags widget*/}
                                    <div className="widget tags-widget">
                                        <h2>Tags</h2>
                                        <ul>
                                            <li>
                                                <a href="/">loren</a>
                                            </li>
                                            <li></li>
                                            <li>
                                                <a href="/">food</a>
                                            </li>
                                            <li></li>
                                            <li>
                                                <a href="/">chicken</a>
                                            </li>
                                            <li></li>
                                            <li>
                                                <a href="/">dolor</a>
                                            </li>
                                            <li></li>
                                            <li>
                                                <a href="/">amet</a>
                                            </li>
                                            <li></li>
                                            <li>
                                                <a href="/">fusicon</a>
                                            </li>
                                            <li></li>
                                            <li>
                                                <a href="/">corn</a>
                                            </li>
                                            <li></li>
                                            <li>
                                                <a href="/">hot chicken</a>
                                            </li>
                                            <li></li>
                                            <li>
                                                <a href="/">lorem</a>
                                            </li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    {/*tags widget ends*/}
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