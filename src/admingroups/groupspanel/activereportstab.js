

import React, { useState, useEffect } from "react"
import groupreportimage1 from '../../../src/assets/images/dashboardimg/groupreportimage1.png'
import groupreportimage2 from '../../../src/assets/images/dashboardimg/groupreportimage2.png'
// import "../../@core/scss/base/adminDashboard/usersmenu.scss";
// import "../../@core/scss/base/adminDashboard/usermenu/userfriends.css";
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import { connect, useDispatch, useSelector } from 'react-redux'
import load from '../../assets/images/dashboardimg/loadersimg.gif'
const ActiveReportsTab = () => {
    const [started, setstarted] = useState(false)
    const [reportsByUserList, getreportslist] = useState([])
    const authStat = useSelector((state) => state.reportsGroupsdata)
    useEffect(() => {
        setstarted(true)
        const {ReportsGroupsValue} = authStat
        console.log("data", ReportsGroupsValue)
        const { responseBody } = ReportsGroupsValue
        console.log("login responseBody", responseBody)
        console.log("auth respomse success")
        if (authStat.ReportsGroupsValue.responseCode === 200) {
            
console.log(responseBody)
getreportslist(responseBody.reported_post_details)
const timeId = setTimeout(() => {
    setstarted(false)
}, 1000)
        } else  if (authStat.ReportsGroupsValue.responseCode === 201) {
            const timeId = setTimeout(() => {
                setstarted(false)
            }, 1000)
        }
    }, [authStat])
    return (
        <div>
            <div className="row">
            <div style={{display:started !== false ? '' : 'none'}}>
            <div className='enable-loader1'>

<img src={load} width="80px" height="80px"></img>
</div>
      </div>
                {reportsByUserList?.map((data) => {
                    return (
                        <div className='col-6 group-reportitem'>
                            <div className="group-reportsection">
                                <div className='row align-items-center report-section'>
                                    <div className='col-2'>
                                        <img src={data.imageName} width="54px" height="54px" />
                                    </div>
                                    <div className='col-10 d-flex flex-column justify-content-around groupreport-innersection'>
                                        <span className='textspan7 reportType'>{data.name}</span>
                                        <span className='textspan8 reportType'>{data.postType}</span>
                                        {/* <hr className="m-0 hrline1" /> */}
                                    </div>
                                </div>
                       
                            </div>
                        </div>
                    )
                })}
                 <div style={{display:reportsByUserList.length === 0 ? 'flex' : 'none'}} className=" justify-content-center">
                  <span className="text-danger">Reports Not Found</span>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log("*****", state.reportsGroupsdata)
    return {
        reportsGroupsdata:state.reportsGroupsdata
    }
}
export default connect(mapStateToProps, {})(ActiveReportsTab)

