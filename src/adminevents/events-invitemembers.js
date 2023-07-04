import React, { useState, useRef, useEffect } from "react"
import userfriend1 from '../assets/images/dashboardimg/userfriend1.png'
import userfriend2 from '../assets/images/dashboardimg/userfriend2.png'
import userfriend3 from '../assets/images/dashboardimg/userfriend3.png'
import userfriend4 from '../assets/images/dashboardimg/userfriend4.png'
import userfriend5 from '../assets/images/dashboardimg/userfriend5.png'
import userfriend6 from '../assets/images/dashboardimg/userfriend6.png'
import userfriend7 from '../assets/images/dashboardimg/userfriend7.png'
import default_userprofile from '../assets/images/dashboardimg/userprofiledefault.jpg'
import userfriend8 from '../assets/images/dashboardimg/userss1.png'
import userfriend9 from '../assets/images/dashboardimg/profile_pic.png'
import userfriend10 from '../assets/images/dashboardimg/userpic1.png'
import userfriend11 from '../assets/images/dashboardimg/user-addimg.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import search from '../assets/images/dashboardimg/searchbar.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getMembersToInvite_APIcall } from './slice-adminevents/slice-getmemberstoinvite'
import loadingSpin from '../assets/images/dashboardimg/loadersimg.gif'




const InviteMember = (props) => {
    const authStat_getMembersToInvite = useSelector((state) => state.getMembersToInviteData)
    const [membersListToInvite, setMembersListToInvite] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     // setLoader(true)
    //     const payload = {
    //         admin_id: localStorage.getItem('loggedIn_userId'),
    //         event_id: props.eventId
    //     }
    //     dispatch(getMembersToInvite_APIcall(payload))
    // }, [])

    useEffect(() => {
        if (authStat_getMembersToInvite.data.responseBody != undefined && authStat_getMembersToInvite.data.responseCode == 200) {
            console.log(authStat_getMembersToInvite.data.responseBody)
            const data = []
            const membersList = [...authStat_getMembersToInvite.data.responseBody]
            for (let i = 0; i < membersList.length; i++) {
                if (membersList[i].full_name != null) {
                    data.push({ checked: false, ...membersList[i] })
                }
            }
            const UserSortingList = data.sort((a, b) => a.full_name.localeCompare(b.full_name))
            setMembersListToInvite(UserSortingList)
            // setLoader(false)
        }
        else if (authStat_getMembersToInvite.data.responseCode == 201) {
            setMembersListToInvite([])
            console.log('response FAILED')
        }
    }, [authStat_getMembersToInvite.data])


    const checklist = (index, userid) => {
        const newMembersList = [...membersListToInvite]
        const change = [...newMembersList]
        for (let i = 0; i < newMembersList.length; i++) {
            if (newMembersList[i].user_id === userid) {
                if (newMembersList[i].checked === false) {
                    newMembersList[i].checked = true
                    props.handleDataToInviteMembers(change[i].user_id, '')
                } else {
                    props.handleDataToInviteMembers("", i)
                    newMembersList[i].checked = false
                }
            }
        }
        console.log(userid)
        setuser(newMembersList)
    }


    return (
        <>
            <div>
                {loader == true ?
                    <div className='enable-loader1'>
                        <img src={loadingSpin} width="80px" height="80px"></img>
                    </div> : null}
                <div className='d-flex justify-content-between flex-row mt-2 mb-1 '>
                    <span className='loc'>Invite Members</span>
                </div>
                <div className='col-12 mt-1 mb-1'>
                    <div className='d-flex align-items-center border_size'>
                        <img className='search ms-1' src={search} width="20px" height="20px"></img>
                        <input className='w-100 height-range ms-1 text_search' placeholder='Search...' value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}></input>
                    </div>
                </div>

                <div className="scrollbars mt-2" id="style-2">
                    <div className="row justify-content-center" style={{ display: membersListToInvite?.length === 0 ? 'flex' : 'none' }}>
                        <div>
                            No Members Found
                        </div>
                    </div>
                    <div className="row" style={{ display: membersListToInvite?.length !== 0 ? '' : 'none' }}>
                        {membersListToInvite?.filter(data => data.full_name?.match(new RegExp(searchValue, "i"))).map((data, index) => {
                            return (
                                <div className='col-6'>
                                    <div className='row align-items-center pb-1'>
                                        <div className='col-2'>
                                            {data.invite_person_image_url != "" ?
                                                <img src={data.invite_person_image_url} width="54px" height="54px" style={{ borderRadius: "15px" }} /> :
                                                <img src={default_userprofile} width="54px" height="54px" />
                                            }
                                        </div>
                                        <div className='col-10 groups-memberslist'>
                                            <div className="row">
                                                <span className='textspan1 group-membername col-7 d-flex  justify-content-start ps-2'>{data.full_name}</span>
                                                <span className='col-4 d-flex justify-content-end groupmember-menuoption'>
                                                    <img src={data.checked === true ? checktickboxes : checkblankboxes} width="20px" height="20px" onClick={() => checklist(index, data.user_id)}></img>
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
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        getMembersToInviteData: state.getMembersToInviteDat
    }
}

export default connect(mapStateToProps, {})(InviteMember)