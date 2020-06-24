import React, { useState, useEffect } from 'react';

import PostsList from './PostsList';
import PostShow from './PostShow';

const Redditer = () => {
    const [posts, setPosts] = useState([]);
    const [activePost, setActivePost] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/top.json")
            .then(res => res.json())
            .then(postsRes => {
                setPosts(postsRes.data.children.map(post => ({
                    title: post.data.title,
                    author_fullname: post.data.author_fullname,
                    created: post.data.created,
                    thumbnail: post.data.thumbnail,
                    num_comments: post.data.num_comments,
                    visited: post.data.visited
                })));
            });
    }, []);

    return (
        <>
            <PostShow activePost={activePost} />
            <PostsList posts={posts} setActivePost={setActivePost} />
        </>
    );
}
 
export default Redditer;