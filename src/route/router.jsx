import Layout from "../layout/Layout";
import TicketSelection from "../pages/TicketSelection";
import AttendeeDetails from "../pages/AttendeeDetails";
import TicketReady from "../pages/TicketReady";

const ROUTES = [{
    path:"/",
    element:<Layout/>,
    children:[
        {
            path:"/",
            element:<TicketSelection/>
        },
        {
            path:"/attendee",
            element:<AttendeeDetails/>
        },
        {
            path:"/ticket",
            element:<TicketReady/>
        },
        ]         

}
   
]

export default ROUTES;