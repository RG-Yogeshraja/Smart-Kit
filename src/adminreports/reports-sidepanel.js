import React, { useState } from "react"
import moreverticalround from '../../src/assets/images/dashboardimg/moreverticalround.png';
import reportsuser01 from '../../src/assets/images/dashboardimg/reportsuser01.png';
import hintsociallogo2 from '../../src/assets/images/dashboardimg/hintsociallogo2.png'
import reportscrewimage from '../../src/assets/images/dashboardimg/reportscrewimage.png'
import sendmessage from '../../src/assets/images/dashboardimg/sendmessage.png'
import fitnesscrewreportimage from '../../src/assets/images/dashboardimg/fitnesscrewreportimage.png'
import reportscrewprofile01 from '../../src/assets/images/dashboardimg/reportscrewprofile01.png'
import messagetime from '../../src/assets/images/dashboardimg/messagetime.png'
import Dropdown from 'react-bootstrap/Dropdown';



const ReportsSidePanel = () => {

    const [messageList] = useState([
        { id: 1, imageName: reportsuser01, userName: "John Doe", dateTime: "Jun 27 at 5:30 pm", message: "Hi, I read the description of the group and it seems like it has some inappropriate content." },
        { id: 2, imageName: hintsociallogo2, userName: "You", dateTime: "Jun 28 at 9:00 am", message: "Thanks for letting us know! We will look into this and take the necessary actions. " },
        { id: 3, imageName: reportsuser01, userName: "John Doe", dateTime: "Jun 30 at 5:30 pm", message: "Perfect, thank you!" },
    ])

    return (
        <>
            <div className="report-sidePanelSection d-flex flex-column mb-3">
                <div className="">
                    <div className="d-flex justify-content-between align-items-center p-1">
                        <span className="textspanbold32">Report from Jason Reed</span>
                        <Dropdown className="messages-dropdown">
                            <Dropdown.Toggle>
                                <img src={moreverticalround} width="42px" height="42px" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="messages-dropdownmenu">
                                <Dropdown.Item href="#" className="messages-dropdownitem d-flex align-items-center">
                                    <span>
                                        <img className="messages-dropdownitemIcon" src={messagetime} width="16px" height="16px"></img>
                                    </span>
                                    <span style={{ paddingTop: "2px" }} className="messages-dropdownitemName">Mark as Unread</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#" className="messages-dropdownitem d-flex align-items-center pb-50 pt-25">
                                    <span>
                                        <img className="messages-dropdownitemIcon" src={messagetime} width="16px" height="16px"></img>
                                    </span>
                                    <span style={{ paddingTop: "2px" }} className="messages-dropdownitemName">Mark as Resolved</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <hr className="mt-0 mx-1" style={{ borderColor: "#CCD8DB" }} />
                    <div className="d-flex flex-column reports-crewSection p-75 m-1">
                        <div className="d-flex flex-row row">
                            <img className="col-3 reports-crewprofile" src={reportscrewprofile01} width="30px" height="42px" />
                            {/* ********* DEV NOTE:the above image width and height SHOULD be 46px X 46px, the image given in the figma is not clear */}
                            <div className="col-9 ps-0 d-flex flex-column justify-content-center">
                                <span className="textspanbold36 pb-25">Fitness Crew</span>
                                <hr className="hrline5 mb-0 mt-25 me-1" />
                            </div>
                        </div>
                        <div className="pt-75">
                            <span className="textspanbold33" style={{ fontWeight: "700" }}>Reason: </span>
                            <span className="textspanbold33">Inappropriate Content</span>
                        </div>
                    </div>
                    <div className="messages-section p-2">
                        <div className="row">
                            {messageList.map((data, index) => {
                                return (
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center pb-1">
                                            <div className="">
                                                <img className="me-75" src={data.imageName} width="46px" height="46px" />
                                                <span className="textspanbold33 pe-25" style={{ fontWeight: "700" }}>{data.userName}</span>
                                                {data.userName == "You" ? <span className="textspanbold33">(Hint Social)</span> : null}
                                            </div>
                                            <span className="textspanbold33">{data.dateTime}</span>
                                        </div>
                                        <span className="textspanbold33">{data.message}</span>
                                        {data.id != 3 ? <hr style={{ borderColor: "#CCD8DB" }} /> : null}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="mt-auto mb-2">
                    <img className="reports-sendMessageBtn p-0 row" src={sendmessage} width="70px" height="70px" />
                    <div className="d-flex align-items-center px-2 row ">
                        <div className="col-2 pe-0">
                            <img className="" src={hintsociallogo2} width="46px" height="46px" />
                        </div>
                        <div className="ps-75 col-10 f-flex ">
                            <input className=" form-control reports-messageInput" placeholder="Type your message..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ReportsSidePanel