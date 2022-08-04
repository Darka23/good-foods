import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetBlogPosts } from "../../services/BlogServices";
import Header2 from "../Header/Header2";

const BlogPostDetails = () => {

    const { blogPostId } = useParams();

    const [blogPost, setBlogPost] = useState({});

    useEffect(() => {
        GetBlogPosts()
            .then((data) => {
                let desiredPost = data.find(x => x.id == blogPostId)
                setBlogPost(desiredPost)
            })
    }, [])

    return (
        <>
            <Header2 />
            <div className="wrapper-main-contents">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-9">
                            {/*single post*/}
                            <article className="post-single">
                                <div className="post-visuals">
                                    <Link to="">
                                        <img src={blogPost.imageUrl} alt="image" />
                                    </Link>
                                </div>
                                <div className="post-contents">
                                    <div className="post-contents-inner">
                                        <h2>
                                            <Link to="/">{blogPost.title}</Link>
                                        </h2>
                                        <ul className="news-post-meta post-meta">
                                            <li className="calendar">
                                                <Link to="/">{blogPost.date}</Link>
                                            </li>
                                            <li className="author">
                                                <Link to="/">{blogPost.username}</Link>
                                            </li>
                                            <li className="comments">
                                                <Link to="/">{blogPost.comments?.length} Comments</Link>
                                            </li>
                                        </ul>
                                        <p>
                                            {blogPost.description}
                                        </p>
                                        <br/>


                                        <div className="separator-post" />

                                        <div className="post-author">
                                            <div className="avatar">
                                                <Link to="/">
                                                    <img
                                                        src="../../images/temp-images/author-avatar.jpg"
                                                        alt="avatar"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="detail">
                                                <h5>
                                                    <Link to="/">{blogPost.username}</Link>
                                                </h5>
                                                <span className="type">author</span>
                                            </div>
                                        </div>
                                        <div className="separator-post" />
                                        <div className="post-comments">
                                            <h3>comments</h3>
                                            <ul className="comments-list">
                                                <li>
                                                    <div className="comment-inner">
                                                        <div className="gravatar">
                                                            <Link to="/">
                                                                <img
                                                                    src="../../images/temp-images/gravatar1.jpg"
                                                                    alt="gravatar"
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="detail">
                                                            <h6>jhonthan doe</h6>
                                                            <span className="comment-date">
                                                                <i className="fa fa-calendar" /> 20 March, 2015{" "}
                                                            </span>
                                                            <p>
                                                                Vivamus quis luctus urna. Donec elementum tempor
                                                                rhoncus. Fusce iaculis tempor felis eget dictum Sed
                                                                eget fringilla lacus. In tristiqueelementum tempor
                                                                rhoncus ornare pharetra.
                                                            </p>
                                                            <Link className="comment-reply" to="/">
                                                                <i className="fa fa-mail-reply-all" /> reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="comment-inner">
                                                        <div className="gravatar">
                                                            <Link to="/">
                                                                <img
                                                                    src="../../images/temp-images/gravatar2.jpg"
                                                                    alt="gravatar"
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="detail">
                                                            <h6>jhonthan doe</h6>
                                                            <span className="comment-date">
                                                                <i className="fa fa-calendar" /> 20 March, 2015{" "}
                                                            </span>
                                                            <p>
                                                                Vivamus quis luctus urna. Donec elementum tempor
                                                                rhoncus. Fusce iaculis tempor felis eget dictum Sed
                                                                eget fringilla lacus. In tristiqueelementum tempor
                                                                rhoncus ornare pharetra.
                                                            </p>
                                                            <Link className="comment-reply" to="/">
                                                                <i className="fa fa-mail-reply-all" /> reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div className="comment-inner">
                                                                <div className="gravatar">
                                                                    <Link to="/">
                                                                        <img
                                                                            src="images/temp-images/gravatar3.jpg"
                                                                            alt="gravatar"
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="detail">
                                                                    <h6>jhonthan doe</h6>
                                                                    <span className="comment-date">
                                                                        <i className="fa fa-calendar" /> 20 March, 2015{" "}
                                                                    </span>
                                                                    <p>
                                                                        Vivamus quis luctus urna. Donec elementum tempor
                                                                        rhoncus. Fusce iaculis tempor felis eget dictum
                                                                        Sed eget fringilla lacus. In tristiqueelementum
                                                                        tempor rhoncus ornare pharetra.
                                                                    </p>
                                                                    <Link className="comment-reply" to="/">
                                                                        <i className="fa fa-mail-reply-all" /> reply
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="comment-inner">
                                                        <div className="gravatar">
                                                            <Link to="/">
                                                                <img
                                                                    src="images/temp-images/gravatar4.jpg"
                                                                    alt="gravatar"
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="detail">
                                                            <h6>jhonthan doe</h6>
                                                            <span className="comment-date">
                                                                <i className="fa fa-calendar" /> 20 March, 2015{" "}
                                                            </span>
                                                            <p>
                                                                Vivamus quis luctus urna. Donec elementum tempor
                                                                rhoncus. Fusce iaculis tempor felis eget dictum Sed
                                                                eget fringilla lacus. In tristiqueelementum tempor
                                                                rhoncus ornare pharetra.
                                                            </p>
                                                            <Link className="comment-reply" to="/">
                                                                <i className="fa fa-mail-reply-all" /> reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="separator-post" />
                                            <div className="comments-form">
                                                <h3>leave comments</h3>
                                                <form id="comment-form" action="#">
                                                    <label htmlFor="name">name</label>
                                                    <input type="text" name="name" id="name" />
                                                    <br />
                                                    <label htmlFor="email">email</label>
                                                    <input type="email" name="email" id="email" />
                                                    <br />
                                                    <label htmlFor="subject">subject</label>
                                                    <input type="text" name="subject" id="subject" />
                                                    <br />
                                                    <label htmlFor="message">message</label>
                                                    <textarea
                                                        name="message"
                                                        id="message"
                                                        cols={30}
                                                        rows={10}
                                                        defaultValue={""}
                                                    />
                                                    <br />
                                                    <input type="submit" defaultValue="Post Comments" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/*single post*/}
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
                                    {/* widget archives*/}
                                    <div className="widget archives-widget">
                                        <h2>Archives</h2>
                                        <ul>
                                            <li>
                                                <Link to="/">feb 2015</Link> <span>(25)</span>
                                            </li>
                                            <li>
                                                <Link to="/">jan 2015</Link> <span>(37)</span>
                                            </li>
                                            <li>
                                                <Link to="/">dec 2014</Link> <span>(56)</span>
                                            </li>
                                            <li>
                                                <Link to="/">nov 2014</Link> <span>(48)</span>
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
                                                    <Link to="/">
                                                        <img
                                                            src="images/temp-images/widget-thumbnail.jpg"
                                                            alt="thumbnail"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="detail">
                                                    <Link to="/">Pimento Cheese Potato Skins</Link>
                                                    <span className="post-date">March 21,2015</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <Link to="/">
                                                        <img
                                                            src="images/temp-images/widget-thumbnail.jpg"
                                                            alt="thumbnail"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="detail">
                                                    <Link to="/">Pimento Cheese Potato Skins</Link>
                                                    <span className="post-date">March 21,2015</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <Link to="/">
                                                        <img
                                                            src="images/temp-images/widget-thumbnail.jpg"
                                                            alt="thumbnail"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="detail">
                                                    <Link to="/">Pimento Cheese Potato Skins</Link>
                                                    <span className="post-date">March 21,2015</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <Link to="/">
                                                        <img
                                                            src="images/temp-images/widget-thumbnail.jpg"
                                                            alt="thumbnail"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="detail">
                                                    <Link to="/">Pimento Cheese Potato Skins</Link>
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
                                                <Link to="/">loren</Link>
                                            </li>
                                            <li></li>
                                            <li>
                                                <Link to="/">food</Link>
                                            </li>
                                            <li></li>
                                            <li>
                                                <Link to="/">chicken</Link>
                                            </li>
                                            <li></li>
                                            <li>
                                                <Link to="/">dolor</Link>
                                            </li>
                                            <li></li>
                                            <li>
                                                <Link to="/">amet</Link>
                                            </li>
                                            <li></li>
                                            <li>
                                                <Link to="/">fusicon</Link>
                                            </li>
                                            <li></li>
                                            <li>
                                                <Link to="/">corn</Link>
                                            </li>
                                            <li></li>
                                            <li>
                                                <Link to="/">hot chicken</Link>
                                            </li>
                                            <li></li>
                                            <li>
                                                <Link to="/">lorem</Link>
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
        </>
    );
}

export default BlogPostDetails;