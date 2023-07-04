import React, { useState } from "react";
import reportsbyuser1 from '../../assets/images/dashboardimg/reportsbyuser1.png';
import blockedbyuser1 from '../../assets/images/dashboardimg/blockedbyuser1.png';


// import "../../@core/scss/base/adminDashboard/usersmenu.scss";
// import "../../@core/scss/base/adminDashboard/usermenu/userfriends.css";
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss";


const ReportsByUser = (props) => {
    const [reportsByUserList] = useState([
        { id: '1', name: "Amy Delacruz", postType: "User Report", imageName: blockedbyuser1, reportDescription: "Inappropriate information shown on profile" },
        { id: '2', name: "Post on Fitness Crew Group", postType: "Post Report", imageName: reportsbyuser1, reportDescription: "Inappropriate information shown on post" },
    ])

    return (
        <div>
            <div className="row">
                {reportsByUserList.filter(items => items.name.match(new RegExp(props.data, "i"))).map((data) => {
                    return (
                        <div className='col-6 p-2'>
                            <div className="section-border1 p-1">
                                <div className='row align-items-center report-section'>
                                    <div className='col-2'>
                                        <img src={data.imageName} width="54px" height="54px" />
                                    </div>
                                    <div className='col-10 d-flex flex-column justify-content-around report-innersection'>
                                        <span className='textspan7 reportType'>{data.name}</span>
                                        <span className='textspan8 reportType'>{data.postType}</span>
                                        <hr className="m-0 hrline1" />
                                    </div>
                                </div>
                                <div className='row align-items-center'>
                                    <div className="col-12">
                                        <span className='textspanlight4'>{data.reportDescription}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ReportsByUser
