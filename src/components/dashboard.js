import LeftPanel from "./leftpanel";
import CenterPanel from "./centerpanel";
import RightPanel from "./rightpanel";
import './dashboard.css'

function Dashboard() {
    return (
      <> 
       <div class="board">
        <LeftPanel/>
        <CenterPanel/>
        <RightPanel/>
       </div>
       </>
     );
    
}
export default Dashboard

