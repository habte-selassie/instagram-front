const Signup = () => {

    return ( 
        <div>
            <h1>Instagram</h1>
            <h3>Sign up to see photos and <br/>
             videos from your friends</h3>
             <button>Log in with Facebook</button>
             <hr /> OR <hr/>
             <form action="submit">
                <label for="Mobile Number or Email"></label>
                <input type="text" id="Mobile Number" name="Mobile Number or Email" placeholder="Mobile Number or Email" onFocus="if(this.placeholder ==='Email'){this.placeholder===''}" onBlur="if(this.placeholder === ''){this.placheholder==='Email'}"></input><br></br>
                <hr/>
                <hr/>
                <label for="Full Name" defaultValue="Full Name"></label>
                <input type="text" id="Full Name" name="Full Name" placeholder="Full Name" onFocus="if(this.placeholder === 'Full Name'){this.placeholder === ''}" onBlur="if(this.placeholder ===''){this.placeholder === 'Full Name'}"></input><br></br>
                <hr/>
                <hr/>
                <label for="Username"></label>
                <input type="text" id="Username" name="Username" placeholder="Username" onFocus="if(this.placeholder === 'Username'){this.placeholder === ''}" onBlur="if(this.placeholder === ''){this.placeholder === 'Username'}"></input><br></br>
                <hr/>
                <hr/>
                <label for="Password"></label>
                <input type="text" id="Password" name="Password" placeholder="Password" onFocus="if(this.placeholder === 'Password'){this.placeholder === ''}" onBlur="if(this.placeholder ===''){this.placeholder === 'Password'}"></input><br></br>
                <hr/>
                <hr/>

             </form>
             <p>Pepole who use our service may have uploaded<br/>
             your contact information to Instagram.<a href="https://www.facebook.com/help/instagram/261704639352628">Learn More</a></p>

             <p>By signing up, you agree to our <a href="https://help.instagram.com/581066165581870/?locale=en_US">Terms </a>, <a href="https://www.facebook.com/privacy/policy"> Privacy Policy</a> 
              and <a href="https://help.instagram.com/1896641480634370/"> Cookies Policy</a></p>
             <button  length="300px" height="200px ">Sign up</button>
        </div>
     
     );
}
 
export default Signup;