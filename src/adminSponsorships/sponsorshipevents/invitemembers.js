
import userfriend1 from '../../assets/images/dashboardimg/userfriend1.png'
import userfriend2 from '../../assets/images/dashboardimg/userfriend2.png'
import userfriend3 from '../../assets/images/dashboardimg/userfriend3.png'
import userfriend5 from '../../assets/images/dashboardimg/userfriend5.png'
import userfriend6 from '../../assets/images/dashboardimg/userfriend6.png'
import React, { useState } from "react"
import loc from '../../assets/images/dashboardimg/location.png'
import dot from '../../assets/images/dashboardimg/Ellipse11.png'
import birthdaycakefire from '../../assets/images/dashboardimg/birthdaycakefire.png'

const Invitememberses = (props) => {
    const [usersFriendsListd] = useState([
        { id: '1', name: "Justin Rosser", location: "South End, Boston", active: "Pending", imageName: userfriend1, birthDate: "30" },
        { id: '3', name: "Alex Hardy", location: "Abington", active: "Accepted", imageName: userfriend2, birthDate: "34" },
        { id: '5', name: "Giana Bergson", location: "Worcester", active: "Declined", imageName: userfriend3, birthDate: "25" },
        { id: '4', name: "Skylar Curtis", location: "Abington", active: "Accepted", imageName: userfriend5, birthDate: "34" },
        { id: '6', name: "Jaydon Geidt", location: "Worcester", active: "Accepted", imageName: userfriend6, birthDate: "25" }
    ])

    return (
        <>
            <div className='sonsor_scrollbars' id="style-2">
                <div className='col-12 mt-2' id="style-2">
                    {usersFriendsListd.map((data) => {
                        return (
                            <div className='col-12'>
                                <div className='row align-items-center pb-2'>
                                    <div className='col-1 me-2'>
                                        <img src={data.imageName} width="54px" height="54px" />
                                    </div>
                                    <div className='col-8 users-friendslist'>
                                        <div className='d-flex flex-column'>
                                            <span className='textspan1 userfriendname'>{data.name} &nbsp; <span className='act_text txtss'>{data.active}</span></span>
                                            <div className='d-flex align-items-center biodatasection mt-25'>
                                                <img src={loc} width="16px" height="16px"></img>&nbsp;
                                                <span className='textspanlight1'>{data.location}</span>
                                                <img className="ms-25 me-25" src={dot} width="4px" height="4px" ></img>
                                                <img className="" src={birthdaycakefire} width="16px" height="16px"></img>&nbsp;
                                                <span className='textspanlight1 '>{data.birthDate}</span>
                                            </div>
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

export default Invitememberses