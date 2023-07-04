import React, { useState, useEffect } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap"
import ActiveMembersSubTab from './activememberssubtab'
import ActiveMembersPendingTab from './activememberspendingtab'
import { useSelector, useDispatch } from 'react-redux'
const ActiveMembersTab = (props) => {

    const [active, setActive] = useState("1")
    const [editBtnShow, seteditBtnShow] = useState("Edit")

    const [ActiveMembers, activeset] = useState(props.getfullactive)
    const [adminmember, setAdminType] = useState(props.data)
    const [activemem, setmem] = useState(props.data1)
    const [pendingmem, setpendingmem] = useState(props.data2)
    const getmembers_api = useSelector((state) => state.adminmemberInfo)
    const getmemberlist = (v, value) => {
        //
        const val = [...ActiveMembers]
        if (value.length !== 0) {
            //
            console.log(val)

            const findindex = val.findIndex(res => res.group_id === value[0].group_id)
            if (findindex !== -1) {
                console.log(val)
                const { group_member } = val[findindex]


            }
        }
        console.log(value)

    }

    const getpendinglist = (m, value) => {
        //
        const val = [...ActiveMembers]
        if (value.length !== 0) {
            //
            console.log(val)
            const findindex = val.findIndex(res => res.group_id === value[0].group_id)
            console.log(val)

            setpendingmem(m)
        } else {
            setpendingmem(0)
        }
        console.log(value)

    }
    useEffect(() => {
        //
        setAdminType(props.data)

        activeset(props.getfullactive)

    }, [props])
    useEffect(() => {
        setmem(props.data1)
        setpendingmem(props.data2)
    }, [])
    useEffect(() => {
        if (getmembers_api.addmembers.responseCode === 200) {
            console.log(getmembers_api.addmembers.responseBody)
            const val = getmembers_api.addmembers.responseBody.filter(res => res.is_member === 1)
            setmem(val.length)
            const pen = getmembers_api.addmembers.responseBody.filter(res => res.is_pending === 1)
            setpendingmem(pen.length)
        }

    }, [getmembers_api.addmembers])
    // useEffect(()=>{
    //    
    // }, [activemem])

    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)
        }
        if (tab === "1") seteditBtnShow("")
        if (tab === "2") seteditBtnShow("Edit")
    }

    const editmembers = () => {
        //
        if (editBtnShow === "Edit") {

            seteditBtnShow("Save")
        } else {
            seteditBtnShow("Edit")
        }
    }
    return (
        <>

            <div className="row">
                <div className='col-12'>
                    <div className=''>
                        <div className='group-navtabs'>
                            <React.Fragment>
                                <Nav tabs style={{ borderBottom: "1px solid #CCD8DB", borderLeft: "none", borderRight: "none", borderTop: "none", borderRadius: "0px", width: "100%" }} >
                                    <div className=" maintab-section d-flex" style={{ wordSpacing: "2px" }}>
                                        {/* <div className=""> */}
                                        <div className="d-flex justify-content between align-items-between">
                                            <NavItem>
                                                <NavLink className="tabheading-active1 activegroup-navLink" active={active === "1"} onClick={() => { toggle("1") }}>
                                                    Members&nbsp;({activemem})
                                                </NavLink>
                                            </NavItem>

                                            <NavItem className="" style={{ borderRadius: "30px" }} >
                                                <NavLink className="tabheading-active1 activegroup-navLink" active={active === "2"} onClick={() => { toggle("2") }}>
                                                    Pending&nbsp;({pendingmem})
                                                </NavLink>
                                            </NavItem>&nbsp;
                                        </div>
                                        {/* </div> */}
                                    </div>
                                    <div className='assignbtn-section' style={{ display: active === "2" ? '' : 'none' }}>
                                        <button onClick={() => { editmembers() }} className='d-flex align-items-center justify-content-center group-editBtn'>{editBtnShow}</button>

                                    </div>
                                </Nav>
                                <TabContent className="mb-2" activeTab={active}>
                                    <TabPane tabId="1">
                                        <ActiveMembersSubTab data={adminmember} value={props.getfullactive} ></ActiveMembersSubTab>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <ActiveMembersPendingTab data1={active} data2={editBtnShow}></ActiveMembersPendingTab>
                                    </TabPane>
                                </TabContent>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ActiveMembersTab