import React, { useEffect, useState } from "react"
import Modal from "react-bootstrap/Modal"
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoredit.scss'
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from 'reactstrap'
import Post_detailEdit from './postdetailpopup'
import Sponsorinfodetail from './sponsordetailpopup'
import addicon1 from '../../../src/assets/images/dashboardimg/addicon1.png'
const Sponsor_AddPost = (props) => {
  const [image, setimage] = useState(null)
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
  }, [])
  return (
    <>
      <img src={addicon1} width="16px" height="16px" onClick={handleShow} />

      <Modal dialogClassName="event-detail"
        show={shows} centered onHide={handleClose}
        backdrop="static"

      // dialogClassName="space"
      >
        <div className="p-3">
          <Nav tabs style={{ borderBottom: "1px solid #CCD8DB" }}>

            <NavItem className="me-2">
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
              >
                <span className="eventdetails_text">Post Details</span>
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
         
          </Nav>
          <TabContent className="mb-2" activeTab={active}>
            <TabPane tabId="1">
              <Post_detailEdit data=''></Post_detailEdit>
              <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
                <button className='btn1-style col-4' style={{ width: "35%" }} onClick={() => setShows(false)}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn2-style col-4' style={{ width: "35%" }}><span className="text-update" onClick={() => setShows(false)}>Save</span></button>
              </div>
            </TabPane>


            <TabPane tabId="2" >
              <Sponsorinfodetail data=''></Sponsorinfodetail>
              <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
                <button className='btn1-style col-4' style={{ width: "35%" }} onClick={() => setShows(false)}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn2-style col-4' style={{ width: "35%" }}><span className="text-update" onClick={() => setShows(false)}>Save</span></button>
              </div>
            </TabPane>
         
          </TabContent>
        </div>
      </Modal>
    </>
  )

}
export default Sponsor_AddPost