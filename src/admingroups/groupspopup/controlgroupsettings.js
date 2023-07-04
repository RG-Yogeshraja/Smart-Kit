import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
// import '../@core/scss/base/adminDashboard/controlusersettings.scss';
import '../../@core/scss/base/adminDashboard/groupsmenu/controlusersettings.scss';
import keys from '../../assets/images/dashboardimg/key.png';
// import {Rearrange} from '../../assets/images/dashboardimg/group-rearrange.png';
import Rearranging from '../../assets/images/dashboardimg/grouprearrange.png';
import checkblankboxes from '../../assets/images/dashboardimg/checkblankbox.png';
import checktickboxes from '../../assets/images/dashboardimg/checktickbox.png';
import ontoggle from '../../assets/images/dashboardimg/toggleonactive.png';
import offf from '../../assets/images/dashboardimg/off.png';
import { useDispatch, connect } from 'react-redux';
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import { Activity } from 'react-feather';
import { useSelector } from 'react-redux'
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import { getsponsoredpostsettings_APICall, updatesponsoredpostsettings_APICall } from "../sponsoredpostsetting-slice"

function ControlGroupSettings() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const authStat_SponsoredPostSettings = useSelector((state) => state.sponsoredpostsettings)
    const dispatch = useDispatch()
    const [type1, settype1] = useState(' ')
    const [type2, settype2] = useState(' ')
    const [type3, settype3] = useState(' ')
    const [type4, settype4] = useState(' ')
    const [type5, settype5] = useState(' ')
    const [loader, setLoader] = useState(false)
    const [showLess, setshowLess] = useState(true)

    const [manageuser, setManageuser] = useState([
        { id: 1, img: Rearranging, number: "1", name: "Mileage from Primary Location", name2: "Closer to primary location is ranked higher than farther", checking: true },
        { id: 2, img: Rearranging, number: "2", name: "Number of Friends in Group", name2: "More friends in group ranked higher than fewer friends in group", checking: true },
        { id: 3, name: "Number of Common Interests with Group Interests", name2: "More interest tags with user that match interest tags for group ranked higher", css: { marginLeft: "38px" }, checking: true },
        { id: 4, name: "Has Picture", name2: "Groups that have a picture for the group are ranked higher than those with no picture", css: { marginLeft: "38px" }, checking: true },
        { id: 5, name: "Public Group", values: "1", name2: "Public group ranked higher than private group", css: { marginLeft: "38px" }, checking: true },
        { id: 6, img: Rearranging, number: "3", name: "Sponsored Group", values: "3", name2: "Sponsored Groups are ranked higher than non-Sponsored groups", checking: true },
        { id: 7, name: "Has Current Sponsored Post or Sponsored Event", name2: "Groups that currently have a sponsored post or sponsored event in them are ranked higher", css: { marginLeft: "38px" }, checking: true },
        { id: 8, name: "Active Group", name2: "Groups with activity in the group (comments/posts/events created) more recently are ranked higher than groups with activity less recently", css: { marginLeft: "38px" }, checking: true },
        { id: 9, name: "No Reports", name2: "Groups without reports are ranked higher than groups with reports", css: { marginLeft: "38px" }, checking: true },
        { id: 10, name: "Number of Members in Group", name2: "More members ranked higher than fewer members", css: { marginLeft: "38px" }, checking: true },

    ])
    const [manageuser2, setManageuser2] = useState([
        { id: 1, name: "Miles or Fewer from Primary Location", values: "2", checking: true },
        { id: 2, name: "Interest Matching Group Interests", values: "0", checking: true },

    ])
    const [manageuser1, setManageuser1] = useState([
        { id: 1, name: "Friends in Group ", values: "50", checking: true },
        { id: 2, name: "Members in Group", values: "0", checking: true },

    ])
    const [manageuser3, setManageuser3] = useState([
        { id: 1, name3: "Sponsored post every", name4: "regular posts", values: "0", checking: 0 },
        { id: 2, name3: "First sponsored post starts after", name4: "regular posts", values: "0", checking: 0 },
        { id: 3, name3: "Sponsored post can be reseen by user every", name4: "app sessions", values: "0", checking: 0 },
        { id: 4, name3: "Sponsored post can be reseen every", name4: "hour(s)", values: "0", checking: 0 },
        { id: 5, name3: "Sponsored post can be reseen every", name4: "day(s)", values: "0", checking: 0 },
    ])


    const dialogOpen = () => {
        setShow(true)
        setLoader(true)
        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId"),
            post_setting_id: "1"
        }
        dispatch(getsponsoredpostsettings_APICall(payload))
    }

    const handlechange = (index) => {
        const newUsers = [...manageuser];
        if (newUsers[index].checking === true) {
            newUsers[index].checking = false
        }
        else {
            newUsers[index].checking = true
        }
        setManageuser(newUsers);
    };

    useEffect(() => {

        if (authStat_SponsoredPostSettings.getsponsoredpostdata.responseCode === 200 && authStat_SponsoredPostSettings.getsponsoredpostdata.responseBody !== undefined) {

            const checkclick = authStat_SponsoredPostSettings.getsponsoredpostdata.responseBody[0]
            const newUsers3 = [...manageuser3]
            newUsers3[0].checking = checkclick.sponsored_post_every
            newUsers3[0].values = checkclick.sponsored_post_every_regular_posts
            newUsers3[1].checking = checkclick.first_sponsored_post_starts_after
            newUsers3[1].values = checkclick.first_sponsored_post_after_regular_posts
            newUsers3[2].checking = checkclick.sponsored_post_reseen__by_user_every
            newUsers3[2].values = checkclick.app_sessions
            newUsers3[3].checking = checkclick.sponsored_post_reseen_every_hours
            newUsers3[3].values = checkclick.hours
            newUsers3[4].checking = checkclick.sponsored_post_can_be_reseen_every_days
            newUsers3[4].values = checkclick.days
            setManageuser3(newUsers3)
            setTimeout(() => {
                setLoader(false)
            }, 1000)
            console.log("dddd", authStat_SponsoredPostSettings.getsponsoredpostdata)
        }
        else {
            setLoader(false)
        }
    }, [authStat_SponsoredPostSettings.getsponsoredpostdata])


    // const handleUpdate = () => {
    //     
    //     setLoader(true)
    //     const newUsers3 = [...manageuser3]
    //     const payload = {
    //         admin_id: localStorage.getItem("loggedIn_userId"),
    //         post_setting_id: "1",
    //         sponsored_post_every: newUsers3[0].checking,
    //         sponsored_post_every_regular_posts: newUsers3[0].checking === 1 ? newUsers3[0].values : "0",

    //         first_sponsored_post_starts_after: newUsers3[1].checking,
    //         first_sponsored_post_after_regular_posts: newUsers3[1].checking === 1 ? newUsers3[1].values : "0",

    //         sponsored_post_reseen__by_user_every: newUsers3[2].checking,
    //         app_sessions: newUsers3[2].checking === 1 ? newUsers3[2].values : "0",

    //         sponsored_post_reseen_every_hours: newUsers3[3].checking,
    //         hours: newUsers3[3].checking === 1 ? newUsers3[3].values : "0",

    //         sponsored_post_can_be_reseen_every_days: newUsers3[4].checking,
    //         days: newUsers3[4].checking === 1 ? newUsers3[4].values : "0"
    //     }

    //     dispatch(updatesponsoredpostsettings_APICall(payload))
    // }


    useEffect(() => {
        if (authStat_SponsoredPostSettings.updatesponsoredpostdata.responseBody != undefined && authStat_SponsoredPostSettings.updatesponsoredpostdata.responseCode == 200) {
            console.log("eeeee", authStat_SponsoredPostSettings.updatesponsoredpostdata)
            setLoader(false)
            setShow(false)
        }
        else {
            setLoader(false)
            setShow(false)
        }
    }, [authStat_SponsoredPostSettings.updatesponsoredpostdata])


    const handlechange3 = (index) => {

        const newUsers3 = [...manageuser3]
        if (newUsers3[index].checking === 0) {
            newUsers3[index].checking = 1
        }
        else if (newUsers3[index].checking === 1) {
            newUsers3[index].checking = 0
        }
        setManageuser3(newUsers3);
    }


    const handleChange4 = (index, value) => {

        const newUsers3 = [...manageuser3]
        newUsers3[index].values = value
        console.log(value)
        setManageuser3(newUsers3);
    }


    const [checking1, setchecking1] = useState('')
    const [postSettingsValue1, setPostSettingsValue1] = useState('')
    const [disable1, setdisable1] = useState(true)


    const [checking2, setchecking2] = useState('')
    const [postSettingsValue2, setPostSettingsValue2] = useState('')
    const [disable2, setdisable2] = useState(true)


    const [checking3, setchecking3] = useState('')
    const [postSettingsValue3, setPostSettingsValue3] = useState('')
    const [disable3, setdisable3] = useState(true)


    const [checking4, setchecking4] = useState('')
    const [postSettingsValue4, setPostSettingsValue4] = useState('')
    const [disable4, setdisable4] = useState(true)


    const [checking5, setchecking5] = useState('')
    const [postSettingsValue5, setPostSettingsValue5] = useState('')
    const [disable5, setdisable5] = useState(true)



    const postSettingsCheck1 = () => {
        if (checking1 == '0') {
            setchecking1('1')
            setdisable1(false)
        }
        else if (checking1 == '1') {
            setchecking1('0')
            setdisable1(true)
            setPostSettingsValue1('')
        }
    }

    const postSettingsCheck2 = () => {
        if (checking2 == '0') {
            setchecking2('1')
            setdisable2(false)
        }
        else if (checking2 == '1') {
            setchecking2('0')
            setdisable2(true)
            setPostSettingsValue2('')
        }
    }

    const postSettingsCheck3 = () => {
        if (checking3 == '0') {
            setchecking3('1')
            setdisable3(false)
        }
        else if (checking3 == '1') {
            setchecking3('0')
            setdisable3(true)
            setPostSettingsValue3('')
        }
    }

    const postSettingsCheck4 = () => {
        if (checking4 == '0') {
            setchecking4('1')
            setdisable4(false)
        }
        else if (checking4 == '1') {
            setchecking4('0')
            setdisable4(true)
            setPostSettingsValue4('')
        }
    }

    const postSettingsCheck5 = () => {
        if (checking5 == '0') {
            setchecking5('1')
            setdisable5(false)
        }
        else if (checking5 == '1') {
            setchecking5('0')
            setdisable5(true)
            setPostSettingsValue5('')
        }
    }

    // useEffect(() => {
    //     console.log("postSettingsValue3", postSettingsValue3)
    // }, [postSettingsValue3])

    const handleUpdate = () => {

        setLoader(true)

        const value1 = []
        const value2 = []
        const value3 = []
        const value4 = []
        const value5 = []


        if (checking1 == '1' && postSettingsValue1 == '') {
            const data = '0'
            value1.push(data)
        }
        else if (checking1 == '1' && postSettingsValue1 != '') {
            value1.push(postSettingsValue1)
        }
        else if (checking1 == '0' && postSettingsValue1 != '') {
            const data = '0'
            value1.push(data)
        }

        if (checking2 == '1' && postSettingsValue2 == '') {
            const data = '0'
            value2.push(data)
        }
        else if (checking2 == '1' && postSettingsValue2 != '') {
            value2.push(postSettingsValue2)
        }
        else if (checking2 == '0' && postSettingsValue2 != '') {
            const data = '0'
            value2.push(data)
        }

        if (checking3 == '1' && postSettingsValue3 == '') {
            const data = '0'
            value3.push(data)
        }
        else if (checking3 == '1' && postSettingsValue3 != '') {
            value3.push(postSettingsValue3)
        }
        else if (checking3 == '0' && postSettingsValue3 != '') {
            const data = '0'
            value3.push(data)
        }

        if (checking4 == '1' && postSettingsValue4 == '') {
            const data = '0'
            value4.push(data)
        }
        else if (checking4 == '1' && postSettingsValue4 != '') {
            value4.push(postSettingsValue4)
        }
        else if (checking4 == '0' && postSettingsValue4 != '') {
            const data = '0'
            value4.push(data)
        }

        if (checking5 == '1' && postSettingsValue5 == '') {
            const data = '0'
            value5.push(data)
        }
        else if (checking5 == '1' && postSettingsValue5 != '') {
            value5.push(postSettingsValue5)
        }
        else if (checking5 == '0' && postSettingsValue5 != '') {
            const data = '0'
            value5.push(data)
        }



        const payload = {
            admin_id: localStorage.getItem("loggedIn_userId"),
            post_setting_id: "1",

            sponsored_post_every: Number(checking1),
            sponsored_post_every_regular_posts: value1[0] != undefined ? value1[0] : "0",

            first_sponsored_post_starts_after: Number(checking2),
            first_sponsored_post_after_regular_posts: value2[0] != undefined ? value2[0] : "0",

            sponsored_post_reseen__by_user_every: Number(checking3),
            app_sessions: value3[0] != undefined ? value3[0] : "0",

            sponsored_post_reseen_every_hours: Number(checking4),
            hours: value4[0] != undefined ? value4[0] : "0",

            sponsored_post_can_be_reseen_every_days: Number(checking5),
            days: value5[0] != undefined ? value5[0] : "0",
        }

        dispatch(updatesponsoredpostsettings_APICall(payload))
    }

    useEffect(() => {

        if (authStat_SponsoredPostSettings.getsponsoredpostdata.responseCode === 200 && authStat_SponsoredPostSettings.getsponsoredpostdata.responseBody !== undefined) {

            const checkclick = authStat_SponsoredPostSettings.getsponsoredpostdata.responseBody[0]
            // const newUsers3 = [...manageuser3]
            // newUsers3[0].checking = checkclick.sponsored_post_every
            // newUsers3[0].values = checkclick.sponsored_post_every_regular_posts

            // newUsers3[1].checking = checkclick.first_sponsored_post_starts_after
            // newUsers3[1].values = checkclick.first_sponsored_post_after_regular_posts

            // newUsers3[2].checking = checkclick.sponsored_post_reseen__by_user_every
            // newUsers3[2].values = checkclick.app_sessions

            // newUsers3[3].checking = checkclick.sponsored_post_reseen_every_hours
            // newUsers3[3].values = checkclick.hours

            // newUsers3[4].checking = checkclick.sponsored_post_can_be_reseen_every_days
            // newUsers3[4].values = checkclick.days
            // setManageuser3(newUsers3)

            setchecking1(checkclick.sponsored_post_every)
            if (checkclick.sponsored_post_every === 1) {
                setdisable1(true)
            }
            else if (checkclick.sponsored_post_every === 0) {
                setdisable1(false)
            }

            setPostSettingsValue1(checkclick.sponsored_post_every_regular_posts)

            setchecking2(checkclick.first_sponsored_post_starts_after)
            if (checkclick.first_sponsored_post_starts_after === 1) {
                setdisable2(false)
            }
            setPostSettingsValue2(checkclick.first_sponsored_post_after_regular_posts)

            setchecking3(checkclick.sponsored_post_reseen__by_user_every)
            if (checkclick.sponsored_post_reseen__by_user_every === 1) {
                setdisable3(false)
            }
            setPostSettingsValue3(checkclick.app_sessions)

            setchecking4(checkclick.sponsored_post_reseen_every_hours)
            if (checkclick.sponsored_post_reseen_every_hours === 1) {
                setdisable4(false)
            }
            setPostSettingsValue4(checkclick.hours)

            setchecking5(checkclick.sponsored_post_can_be_reseen_every_days)
            if (checkclick.sponsored_post_can_be_reseen_every_days === 1) {
                setdisable5(false)
            }
            setPostSettingsValue5(checkclick.days)

            setTimeout(() => {
                setLoader(false)
            }, 1000)
            console.log("dddd", authStat_SponsoredPostSettings.getsponsoredpostdata)
        }
        else {
            setLoader(false)
        }
    }, [authStat_SponsoredPostSettings.getsponsoredpostdata])




    return (
        <>
            <span onClick={() => dialogOpen()}>Control Group Settings</span>
            {/* <Button onClick={() => setShow(true)}>Manage Interest Tags</Button> */}
            <div className='sizinggg'>
                <Modal show={show} onHide={() => setShow(false)}
                // aria-labelledby="example-modal-sizes-title"
                >
                    <Modal.Body>
                        <div className='p-2 my-1'>
                            <div style={{ display: loader !== false ? '' : 'none' }}>
                                <div className='enable-loader1'>
                                    <img src={load} width="80px" height="80px"></img>
                                </div>
                            </div>
                            <div className='px-0'>
                                <form>
                                    <div className='mb-2'>
                                        <span className='font-control'>Control Group Settings</span>
                                    </div>

                                    {/* ****** PLEASE DON'T REMOVE THE CODE the commented code are no need for current sprint****** */}
                                    {/* <div className='mb-1'>
                                    <span className='font-preview'>Group Preview Settings</span>
                                </div>
                                <div className='mb-1'>
                                    <span className='font-show'>Show both City and State in Group Preview</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-between'>
                                    <div>
                                        <span className='font-default'>Default is to show only State</span>
                                    </div>
                                   
                                    <div onClick={changeShow}>
                      {showLess ? <div><span className='font-off'>OFF</span>&nbsp; <img src={offf} width="48px" height="26px"></img></div> : <div><span className='font-off'>YES</span>&nbsp;&nbsp;<img src={ontoggle} width="48px" height="26px"></img></div>}
                    </div>
 </div>
                                <hr className="mb-2" style={{ color: '#CCD8DB' }}></hr> */}

                                    <div className='mb-1'>
                                        <span className='font-explorer'>Group Explorer Algorithm</span>
                                    </div>
                                    <div className='mb-2'>
                                        <span className='font-explporer1'>Prioritize these types of groups in Group Explorer in this specific order:</span>
                                    </div>
                                    {manageuser.map((items, index) => <div key={index} >
                                        <div className='row py-1'>
                                            {/* <div className='col-12'> */}
                                            <div className='col-3'>
                                                {index == 0 || index == 1 || index == 5 ?
                                                    <img src={items.img} width="30px" height="30px" ></img> : ""}&nbsp;&nbsp;
                                                <span className=' font-number'>{items.number}</span>&nbsp;&nbsp;
                                                {/* </div>
    <div className='col-1'>
     */}
                                                <img onClick={() => { handlechange(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="25px" height="25px" style={items.css}></img>&nbsp;&nbsp;
                                            </div>
                                            {/* </div>
    <div className='col-9'> */}
                                            <div className='col-9' style={{ marginLeft: "-55px", marginTop: "-5px" }}>
                                                <span className='font-primary'>{items.name}</span><br></br>
                                                <span className='font-closer'>{items.name2}</span>
                                            </div>

                                            {/* </div> */}
                                        </div>
                                    </div>)}
                                    {/* ****** PLEASE DON'T REMOVE THE CODE the commented code are no need for current sprint ******* */}
                                    {/* <hr style={{ color: '#CCD8DB' }}></hr>

                                <div className='mb-2'>
                                    <span className='font-hint'>Hint Recommended Groups Algorithm</span>
                                </div>
                                <div className='mb-1'>
                                    <span className='font-require'>Requirements for Hint Recommended groups:</span>
                                </div>
 <div className='heloo12'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            {manageuser2.map((items, index) => <div key={index} >
                                                <div className='mb-2 d-flex align-items-center'>
                                                    <img onClick={() => { handlechange2(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="25px" height="25px"></img>&nbsp;&nbsp;
                                                    <input type="text" className={`formControl`} style={{ width: "59px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>&nbsp;&nbsp;&nbsp;
                                                    <span className='fonting-style col-7'>{items.name}  </span><br></br>

                                                </div>

                                            </div>)}
                                        </div>
                                        <div className='col-6'>
                                            {manageuser1.map((items, index) => <div key={index} >
                                                <div className='mb-2 d-flex align-items-center'>

                                                    <img onClick={() => { handlechange1(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="25px" height="25px"></img>&nbsp;&nbsp;
                                                    <input type="text" className={`formControl`} style={{ width: "59px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>&nbsp;&nbsp;&nbsp;
                                                    <span className='fonting-style1 col-7'>{items.name} </span><br></br>

                                                </div>
                                            </div>)}

                                        </div>
                                    </div>
                                </div> */}
                                    <hr style={{ color: '#CCD8DB' }}></hr>
                                    <div className='mb-2'>
                                        <span className='font-post'>Sponsored Post Settings</span>
                                    </div>
                                    <div className='row hello11'>

                                        {/* <div className='col-12' style={{ marginLeft: "-15px" }}>
                                            {manageuser3.map((items, index) => {
                                                return (
                                                    <>
                                                        <div className="mb-1" >
                                                            <img onClick={() => { handlechange3(index) }} src={items.checking ? checktickboxes : checkblankboxes} width="25px" height="25px" className='ms-1'></img>
                                                            <span className='fonting11 ms-1'>{items.name3}</span>
                                                            <input onChange={e => handleChange4(index, e.target.value)} type="text" className={`formControl ms-1 p-25`} defaultValue={items.values} style={{ width: "46px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>

                                                            <span className='fonting22 ms-1'>{items.name4}</span>
                                                            <span className='fonting22 ms-1'>{items.values}</span>
                                                        </div>
                                                    </>
                                                )
                                            }
                                            )}
                                        </div> */}

                                        <div className="mb-1" >
                                            <img onClick={() => { postSettingsCheck1() }} src={checking1 == '1' ? checktickboxes : checkblankboxes} width="25px" height="25px" className='ms-1'></img>
                                            <span className='fonting11 ms-1'>Sponsored post every</span>
                                            <input onChange={e => setPostSettingsValue1(e.target.value)} disabled={disable1} type="number" className={`formControl ms-1 p-25`} value={postSettingsValue1} style={{ width: "46px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>
                                            <span className='fonting22 ms-1'>regular posts</span>
                                        </div>

                                        <div className="mb-1" >
                                            <img onClick={() => { postSettingsCheck2() }} src={checking2 == '1' ? checktickboxes : checkblankboxes} width="25px" height="25px" className='ms-1'></img>
                                            <span className='fonting11 ms-1'>First sponsored post starts after</span>
                                            <input onChange={e => setPostSettingsValue2(e.target.value)} disabled={disable2} type="number" className={`formControl ms-1 p-25`} value={postSettingsValue2} style={{ width: "46px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>
                                            <span className='fonting22 ms-1'>regular posts</span>
                                        </div>

                                        <div className="mb-1" >
                                            <img onClick={() => { postSettingsCheck3() }} src={checking3 == '1' ? checktickboxes : checkblankboxes} width="25px" height="25px" className='ms-1'></img>
                                            <span className='fonting11 ms-1'>Sponsored post can be reseen by user every</span>
                                            <input onChange={e => setPostSettingsValue3(e.target.value)} disabled={disable3} type="number" className={`formControl ms-1 p-25`} value={postSettingsValue3} style={{ width: "46px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>
                                            <span className='fonting22 ms-1'>app sessions</span>
                                        </div>

                                        <div className="mb-1" >
                                            <img onClick={() => { postSettingsCheck4() }} src={checking4 == '1' ? checktickboxes : checkblankboxes} width="25px" height="25px" className='ms-1'></img>
                                            <span className='fonting11 ms-1'>Sponsored post can be reseen every</span>
                                            <input onChange={e => setPostSettingsValue4(e.target.value)} disabled={disable4} type="number" className={`formControl ms-1 p-25`} value={postSettingsValue4} style={{ width: "46px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>
                                            <span className='fonting22 ms-1'>hour(s)</span>
                                        </div>

                                        <div className="mb-1" >
                                            <img onClick={() => { postSettingsCheck5() }} src={checking5 == '1' ? checktickboxes : checkblankboxes} width="25px" height="25px" className='ms-1'></img>
                                            <span className='fonting11 ms-1'>Sponsored post can be reseen every</span>
                                            <input onChange={e => setPostSettingsValue5(e.target.value)} disabled={disable5} type="number" className={`formControl ms-1 p-25`} value={postSettingsValue5} style={{ width: "46px", height: "40px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}></input>
                                            <span className='fonting22 ms-1'>day(s)</span>
                                        </div>
                                    </div>
                                </form>
                                <div className='col-12 d-flex justify-content-center align-items-center mt-3 mb-2'>
                                    <button className='btnstyle11' type="button" onClick={handleClose}>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className='btnstyledetail11' onClick={() => handleUpdate()}>Save</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        sponsoredpostsettings: state.sponsoredpostsettings
    }
}

export default connect(mapStateToProps, [])(ControlGroupSettings)



