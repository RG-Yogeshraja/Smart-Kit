import React from 'react';
import users1 from '../assets/images/dashboardimg/userss1.png'
// import users2 from '../assets/images/dashboardimg/userss2.png'
import dot from '../assets/images/dashboardimg/Ellipse11.png'
import socialapple from '../assets/images/dashboardimg/social-apple.png'
import socialfacebook from '../assets/images/dashboardimg/social-facebook.png'
import socialgoogle from '../assets/images/dashboardimg/social-google.png'
import morehorizontal from '../assets/images/dashboardimg/morehorizontal.png'

const UserprofileBottom1 = () => {
    return (
        <>


            <div className="card p-2 flex-column cards">
                <div className="d-flex col-12 mb-1">
                    <div className='col-1'>
                        <img src={users1} width="60px" height="60px"></img>
                    </div> &nbsp;&nbsp;&nbsp;

                    <div className='col-11'>
                        <div className='d-flex justify-content-between align-items-between px-1 mb-1'>
                            <div>
                                <span className='spanprofile1'>Amy Delacruz</span> &nbsp;&nbsp;&nbsp;
                                <img src={dot} width="5px" height="5px"></img> &nbsp;&nbsp;
                                <span className='activing'>Active</span> &nbsp;&nbsp;
                            </div>
                            <div>
                                <span className='font-codere' style={{ cursor: "pointer" }}>4 Code Registrations</span>&nbsp;&nbsp;
                                <img src={morehorizontal} style={{ cursor: "pointer" }} width="24px" height="24px"></img>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start align-items-start ps-1'>
                            <div>

                                <span className='spanlight1' style={{ cursor: "pointer" }}>amydcruz@gmail.com</span> &nbsp;&nbsp;
                                <img src={dot} width="5px" height="5px"></img>&nbsp;&nbsp;
                                <span className='spansemilight1' style={{ cursor: "pointer" }}>445-334-3322</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='d-flex justify-content-between align-items-between'>
                        <div>
                            <span className='connect-fontt'>Connected to</span>&nbsp;&nbsp;&nbsp;
                            <img src={socialapple} style={{ cursor: "pointer" }} width="44px" height="44px"></img>&nbsp;&nbsp;
                            <img src={socialgoogle} style={{ cursor: "pointer" }} width="44px" height="44px"></img>&nbsp;&nbsp;
                            {/* <img src={socialfacebook} width="44px" height="44px"></img>&nbsp;&nbsp; */}
                            {/* <img src={socialgoogle} width="44px" height="44px"></img>&nbsp;&nbsp; */}
                        </div>

                        <div>
                            <button style={{ cursor: "pointer" }} className='btn_greenss1 d-flex flex-row justify-content-center align-items-center'>
                                <span className='texts_colorss1 text-center'>
                                    Trigger Password Reset
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>







            <div className="card p-2 flex-column cards">
                <div className="d-flex col-12 mb-1">
                    <div className='col-1'>
                        {/* <img src={users2} width="60px" height="60px"></img> */}
                    </div> &nbsp;&nbsp;&nbsp;

                    <div className='col-11'>
                        <div className='d-flex justify-content-between align-items-between px-1 mb-1'>
                            <div>
                                <span className='spanprofile1'>Jessica Reed</span> &nbsp;&nbsp;
                            </div>
                            <div>
                                <span className='font-codere' style={{ cursor: "pointer" }}>4 Code Registrations</span>&nbsp;&nbsp;
                                <img src={morehorizontal} style={{ cursor: "pointer" }} width="24px" height="24px"></img>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start align-items-start ps-1'>
                            <div>

                                <span className='spanlight1' style={{ cursor: "pointer" }}>jessiereed@gmail.com</span> &nbsp;&nbsp;
                                <img src={dot} width="5px" height="5px"></img>&nbsp;&nbsp;
                                <span className='spansemilight1' style={{ cursor: "pointer" }}>445-334-3322</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='d-flex justify-content-between align-items-between'>
                        <div>
                            <span className='connect-fontt'>Connected to</span>&nbsp;&nbsp;&nbsp;
                            <img src={socialapple} style={{ cursor: "pointer" }} width="44px" height="44px"></img>&nbsp;&nbsp;
                            {/* <img src={socialfacebook} width="44px" height="44px"></img>&nbsp;&nbsp; */}
                            {/* <img src={socialgoogle} width="44px" height="44px"></img>&nbsp;&nbsp; */}
                        </div>

                        <div>
                            <button style={{ cursor: "pointer" }} className='btn_greenss1 d-flex flex-row justify-content-center align-items-center'>
                                <span className='texts_colorss1 text-center'>
                                    Trigger Password Reset
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>






        </>

    )

}


export default UserprofileBottom1