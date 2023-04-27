import './Posted.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
///import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const WhenPosted = () => {
    return ( 
        <div>
            <div id="post-box">

            </div>
            <div>
            <h1>Icon</h1>

            <FontAwesomeIcon icon={['fas', 'heart']} />
            <FontAwesomeIcon icon={['fas', 'comment']} flip="horizontal" />
            <FontAwesomeIcon icon={['fas', 'arrow-up-from-bracket']} />
            <FontAwesomeIcon icon={['fas', 'bookmark']} />


            </div>
            

        </div>
     );
}
 
export default WhenPosted;