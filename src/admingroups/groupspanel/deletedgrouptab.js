import React, { useState } from "react";
import moreimagee from '../../assets/images/dashboardimg/morehorizontal.png';
import '../../@core/scss/base/adminDashboard/groupsmenu/pendinganddeltedtab.scss';
import deletedpending from '../../assets/images/dashboardimg/delete-pending.png'
import tickboxedpending from '../../assets/images/dashboardimg/tickbox-pending.png'
import morepending from '../../assets/images/dashboardimg/verticalmore.png'




const DeletedGroupTab = () => {
    const [deleteds, setdeleteds] = useState([

        { id: 0, img1: pendinguser3, naming: 'Co-Ed Sports', img2: moreimagee, naming2: 'Private Group', naming3: 'Created by Jason Smith', naming4: 'For doggos and the people who love them to get together and socialize ' },
        { id: 1, img1: pendinguser4, naming: 'Fitness Crew', img2: moreimagee, naming2: 'Private Group', naming3: 'Created by Jason Smith', naming4: 'For doggos and the people who love them to get together and socialize ' },

    ])

    return (
        <>
            <div>
                {deleteds.map((items, index) => <div key={index} >
                    <div className="card p-2 flex-column cards1">
                        <div className="d-flex col-12 mb-1">
                            <div className='col-1'>
                                <img src={items.img1} width="60px" height="60px"></img>
                            </div> &nbsp;&nbsp;&nbsp;

                            <div className='col-11'>
                                <div className='d-flex justify-content-between align-items-between px-1 mb-1'>
                                    <div>
                                        <span className='spanpending1'>{items.naming}</span> &nbsp;&nbsp;&nbsp;
                                        {/* <img src={dot} width="5px" height="5px"></img> &nbsp;&nbsp;
                                <span className='activing'>Active</span> &nbsp;&nbsp;  */}
                                    </div>
                                    <div>
                                        <span className='font-chatprivate' style={{ cursor: "pointer" }}>{items.naming2}</span>&nbsp;&nbsp;
                                        <img src={items.img2} style={{ cursor: "pointer" }} width="24px" height="24px"></img>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-start align-items-start ps-1'>
                                    <div style={{ marginTop: '-10px' }}>

                                        <span className='font-createdd' style={{ cursor: "pointer" }}>{items.naming3}</span> &nbsp;&nbsp;
                                        {/* <img src={dot} width="5px" height="5px"></img>&nbsp;&nbsp;
                                <span className='spansemilight1' style={{ cursor: "pointer" }}>445-334-3322</span>  */}


                                    </div>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <hr style={{ color: '#CCD8DB', marginTop: '10px', width: '475px', marginLeft: '15px' }}></hr>
                                </div>
                            </div>

                        </div>
                        <div className='col-12'>
                            <div className='d-flex justify-content-between align-items-between'>
                                <div className="col-10">
                                    <div className='d-flex justify-content-start align-items-start'>
                                        <span className='spanpending-content pending-detail'>{items.naming4}</span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className='d-flex justify-content-end align-items-end'>
                                        {/* <img src={deletedpending} width="32px" height="32px"></img>&nbsp;&nbsp; */}
                                        {/* <img src={tickboxedpending} width="32px" height="32px"></img>&nbsp;&nbsp; */}

                                        <img src={morepending} style={{ marginBottom: "2px" }} width="28px" height="28px"></img>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>)}


            </div>
        </>
    )
}

export default DeletedGroupTab