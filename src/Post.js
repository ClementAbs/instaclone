import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";


function Post({username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar 
             className="post__avatar"
             alt="Pseudo"
             src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
             />
            <h3>{username}</h3>
            </div>

            {/* Header -> avatar+username */}
            <img className="post__image" src={imageUrl} alt=""/>
            
            {/*image */}
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
            {/*username + caption */}
            


        </div>
    )
}

export default Post
