import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDeatails = () => {
     const post = useLoaderData();
     const {id,title, body, userId} = post;
     return (
          <div>
               <h3>Details about post: {id}</h3>
               <p>{title}</p>
               <p><small>{body}</small></p>
          </div>
     );
};

export default PostDeatails;