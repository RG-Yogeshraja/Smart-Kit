import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import vectorup from "../../../src/assets/images/dashboardimg/vectorup.png"
import 'chart.js/auto'


const SponsorshipActiveEventViewreport = () => {
    const [show1, setShow1] = useState(false)
    const handleClose = () => setShow1(false)
    const [active, setActive] = useState("1")
    
    const [showChart1, setShowChart1] = useState(true)
    const [showChart2, setShowChart2] = useState(true)
    const [showChart3, setShowChart3] = useState(true)
    const [showChart4, setShowChart4] = useState(true)
    const [showChart5, setShowChart5] = useState(true)
    const [showChart6, setShowChart6] = useState(true)
    const [showChart7, setShowChart7] = useState(true)
    const [analyticsCollectedData] = useState([
        { id: 1, value: "354", dataName: "Unique Viewers" },
        { id: 2, value: "354", dataName: "Impressions" },
        { id: 3, value: "443", dataName: "Event Clicks" },
        { id: 4, value: "354", dataName: "Cost per Unique Viewer" },
        { id: 5, value: "354", dataName: "Cost per Impression" },
        { id: 6, value: "$5.50", dataName: "Cost Per Event Click" },
        { id: 7, value: "443", dataName: "Event Link Clicks" },
        { id: 8, value: "443", dataName: "Sponsor Link Clicks" },
        { id: 9, value: "443", dataName: "Members Attending" },
        { id: 10, value: "$5.50", dataName: "Cost Per Event Link Click" },
        { id: 11, value: "$5.50", dataName: "Cost Per Sponsor Link Click" },
        { id: 12, value: "$554", dataName: "Total Spent" }
    ]);
    const [locations] = useState([
        { id: 1, yaxis: "Miami, FL", width: "100%", value: "15%" },
        { id: 2, yaxis: "New York, NY", width: "75%", value: "12%" },
        { id: 3, yaxis: "Boston, MA", width: "65%", value: "10%" },
        { id: 4, yaxis: "Quincy, Ma", width: "65%", value: "10%" },
        { id: 5, yaxis: "Phoenix, AZ", width: "65%", value: "10%" },
        { id: 6, yaxis: "Austin, TX", width: "55%", value: "8%" },
        { id: 7, yaxis: "Denver, CO", width: "45%", value: "6%" },
        { id: 8, yaxis: "Lowell, MA", width: "45%", value: "6%" },
        { id: 9, yaxis: "Houston, TX", width: "35%", value: "4%" },
        { id: 10, yaxis: "Orlando, FL", width: "35%", value: "4%" },
    ])
    const [interests] = useState([
        { id: 1, yaxis: "TV Shows", width: "100%", value: "15%" },
        { id: 2, yaxis: "Music", width: "75%", value: "12%" },
        { id: 3, yaxis: "Pets", width: "65%", value: "10%" },
        { id: 4, yaxis: "Sports", width: "65%", value: "10%" },
        { id: 5, yaxis: "Fitness", width: "65%", value: "10%" },
        { id: 6, yaxis: "Nightlife", width: "55%", value: "8%" },
        { id: 7, yaxis: "Cooking", width: "45%", value: "6%" },
        { id: 8, yaxis: "Fashion", width: "45%", value: "6%" },
        { id: 9, yaxis: "Outdoors", width: "35%", value: "4%" },
        { id: 10, yaxis: "Reading", width: "35%", value: "4%" },
    ])
    const [ageranges] = useState([
        { id: 1, yaxis: "25-30", width: "100%", value: "60%" },
        { id: 2, yaxis: "35-40", width: "65%", value: "30%" },
        { id: 3, yaxis: "45-50", width: "35%", value: "8%" },
        { id: 4, yaxis: "50-55", width: "20%", value: "2%" }
    ])
    const [genderidentity] = useState([
        { id: 1, yaxis: "Man", width: "100%", value: "50%" },
        { id: 2, yaxis: "Female", width: "65%", value: "40%" },
        { id: 3, yaxis: "Non-binary", width: "35%", value: "10%" },
        { id: 4, yaxis: "Trans Woman", width: "35%", value: "10%" },
        { id: 5, yaxis: "Trans Man", width: "35%", value: "10%" },
    ])
    const [relationshipstatus] = useState([
        { id: 1, yaxis: "Single", width: "100%", value: "60%" },
        { id: 2, yaxis: "In a Relationship", width: "75%", value: "30%" },
        { id: 3, yaxis: "Married", width: "35%", value: "10%" },
    ])
    const [attractedto] = useState([
        { id: 1, yaxis: "Women", width: "100%", value: "50%" },
        { id: 2, yaxis: "Men", width: "75%", value: "40%" },
        { id: 3, yaxis: "Non-binary", width: "35%", value: "10%" },
    ])
    const [religion] = useState([
        { id: 1, yaxis: "Agnostic", width: "100%", value: "30%" },
        { id: 2, yaxis: "Catholic", width: "75%", value: "20%" },
        { id: 3, yaxis: "Christian", width: "45%", value: "10%" },
        { id: 4, yaxis: "Atheist", width: "45%", value: "10%" },
        { id: 5, yaxis: "Buddhist", width: "45%", value: "10%" },
        { id: 6, yaxis: "Muslim", width: "45%", value: "10%" },
        { id: 7, yaxis: "Jewish", width: "45%", value: "10%" },
    ])
    const [ethnicity] = useState([
        { id: 1, yaxis: "white", width: "100%", value: "20%" },
        { id: 2, yaxis: "Hispanic", width: "100%", value: "20%" },
        { id: 3, yaxis: "Black", width: "45%", value: "10%" },
        { id: 4, yaxis: "Jewish", width: "45%", value: "10%" },
        { id: 5, yaxis: "East Asian", width: "45%", value: "10%" },
        { id: 6, yaxis: "west Asian", width: "45%", value: "10%" },
        { id: 7, yaxis: "North African", width: "35%", value: "8%" },
        { id: 8, yaxis: "Black American", width: "20%", value: "2%" },
    ])
    const [politics] = useState([
        { id: 1, yaxis: "Liberal", width: "100%", value: "60%" },
        { id: 2, yaxis: "Moderate", width: "75%", value: "20%" },
        { id: 3, yaxis: "Conservative", width: "55%", value: "10%" },
        { id: 4, yaxis: "Apolotical", width: "55%", value: "10%" },
    ])
    const [languages] = useState([
        { id: 1, yaxis: "English", width: "100%", value: "30%" },
        { id: 2, yaxis: "Spanish", width: "75%", value: "20%" },
        { id: 3, yaxis: "German", width: "50%", value: "10%" },
        { id: 4, yaxis: "Mandarin", width: "50%", value: "10%" },
        { id: 5, yaxis: "French", width: "35%", value: "6%" },
        { id: 6, yaxis: "Dutch", width: "35%", value: "6%" },
        { id: 7, yaxis: "Arabic", width: "25%", value: "4%" },
        { id: 8, yaxis: "Russian", width: "25%", value: "4%" },
        { id: 9, yaxis: "Vietnamese", width: "25%", value: "4%" },
        { id: 10, yaxis: "Italian", width: "25%", value: "4%" },
        { id: 11, yaxis: "Turkish", width: "20%", value: "2%" }
    ])
    const [kids] = useState([
        { id: 1, yaxis: "Have Kids", width: "100%", value: "60%" },
        { id: 2, yaxis: "Don't Have Kids", width: "70%", value: "40%" }
    ])
    const [drinking] = useState([
        { id: 1, yaxis: "Frequently", width: "100%", value: "50%" },
        { id: 2, yaxis: "Socially", width: "75%", value: "30%" },
        { id: 3, yaxis: "Never", width: "50%", value: "8%" },
        { id: 4, yaxis: "Sober", width: "20%", value: "2%" }
    ])
    const [exercise] = useState([
        { id: 1, yaxis: "Active", width: "100%", value: "60%" },
        { id: 2, yaxis: "Sometimes", width: "75%", value: "30%" },
        { id: 3, yaxis: "Almost Never", width: "50%", value: "10%" },
    ])
    const minimizeChart1 = (value) => {
        if (value == true) {
            setShowChart1(false)
        }
        else if (value == false) {
            setShowChart1(true)
        }
    }
    const minimizeChart2 = (value) => {
        if (value == true) {
            setShowChart2(false)
        }
        else if (value == false) {
            setShowChart2(true)
        }
    }
    const minimizeChart3 = (value) => {
        if (value == true) {
            setShowChart3(false)
        }
        else if (value == false) {
            setShowChart3(true)
        }
    }
    const minimizeChart4 = (value) => {
        if (value == true) {
            setShowChart4(false)
        }
        else if (value == false) {
            setShowChart4(true)
        }
    }
    const minimizeChart5 = (value) => {
        if (value == true) {
            setShowChart5(false)
        }
        else if (value == false) {
            setShowChart5(true)
        }
    }
    const minimizeChart6 = (value) => {
        if (value == true) {
            setShowChart6(false)
        }
        else if (value == false) {
            setShowChart6(true)
        }
    }
    const minimizeChart7 = (value) => {
        if (value == true) {
            setShowChart7(false)
        }
        else if (value == false) {
            setShowChart7(true)
        }
    }


    return (
        <>
            <button onClick={() => setShow1(true)} className="sponsor-btntextbold1" style={{ outline: "none" }}>View Report</button>
            <Modal show={show1} centered dialogClassName="activeEventSendReport-custommodal" onHide={() => setShow1(false)}>
                <div className="activeEventViewreport-content">
                    <div className="ps-1">
                        <span className="sponsor-textspanbold22" style={{ fontWeight: "500" }}>Secret Comedy Show </span>
                        <span className="sponsor-textspanbold22" style={{ fontWeight: "600" }}>Analytics Report</span>
                    </div>
                    <div className=" p-1 flex-column ">
                        <div className="analytics-section pt-75">
                            <div className="row">
                                {analyticsCollectedData.map((data) => {
                                    return (
                                        <div className="col-4 analyticsSection-item px-2">
                                            <div className="row d-flex align-items-center justify-content-between analyticsData-section">
                                                <span className="col-5 sponsor-textspanbold1  d-flex justify-content-center analytics-datavalue">{data.value}</span>
                                                <span className="col-7 sponsor-textspanbold2 d-flex justify-content-center">{data.dataName}</span>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                    {/* middle section ends */}
                    <div className="px-1">
                        <div>
                            <div className="row">
                                <span className="sponser-textspanbold8 pt-25 pb-1 mb-50">Demographics</span>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-start pb-25">
                                            <span className="chartheading-left">Locations</span>
                                        </div>
                                    </div>
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-between align-items-center pb-25">
                                            <span className="chartheading-left">Interests</span>
                                            <img onClick={() => minimizeChart1(showChart1)} src={vectorup} width="13px" height="8px" />
                                        </div>
                                    </div>
                                </div>
                                {showChart1 == true ? <div className="row">
                                    <div className="col-6">
                                        {locations.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-6">
                                        {interests.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div> : null}
                            </div>
                            <hr style={{ border: "1px solid #CCD8DB" }} />
                            <div>
                                <div className="row">
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-start pb-25">
                                            <span className="chartheading-left">Age Ranges</span>
                                        </div>
                                    </div>
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-between align-items-center pb-25">
                                            <span className="chartheading-left">Gender Identity</span>
                                            <img onClick={() => minimizeChart2(showChart2)} src={vectorup} width="13px" height="8px" />
                                        </div>
                                    </div>
                                </div>
                                {showChart2 == true ? <div className="row">
                                    <div className="col-6">
                                        {ageranges.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-6">
                                        {genderidentity.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div> : null}
                            </div>
                            <hr style={{ border: "1px solid #CCD8DB" }} />
                            <div>
                                <div className="row">
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-start pb-25">
                                            <span className="chartheading-left">Relationship Status</span>
                                        </div>
                                    </div>
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-between align-items-center pb-25">
                                            <span className="chartheading-left">Attracted To</span>
                                            <img onClick={() => minimizeChart3(showChart3)} src={vectorup} width="13px" height="8px" />
                                        </div>
                                    </div>
                                </div>
                                {showChart3 == true ? <div className="row">
                                    <div className="col-6">
                                        {relationshipstatus.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width, height: data.id == 2 ? "70%" : "90%" }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-6">
                                        {attractedto.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div> : null}
                            </div>
                            <hr style={{ border: "1px solid #CCD8DB" }} />
                            <div>
                                <div className="row">
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-start pb-25">
                                            <span className="chartheading-left">Religion</span>
                                        </div>
                                    </div>
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-between align-items-center pb-25">
                                            <span className="chartheading-left">Ethnicity</span>
                                            <img onClick={() => minimizeChart4(showChart4)} src={vectorup} width="13px" height="8px" />
                                        </div>
                                    </div>
                                </div>
                                {showChart4 == true ? <div className="row">
                                    <div className="col-6">
                                        {religion.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-6">
                                        {ethnicity.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width, height: data.id == 8 ? "70%" : "90%" }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div> : null}
                            </div>
                            <hr style={{ border: "1px solid #CCD8DB" }} />
                            <div>
                                <div className="row">
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-start pb-25">
                                            <span className="chartheading-left">Politics</span>
                                        </div>
                                    </div>
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-between align-items-center pb-25">
                                            <span className="chartheading-left">Languages</span>
                                            <img onClick={() => minimizeChart5(showChart5)} src={vectorup} width="13px" height="8px" />
                                        </div>
                                    </div>
                                </div>
                                {showChart5 == true ? <div className="row">
                                    <div className="col-6">
                                        {politics.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-6">
                                        {languages.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div> : null}
                            </div>
                            <hr style={{ border: "1px solid #CCD8DB" }} />
                            <div>
                                <div className="row">
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-start pb-25">
                                            <span className="chartheading-left">Kids</span>
                                        </div>
                                    </div>
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-between align-items-center pb-25">
                                            <span className="chartheading-left">Drinking</span>
                                            <img onClick={() => minimizeChart6(showChart6)} src={vectorup} width="13px" height="8px" />
                                        </div>
                                    </div>
                                </div>
                                {showChart6 == true ? <div className="row">
                                    <div className="col-6">
                                        {kids.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width, height: data.id == 2 ? "70%" : "90%" }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-6">
                                        {drinking.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div> : null}
                            </div>
                            <hr style={{ border: "1px solid #CCD8DB" }} />
                            <div>
                                <div className="row">
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-start pb-25">
                                            <span className="chartheading-left">Exercise</span>
                                        </div>
                                    </div>
                                    <div className="col-6 barchartsection">
                                        <div className="d-flex justify-content-end align-items-center pb-25">
                                            <img onClick={() => minimizeChart7(showChart7)} src={vectorup} width="13px" height="8px" />
                                        </div>
                                    </div>
                                </div>
                                {showChart7 == true ? <div className="row">
                                    <div className="col-6">
                                        {exercise.map((data, index) => {
                                            return (
                                                <div className="row d-flex ">
                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div> : null}
                            </div>
                        </div>
                        <div className="col-12 mt-2 pt-50">
                            <button className=' closebuttonuser col-5 ms-4' style={{ width: "38%" }} onClick={handleClose}>Close</button>
                            <span className='col-2'></span>
                            <button className=' sponsor-btn7 col-5 me-4' style={{ width: "38%" }} onClick={() => sendto("1")}>Send Report</button>
                        </div>
                    </div>
                </div>
            </Modal >
        </>
    )
}
export default SponsorshipActiveEventViewreport