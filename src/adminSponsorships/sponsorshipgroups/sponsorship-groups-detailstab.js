import React, { useState, useRef, useCallback, useEffect } from "react"
import addnewimage from '../../../src/assets/images/dashboardimg/addnewimage.png'

import InviteMember from '../../admingroups/invitemembers'
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsorgroupsmain.scss'
import 'react-calendar/dist/Calendar.css'

import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'


import userfriend1 from '../../../src/assets/images/dashboardimg/userfriend1.png'
import userfriend2 from '../../../src/assets/images/dashboardimg/userfriend2.png'
import userfriend3 from '../../../src/assets/images/dashboardimg/userfriend3.png'
import userfriend4 from '../../../src/assets/images/dashboardimg/userfriend4.png'
import userfriend5 from '../../../src/assets/images/dashboardimg/userfriend5.png'
import userfriend6 from '../../../src/assets/images/dashboardimg/userfriend6.png'
import userfriend7 from '../../../src/assets/images/dashboardimg/userfriend7.png'
import userfriend8 from '../../../src/assets/images/dashboardimg/userss1.png'
import userfriend9 from '../../../src/assets/images/dashboardimg/profile_pic.png'
import userfriend10 from '../../../src/assets/images/dashboardimg/userpic1.png'
import userfriend11 from '../../../src/assets/images/dashboardimg/user-addimg.png'
import checktickboxes from '../../../src/assets/images/dashboardimg/checktickbox.png'
import checkblankboxes from '../../../src/assets/images/dashboardimg/checkblankbox.png'
import search from '../../../src/assets/images/dashboardimg/searchbar.png'
import SponsorsAddcropDemo from "./sponsors-groups-addcrop"


const SponsorshipGroupsDetails = (props) => {


    const [usersFriendsList, setuser] = useState([
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "Admin", checked: false },
        { id: '7', name: "Amy Delacruz", location: "South End, Boston", imageName: userfriend8, birthDate: "30", isAdmin: "", checked: false },
        { id: '3', name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34", isAdmin: "", checked: true },
        { id: '8', name: "Steven Smith", location: "Abington", imageName: userfriend9, birthDate: "34", isAdmin: "", checked: true },
        { id: '5', name: "Giana Bergson", location: "Worcester", imageName: userfriend3, birthDate: "25", isAdmin: "", checked: false },
        { id: '4', name: "Ayisha Baker", location: "Abington", imageName: userfriend10, birthDate: "34", isAdmin: "", checked: false },
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "", checked: false },
        { id: '10', name: "Ashley Bern", location: "Worcester", imageName: userfriend11, birthDate: "25", isAdmin: "", checked: false },
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "Admin", checked: false },
        { id: '7', name: "Amy Delacruz", location: "South End, Boston", imageName: userfriend8, birthDate: "30", isAdmin: "", checked: false },
        { id: '3', name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34", isAdmin: "", checked: true },
        { id: '8', name: "Steven Smith", location: "Abington", imageName: userfriend9, birthDate: "34", isAdmin: "", checked: true },
        { id: '5', name: "Giana Bergson", location: "Worcester", imageName: userfriend3, birthDate: "25", isAdmin: "", checked: false },
        { id: '4', name: "Ayisha Baker", location: "Abington", imageName: userfriend10, birthDate: "34", isAdmin: "", checked: false },
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "", checked: false },
        { id: '10', name: "Ashley Bern", location: "Worcester", imageName: userfriend11, birthDate: "25", isAdmin: "", checked: false },

    ])
    const checkclick = (check, index) => {
        const newTags = [...usersFriendsList]
        if (newTags[index].checked === true) {
            newTags[index].checked = false
        } else {
            newTags[index].checked = true
        }

        setuser(newTags)
    }

    return (
        <div>
            <div className="mt-2 pt-25">
                <SponsorsAddcropDemo></SponsorsAddcropDemo>
                {/* <div className=" groupdetails-tapupload mb-5" style={{ width: "55%" }}>
                    <div className="d-flex flex-column align-items-center py-5">
                        <img className="mb-2 mt-5" src={addnewimage} width="66px" height="66px" />
                        <span className="uploadimage-content mb-5 pb-3">Tap to upload an image or video</span>
                    </div>
                </div> */}
                <div className="row mt-2">
                    <div className="col-6 d-flex flex-column">
                        <span className="mt-75 sponsor-textspanlight13">Group Name</span>
                        <input className="formControl sponsorgroup-inputinfo" placeholder="Add group name..."></input>
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <span className="mt-75 sponsor-textspanlight13">Location</span>
                        <input className="formControl sponsorgroup-inputinfo" placeholder="Add city and state..."></input>
                    </div>
                </div>
                <div className="col-12 mt-2 d-flex justify-content-between align-items-center">
                    <span className="ms-50 sponsor-textspanlight13">Description</span>
                </div>
                <div className="col-12 ">
                    <textarea placeholder="Add a description..." className="w-100 formControl sponsorgroup-inputinfo" style={{ height: "104px" }}>
                    </textarea>
                </div>
                <hr className="mt-2" style={{ border: "1px solid #CCD8DB", width: "100%" }}/>
                {/* <InviteMember></InviteMember> */}

                <div className='d-flex justify-content-between flex-row mt-2 mb-1 pt-50'>
                    <span className='loc'>Invite Members</span>
                </div>
                <div className='col-12 mt-1 mb-1'>
                    <div className='d-flex align-items-center border_size'>
                        <img className='search ms-1' src={search} width="20px" height="20px"></img>
                        <input className='w-100 height-range ms-1 text_search ' placeholder='Search... '></input>
                    </div>
                </div>
                <div className="sponsorgroup1-scrollbar mt-3" id="sponsorgroup1-scrollstyle">
                    <div className="row sponsorgroup1-force-overflow">
                        {usersFriendsList.map((data, index) => {
                            return (
                                <div className='col-6'>
                                    <div className='row align-items-center pb-2'>
                                        <div className='col-2'>
                                            <img src={data.imageName} width="60px" height="60px" />
                                        </div>
                                        <div className='col-10 groups-memberslist'>
                                            <div className="row">
                                                <span className='group-textspanbold6  col-9 d-flex  justify-content-start' style={{ paddingLeft: "30px" }}>{data.name}</span>
                                                <span className='col-2 d-flex justify-content-end'>
                                                    <img src={data.checked === true ? checktickboxes : checkblankboxes} width="20px" height="20px" onClick={() => checkclick(data.checked, index)}></img>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SponsorshipGroupsDetails