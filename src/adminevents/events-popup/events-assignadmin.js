import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import search from '../../assets/images/dashboardimg/searchbar.png'
import checktickboxes from '../../assets/images/dashboardimg/checktickbox.png'
import checkblankboxes from '../../assets/images/dashboardimg/checkblankbox.png'
import '../../@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import userfriend1 from '../../assets/images/dashboardimg/userfriend1.png'
import userfriend2 from '../../assets/images/dashboardimg/userfriend2.png'
import userfriend3 from '../../assets/images/dashboardimg/userfriend3.png'
import userfriend4 from '../../assets/images/dashboardimg/userfriend4.png'
import userfriend5 from '../../assets/images/dashboardimg/userfriend5.png'
import userfriend6 from '../../assets/images/dashboardimg/userfriend6.png'
import userfriend7 from '../../assets/images/dashboardimg/userfriend7.png'
import userfriend8 from '../../assets/images/dashboardimg/userss1.png'
import userfriend9 from '../../assets/images/dashboardimg/profile_pic.png'
import userfriend10 from '../../assets/images/dashboardimg/userpic1.png'
import userfriend11 from '../../assets/images/dashboardimg/user-addimg.png'



const AssignAdmininGroups = () => {
    const [show1, setShow1] = useState(false)
    const handleClose = () => setShow1(false)
    const [active, setActive] = useState("1")


    const [usersFriendsList, setuser] = useState([
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "Admin", checked: false },
        { id: '7', name: "Amy Delacruz", location: "South End, Boston", imageName: userfriend8, birthDate: "30", isAdmin: "", checked: false },
        { id: '3', name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34", isAdmin: "", checked: false },
        { id: '8', name: "Steven Smith", location: "Abington", imageName: userfriend9, birthDate: "34", isAdmin: "", checked: false },
        { id: '5', name: "Giana Bergson", location: "Worcester", imageName: userfriend3, birthDate: "25", isAdmin: "", checked: false },
        { id: '4', name: "Ayisha Baker", location: "Abington", imageName: userfriend10, birthDate: "34", isAdmin: "", checked: false },
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "", checked: false },
        { id: '10', name: "Ashley Bern", location: "Worcester", imageName: userfriend11, birthDate: "25", isAdmin: "", checked: false },
        { id: '3', name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34", isAdmin: "", checked: false },
        { id: '3', name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34", isAdmin: "", checked: false },
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "Admin", checked: false },
        { id: '7', name: "Amy Delacruz", location: "South End, Boston", imageName: userfriend8, birthDate: "30", isAdmin: "", checked: false },
        { id: '3', name: "Alex Hardy", location: "Abington", imageName: userfriend2, birthDate: "34", isAdmin: "", checked: false },
        { id: '8', name: "Steven Smith", location: "Abington", imageName: userfriend9, birthDate: "34", isAdmin: "", checked: false },
        { id: '5', name: "Giana Bergson", location: "Worcester", imageName: userfriend3, birthDate: "25", isAdmin: "", checked: false },
        { id: '4', name: "Ayisha Baker", location: "Abington", imageName: userfriend10, birthDate: "34", isAdmin: "", checked: false },
        { id: '1', name: "Justin Rosser", location: "South End, Boston", imageName: userfriend1, birthDate: "30", isAdmin: "", checked: false }

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
        <>
            <button onClick={() => setShow1(true)} className='group-assignbtn d-flex justify-content-center align-items-center'>Assign Admin</button>
            <Modal show={show1} centered
                dialogClassName="assignadmin-custom-modal" onHide={() => setShow1(false)}>
                <div className="assignadmin-modalcontent">
                    <div className="">
                        <span className="group-textspanbold5">Assign Admin(s) to Group</span>
                    </div>
                    <div>
                        <div className='col-12 mt-1 mb-1 '>
                            <div className='d-flex align-items-center border_size me-2'>
                                <img className='search ms-1' src={search} width="20px" height="20px"></img>
                                <input className='w-100 height-range ms-1 text_search ' placeholder='Search '></input>
                            </div>
                        </div>
                        <div className="assignadmin-scrollbar mt-2" id="assignadmin-scrollstyle">
                            <div className="row assignadmin-force-overflow">
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
                                                            <img src={data.checked == true ? checktickboxes : checkblankboxes} width="20px" height="20px" onClick={() => checkclick(data.checked, index)}></img>
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

                    <div className="col-12 mt-3">
                        <button className=' closebuttonuser col-5 m-0' style={{ width: "45%" }} onClick={handleClose}>Close</button>
                        <span className='col-2'></span>
                        <button className=' Exportbuttonuser col-5 me-2' style={{ width: "45%" }}>Assign</button>
                        <div className="p-3"></div>
                    </div>
                </div>

            </Modal>
        </>

    )
}


export default AssignAdmininGroups
