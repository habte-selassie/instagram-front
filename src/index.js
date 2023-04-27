import React from 'react';
import ReactDOM from 'react-dom/client';
//import Account from './Account';
//import Login from './Login';
//import Birthday from './Birthday';
//import Signup from './Signup';
import Confirmation from './Confirmation';
import PostComponent from './Home/Post';
import WhenPosted from './Home/Posted';
//import Enter from './Accounts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WhenPosted />
  </React.StrictMode>
);

