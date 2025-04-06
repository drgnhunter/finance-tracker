import './rightpanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
function RightPanel() {
    return (
      <>
       <div class="right">
        <h1>James Smith</h1>
        <div class="creditcard">
         <h2>CREDIT</h2>
         <h4>**** **** **** ****</h4>
         <h3>1234</h3>
         <p>AVAILABLE FUNDS</p>
         <span>$75,830</span>
         <div class="btm-right-1">EXPIRES</div>
         <div class="btm-right-2">01/24</div>
         <div class="btm-right-3">CVV</div>
         <div class="btm-right-4">123</div>
          </div>
          <div class="schedule">
            <div class="schedule-header">
            <h2 >Schedule Payments</h2>
            <h4 >Aug 2022</h4>
            </div>
            <div class="payment-items">
            <div class="payment-item">
              <div class="item-top">
            <FontAwesomeIcon icon={faHouse} size="2x"style={{ color: "#8338ec", 
    marginRight: "10px",
    verticalAlign: "middle" }} />
              <span class="title">Home Cleaning</span>
              </div>
              <span class="item-sub">12 Hrs - Pending</span>
            </div>
            <div class="payment-item">
              <div class="item-top">
            <FontAwesomeIcon icon={faGraduationCap} size='2x' style={{ color: "#8338ec",  
    marginRight: "10px",
    verticalAlign: "middle", }} />
              <span className="title">Car Insurance</span>
              </div>
              <span class="item-sub">2 Days - Pending</span>
             </div>
             <div class="payment-item">
              <div class="item-top">
            <FontAwesomeIcon icon={faCar} size='2x' style={{ color: "#8338ec",  
    marginRight: "10px",
    verticalAlign: "middle" }} />
              <span className="title">Kids Education</span>
              </div>
              <span class="item-sub">3 Days - Pending</span>
          </div>
            </div>
          </div>
          </div>
       </>
     );
    
}
export default RightPanel
