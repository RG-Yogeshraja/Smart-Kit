import React, { useState } from "react"
import morehorizontal from "../../src/assets/images/dashboardimg/morehorizontal.png"
import dot from '../../src/assets/images/dashboardimg/Ellipse11.png';
import '../@core/scss/base/adminDashboard/reportsmenu/reportsmenu.scss'



const ReportsResolved = () => {
    const [activeGroupData] = useState([
        { id: 1, reportName: "Jason Reed", reportName1: "jreed@gmail.com", reportStatus: 'Re: Fitness Crew', reportStatus1: "Inappropriate Content", duration: "June 27, 2022", time: '5:30 pm', notificationCount: "1" },
        { id: 2, reportName: "Michelle Smith", reportName1: "msmith@gmail.com", reportStatus: 'Re: Amy Delacruz (User)', reportStatus1: "Offline Behavior", duration: "June 27, 2022", time: '5:30 pm', notificationCount: "" },
        { id: 3, reportName: "Rebecca Jackson", reportName1: "rjack@gmail.com", reportStatus: 'Re: Barry’s Private Event', reportStatus1: "Inappropriate Content", duration: "June 27, 2022", time: '5:30 pm', notificationCount: "" },
        { id: 4, reportName: "Michelle Smith", reportName1: "msmith@gmail.com", reportStatus: 'Re: Amy Delacruz (User)', reportStatus1: "Offline Behavior", duration: "June 27, 2022", time: '5:30 pm', notificationCount: "" },
        { id: 5, reportName: "Rebecca Jackson", reportName1: "rjack@gmail.com", reportStatus: 'Re: Barry’s Private Event', reportStatus1: "Inappropriate Content", duration: "June 27, 2022", time: '5:30 pm', notificationCount: "" },
    ])
    return (
        <>
            <div>
                {activeGroupData.map((data, index) => {
                    return (
                        <> <div className="card mb-2 p-2  px-1 flex-column cards activegroup-selectedsection mt-75" style={{ border: data.id == 1 ? '1px solid #95E1BF' : null }}>
                            <div className="col-12 px-1">
                                <div className=" justify-content-end" style={{ display: data.notificationCount == '' ? 'none' : 'flex' }}>
                                    <span className="notificationCount" >{data.notificationCount}</span>
                                </div>
                                <div className="d-flex align-items-between justify-content-between mb-75">
                                    <div>
                                        <span className="textspanbold32">{data.reportName}</span>
                                        <img src={dot} width="5px" height="5px" className="ms-50"></img>
                                        <a href='mailto:' className="ms-50 textspanlight30 reports-usermail">{data.reportName1}</a>
                                    </div>
                                    <div>
                                        <span className="textspanbold33">{data.duration}</span>
                                        <img src={dot} width="5px" height="5px" className="ms-50"></img>
                                        <span className="ms-50 textspanbold33">{data.time}</span>
                                        <img src={morehorizontal} className="ms-75" width="24px" height="24px"></img>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-between">
                                    <div>
                                        <span className="textspanlight30">{data.reportStatus}</span>
                                    </div>
                                    <div>
                                        <span className="textspanbold34">Reason: </span>
                                        <span className="textspanbold35">{data.reportStatus1}</span>
                                    </div>
                                </div>
                            </div>
                        </div></>
                    )
                })}
            </div>
        </>
    )
}

export default ReportsResolved