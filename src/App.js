import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Main from './Components/Layout/Main';
import Friends from './Components/Friends.js/Friends';
import FriendsDeatils from './Components/FriendsDeatils/FriendsDeatils';
import Post from './Components/Post/Post';
import PostDeatails from './Components/PostDeatails/PostDeatails';

function App() {
    const router = createBrowserRouter([
      {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/home', element: <Home></Home>},
        {path: 'about', element: <About></About>},
        {path: 'friends',
        loader: async () =>{
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
         element: <Friends></Friends>},
         {
            path: '/friend/:friendId',
            loader: async ({params}) =>{
                return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
                
            },
            element: <FriendsDeatils></FriendsDeatils>
         },
         {
           path: 'post',
           loader: async() =>{
              return fetch('https://jsonplaceholder.typicode.com/posts')
           },
           element: <Post></Post>
         },
         {
          path: '/post/:postId',
          loader: async({params}) =>{
              return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDeatails></PostDeatails>
         }
      ]},
     {path: 'products', element: <Products></Products>},
     {path: '*', element:<div>This rout not found</div>}
    ])

  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
