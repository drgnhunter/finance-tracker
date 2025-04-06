import Main from "./main";
import TransactionHistory from "./transactionhistory";
import Balance from "./balance";
import './centerpanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function CenterPanel() {
    return (
      <>
       <div class="center">
        <div class="dashboard">
          <div class="title">
          <h1 >Dashboard</h1>
          <h4>Hi James, Good Morning</h4>
          </div>
          <div class="cards">
            <div>
            <span>$597</span>
            <FontAwesomeIcon icon={faCreditCard}  style={{ color: "#8338ec" }} />
            <p>Shopping Debit & Credit Card</p>
              </div>
            <div>
            <span>$1880</span>
            <FontAwesomeIcon icon={faHandHoldingDollar}  style={{ color: "#8338ec" }} />
            <p>Transfer Other Country</p>
              </div>
            <div>
            <span>$56</span>
            <FontAwesomeIcon icon={faShieldHeart}  style={{ color: "#8338ec" }} />
            <p>Investment & Insurance</p>
              </div>
            <div>
            <span>$456</span>
            <FontAwesomeIcon icon={faGraduationCap}  style={{ color: "#8338ec" }} />
            <p>Kids Education & Hobbies</p>
              </div>
          </div>
        </div>
        <div >
         <h2 class="title">TransactionHistory</h2>
        </div> 
        <div>
        <h2 class="title">Balance</h2>
        </div> 
       </div>
       </>
     );
    
}
export default CenterPanel
