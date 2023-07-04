import React, { useState } from "react"
import userfriend1 from '../../../src/assets/images/dashboardimg/userfriend1.png';
import userfriend2 from '../../../src/assets/images/dashboardimg/userfriend2.png';
import userfriend3 from '../../../src/assets/images/dashboardimg/userfriend3.png';
import userss1 from '../../../src/assets/images/dashboardimg/userss1.png';
import dot from "../../../src/assets/images/dashboardimg/Ellipse11.png"
import chaticon from "../../../src/assets/images/dashboardimg/chaticon.png"
import birthdaycakefire from "../../../src/assets/images/dashboardimg/birthdaycakefire.png"
import verticalmore from '../../assets/images/dashboardimg/verticalmore.png';
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import location from '../../assets/images/dashboardimg/location.png';



const SponsorshipManageAttendingAttend = () => {
    const [manageAttendigList] = useState([
        { id: 1, imageName: userfriend1, attendingName: "Justin Rosser", status: "Love this!!!", statusEnable: "enable", location: "South End, Boston", birthDate: "30", reason1: "1. Have you ever been to a Don't Tell Comedy show?", reason1ans: "Yes", reason2: "2. Because you selected yes, how did you find out about it?", reason2ans: "Google search" },
        { id: 2, imageName: userfriend2, attendingName: "Alex Hardy", status: "", statusEnable: "", location: "Abington", birthDate: "34", reason1: "1. Have you ever been to a Don't Tell Comedy show?", reason1ans: "No", reason2: "2. Because you selected no, why not?", reason2ans: "Other - Relatives" },
        { id: 3, imageName: userfriend3, attendingName: "Giana Bergson", status: "Really excited!!", statusEnable: "enable", location: "Worcester", birthDate: "25", reason1: "1. Have you ever been to a Don't Tell Comedy show?", reason1ans: "No", reason2: "2. Because you selected no, why not?", reason2ans: "N/A - have never been to DTC" },
        { id: 4, imageName: userss1, attendingName: "Amy Delacruz", status: "", statusEnable: "", location: "Abington", birthDate: "34", reason1: "1. Have you ever been to a Don't Tell Comedy show?", reason1ans: "Yes", reason2: "2. Because you selected yes, how did you find out about it?", reason2ans: "Google search" },
        { id: 1, imageName: userfriend1, attendingName: "Justin Rosser", status: "Love this!!!", statusEnable: "enable", location: "South End, Boston", birthDate: "30", reason1: "1. Have you ever been to a Don't Tell Comedy show?", reason1ans: "Yes", reason2: "2. Because you selected yes, how did you find out about it?", reason2ans: "Google search" },
        { id: 2, imageName: userfriend2, attendingName: "Alex Hardy", status: "", statusEnable: "", location: "Abington", birthDate: "34", reason1: "1. Have you ever been to a Don't Tell Comedy show?", reason1ans: "No", reason2: "2. Because you selected no, why not?", reason2ans: "Other - Relatives" },
        { id: 3, imageName: userfriend3, attendingName: "Giana Bergson", status: "Really excited!!", statusEnable: "enable", location: "Worcester", birthDate: "25", reason1: "1. Have you ever been to a Don't Tell Comedy show?", reason1ans: "No", reason2: "2. Because you selected no, why not?", reason2ans: "N/A - have never been to DTC" },
        { id: 4, imageName: userss1, attendingName: "Amy Delacruz", status: "", statusEnable: "", location: "Abington", birthDate: "34", reason1: "1. Have you ever been to a Don't Tell Comedy show?", reason1ans: "Yes", reason2: "2. Because you selected yes, how did you find out about it?", reason2ans: "Google search" }
    ])

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)


    return (
        <>
            <div className="attending-scrollbar mb-3" id="attending-style1">
                <div className="row attending-forceoverflow">
                    {/* <div className="scrollbar mt-2" id="style-2"> */}
                    {manageAttendigList.map((data, index) => {
                        return (
                            <div className=" row ">
                                <div className="col-1">
                                    <img src={data.imageName} width="60px" height="60px"></img>
                                </div>
                                <div className="col-10 attending-profilesection">
                                    <div className="ms-1 mt-50 d-flex flex-row align-items-center"> &nbsp;
                                        <span className="sponsor-textspanbold11">{data.attendingName}</span>&nbsp;&nbsp;
                                        {data.statusEnable != "" ? <img src={dot} width="4px" height="4px"></img> : null} &nbsp;&nbsp;
                                        {data.statusEnable != "" ? <img src={chaticon} width="15px" height="15px"></img> : null}  &nbsp;&nbsp;
                                        {data.statusEnable != "" ? <span className="sponsor-textspanlight4">{data.status}</span> : null} &nbsp;

                                    </div>
                                    <div className="d-flex flex-row align-items-center ms-1 mt-25">
                                        <img src={location} width="16px" height="16px"></img>&nbsp;
                                        <span className="sponsor-textspanlight5">{data.location}</span>&nbsp;&nbsp;
                                        <img src={dot} width="4px" height="4px"></img>&nbsp;
                                        <img className="ms-25" src={birthdaycakefire} width="16px" height="16px"></img>&nbsp;
                                        <span className="sponsor-textspanlight5">{data.birthDate}</span>
                                    </div>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                    <img src={verticalmore} width="28px" height="28px" />
                                </div>
                                <div className="d-flex justify-content-between mt-1">
                                    <span className="sponsor-textspanbold12">{data.reason1}</span>
                                    <span className="sponsor-textspanlight6">{data.reason1ans}</span>
                                </div>
                                <div className="d-flex justify-content-between mt-1">
                                    <span className="sponsor-textspanbold12">{data.reason2}</span>
                                    <span className="sponsor-textspanlight6">{data.reason2ans}</span>
                                </div>
                                <div className="mt-50" style={{ display: index !== manageAttendigList.length - 1 ? '' : 'none' }}>
                                    <hr style={{ border: "1px solid #CCD8DB", width: "96%" }}></hr>
                                </div>

                            </div>

                        )

                    }
                    )}

                </div>
                {/* <div className="col-12 d-flex justify-content-between">
                        <button className="" onClick={handleClose}>Close</button>
                        <button className="">Export</button>
                    </div> */}
            </div>
        </>
    )
}


export default SponsorshipManageAttendingAttend