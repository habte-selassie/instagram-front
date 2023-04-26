import './Confirmation.css'
const Confirmation = () => {
    return ( 
        <div>
          <img  src={require('./../src/assets/l.png')} alt="" id='a1'></img>
          <h4 id="a">Enter Confirmation Code</h4>
          <p id="b">Enter the confirmation code we sent to <br/>
          habtuchelsea1000@gmail.com.<br/>
          <a href="www.google.com" id="c">Resend Code</a></p>
         
          <form action="Submit">
            <label for="Confirmation Code"></label>
            <input type="number" id="Confirmation" placeholder= "  Confirmation Code"></input>
            <br/>
            <button id='btn'><p id='btntxt'>Next</p></button>
            <br/>
            <br/> 
            <a href="www.google.com" id='l'>Go Back</a>
            <br/>
            <br/>
            <br/>
            <div>
                <p>Have an account? <a href="www.google.com" id='login'>Log in</a></p>
            </div>
            <br/>
            <br/>
            Get the app

            <div>
            <ul id='ul'>
                    <li id='li'><a href="www.Apple.com">
                   <img  src={require("./../src/assets/a.png")} alt="g" id='apple'/>
                   </a></li>
                  <li><a href="www.Google.com"><img  src={require("./../src/assets/b.png")} alt="a" id='google'/>
                 </a></li>
                </ul>
            </div>
          </form>
        </div>
     
     );
}
 
export default Confirmation;