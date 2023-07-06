import React, { useState } from "react"
import { Draggable } from "react-drag-reorder"
import '../../../src/@core/scss/smartkit/home.css'
import { Star } from 'react-feather'
import StickyHeadTable from "./home2"

// import { Rating } from 'react-feather'
// 

const SmartKitHome = () => {

    const [getList, setList] = useState(["Hello", "Hi", "How are you", "Cool"])


    return (
        <>
            <div className="row">
                <div className="col-8">
                    <p className="m-0 homeTitle mb-2">Your Open Tasks</p>
                    <StickyHeadTable></StickyHeadTable>
                </div>
                <div className="col-4">
                    <div className="d-flex flex-column">
                        <div>
                            <p className="m-0 homeTitle">Monthly Status</p>
                        </div>
                        <div className="">
                            <div className="row monthyStatusItem-bg mt-2 rounded">
                                <p className="col-8 py-1 mb-0 d-flex align-items-center">Total hours worked for</p>
                                <p className="col-4 py-1 mb-0 d-flex align-items-center">125 hours</p>
                            </div>
                            <div className="row monthyStatusItem-bg mt-2 rounded">
                                <p className="col-8 py-1 mb-0 d-flex align-items-center">Total late came in</p>
                                <p className="col-4 py-1 mb-0 d-flex align-items-center">5 days</p>
                            </div>
                            <div className="row monthyStatusItem-bg mt-2 rounded">
                                <p className="col-8 py-1 mb-0 d-flex align-items-center">Your Ratings</p>
                                <div className="col-4 py-1 mb-0 d-flex align-items-center">
                                    <Star size={22} fill={'#D9BC45'} stroke={'#D9BC45'} />
                                    <Star size={22} fill={'#D9BC45'} stroke={'#D9BC45'} />
                                    <Star size={22} fill={'#D9BC45'} stroke={'#D9BC45'} />
                                    <Star size={22} stroke={'#babfc7'} />
                                    <Star size={22} stroke={'#babfc7'} />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* <div className="flex-container">
                <div className="taskItem">
                    <Draggable className="taskItem">
                        {getList.map((data) => {
                            return (
                                <div className="taskItem" style={{ borderRadius: "20px" }}>
                                    {data}
                                </div>
                            )
                        })}
                    </Draggable>
                </div>
            </div> */}
        </>
    )
}

export default SmartKitHome