import React, { useState, useRef, useEffect } from "react"
import location from '../../../src/assets/images/dashboardimg/location.png'
import defaultuser from '../../../src/assets/images/dashboardimg/Group-2.png'
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import birthdaycakefire from '../../../src/assets/images/dashboardimg/birthdaycakefire.png'
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import blockitem from '../../../src/assets/images/dashboardimg/closeblock.png'
import deleteitem from '../../../src/assets/images/dashboardimg/deleteitem.png'
import reportflagicon from '../../../src/assets/images/dashboardimg/reportflagicon.png'
import Dropdown from 'react-bootstrap/Dropdown'
import '../../@core/scss/base/adminDashboard/custom_dropdownmenu.scss'
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import { connect, useDispatch, useSelector } from 'react-redux'

const ActiveMembersSubTab = (props) => {
    console.log(props)
    const [activeGroupMembersList, getlist] = useState([])
    const [getchange, setchange] = useState(false)
    // const [show, setShow] = useState(false);
    const target = useRef(null)
    const getmembers = useSelector((state) => state.adminmemberInfo)
    const [started, setstarted] = useState(true)
    const [data, setData] = useState(false)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const [checkAdminn, setCheckAdminnn] = useState("")
    const changebirth = (val) => {
        if (val !== undefined) {
            const datas = val
            console.log(datas)
            const today = new Date()
            const birthDate = new Date(datas)
            console.log("get bod-->", birthDate) // create a date object directly from `dob1` argument
            let age_now = today.getFullYear() - birthDate.getFullYear()
            const m = today.getMonth() - birthDate.getMonth()
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age_now--
            }

            return <>{age_now}</>
        }

    }
    useEffect(() => {

        getlist([])
        if (getmembers !== undefined) {
            setstarted(true)
            const { addmembers } = getmembers
            console.log("data", addmembers)
            const { responseBody } = addmembers
            console.log("login responseBody", responseBody)
            console.log("auth respomse success")
            if (getmembers.addmembers.responseCode === 200) {
                setchange(true)
                // const timeId = setTimeout(() => {
                //     setstarted(false)
                // }, 1000)
                setstarted(false)
                console.log(responseBody)
                const val = [...responseBody]
                const isMemberData = val.filter(data => data.is_member === 1)
                const data = [...isMemberData]
                const adminFilter = data.filter(item => item.is_admin == 1 && item.full_name != undefined)
                const memberFilter = data.filter(item => item.is_admin == 0 && item.full_name != undefined)
                const sortingAdminFilter = adminFilter.sort((a, b) => a.full_name.localeCompare(b.full_name))
                const sortingMemberFilter = memberFilter.sort((a, b) => a.full_name.localeCompare(b.full_name))
                const consolidateSortingData = [...sortingAdminFilter, ...sortingMemberFilter]
                getlist(consolidateSortingData)
            } else if (getmembers.addmembers.responseCode === 201) {
                setstarted(false)
                console.log(responseBody)
            }
        }

        console.log(getmembers.addmembers.responseCode)

    }, [getmembers])



    return (
        <>
            <div className="groupactiveMembersscrollbar" id="groupactiveMembers-style">
                <div style={{ display: started !== false ? '' : 'none' }}>
                    <div className='enable-loader1'>

                        <img src={load} width="80px" height="80px"></img>
                    </div>
                </div>
                <div className="row groupactiveMembers-force-overflow">

                    {activeGroupMembersList.filter(data => data.is_member === 1)?.map((data, index) => {
                        return (
                            <div className='col-6' style={{ display: data.is_member === 1 ? '' : 'none' }}>
                                <div className='row  pb-2'>
                                    <div className='col-2 d-flex align-items-center'>
                                        <img src={data.image_url !== '' ? data.image_url : defaultuser} style={{ borderRadius: "8px" }} width="54px" height="54px" />
                                    </div>
                                    <div className='col-8 groups-memberslist d-flex align-items-center'>
                                        <div className='d-flex flex-column '>
                                            <div className="d-flex align-items-center">
                                                <span className='textspan1 userfriendname ps-1'>{data.full_name}</span>
                                                <span className="ps-1">{data.is_admin === 1 ? <button className="group-btnspan1 d-flex align-items-center justify-content-center">Admin</button> : null}</span>&nbsp;&nbsp;
                                                {/* {checkAdminn == undefined ? <span>he is super admin</span> : null} */}
                                            </div>
                                            <div className='biodatasection d-flex align-items-center'>
                                                {data.location != null ?
                                                    <>
                                                        <img src={location} width="16px" height="16px"></img>
                                                        <span className='textspanlight1 ms-25'>{data.location}</span>
                                                        <img className="ms-25" src={dot} width="5px" height="5px"></img>
                                                    </> : null}
                                                {data.birth_date != null ?
                                                    <>
                                                        <img className="ms-25" src={birthdaycakefire} width="16px" height="16px"></img>
                                                        <span className='textspanlight1 ms-25 mt-25'>{changebirth(data.birth_date)}</span>
                                                    </> : null}
                                            </div>
                                        </div>
                                    </div>

                                    {/* DONT REMOVE THE BELOW COMMENTED CODE-commented code is no need for current sprint */}

                                    {/* <div className="col-2 p-0 userfriend-verticalmore"> */}
                                    {/* <img src={verticalmore} width="28" height="28" /> */}
                                    {/* {(index % 2) == 0 ? <Dropdown className="customDropdown custompositionw1" >
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="customDropdownmenu customDropdownmenup1">
                                                    <Dropdown.Item href="#" className="ps-50 pt-25 pb-50 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={reportflagicon} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Report</span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#" className="ps-50 py-25 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={blockitem} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Block</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown> : <Dropdown className="customDropdown custompositionw1even" >
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28" height="28" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="customDropdownmenu customDropdownmenup1">
                                                    <Dropdown.Item href="#" className="ps-50 pt-25 pb-50 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={reportflagicon} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Report</span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#" className="ps-50 py-25 customDropdownitem d-flex align-items-center">
                                                        <img className="me-25" src={blockitem} width="16px" height="16px"></img>
                                                        <span className="textspanlight37">Block</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>} */}
                                    {/* </div> */}
                                </div>
                            </div>
                        )
                    })}
                    <div className='justify-content-center mt-5' style={{ display: activeGroupMembersList?.length < 1 ? 'flex' : 'none' }}>
                        <div className="text-danger">No Data Found</div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    console.log("*****", state)
    return {
        state
    }
}
export default connect(mapStateToProps, {})(ActiveMembersSubTab)
