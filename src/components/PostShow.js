import React from 'react';

const PostsShow = ({ activePost }) => {
    return (
        <div>
            {activePost.author_fullname} - {activePost.title}
        </div>
    );
}
 
export default PostsShow;