import './Posted.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faComment, faBookmark, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
///import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
library.add(faHeart, faComment, faBookmark, faArrowUp);


const WhenPosted = () => {
    return ( 
        <div>
            <div id="post-box">

            </div>
            <div>
            <h1>Icon</h1>

            <FontAwesomeIcon icon={faHeart} style={{marginLeft:'380px'}} />
            <FontAwesomeIcon icon={faComment} style={{marginLeft:'180px'}}  />
            <FontAwesomeIcon icon={faBookmark} style={{marginLeft:'180px'}}  />
            <FontAwesomeIcon icon={faArrowUp} style={{marginLeft:'180px'}}  />



            </div>
            

        </div>
     );
}
 
export default WhenPosted;