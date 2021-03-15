import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message='hello'/>
            <Post message='world'/>
            <Post message='hello'/>
            <Post message='mars'/>
        </div>
    </div>    
    )
}

export default MyPosts;