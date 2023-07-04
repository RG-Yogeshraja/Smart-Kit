import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Modal from 'react-bootstrap/Modal'
import { useLocation } from 'react-router-dom';
import userfriend1 from '../assets/images/dashboardimg/userfriend1.png'
import userfriend2 from '../assets/images/dashboardimg/userfriend2.png'
import userfriend3 from '../assets/images/dashboardimg/userfriend3.png'
import "../@core/scss/base/adminDashboard/usermenu/userfriends.scss";
import morehorizontal from '../assets/images/dashboardimg/morehorizontal.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import { individualUserRegCode_APIcall } from '../adminusers/slice-adminusers/slice-individualuserCodeReg'
import loading from '../assets/images/dashboardimg/loadersimg.gif'
import defaultuserprofilepicture from '../assets/images/dashboardimg/defaultuserprofilepicture.png'



const CodeRegistrationDialog = (props) => {
    const { pathname } = useLocation()
    // const [show, setShow] = useState(false)
    if (props.child == true && show === false) {
        
        setShow(true)
      
            setLoader(false)
       
       
    }
    
//   setTimeout(() => {
//     setLoader(false)
//       }, 1000)
    const [RegistrationsList] = useState([
        { id: '1', name: "Justin Rosser", imageName: userfriend1 },
        { id: '2', name: "Justin Rosser", imageName: userfriend1 },

        { id: '3', name: "Alex Hardy", imageName: userfriend2 },
        { id: '4', name: "Alex Hardy", imageName: userfriend2 },

        { id: '5', name: "Giana Bergson", imageName: userfriend3 },
        { id: '6', name: "Giana Bergson", imageName: userfriend3 },

        { id: '7', name: "Justin Rosser", imageName: userfriend1 },
        { id: '8', name: "Justin Rosser", imageName: userfriend1 },

        { id: '9', name: "Alex Hardy", imageName: userfriend2 },
        { id: '10', name: "Alex Hardy", imageName: userfriend2 },

        { id: '11', name: "Justin Rosser", imageName: userfriend1 },
        { id: '12', name: "Justin Rosser", imageName: userfriend1 },

        { id: '13', name: "Alex Hardy", imageName: userfriend2 },
        { id: '14', name: "Alex Hardy", imageName: userfriend2 },

        { id: '15', name: "Giana Bergson", imageName: userfriend3 },
        { id: '16', name: "Giana Bergson", imageName: userfriend3 },

        { id: '17', name: "Justin Rosser", imageName: userfriend1 },
        { id: '18', name: "Justin Rosser", imageName: userfriend1 },

        { id: '19', name: "Alex Hardy", imageName: userfriend2 },
        { id: '20', name: "Alex Hardy", imageName: userfriend2 },
        { id: '15', name: "Giana Bergson", imageName: userfriend3 },
        { id: '16', name: "Giana Bergson", imageName: userfriend3 },

    ])

    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const authStat_individualUserCodeReg = useSelector((state) => state.individualUserRegCodeData)
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)

    const handleShow = (event) => {

        if (props.inviteCount !== 0) {
          
            setShow(true)
        //    setLoader(true)
     }
    

        
        // setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }



    return (
        <>
            <div onClick={() => handleShow('yno')}>
                <div>
                    <span className='font-codere' style={{ cursor: "pointer" }}>{props.inviteCount} Code Registrations</span>&nbsp;&nbsp;
                    <img src={morehorizontal} width="24px" height="24px"></img>
                </div>
            </div>

            <Modal className='' show={show} centered backdrop="static" keyboard={false}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Jason's Code Registrations</Modal.Title>
                </Modal.Header> */}
                <Modal.Body >
                    <div style={{ display: loader !== false ? '' : 'none' }}>
                        <div className='enable-loader1'>
                            <img src={loading} width="80px" height="80px"></img>
                        </div>
                    </div>

                    <div className='codeRegistration-body'>
                        <div className='col-12 d-flex justify-content-start align-items-center codeRegistration-heading'>
                            <span className='testspanlg1'>{props.name} Code Registrations</span>
                        </div>
                        <div class="codeRegistration-scrollbar codeRegistrationList" id="scrollbarTrack">
                            <div className='row force-overflow'>
                                {props.inviteDetails?.map((data) => {
                                    return (
                                        <>
                                        {props.inviteDetails.length != 0 ?
                                        <div className='col-6 py-1 f-flex align-items-center'>
                                            <div className=''>
                                                {data.image_url != '' ?
                                                    <img src={data.image_url} height="60px" width="60px" style={{ borderRadius: "15px" }} /> :
                                                    <img src={defaultuserprofilepicture} height="60px" width="60px" />
                                                }
                                                {data.full_name != null ?
                                                    <span className='textspan18 ps-2'>{data.full_name}</span> : null}
                                            </div>
                                        </div> : ''}
                                        </>
                                    )
                                })}

                                {/* {props.inviteDetails.length == 0 ?
                                    <div className='row '>
                                        <span className='col-12 d-flex align-items-center justify-content-center'>No Data Found</span>
                                    </div>
                                    : null} */}
                            </div>
                        </div>
                        {/* <div className='row codeRegistration-footer'>
                            <button className='col-6 btnlg3' onClick={handleClose}>
                                <span className='btnspan4'>Close</span>
                            </button>
                            <button className='col-6 btnlg4'>
                                <span className='btnspan4'>Export As</span>
                            </button>
                        </div> */}

                        <div className='col-12 d-flex justify-content-start mt-2 mb-2'>
                            <button className='dialogFooterbtn1' onClick={handleClose}>Close</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;&nbsp;
                            <button className='dialogFooterbtn2'>Export As</button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        individualUserRegCodeData: state.individualUserRegCodeData
    }
}
export default connect(mapStateToProps, {})(CodeRegistrationDialog)