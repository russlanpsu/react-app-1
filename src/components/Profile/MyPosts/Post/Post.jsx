import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='http://webmeup.com/upload/blog/lead-image-105.png'></img>
            {props.message}
            <span>like</span>
        </div>
    )
}

export default Post;