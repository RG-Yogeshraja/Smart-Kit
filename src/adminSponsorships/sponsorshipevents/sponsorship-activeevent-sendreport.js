import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import whitebox from '../../assets/images/dashboardimg/fieldbox.png'
import checked from '../../assets/images/dashboardimg/checktickbox.png'
import SponsorshipEventSendReportConfirm from "./sponsorship-eventsendreport-confirm"


const SponsorshipActiveEventSendReport = () => {
    const [show1, setShow1] = useState(false)
    const handleClose = () => setShow1(false)
    const [active, setActive] = useState("1")
    // const [change, setActiveChange]=useState()

    let setActiveChangeFunction = undefined

    const setActiveChange = (change) => {
        setActiveChangeFunction = change
    }

    const [overallMetrics, setOverallMetrics] = useState([
        { name: "Unique Viewers", checked: true }, { name: "Impressions", checked: false }, { name: "Event Clicks", checked: false },
        { name: "Cost Per Unique Viewer", checked: false }, { name: "Cost Per Impression", checked: false }, { name: "Cost Per Event Click", checked: false }, { name: "Event Link Clicks", checked: false },
        { name: "Sponsor Link Clicks", checked: false }, { name: "Members Attending", checked: false }, { name: "Cost Per Event Link Click", checked: false }, { name: "Cost Per Sponsor Link Click", checked: false }, { name: "Total Spent", checked: false }
    ])

    const [profileMetrics, setProfileMetrics] = useState([
        { name: "Location", checked: true }, { name: "Interests", checked: false }, { name: "Religion", checked: false },
        { name: "Gender Identity", checked: false }, { name: "Age Range", checked: false }, { name: "Ethinicities", checked: true }, { name: "Languages", checked: false },
        { name: "Politics", checked: false }
    ])

    const checkoverallMetrics = (index) => {
        const data1 = [...overallMetrics]
        if (data1[index].checked === true) {
            data1[index].checked = false
        } else {
            data1[index].checked = true
        }
        setOverallMetrics(data1)
    }

    const checkprofileMetrics = (index) => {
        const data2 = [...profileMetrics]
        if (data2[index].checked === true) {
            data2[index].checked = false
        } else {
            data2[index].checked = true
        }
        setProfileMetrics(data2)
    }

    // const send = () => {
    //     setShow1(false)
    // }
    // const message = (value) => {
    //     if (value == 1) {
    //         setShow1(false)
    //     }
    // }

    const sendto = (value) => {
        const obj = { keyy: value }
        console.log('####', obj)
        setActiveChange(obj)
        setShow1(false)
    }

    return (
        <>
            <button onClick={() => setShow1(true)} className="sponsor-btntextbold1 ms-2" style={{ outline: "none" }}>Send Report</button>

            <Modal show={show1} centered dialogClassName="activeEventSendReport-custommodal" onHide={() => setShow1(false)}>
                <div className="activeEventSendReport-content">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column pt-50">
                            <span className="sponsor-textspanbold21">Send Sponsorship</span>
                            <span className="sponsor-textspanbold21">Report</span>
                        </div>
                        <div className="">
                            <button className="sponsor-btn5 me-1">View Default</button>
                            <button className="sponsor-btn6">Send Default</button>
                        </div>
                    </div>
                    <div className="sendReport-des p-1 my-2">
                        <span className="sponsor-textspanlight10">
                            Choose the metric categories you want to include in the report or select “Send Default” to proceed with the default report.
                        </span>
                    </div>
                    <div className="pt-1">
                        <span className="sponser-textspanbold4">Overall Metrics</span>
                        <div className='row pt-75'>
                            {overallMetrics.map((items, index) => {
                                return (
                                    <div className='col-4 d-flex align-items-center py-75'>
                                        <img src={items.checked === true ? checked : whitebox} width="20px" height="20px" className="me-25" onClick={() => checkoverallMetrics(index)}></img>
                                        <span className='sponsor-textspanlight6'>{items.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* PLEASE DONT DELETE THE BELOW COMMENTED CODE- commented code is no need of current Sprint */}
                    
                    {/* <div className="mt-2">
                        <span className="sponser-textspanbold4">Profile Metrics</span>
                        <div className='row pt-1 me-4'>
                            {profileMetrics.map((items, index) => {
                                return (
                                    <div className='col-4 d-flex align-items-center py-75'>
                                        <img src={items.checked === true ? checked : whitebox} width="20px" height="20px" className="me-25" onClick={() => checkprofileMetrics(index)}></img>
                                        <span className='sponsor-textspanlight6'>{items.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div> */}
                    <div className="col-12 mt-2 pt-50 d-flex align-items-center justify-content-center">
                        <button className=' closebuttonuser m-0' style={{ width: "45%" }} onClick={handleClose}>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* <span className='col-2'></span> */}
                        <button className=' Exportbuttonuser' style={{ width: "45%" }} onClick={() => sendto("1")}>Send</button>
                        {/* <SponsorshipEventSendReportConfirm setchange={change => { setActiveChangeFunction = change }} /> */}
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default SponsorshipActiveEventSendReport