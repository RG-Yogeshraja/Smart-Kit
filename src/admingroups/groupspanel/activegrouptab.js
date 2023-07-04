import React, { useState, useEffect } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap"
import morehorizontal from '../../../src/assets/images/dashboardimg/morehorizontal.png'
import dot from '../../../src/assets/images/dashboardimg/Ellipse11.png'
import location from '../../../src/assets/images/dashboardimg/location.png'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import ActiveMembersTab from './activememberstab'
import ActivePostsTab from './activepoststab'
import ActiveEventsTab from './activeeventstab'
import ActiveReportsTab from './activereportstab'
import AssignAdmininGroups from '../groupspopup/assignadmin'
import { activeGroups_APIcall } from './getactive-splice'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getactivemember_APIcall } from './getmemberlistsplice'
import { postGroups_APIcall } from './postmembers-splice'
import { eventsGroups_APIcall } from './getevents-splice'
import { reportsGroups_APIcall } from './getReports-splice'
import { getIndivudual_APIcall } from './getgroupdetails-splice'
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import blankimages from '../../assets/images/dashboardimg/blank-image.png'
import twousers from '../../assets/images/dashboardimg/twousersgroup.png'
import { groupsFilter_APIcall } from '../slice-admingroups/slice-groupfilter'

const ActiveGroupsTab = (props) => {
    const dispatch = useDispatch()
    const [active, setActive] = useState("1")
    const [defaulttab, setdefault] = useState(false)
    const [ind, setindex] = useState("")
    const [groupAdminval, setGroupAdminval] = useState([])
    const [groupgetmember] = useState([])
    const [setmembers, getmembers] = useState()
    const [setcount, getcount] = useState('')
    const [setgroups_values, getgroups_vals] = useState([])
    const [getpostval, setpostval] = useState(undefined)
    const [eventval, seteventval] = useState(undefined)
    const [started, setstarted] = useState(false)
    const authStat_getGroupFilterData = useSelector((state) => state.groupsFilterData)
    const getmembers_api = useSelector((state) => state.adminmemberInfo)
    const authStat1 = useSelector((state) => state.activeGroupsdata)


    const memberval = (v) => {
    }

    useEffect(() => {
        if (getmembers_api.addmembers.responseCode === 200) {
            console.log(getmembers_api.addmembers.responseBody)
            getmembers(getmembers_api.addmembers.responseBody.length)
        }
    }, [getmembers_api.addmembers])

    const toggle = (tab, id) => {
        if (active !== tab) {
            setActive(tab)
            const payload = {
                user_id: localStorage.getItem("loggedIn_userId"),
                group_id: id
            }
            if (tab === "1") {
                dispatch(getactivemember_APIcall(payload))
            }
            if (tab === "2") {
                dispatch(postGroups_APIcall(payload))
            }
            if (tab === "3") {
                const payload1 = {
                    admin_id: localStorage.getItem("loggedIn_userId"),
                    group_id: id
                }
                dispatch(eventsGroups_APIcall(payload1))
            }
            if (tab === "4") {
                const payload1 = {
                    admin_id: localStorage.getItem("loggedIn_userId"),
                    group_id: id
                }
                dispatch(reportsGroups_APIcall(payload1))
            }
        }
    }

    useEffect(() => {
        if (authStat_getGroupFilterData.data.responseBody != undefined && authStat_getGroupFilterData.data.responseCode == 200) {
            
            // if (authStat_getGroupFilterData.data.responseBody.length != 0) {
                const val = authStat_getGroupFilterData.data.responseBody
                const mal = val.filter(res => res.is_approved == 1)
                // const strAscending = mal.sort((a, b) => (a.group_name > b.group_name ? 1 : -1))
                const strAscending = mal.sort((a, b) => (a.group_name.localeCompare(b.group_name)))

                setGroupAdminval(strAscending)
                if (strAscending.length != 0) {
                    const payload = {
                        user_id: localStorage.getItem("loggedIn_userId"),
                        group_id: strAscending[0].group_id
                    }
                    dispatch(getIndivudual_APIcall(payload))
                    dispatch(getactivemember_APIcall(payload))
                    setindex(0)
                    seteventval(undefined)
                    setpostval(undefined)
                }
                else {
                    getgroups_vals([])
                }
                // setGroupAdminval(mal)
            // }
            // else {
            //     setGroupAdminval([])
            // }
        }
        else {
            setGroupAdminval([])
        }
    }, [authStat_getGroupFilterData.data])

    useEffect(() => {
        if (props.datas === "1") {
            if (authStat_getGroupFilterData.data.responseBody !== undefined && authStat_getGroupFilterData.data.responseCode == 200) {
                const payload = {
                    admin_id: localStorage.getItem('loggedIn_userId'),
                    location: '',
                    search_key: '',
                    // group_type: ["Active Groups", "Private Groups", "Public Groups", "Hint Social Groups", "Non-Hint Social Groups"]
                    group_type: ["Active Groups"]
                }
                dispatch(groupsFilter_APIcall(payload))
            }
        }
    }, [props.datas])

    const groupsdetail = (i, id) => {
        seteventval(undefined)
        setpostval(undefined)
        console.log('%%%%%%%', groupAdminval)
        {
            groupAdminval?.map((item, index) => {
                console.log(index, item, item.id)
                if (item.group_id === id) {
                    const payload = {
                        user_id: localStorage.getItem("loggedIn_userId"),
                        group_id: id
                    }
                    if (active === "1") {
                        dispatch(getactivemember_APIcall(payload))
                    }
                    if (active === "2") {
                        dispatch(postGroups_APIcall(payload))
                    }
                    if (active === "3") {
                        const payload1 = {
                            admin_id: localStorage.getItem("loggedIn_userId"),
                            group_id: id
                        }
                        dispatch(eventsGroups_APIcall(payload1))
                    }
                    if (active === "4") {
                        const payload1 = {
                            admin_id: localStorage.getItem("loggedIn_userId"),
                            group_id: id
                        }
                        dispatch(reportsGroups_APIcall(payload1))
                    }
                    dispatch(getIndivudual_APIcall(payload))
                    setindex(i)
                    setdefault(true)
                }
            })
        }
    }

    const groupsvalues = (v, value, change) => {
        const val = [...groupAdminval]
        if (value.length !== 0) {
        }
        else if (change === true && value.length === 0) {
            seteventval(0)
        }
    }

    const postvalues = (posts, values, change) => {
        const val = [...groupAdminval]
        setpostval(undefined)
        if (values.length !== 0) {
            const findindex = val.findIndex(res => res.group_id === values[0].group_id)
            console.log(val)
            const { post } = val[findindex]
            console.log(post, findindex)
            setpostval(posts)
        }
        else if (change === true && values.length === 0) {
            setpostval(0)
        }
    }

    return (
        <React.Fragment>
            <div >
                <div style={{ display: started !== false ? '' : 'none' }}>
                    <div className='enable-loader1'>
                        <img src={load} width="80px" height="80px"></img>
                    </div>
                </div>

                {groupAdminval?.map((items, index) => {
                    const { events, post, report, group_id } = items
                    console.log("loadinmg", events, post, report, group_id)
                    return (
                        <div className="card p-1 flex-column cards activegroup-mainsection" style={{ border: index === ind ? '1px solid #95E1BF' : 'none' }}>
                            <div className="d-flex col-12 pb-50" onClick={() => groupsdetail(index, group_id)}>
                                <div className="col-1 ps-3 ">
                                    {items.group_image != '' ? <img src={items.group_image} width="60px" height="60px" style={{ position: "absolute", borderRadius: '10px', marginLeft: "-35px" }}></img> :
                                        <>
                                            <img style={{ position: "absolute", borderRadius: '10px', marginLeft: "-35px" }} width="60px" height="60px" src={blankimages}></img>
                                            <img src={twousers} width="35px" style={{ position: 'absolute', marginLeft: '-23px', marginTop: '12px' }}></img>
                                        </>
                                    }
                                </div>
                                <div className="col-11 ps-2  ">
                                    <div className="d-flex flex-column">
                                        <div className="row px-50 ">
                                            <div className="col-8">
                                                <span className='sponser-textspanbold8'>{items.group_name}</span>
                                                {/* <span className='sponser-textspanbold8'>{items.group_id}</span> */}
                                            </div>
                                            <div className='col-4 '>
                                                <div className="d-flex align-items-between justify-content-between ps-2">
                                                    <div>
                                                        <span className='sponsor-textspanbold5 '>
                                                            {items.group_privacy} Group
                                                        </span></div>
                                                    <div>
                                                        <img src={morehorizontal} style={{ cursor: "pointer" }} className='ms-25' width="24px" height="24px"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-between align-items-center  px-50'>
                                            <div>
                                                <span><img src={location} width="18" height="18" /></span>
                                                <span className='group-textspanlight1' style={{ cursor: "pointer" }}>{items.location}</span> &nbsp;&nbsp;
                                            </div>
                                            <div className='group-activeinfo'>
                                                <span className='group-textspanlight2' style={{ display: getpostval === undefined ? 'none' : '' }}>{getpostval} Posts</span>
                                                <span className='group-textspanlight2' style={{ display: getpostval === undefined ? '' : 'none' }}>{post} Posts</span>&nbsp;&nbsp;

                                                <span><img src={dot} width="4px" height="4px" /></span>&nbsp;&nbsp;
                                                <span className='group-textspanlight2' style={{ display: eventval === undefined ? 'none' : '' }}>{eventval} Events</span>
                                                <span className='group-textspanlight2' style={{ display: eventval === undefined ? '' : 'none' }}>{events} Events</span>&nbsp;&nbsp;
                                            </div>
                                        </div>
                                        <div>
                                            <span className='group-textspanlink1 px-50'>Created by {items.full_name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {index === ind ?
                                <div className='col-12'>
                                    <div className=''>
                                        <div className='group-navtabs'>
                                            <React.Fragment>
                                                <Nav tabs style={{ borderBottom: "1px solid #CCD8DB", borderLeft: "none", borderRight: "none", borderTop: "none", borderRadius: "0px", width: "100%" }} >

                                                    {/* <div className=" p-0"> */}
                                                    <div className=" maintab-section d-flex" style={{ wordSpacing: "2px" }}>
                                                        <div className="">
                                                            <div className="d-flex justify-content between align-items-between">
                                                                <NavItem>
                                                                    <NavLink className="tabheading-active1 activegroup-navLink" active={active === "1"} onClick={() => { toggle("1", items.group_id) }}>
                                                                        <span>  Members&nbsp;({setmembers})</span>
                                                                    </NavLink>
                                                                </NavItem>

                                                                <NavItem className="" style={{ borderRadius: "30px" }}>
                                                                    <NavLink className="tabheading-active1 activegroup-navLink" active={active === "2"} onClick={() => { toggle("2", items.group_id) }}>
                                                                        <span style={{ display: getpostval === undefined ? 'none' : '' }}>   Posts&nbsp;({getpostval})</span>
                                                                        <span style={{ display: getpostval === undefined ? '' : 'none' }}>  Posts&nbsp;({items.post})</span>
                                                                    </NavLink>
                                                                </NavItem>&nbsp;

                                                                <NavItem className="" style={{ borderRadius: "30px" }}>
                                                                    <NavLink className="tabheading-active1 activegroup-navLink" active={active === "3"} onClick={() => { toggle("3", items.group_id) }} >
                                                                        <span style={{ display: eventval === undefined ? 'none' : '' }}> Events&nbsp;({eventval})</span>
                                                                        <span style={{ display: eventval === undefined ? '' : 'none' }}> Events&nbsp;({items.events})</span>
                                                                    </NavLink>


                                                                </NavItem>&nbsp;

                                                                {/* <NavItem className="" style={{ borderRadius: "30px" }}>
                                                                    <NavLink className="tabheading-active1 activegroup-navLink" active={active === "4"} onClick={() => { toggle("4", items.group_id) }}>
                                                                        Reports&nbsp;({items.report})
                                                                    </NavLink>
                                                                </NavItem>&nbsp; */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex justify-content-end assignbtn-section'>
                                                        {/* <button className='group-assignbtn d-flex justify-content-center align-items-center'>Assign Admkkkkin</button> */}
                                                        <AssignAdmininGroups data={items.group_id} userid={items.created_by_user_id} />
                                                    </div>
                                                    {/* </div> */}
                                                </Nav>
                                                <TabContent className="mb-2" activeTab={active}>
                                                    <TabPane tabId="1">
                                                        <ActiveMembersTab hand={memberval} getfullactive={groupAdminval} data={groupgetmember} data1={items.group_members} data2={items.pending_member} tabactive={active} ></ActiveMembersTab>
                                                    </TabPane>
                                                    <TabPane tabId="2">
                                                        <ActivePostsTab handles={postvalues} tabactive={active}></ActivePostsTab>
                                                    </TabPane>
                                                    <TabPane tabId="3">
                                                        <ActiveEventsTab handle={groupsvalues} tabactive={active} ></ActiveEventsTab>
                                                    </TabPane>
                                                    {/* <TabPane tabId="4" tabactive={active}>
                                                        <ActiveReportsTab></ActiveReportsTab>
                                                    </TabPane> */}
                                                </TabContent>
                                            </React.Fragment>
                                        </div>
                                    </div>
                                </div> : ''}
                        </div>
                    )
                })}
                <div className='justify-content-center' style={{ display: groupAdminval.length === 0 ? 'flex' : 'none' }}>No data Found</div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        activeGroupsValue: state.activeGroupsValue,
        groupsFilterData: state.groupsFilterData
    }
}

export default connect(mapStateToProps, {})(ActiveGroupsTab)
