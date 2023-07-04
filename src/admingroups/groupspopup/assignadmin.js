import React, { useState, useEffect } from "react"
import Modal from 'react-bootstrap/Modal'
import search from '../../assets/images/dashboardimg/searchbar.png'
import { useDispatch, useSelector } from 'react-redux'
import checktickboxes from '../../assets/images/dashboardimg/checktickbox.png'
import checkblankboxes from '../../assets/images/dashboardimg/checkblankbox.png'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import '../../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss'
import { getactivemember_APIcall } from '../groupspanel/getmemberlistsplice'
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import { assignasaadmins_APIcall } from '../assignasamember-splice'
import defaultimage from '../../assets/images/dashboardimg/defaultuserprofilepicture.png';
const AssignAdmininGroups = (props) => {
    const [show1, setShow1] = useState(false)
    const handleClose = () => setShow1(false)
    const [started, setstarted] = useState(false)
    const [listing, getlist] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [pushuser_ids, setpushids] = useState([])

    const dispatch = useDispatch()
    const [error, seterrors] = useState("")
    const assignmember = useSelector((state) => state.assignasaadmingroupsdata)
    const getmembers = useSelector((state) => state.adminmemberInfo)
    const handleshow = () => {
        setpushids([])
        seterrors('')
        const payload = {
            user_id: localStorage.getItem("loggedIn_userId"),
            group_id: props.data
        }

        dispatch(getactivemember_APIcall(payload))
        setpushids([])
        setShow1(true)
    }
    useEffect(() => {


    }, [])
    const assign = () => {
        //
        const v = [...listing]
        const push = v.filter(res => res.checked === true)
        if (push.length !== 0) {
            console.log(props.userid)

            const payload = {
                user_id: localStorage.getItem("loggedIn_userId"),
                group_id: props.data,
                group_user_id: pushuser_ids
            }
            seterrors('')
            //
            dispatch(assignasaadmins_APIcall(payload))
        }
        if (push.length === 0 && listing.length !== 0) {
            seterrors("Atleast one member need to select")
        }
    }
    useEffect(() => {
        //
        setstarted(true)
        //
        if (assignmember !== undefined) {
            const { assigngroupmembervalue } = assignmember
            console.log("data", assignmember)
            const { responseBody } = assigngroupmembervalue
            console.log("login responseBody", responseBody)
            console.log("auth respomse success")
            if (assignmember.assigngroupmembervalue.responseCode === 200) {
                setShow1(false)
                setTimeout(() => {
                    setstarted(false)
                }, 1)
                const payload = {
                    user_id: localStorage.getItem("loggedIn_userId"),
                    group_id: props.data
                }
                //
                dispatch(getactivemember_APIcall(payload))
            } else if (assignmember.assigngroupmembervalue.responseCode === 200) {
                setShow1(false)
                setTimeout(() => {
                    setstarted(false)
                }, 1)

            }
        }
    }, [assignmember])
    useEffect(() => {

        setstarted(true)
        if (getmembers !== undefined) {

            const { addmembers } = getmembers
            console.log("data", addmembers)
            const { responseBody } = addmembers
            console.log("login responseBody", responseBody)
            console.log("auth respomse success")
            if (getmembers.addmembers.responseCode === 200) {

                setTimeout(() => {
                    setstarted(false)
                }, 1000)


                console.log(responseBody)

                const val = [...responseBody]
                const set = val.filter(data => data.is_member === 1)

                const items1 = []

                for (let i = 0; i < set.length; i++) {
                    let check
                    if (set[i].is_admin === 1) {
                        check = true

                    }
                    else {
                        check = false
                    }
                    items1.push({ checked: check, ...set[i] })
                }
                getlist(items1)
            } else if (getmembers.addmembers.responseCode === 201) {
                getlist([])
                console.log(responseBody)
            }
        }

        console.log(getmembers.addmembers.responseCode)
    }, [getmembers])


    const checkclick = (check, index, name) => {
        //

        const values = [...listing]
        const change = [...listing]
        console.log(values)

        for (let i = 0; i < values.length; i++) {

            if (values[i].full_name === name) {

                if (values[i].checked === false) {
                    seterrors('')
                    values[i].checked = true

                } else {
                    const splices = [...values]

                    change.splice(i, 1)
                    console.log(values)

                    values[i].checked = false
                }
            }
        }

        //
        console.log(change)
        if (change.length !== 0) {
            const items = []
            const vals = change.filter(res => res.checked === true)
            for (let j = 0; j < vals.length; j++) {
                items.push(vals[j].user_id)
                setpushids(items)
            }
        }
        getlist(values)


    }

    // console.log(usersFriendsList)

    return (
        <>
            <button onClick={handleshow} className='group-assignbtn d-flex justify-content-center align-items-center'>Assign Admin</button>
            <Modal show={show1} centered
                dialogClassName="assignadmin-custom-modal" onHide={() => setShow1(false)}>
                <div className="assignadmin-modalcontent">
                    <div style={{ display: started !== false ? '' : 'none' }}>
                        <div className='enable-loader1'>
                            <img src={load} width="80px" height="80px"></img>
                        </div>
                    </div>
                    <div className="">
                        <span className="group-textspanbold5">Assign Admin(s) to Group</span>
                    </div>
                    <div>
                        <div className='col-12 mt-1 mb-1 '>
                            <div className='d-flex align-items-center border_size me-2'>
                                <img className='search ms-1' src={search} width="20px" height="20px"></img>
                                <input className='w-100 height-range ms-1 text_search ' placeholder='Search ' value={searchValue}

                                    onChange={e => setSearchValue(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="assignadmin-scrollbar mt-2" id="assignadmin-scrollstyle">
                            <div className="row">
                                {listing.filter(data => data.full_name?.match(new RegExp(searchValue, "i"))).map((data, index) => {
                                    return (
                                        <>
                                            <div className='col-6' >
                                                <div className='row align-items-center pb-2'>
                                                    <div className='col-2'>
                                                        {data.image_url != "" ? <img src={data.image_url} width="60px" height="60px" style={{ borderRadius: "12px" }} /> :
                                                            <img src={defaultimage} width="60px" height="60px"></img>
                                                        }
                                                    </div>
                                                    <div className='col-10 groups-memberslist'>
                                                        <div className="row">
                                                            <span className='group-textspanbold6  col-9 d-flex  justify-content-start' style={{ paddingLeft: "30px" }}>{data.full_name}</span>
                                                            <span className='col-2 d-flex justify-content-end'>
                                                                {/* <img src={data.checked === true ? checktickboxes : checkblankboxes} width="20px" height="20px" onClick={() => checkclick(data.checked, index, data.full_name)}></img> */}
                                                                <img src={data.checked === true ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                <div style={{ display: listing.length === 0 ? '' : 'none' }}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <span className="text-danger">{error}</span>

                    </div>
                    <div className="col-12 mt-3">
                        <button className=' closebuttonuser col-5 m-0' style={{ width: "45%" }} onClick={handleClose}>Close</button>
                        <span className='col-2'></span>
                        <button className=' Exportbuttonuser col-5 me-2' style={{ width: "45%" }} onClick={assign}>Assign</button>
                        <div className="p-3"></div>
                    </div>
                </div>

            </Modal>
        </>

    )
}


export default AssignAdmininGroups
