import React, { useEffect, useState } from "react"
import Modal from "react-bootstrap/Modal"
import Post_detailEdit from './postdetailpopup'
import editicon from '../../assets/images/dashboardimg/editmenu.png'
import Sponsorinfodetail from './sponsordetailpopup'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoredit.scss'
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from 'reactstrap'

const Post_Edit = (props) => {
  const [image, setimage] = useState(null)
  const [values1, setvalues1] = useState('')
  const [active, setActive] = useState('1')
  const [shows, setShows] = useState(false)
  const handleClose = () => setShows(false)

  const handleShow = () => {
    setShows(true)
  }

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  useEffect(() => {
    setimage(props.data)
    setvalues1(props.valuesss)
  }, [])



  return (
    <>
      <span style={{ display: props.data1 === true ? '' : 'none' }}>
        <img src={editicon} width="44px" height="44px" onClick={handleShow}
          className='' style={{ position: "absolute", right: "0px", marginRight: "30px" }}></img></span>
      <Modal dialogClassName="event-detail" show={shows} centered onHide={handleClose} backdrop="static" >
        <div className="p-3">
          <Nav tabs style={{ borderBottom: "1px solid #CCD8DB" }}>
            <NavItem className="me-2">
              <NavLink active={active === '1'} onClick={() => { toggle('1') }}>
                <span className="eventdetails_text">Post Details</span>
              </NavLink>
            </NavItem>
            <NavItem className="me-2">
              <NavLink active={active === '2'} onClick={() => { toggle('2') }}>
                <span className="eventdetails_text">Sponsor Info</span>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-2" activeTab={active}>
            <TabPane tabId="1">
              <Post_detailEdit data="edited" im={image}></Post_detailEdit>
              {/* <Event_details im={image}></Event_details> */}
              <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
                <button className='btn1-style col-4' style={{ width: "40%" }} onClick={() => setShows(false)}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn2-style col-4' style={{ width: "40%" }}><span className="text-update" onClick={() => setShows(false)}>Save</span></button>
              </div>
            </TabPane>


            <TabPane tabId="2" >
              <Sponsorinfodetail data='edited'></Sponsorinfodetail>
              {/* <Sponsorinfopopup data='edit'></Sponsorinfopopup> */}
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
export default Post_Edit