import React, { useState } from "react"
// import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
// import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
// import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
// import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.css"
// import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsorgroupsmain.scss'
import morehorizontal from "../assets/images/dashboardimg/morehorizontal.png"
import dot from '../assets/images/dashboardimg/Ellipse11.png'
import users from '../assets/images/dashboardimg/1.png'
import mini from '../assets/images/dashboardimg/calen1.png'
import profiles from '../assets/images/dashboardimg/profiledetail.png'
const Messagesasadminresolved= () => {
    const [activeGroupData] = useState([
        { id: 1, reportName: "Amy Delacruz", small:mini, reportName1: "Secret Comedy Show", reportStatus:' Having an issue with account', reportStatus1: "jreed@gmail.com", duration: "June 27, 2022", time:'5:30 pm', phno:'445-334-3322', num:'1'  },
        { id: 2, reportName: "Michelle Smith", small:profiles,  reportName1: "Pickleball Group",reportStatus:' Can’t access all the features in the app', reportStatus1: "msmith@gmail.com",duration: "June 27, 2022", time:'5:30 pm',  phno:'445-334-3322', num:'1'  },
        { id: 3, reportName: "Rebecca Jackson", small:mini, reportName1: "Hint Social Meet Up",  reportStatus:' Having an issue with account',reportStatus1: "rjack@gmail.com", duration: "June 27, 2022",time:'5:30 pm',  phno:'445-334-3322', num:''  },
        { id: 4, reportName: "Michelle Smith", small:mini,  reportName1: "Secret Comedy Show", reportStatus:' Having an issue with account',reportStatus1: "msmith@gmail.com",  duration: "June 27, 2022",time:'5:30 pm',  phno:'445-334-3322', num:''   },
        { id: 5, reportName: "Rebecca Jackson", small:mini,  reportName1: "Secret Comedy Show", reportStatus:' Having an issue with account',reportStatus1: "rjack@gmail.com",  duration: "June 27, 2022",time:'5:30 pm',  phno:'445-334-3322', num:''   },
    ])
    return (
        <>
            <div>
                {activeGroupData.map((data, index) => {
                    return (
                        <> <div className="card mb-2 p-2  px-1 flex-column cards activegroup-selectedsection" style={{ border: data.id == 1? '1px solid #95E1BF': null }}>
                             <div className=" justify-content-end" style={{display:data.num==''?'none':'flex'}}>
<span className="messages_styling" >{data.num}</span>
                                </div>
                            <div className="col-12 px-1 ">
                           
                              <div className="d-flex align-items-between justify-content-between mb-50">
                              
                                <div>
                                    <span className="messages_boldtext">{data.reportName}</span>&nbsp;&nbsp;&nbsp;
                                  <span className="message_resolve p-50"> <img src={data.small} width="13px" height="13px" className="me-25"></img>{data.reportName1}</span>
                                    
                                </div>
                                <div>
                                    <span className="messages_timedate">{data.duration}</span>
                                    <img src={dot} width="5px" height="5px" className="ms-50 me-50 mb-25"></img>
                                    <span className=" messages_timedate">{data.time}</span>
                                    <img src={morehorizontal} className="ms-75" width="24px" height="24px"></img>
                                </div>
                              </div>

                              <div className="d-flex justify-content-between ">
                                <div className="col-6">
                                    <span className="messages_subtext"><span style={{fontWeight:'bold'}}>Subject:</span>{data.reportStatus}</span>
                                   
                                </div>
                                <div>
                                    <span className="messagemailandphone"><img src={users} width="20px" height="20px" className="me-50"></img><a href="mailto:" style={{color:'#677E84'}}><span>{data.reportStatus1}</span></a>
                                    <img src={dot} width="5px" height="5px" className="ms-50 me-50 mb-25"></img><span>{data.phno}</span>
                                    </span>
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

export default Messagesasadminresolved