import './Birthday.css'
const Birthday = () => {

    return ( 
        <div>
        <img src={require('./../src/assets/k.png')} alt='' id='birthday'></img>
          <h1 id='a'>Add Your Birthday</h1>
          <p>
          <h5 id='b'>This won't be a part of your public profile.</h5>
           <a href="www.birthday.com" id='c'>Why do i need to provide my birthday?</a>
          </p>
          
           <form action="Submit" typeof="dropdown">
           <select placeholder="MM" id='e'>
            <option name="September" value="Sep">September</option>
            <option name="October" value="Oct">October</option>
            <option name="November" value="Nov">November</option>
            <option name="December" value="Dec">December</option>
            <option name="January" value="Jan">January</option>
            <option name="February" value="Feb">February</option>
            <option name="March" value="Mar">March</option>
            <option name="April" value="Apr">April</option>
            <option name="May" value="May">May</option>
            <option name="June" value="Jun">June</option>
            <option name="July" value="Jul">July</option>
            <option name="August" value="August">August</option>
           </select>
           <select placeholder="DD" id='f'>
            <option name="1" value="Sep">1</option>
            <option name="2" value="Oct">2</option>
            <option name="3" value="Nov">3</option>
            <option name="4" value="Dec">4</option>
            <option name="5" value="Jan">5</option>
            <option name="6" value="Feb">6</option>
            <option name="7" value="Mar">7</option>
            <option name="8" value="Apr">8</option>
            <option name="9" value="9">9</option>
            <option name="10" value="Jun">10</option>
            <option name="11" value="Jul">11</option>
            <option name="12" value="12">12</option>
            <option name="13" value="Sep">13</option>
            <option name="14" value="Oct">14</option>
            <option name="15" value="Nov">15</option>
            <option name="16" value="Dec">16</option>
            <option name="17" value="Jan">17</option>
            <option name="18" value="Feb">18</option>
            <option name="19" value="Mar">19</option>
            <option name="20" value="Apr">20</option>
            <option name="21" value="21">21</option>
            <option name="22" value="Jun">22</option>
            <option name="23" value="Jul">23</option>
            <option name="24" value="24">24</option>
            <option name="25" value="Sep">25</option>
            <option name="26" value="Oct">26</option>
            <option name="27" value="Nov">27</option>
            <option name="28" value="Dec">28</option>
            <option name="29" value="Jan">29</option>
            <option name="30" value="Feb">30</option>
           </select>
           <select placeholder="YY" id='g'>
            <option name="2023" value="2023">2023</option>
            <option name="2022" value="Jul">2022</option>
            <option name="2021" value="Jun">2021</option>
            <option name="2020" value="2020">2020</option>
            <option name="2019" value="Apr">2019</option>
            <option name="2018" value="Mar">2018</option>
            <option name="2017" value="Feb">2017</option>
            <option name="2016" value="Jan">2016</option>
            <option name="2015" value="Dec">2015</option>
            <option name="2014" value="Nov">2014</option>
            <option name="2013" value="Oct">2013</option>
            <option name="2012" value="Sep">2012</option>
            <option name="2011" value="2011">2011</option>
            <option name="2010" value="Jul">2010</option>
            <option name="2009" value="Jun">2009</option>
            <option name="2008" value="2008">2008</option>
            <option name="2007" value="Apr">2007</option>
            <option name="2006" value="Mar">2006</option>
            <option name="2005" value="Feb">2005</option>
            <option name="2004" value="Jan">2004</option>
            <option name="2003" value="Dec">2003</option>
            <option name="2002" value="Nov">2002</option>
            <option name="2001" value="Oct">2001</option>
            <option name="2000" value="Sep">2000</option>
            <option name="1999" value="Feb">1999</option>
            <option name="1998" value="Jan">1998</option>
            <option name="1997" value="Dec">1997</option>
            <option name="1996" value="Nov">1996</option>
            <option name="1995" value="Oct">1995</option>
            <option name="1994" value="Sep">1994</option>
            <option name="1993" value="Jan">1993</option>
            <option name="1992" value="Dec">1992</option>
            <option name="1991" value="Nov">1991</option>
            <option name="1990" value="Oct">1990</option>
            <br/>
           </select>
           <br/>
           <h5 id='h'>You need to enter the date you were born</h5>
           <br/>
           <h5 id='i'>Use your own birthday, even if this account is for a<br/>
           business, a pet, or something else</h5>

           <button type="submit" id='j'> <h6 id='nxt'>Next</h6></button>
           <h6><a href="www.google.com" id='k'>Go Back</a></h6>
           <div>
            <p id='l'>Have an account? <a href="www.google.com" id='n'>Log in</a></p>
           </div>

           <p id='o'>Get the app.</p>
            <div>
            <ul id='ul'>
                    <li id='li'><a href="www.Apple.com">
                   <img  src={require("./../src/assets/a.png")} alt="g" id='apple'/>
                   </a></li>
                  <li><a href="www.Google.com"><img  src={require("./../src/assets/b.png")} alt="a" id='google'/>
                 </a></li>
                </ul>
            </div>
            
   


          {/* <label for="year" ></label>
          <input type="date"  placeholder="Date"></input>

          <label for="year" ></label>
          <input type="date"  placeholder="Month"></input>

          <label for="year" ></label>
          <input type="date"  placeholder="Year"></input> */}
          </form>
        </div>
        
     );
}
 
export default Birthday;