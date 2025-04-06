import './leftpanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function LeftPanel() {
    return (
      <>
       <div class="left">
        <div class="top">
          <h1>Finance</h1>
        </div>
        <div class="container">
      <div class="icons">
        <div>
        <FontAwesomeIcon icon={faHouseUser} style={{ fontSize: "35px", color:"#00b4d8" }} />
        Home
        </div>
        <div class="big">
        <FontAwesomeIcon icon={faWallet} style={{ fontSize: "30px", color:"white" }} />
        Transactions
        </div>
        <div>
        <FontAwesomeIcon icon={faChartSimple}  style={{ fontSize: "30px", color:"white" }} />
        Analytics
        </div>
        <div>
        <FontAwesomeIcon icon={faMessage} style={{ fontSize: "30px", color:"white" }} />
        Messages
        </div>
        <div>
        <FontAwesomeIcon icon={faBullseye} />
        Target
        </div>
        </div>
        <div class="bottom">
            <div>
            <FontAwesomeIcon icon={faHeadset} />
            <span>Support</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
            </div>
          </div>
        </div>
        </div> 
       </>
     );
    
}
export default LeftPanel
