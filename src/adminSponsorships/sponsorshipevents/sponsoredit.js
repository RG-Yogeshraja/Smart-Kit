import React, { useEffect, useState} from "react"
import  Modal  from "react-bootstrap/Modal"
import editicon from '../../assets/images/dashboardimg/editmenu.png'
import Event_details from './eventdetails'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoredit.scss'
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from 'reactstrap'
import Questionspopup from './questionpopup'
import Sponsorinfopopup from './sponsorshipinfopop'
const Sponsor_Edit = (props) => {
  const [image, setimage] = useState(null)
  const [values,setvalues]=useState('')
  const [active, setActive] = useState('1')
  const [shows, setShows] = useState(false)
    const handleClose = () => setShows(false)
 
    const handleShow = () => {
   
  //   props.clickhandle()
    setShows(true)
    }
    const toggle = (tab) => {
      if (active !== tab) {
          setActive(tab)
  }
}
useEffect(() => {
  setimage(props.data)
  setvalues(props.values)
}, [])
return (
  <>
  <span style={{pointerEvents:props.data1 === true ? 'auto' : 'none'}}>
  <img src={editicon} width="44px" height="44px" onClick={handleShow}
  className='mt-75 ' style={{position:"absolute", right:"0px", marginRight:"30px"}}></img></span>
    <Modal  dialogClassName="event-detail"
    show={shows} centered onHide={handleClose}
    backdrop="static"  

    // dialogClassName="space"
    >
     <div className="p-3">
     <Nav tabs style={{borderBottom:"1px solid #CCD8DB"}}>

<NavItem className="me-2">
  <NavLink 
    active={active === '1'}
    onClick={() => {
      toggle('1')
    }}
  >
    <span className="eventdetails_text">Event Details</span>
  </NavLink>
</NavItem>
  <NavItem className="me-2">
    <NavLink
      active={active === '2'}
      onClick={() => {
        toggle('2')
      }}
    ><span className="eventdetails_text">Sponsorship Info</span>
    
    </NavLink>
  </NavItem> 
  {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint ***** */}
  {/* <NavItem className="me-2">
    <NavLink
      active={active === '3'}
      onClick={() => {
        toggle('3')
      }}
    ><span className="eventdetails_text">Questions</span>
    
    </NavLink>
  </NavItem>  */}
</Nav> 
<TabContent className="mb-2" activeTab={active}>
                    <TabPane tabId="1">
<Event_details im={image} data='edit'></Event_details>
<div className='col-12 d-flex justify-content-center mt-3 mb-2'>
              <button className='btn1-style col-4' style={{width:"40%"}} onClick={() => setShows(false)}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className='btn2-style col-4'  style={{width:"40%"}}><span className="text-update" onClick={() => setShows(false)}>Update</span></button>
            </div>
                    </TabPane>

                    
                    <TabPane tabId="2" >
                     <Sponsorinfopopup data='edit'></Sponsorinfopopup>
                     <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
              <button className='btn1-style col-4' style={{width:"35%"}} onClick={() => setShows(false)}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className='btn2-style col-4'  style={{width:"35%"}}><span className="text-update" onClick={() => setShows(false)}>Update</span></button>
            </div>
                    </TabPane>
                    <TabPane tabId="3" >
                     <Questionspopup></Questionspopup>
                     <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
              <button className='btn1-style col-4' style={{width:"35%"}} onClick={() => setShows(false)}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className='btn2-style col-4'  style={{width:"35%"}}><span className="text-update" onClick={() => setShows(false)}>Update</span></button>
            </div>
                     </TabPane>
                    </TabContent>
      </div>   
    </Modal>
    </>
)

}
export default Sponsor_Edit