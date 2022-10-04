import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
     const friends = useLoaderData()
     console.log(friends)
     return (
          <div>
               <p>I'm friends: {friends.length}</p>
          </div>
     );
};

export default Friends;