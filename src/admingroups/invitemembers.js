import React, { useState, useEffect } from "react"
import { connect, useSelector } from 'react-redux'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import search from '../assets/images/dashboardimg/searchbar.png'
import defaultimage from '../assets/images/dashboardimg/defaultuserprofilepicture.png';

const InviteMember = (props) => {
    console.log(props.data)
    const [usersFriendsList, setuser] = useState(props.data)
    const [userid, pushuser_ids] = useState([])
    const authStat1 = useSelector((state) => state.invitememberinfo)
    const [searchValue, setSearchValue] = useState("")


    useEffect(() => {
        const { invitegroup } = authStat1
        console.log("data", invitegroup)
        const { responseBody } = invitegroup
        console.log("login responseBody", responseBody)
        console.log("auth respomse success")
        if (authStat1.invitegroup.responseCode === 200) {
            pushuser_ids([])
            const items1 = []
            const newTags1 = [...responseBody]
            for (let i = 0; i < newTags1.length; i++) {
                items1.push({ checked: false, ...newTags1[i] })
            }
            console.log(items1, "aaaaaa")
            // const UserSortingList = items1.sort((a,b) => a.full_name.localeCompare(b.full_name))
            setuser(items1)
        } else if (authStat1.invitegroup.responseCode === 201) {
            setuser([])
        }
    }, [authStat1.invitegroup.responseCode])

    const checkclick = (index, CheckedUserId) => {
        const values = [...usersFriendsList]
        const change = [...values]
        for (let i = 0; i < values.length; i++) {
            if (values[i].user_id === CheckedUserId) {
                if (values[i].checked === false) {
                    values[i].checked = true
                    props.handleval(change[i].user_id, '')
                } else {
                    props.handleval("", i)
                    values[i].checked = false
                }
            }
        }
        console.log(userid)
        setuser(values)
    }

    return (
        <>
            <div className='d-flex justify-content-between flex-row mt-2 mb-1 '>
                <span className='loc'>Invite Members</span>
            </div>
            <div className='col-12 mt-1 mb-1'>
                <div className='d-flex align-items-center border_size'>
                    <img className='search ms-2' src={search} width="20px" height="20px"></img>

                    <input className='w-100 height-range ms-1 text_search ' placeholder='Search... ' onChange={e => setSearchValue(e.target.value)}></input>

                </div>
            </div>
            <div className="scrollbars mt-2" id="style-2">
                <div className="row justify-content-center" style={{ display: usersFriendsList?.length === 0 ? 'flex' : 'none' }}>
                    <div >
                        No Members Found
                    </div>
                </div>
                <div className="row" style={{ display: usersFriendsList?.length !== 0 ? '' : 'none' }}>
                    {usersFriendsList?.filter(data => data.full_name?.match(new RegExp(searchValue, "i"))).map((data, index) => {
                        return (
                            <div className='col-6'>
                                <div className='row align-items-center pb-1'>
                                    <div className='col-2'>
                                        <img src={data.invite_person_image_url != "" ? data.invite_person_image_url : defaultimage} width="54px" height="54px" style={{ borderRadius: '15px' }} />
                                    </div>
                                    <div className='col-10 groups-memberslist'>
                                        <div className="row">
                                            <span className='textspan1 group-membername col-7 d-flex  justify-content-start'>{data.full_name}</span>
                                            <span className='col-4 d-flex justify-content-end groupmember-menuoption'>
                                                <img src={data.checked === true ? checktickboxes : checkblankboxes} width="20px" height="20px" onClick={() => checkclick(index, data.user_id)}></img>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
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
export default connect(mapStateToProps, {})(InviteMember)
