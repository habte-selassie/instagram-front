/* eslint-disable react/jsx-no-comment-textnodes */
const Login = () => {
    return ( 
        <div>
        <div style={{"display": "flex"}}>
          <img src="./../public/assets/c.jpeg"  alt="instagram login" style={{"marginRight": "20px"}}></img>

           

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
            <button>Log in</button> 
            <br/>
            <br/>
        
        
            
              OR
              <div>
              <h3><a href="www.google.com">Log in with Facebook</a></h3>
              <p><a href="www.google.com">Forgot password</a></p>
              </div>
              <br/>
              <div>
                <h4>Don't have an account?<a href="www.google.com">Sign up</a></h4>
              </div>
              <p>Get the app</p>
              <div>
                     </div>
                     <ul>
                    <li><a href="www.Apple.com">
                   <img src="./../public/assets/a.png" alt="g"/>
                   </a></li>
                  <li><a href="www.Google.com"><img src="./../public/assets/b.png" alt="a"/>
                 </a></li>
                </ul>
              </form>
            </div>
           </div>
       
       
     );
}
 
export default Login;