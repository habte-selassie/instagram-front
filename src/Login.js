/* eslint-disable react/jsx-no-comment-textnodes */
import './Login.css'
const Login = () => {
    return ( 
        <div>
        <div style={{"display": "flex"}}>
        {/* //<img src={require("https://www.pngkey.com/png/detail/108-1083668_get-started-today-to-grow-your-instagram-organically.png")} alt="Get Started Today To Grow Your Instagram Organically - Iphone@pngkey.com"></img> */}
          <img  src={require("./../src/assets/i.png")}  alt="instagram login" id='login-img'></img>
          <img  src={require("./../src/assets/j.png")}  alt="instagram login" id='login-imh'></img>
            <form action="submit" style={{"marginLeft": "60px"}}>
            <h1>Instagram</h1>
            <label for="input"></label>
            <input type="text" id="input" placeholder="Phone number, username, or email" pattern="[A-Za-z0-9]"></input>
           <br/>
           <br/>
            <label for="password"></label>  
            <input type="text" id="password" placeholder="Password" pattern="[A-Za-z0-9]"></input> 
             <br/>
             <br/>
            <button type='submit' id='login'>Log in</button> 
            <br/>
            <br/>
              <p id='or'>OR</p>
              <div>
              <h3><a href="www.google.com" id='fb'>Log in with Facebook</a></h3>
              <p><a href="www.google.com" id='forgot'>Forgot password</a></p>
              </div>
              <br/>
              <div>
                <h3 id='not-account'>Don't have an account?<a href="www.google.com" id='signup'>Sign up</a></h3>
              </div>
              <p id='app'>Get the app</p>
              <div>
                     </div>
                     <ul id='ul'>
                    <li id='li'><a href="www.Apple.com">
                   <img  src={require("./../src/assets/a.png")} alt="g" id='apple'/>
                   </a></li>
                  <li><a href="www.Google.com"><img  src={require("./../src/assets/b.png")} alt="a" id='google'/>
                 </a></li>
                </ul>
              </form>
            </div>
           </div>
       
       
     );
}
 
export default Login;