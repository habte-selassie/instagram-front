const Confirmation = () => {

    return ( 
        <div>
          <img src="" alt="Enter Confirmation Code"></img>
          <h3>Enter Confirmation Code</h3>
          <p>Enter the confirmation code we sent to <br/>
          habtuchelsea1000@gmail.com</p>
          <a href="www.google.com">Resend Code</a>
          <form action="Submit">
            <label for="Confirmation Code"></label>
            <input type="number" id="Confirmation Code" placeholder="Confirmation Code"></input>
            <br/>
            <button>Next</button> 
            <a href="www.google.com">Go Back</a>
            <div>
                <p>Have an account?<a href="www.google.com">Log in</a></p>
            </div>
            Get the app

            <div>
              <ul>
              <li><a href="www.Apple.com">
              <img src="./public/a.png" alt="Download on the App Store"/>
              </a></li>
              <li><a href="www.Google.com"><img src="./public/b.png" alt="Get it on Google Play"/></a></li>
              </ul>
            </div>
          </form>
        </div>
     
     );
}
 
export default Confirmation;