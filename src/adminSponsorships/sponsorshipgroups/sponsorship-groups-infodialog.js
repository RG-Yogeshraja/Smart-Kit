import React, { useEffect, useState } from "react"
import Modal from "react-bootstrap/Modal"
// import editicon from '../../assets/images/dashboardimg/editmenu.png'
import addicon1 from '../../../src/assets/images/dashboardimg/addicon1.png'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoredit.scss'
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from 'reactstrap'
import SponsorshipGroupsDetails from "./sponsorship-groups-detailstab"
import SponsorshipGroupsInfoTab from "./sponsorship-groups-infotab"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsorgroupsmain.scss'
import editicon from '../../assets/images/dashboardimg/editmenu.png'
const SponsorshipGroupsInfoDialog = () => {
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
        // setimage(props.data)
    }, [])
    return (
        <>
      <img src={addicon1} width="16px" height="16px" onClick={handleShow} />
          {/* <img src={editicon} width="44px" height="44px" onClick={handleShow}
  className='mt-75 ' style={{position:"absolute", right:"0px", marginRight:"30px"}}></img> */}
            {/* <img className="" src={addicon1} width="16px" height="16px" onClick={handleShow} /> */}
            <Modal dialogClassName="sponsorshipgroupsInfo-custommodal"
                show={shows} centered onHide={handleClose}
                backdrop="static">
                <div className="p-3">
                    <Nav tabs style={{ borderBottom: "1px solid #CCD8DB" }}>
                        <NavItem className="me-2">
                            <NavLink
                                active={active === '1'}
                                onClick={() => {
                                    toggle('1')
                                }}>
                                <span className="eventdetails_text">Group Details</span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="me-2">
                            <NavLink
                                active={active === '2'}
                                onClick={() => {
                                    toggle('2')
                                }}>
                                <span className="eventdetails_text">Sponsorship Info</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-2" activeTab={active}>
                        <TabPane tabId="1">
                            <SponsorshipGroupsDetails im={image}></SponsorshipGroupsDetails>
                            <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
                                <button className='btn1-style col-4' style={{ width: "40%", boxShadow:"none" }} onClick={() => setShows(false)}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className='btn2-style col-4' style={{ width: "40%", boxShadow:"none" }}><span className="text-update" onClick={() => setShows(false)}>Save</span></button>
                            </div>
                        </TabPane>
                        <TabPane tabId="2" >
                            <SponsorshipGroupsInfoTab></SponsorshipGroupsInfoTab>
                            <div className='col-12 d-flex justify-content-center mt-3 mb-2'>
                                <button className='btn1-style col-4' style={{ width: "35%", boxShadow:"none" }} onClick={() => setShows(false)}><span className="text-cancel" >Cancel</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className='btn2-style col-4' style={{ width: "35%", boxShadow:"none" }}><span className="text-update" onClick={() => setShows(false)}>Save</span></button>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </Modal>
        </>
    )

}
export default SponsorshipGroupsInfoDialog