import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = ({post}) => {
     const {id,title, body} = post;
     const navigate = useNavigate();

     const handleNavigation =() =>{
          navigate(`/post/${id}`);
     }



     return (
          <div className='post'>
               <p>{title}</p>
               <p><small>{body}</small></p>
               <Link to={`/post/${id}`}>
                    <button>Show Details</button>
               </Link>
               <button onClick={handleNavigation}>Show Details</button>
               
          </div>
     );
};

export default SinglePost;