import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import { Bar } from 'react-chartjs-2'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'

import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
const SponsorshipGraphTest = ({ success, gridLineColor, labelColor }) => {
    const [show1, setShow1] = useState(false)
    const handleClose = () => setShow1(false)
    const [active, setActive] = useState("1")

    // ** Chart Options
    const options = {
        responsive: true,
        horizontal: false,

        maintainAspectRatio: false,
        animation: { duration: 500 },
        scales: {
            x: {
                grid: {
                    color: gridLineColor,
                    borderColor: gridLineColor
                },
                ticks: { color: labelColor }
            },
            y: {
                min: 0,
                max: 400,
                grid: {
                    color: gridLineColor,
                    borderColor: gridLineColor
                },
                ticks: {
                    stepSize: 100,
                    color: labelColor
                }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }

    // ** Chart data
    const data = {
        labels: [
            '7/12',
            '8/12',
            '9/12',
            '10/12',
            '11/12',
            '12/12',
            '13/12',
            '14/12',
            '15/12',
            '16/12',
            '17/12',
            '18/12',
            '19/12'
        ],
        datasets: [
            {
                maxBarThickness: 15,
                backgroundColor: success,
                borderColor: 'transparent',
                borderRadius: { topRight: 15, topLeft: 15 },
                data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190]
            }
        ]
    }


    return (
        <>
            <button onClick={() => setShow1(true)} className="sponsor-btntextbold1">Graph Test</button>

            <Modal show={show1} centered
                dialogClassName="custom-modal" onHide={() => setShow1(false)}>

                <div className="row m-2">
                    <div className="bargraph-section col-6" style={{border: "1px solid green"}}>
                        <div className="d-flex align-items-center row">
                            <span className="col-3">Relationship</span>
                            <div className="p-1 col-9 d-flex flex-row" >
                                <div style={{ backgroundColor: "red", width: "100%" }}></div>
                                <span>60%</span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center row">
                            <span className="col-3">bar onehgvhgjh</span>
                            <div className="p-1 col-9 d-flex flex-row" >
                                <div style={{ backgroundColor: "red", width: "20%" }}></div>
                                <span>60%</span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center row">
                            <span className="col-3">conservtivve</span>
                            <div className="p-1 col-9 d-flex flex-row" >
                                <div style={{ backgroundColor: "red", width: "35%" }}></div>
                                <span>60%</span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center row">
                            <span className="col-3">bar onkjhjhhjhhhhe</span>
                            <div className="p-1 col-9 d-flex flex-row" >
                                <div style={{ backgroundColor: "red", width: "100%" }}></div>
                                <span>60%</span>
                            </div>
                        </div>
                      
                        
                   

                    </div>

                    <div className="bargraph-section col-6" style={{border: "1px solid green"}}>
                        <div className="d-flex align-items-center">
                            <span className="">bar one</span>
                            <div className="1 p-1 col-8 d-flex flex-row" >
                                <div style={{ backgroundColor: "red", width: "100%" }}></div>
                                <span>60%</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="col-2">bar one testyyyy</span>
                            <div className="1 p-1 col-4 d-flex flex-row" >
                                <div style={{ backgroundColor: "red", width: "100%" }}></div>
                                <span>60%</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="col-2">bar onejjj</span>
                            <div className="1 p-1 col-4 d-flex flex-row" >
                                <div style={{ backgroundColor: "red", width: "50%" }}></div>
                                <span>60%</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="col-2">bay</span>
                            <div className="1 p-1 col-4 d-flex flex-row" >
                                <div style={{ backgroundColor: "red", width: "35%" }}></div>
                                <span>60%</span>
                            </div>
                        </div>
                        
                        {/* <div className="1 p-1" style={{ backgroundColor: "green", width: "30%" }}></div>
                        <div className="1 p-1 " style={{ backgroundColor: "yellow", width: "90%" }}></div>
                        <div className="1 p-1 " style={{ backgroundColor: "orange" }}></div>
                        <div className="1 p-1 " style={{ backgroundColor: "violet" }}></div> */}



                    </div>
                
                </div>
                <div className="row">
                    <div className="col-6">
                        <CardBody>
                            <div style={{ height: '400px' }}>
                                <Bar data={data} options={options} height={400} />
                            </div>
                        </CardBody>
                    </div>
                    <div className="col-6">
                        <CardBody>
                            <div style={{ height: '400px' }}>
                                <Bar data={data} options={options} height={400} />
                            </div>
                        </CardBody>
                    </div>
                </div>





            </Modal>


        </>
    )
}

export default SponsorshipGraphTest