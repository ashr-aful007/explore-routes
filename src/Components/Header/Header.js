import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
     return (
          <div className='header'>
               <Link to='/home'>Home1</Link>
               <Link to='/about'>About1</Link>
               <Link to='/products'>Products</Link>

          </div>
     );
};

export default Header;