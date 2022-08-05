import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AddCommentToPost } from '../../services/CommentServices';
import { GetBlogPosts } from '../../services/BlogServices';


const SubmitComment = (post) => {

    const postId = post.postId;


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    function submitCommentHandler() {
        AddCommentToPost(name, email, subject, message, postId)
            .then((data) => {
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                post.addCommentHandler(data)

            }
            )
    }

    return (
        <div className="comments-form">
            <h3>leave comments</h3>
            <div id="comment-form">
                <label htmlFor="name">name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                <label htmlFor="email">email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <label htmlFor="subject">subject</label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <br />

                <label htmlFor="message">message</label>
                <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br />
                <div className='text-center'>
                    <Link
                        to={`/blog-post-details/${postId}`}
                        className="default-btn min-width-button theme-color"
                        onClick={submitCommentHandler}
                    >
                        Post Comment
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SubmitComment;