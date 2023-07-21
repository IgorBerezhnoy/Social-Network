import React, {KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {
    PostsType,

} from '../../../Redux/Store';

type PropsType = {
    posts: PostsType
    newPostText: string

    updateNewPostText: (text: string) => void
    addPost: () => void
}


export const MyPosts: React.FC<PropsType> = (props) => {

    let postsItems = props.posts.map(el => <Post key={el.id} message={el.message} like={el.like}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {


        let text = newPostElement.current?.value;
        if (text) {
            // const action = AddPostActionCreator();
            // props.dispatch(action);
            props.addPost();
        }
    };

    const OnClickEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPost();
        }
    };

    const onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text) {
            // const action: ActionType = updateNewPostTextTypeAC(text);
            // props.dispatch(action);
            props.updateNewPostText(text);
        }
    };

    return (
        <div className={s.postsBlock}>

            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}
                              onKeyPress={OnClickEnter}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <div>{postsItems}
                </div>
            </div>
        </div>

    );
};
