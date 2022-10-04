import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDeatils = () => {
     const friend = useLoaderData();

     return (
          <div>
               <h1>Detail About: {friend.name}</h1>
               <p>Call him/her: {friend.phone}</p>
               <p>this is your friends deatils its from friends deatils</p>
          </div>
     );
};

export default FriendsDeatils;