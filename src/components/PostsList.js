import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Post = styled.li`
    background-color: ${props => props.visited ? "#000" : "#555"}
`;

const PostsList = ({ posts, setActivePost }) => {
    return (
        <div>
            <ul>
                {
                    posts.map(post => {
                        const creationDate = moment(post.created).format('DD-MM-YYYY HH:mm:ss');

                        return (
                            <Post visited={post.visited} onClick={() => {setActivePost(post)}}>
                                <h4>{post.author_fullname}{creationDate}</h4>
                                <div>
                                    <img src={post.thumbnail} /> {post.title}
                                </div>
                                <div>
                                    <span>
                                        Dismiss
                                    </span>
                                    <span>
                                        {post.num_comments} comments
                                    </span>
                                </div>
                            </Post>
                        )
                    })
                }
            </ul>
        </div>
    );
}
 
export default PostsList;