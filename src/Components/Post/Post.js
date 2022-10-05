import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SInglePost/SinglePost';

const Post = () => {

     const posts = useLoaderData();

     return (
          <div>
               <h3>A lot of fb posts are here</h3>
               {
                    posts.map(post => <SinglePost
                    key={post.id}
                    post={post}
                    ></SinglePost>)
               }
          </div>
     );
};

export default Post;