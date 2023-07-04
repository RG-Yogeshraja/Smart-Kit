import React, { useState } from "react";
import userfriend1 from '../../assets/images/dashboardimg/userfriend1.png';
import userfriend2 from '../../assets/images/dashboardimg/userfriend2.png';
import userfriend3 from '../../assets/images/dashboardimg/userfriend3.png';
import blockedbyuser1 from '../../assets/images/dashboardimg/blockedbyuser1.png';
import location from '../../assets/images/dashboardimg/location.png';
import verticalmore from '../../assets/images/dashboardimg/verticalmore.png';
import dot from '../../assets/images/dashboardimg/Ellipse11.png';
import birthdaycakefire from '../../assets/images/dashboardimg/birthdaycakefire.png';
// import "../../@core/scss/base/adminDashboard/usersmenu.scss";
import "../../@core/scss/base/adminDashboard/usermenu/userfriends.scss";
import closeblock from '../../assets/images/dashboardimg/closeblock.png';
import deleteitem from '../../assets/images/dashboardimg/deleteitem.png';
import Dropdown from 'react-bootstrap/Dropdown';


const UserBlockedBy = (props) => {

    const [userBlockedByList] = useState([
        { id: '3', name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34" },
        { id: '4', name: "Amy Delacruz", location: "Worcester", imageName: blockedbyuser1, birthDate: "25" },
        // { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30" },
        // { id: '2', name: "Giana Bergson", location: "Worcester", imageName: userfriend3, birthDate: "25" }
    ])

    const removeItem = () => {
        // alert('removeItem')
    }
    const blockItem = () => {
        // alert('blockItem')
    }

    return (
        <div>
            {userBlockedByList.length > 0 ?
                <div className="row">
                    {userBlockedByList.filter(items => items.name.match(new RegExp(props.data, "i"))).map((data) => {
                        return (
                            <div className='col-6'>
                                <div className='row align-items-center pb-2'>
                                    <div className='col-2'>
                                        <img src={data.imageName} width="54px" height="54px" />
                                    </div>
                                    <div className='col-8 users-friendslist'>
                                        <div className='d-flex flex-column'>
                                            <span className='textspan1 userfriendname'>{data.name}</span>
                                            <div className='d-flex align-items-center biodatasection'>
                                                <img src={location} width="16px" height="16px"></img>&nbsp;
                                                <span className='textspanlight1 ms1'>{data.location}</span>
                                                <img className="ms1" src={dot} width="5px" height="5px"></img>
                                                <img className="ms1" src={birthdaycakefire} width="16px" height="16px"></img>
                                                <span className='textspanlight1 ms1'>{data.birthDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 userfriend-verticalmore d-flex justify-content-end">
                                        <span className="dropdown-section">
                                            <Dropdown className="userblockedbytab-dropdown">
                                                <Dropdown.Toggle>
                                                    <img src={verticalmore} width="28px" height="28px" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="userblockedbytab-dropdownmenu">
                                                    <Dropdown.Item href="#" className="userblockedbytab-dropdownitem d-flex align-items-center">
                                                        <span>
                                                            <img className="userblockedbytab-dropdownitemIcon" src={deleteitem} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="userblockedbytab-dropdownitemName">Remove</span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#" className="userblockedbytab-dropdownitem d-flex align-items-center pb-50 pt-25">
                                                        <span>
                                                            <img className="userblockedbytab-dropdownitemIcon" src={closeblock} width="16px" height="16px"></img>
                                                        </span>
                                                        <span style={{ paddingTop: "2px" }} className="userblockedbytab-dropdownitemName">Unblock</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div> :
                <div className="row">
                    <span className="d-flex justify-content-center align-items-center">No User Blocked by list found</span>
                </div>}
        </div>
    )
}
export default UserBlockedBy
