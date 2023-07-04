import React, { useState, useEffect } from "react"
import moreimagee from '../../assets/images/dashboardimg/morehorizontal.png'
import '../../@core/scss/base/adminDashboard/groupsmenu/pendinganddeltedtab.scss'
import deletedpending from '../../assets/images/dashboardimg/delete-pending.png'
import tickboxedpending from '../../assets/images/dashboardimg/tickbox-pending.png'
import morepending from '../../assets/images/dashboardimg/verticalmore.png'
import PendingGroupPopup from "./pendinggrouppopup"
import { getpendingGroups_APIcall } from '../groupspending_splice'
import { connect, useDispatch, useSelector } from 'react-redux'
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import { getIndivudual_APIcall } from './getgroupdetails-splice'
import { activeGroups_APIcall } from './getactive-splice'
import { approvependinggroups_APIcall } from '../groupspanel/approvependingrequest-splice'
import blankimages from '../../assets/images/dashboardimg/blank-image.png'
import twousers from '../../assets/images/dashboardimg/twousersgroup.png'
import { groupsFilter_APIcall } from "../slice-admingroups/slice-groupfilter"

const PendingGroupTab = (props) => {
    const dispatch = useDispatch()
    const [started, setstarted] = useState(false)
    const [pendings, setpendings] = useState([])
    const [ind, setindex] = useState("")
    const [groupId0thIndex, setGroupId0thIndex] = useState('')
    const [getpendinggroups, setpendinggroups] = useState("")
    const authStat_getPendingGroups = useSelector((state) => state.pendinglist_groupsdatainfo)
    const authStat_approvePendingGroup = useSelector((state) => state.approvependingGroupsdata)
    const authStat_getGroupFilterData = useSelector((state) => state.groupsFilterData)

    useEffect(() => {
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId")
        }
        dispatch(getpendingGroups_APIcall(payload))
    }, [])//done

    const approvegroup = (id) => {
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId"),
            group_id: id
        }
        dispatch(approvependinggroups_APIcall(payload))
    }

    useEffect(() => {
        if (authStat_approvePendingGroup.data.responseBody !== undefined && authStat_approvePendingGroup.data.responseCode === 200) {
            const payload = {
                admin_id: localStorage.getItem("loggedIn_userId")
            }
            dispatch(getpendingGroups_APIcall(payload))
            const filterPayload = {
                admin_id: localStorage.getItem('loggedIn_userId'),
                location: '',
                search_key: '',
                group_type: ["Active Groups", "Private Groups", "Public Groups", "Hint Social Groups", "Non-Hint Social Groups"]

            }
            console.log(filterPayload)
            dispatch(groupsFilter_APIcall(filterPayload))
        }
        else if (authStat_approvePendingGroup.data.responseCode === 201) {
        }
    }, [authStat_approvePendingGroup.data])

    useEffect(() => {
        let payload
        if (props.datas === "2") {
            debugger
            const payloads = {
                admin_id: localStorage.getItem("loggedIn_userId")
            }
            dispatch(getpendingGroups_APIcall(payloads))
            if (authStat_getPendingGroups.data.responseCode === 200) {
                payload = {
                    user_id: localStorage.getItem("loggedIn_userId"),
                    group_id: getpendinggroups
                }
                dispatch(getIndivudual_APIcall(payload))
                setindex(0)
            } else {
                // payload = {
                //     user_id: localStorage.getItem("loggedIn_userId"),
                //     group_id:"0"
                // }
            }
            // dispatch(getIndivudual_APIcall(payload))
            // setindex(0)   
        }
    }, [props.datas])

    useEffect(() => {
        props.handles()
        setstarted(true)
        if (authStat_getPendingGroups.data.responseCode === 200 && authStat_getPendingGroups.data.responseBody != undefined) {
            debugger
            const val = authStat_getPendingGroups.data.responseBody
            const strAscending = [...val].sort((a, b) => (a.group_name > b.group_name ? 1 : -1))
            setpendings(strAscending)
            setpendinggroups(strAscending[0].group_id)
            setGroupId0thIndex(strAscending[0].group_id)
            // const payload1 = {
            //     user_id: localStorage.getItem("loggedIn_userId")
            // }
            // dispatch(activeGroups_APIcall(payload1))
            const payload = {
                user_id: localStorage.getItem("loggedIn_userId"),
                group_id: strAscending[0].group_id
            }
            dispatch(getIndivudual_APIcall(payload))
            setindex(0)
        }
        else if (authStat_getPendingGroups.data.responseCode === 201) {
            setpendings([])
            setstarted(false)
        }
    }, [authStat_getPendingGroups.data])

    const groupsdetail = (i, id) => {
        console.log(i, id)
        console.log(pendings)
        {
            pendings?.map((item, index) => {
                console.log(index, item, item.id)
                if (item.group_id === id) {
                    const payload = {
                        user_id: localStorage.getItem("loggedIn_userId"),
                        group_id: id
                    }
                    dispatch(getIndivudual_APIcall(payload))
                    setindex(i)
                }
            })
        }
    }

    useEffect(() => {
        if (authStat_getGroupFilterData.data.responseBody != undefined && authStat_getGroupFilterData.data.responseCode == 200) {
            if (authStat_getGroupFilterData.data.responseBody.length !== 0) {
                const val = authStat_getGroupFilterData.data.responseBody
                const mal = val.filter(res => res.is_approved === 0)
                setpendings(mal)
                console.log('gggggggroupfilter', authStat_getGroupFilterData.data.responseBody)
            } else {
                setpendings([])
            }
        } else {
            setpendings([])
        }
    }, [authStat_getGroupFilterData.data])

    useEffect(() => {
        setstarted(false)
        if (pendings.length === 0) {
            const payload = {
                user_id: localStorage.getItem("loggedIn_userId"),
                group_id: groupId0thIndex
            }
            dispatch(getIndivudual_APIcall(payload))
        }
    }, [pendings])

    return (
        <>
            <div>
                <div style={{ display: started !== false ? '' : 'none' }}>
                    <div className='enable-loader1'>

                        <img src={load} width="80px" height="80px"></img>
                    </div>
                </div>
                {pendings.map((items, index) => <div key={index} >
                    <div className="card p-2 flex-column cards1" style={{ border: index === ind ? '1px solid #95E1BF' : 'none' }} >
                        <div onClick={() => groupsdetail(index, items.group_id)}>
                            <div className="d-flex col-12 mb-1">
                                <div className='col-1'>
                                    {items.group_image != '' ? <img src={items.group_image} width="60px" height="60px" style={{ borderRadius: "10px" }}></img> :
                                        <>
                                            <img style={{ position: "absolute", borderRadius: '10px' }} width="60px" height="60px" src={blankimages}></img>
                                            <img src={twousers} width="35px" style={{ position: 'absolute', marginLeft: '12px', marginTop: '12px' }}></img>
                                        </>
                                    }
                                </div> &nbsp;&nbsp;&nbsp;

                                <div className='col-11'>
                                    <div className='d-flex justify-content-between align-items-between px-1 mb-1'>
                                        <div>
                                            <span className='spanpending1'>{items.group_name}</span> &nbsp;&nbsp;&nbsp;
                                        </div>
                                        <div>
                                            <span className='font-chatprivate' style={{ cursor: "pointer" }}>{items.group_privacy} Group</span>&nbsp;&nbsp;
                                            <img src={moreimagee} style={{ cursor: "pointer" }} width="24px" height="24px"></img>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-start ps-1'>
                                        <div style={{ marginTop: '-10px' }}>

                                            <span className='font-createdd' style={{ cursor: "pointer" }}>Created by {items.full_name}</span> &nbsp;&nbsp;
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <hr style={{ color: '#CCD8DB', marginTop: '10px', width: '470px', marginLeft: '15px' }}></hr>
                                    </div>
                                </div>

                            </div>
                            <div className='row'>
                                <div className="col-9">
                                    <div className='d-flex justify-content-between align-items-between'>
                                        <div className='d-flex justify-content-start align-items-start'>
                                            <span className='spanpending-content pending-detail' style={{ wordBreak: "break-all" }}>{items.description}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className='d-flex justify-content-end align-items-end'>
                                        <PendingGroupPopup data={items.group_name} getid={items.group_id}></PendingGroupPopup>
                                        <img src={tickboxedpending} width="32px" height="32px" onClick={() => approvegroup(items.group_id)}></img>&nbsp;&nbsp;
                                        <img src={morepending} style={{ marginBottom: "2px" }} width="28px" height="28px"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>)}
                <div className="justify-content-center" style={{ display: pendings.length === 0 ? 'flex' : 'none' }}>
                    <span className="text-danger">No Pending Groups Found</span>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps, {})(PendingGroupTab)