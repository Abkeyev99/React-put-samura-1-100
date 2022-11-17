import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


 type MyPostsPropsType = {
    posts:PostType[]
}


export const MyPosts = (props:MyPostsPropsType) => {
    let postsElement = props.posts.map((p) => <Post  message={p.message} likesCount={p.likesCount} id={p.id}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>OK</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

