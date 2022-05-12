import React, {useState, useEffect} from 'react';
import './App.css';
import { db }  from './firebase';
import Post from './Post';




function App() {
  const [posts, setPosts] = useState([]);

useEffect(() => {

  db.collection('posts').onSnapshot(snapshot => {
  setPosts(snapshot.docs.map(doc => ({
    id: doc.id,
    post: doc.data()
})));
                })
},  [])


  return (
    <div className="app">


    <div className="app__header">
      {/*Header*/}
        <img 
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        alt=""
        />
    </div>
    <h1>Hello ! Let's build an instagram clone</h1>

     {/*Posts*/}

     {
     posts.map(({id, post} ) =>(

       <Post key={id} caption={post.caption} imageUrl={post.imageUrl}  username={post.username}/>
     ))

    }

     <Post imageUrl="https://lesbricodeurs.fr/images/react.jpeg"/>
     <Post imageUrl="https://lesbricodeurs.fr/images/react.jpeg"/>
     <Post imageUrl="https://lesbricodeurs.fr/images/react.jpeg"/> 

    </div>
  );
}

export default App;
