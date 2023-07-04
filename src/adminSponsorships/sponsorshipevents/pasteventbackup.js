<div className="card p-1 flex-column cards activegroup-mainsection">
                    <div className="d-flex col-12">
                        <div className='col-1'>
                            <img src={barryeventimagesmall} width="86px" height="86px"></img>
                        </div> &nbsp;&nbsp;&nbsp;

                        <div className='col-11 top-contentSection'>
                            <div className='d-flex justify-content-between align-items-between ps-1'>
                                <div>
                                    <span className='sponser-textspanbold4'>Barry’s Private Event</span>&nbsp;&nbsp;
                                    <img src={dot} width="6px" height="6px" />&nbsp;&nbsp;
                                    <span style={{ paddingBottom: "2px" }}><img src={barryeventlogo} width="19px" height="19px" /></span>&nbsp;
                                    {/* <span className="barryPrivateEventname">Barry's</span> */}
                                    <SponsorshipPasteventDialog />
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className='sponsor-textspanbold5'>Comedy Crew</span>&nbsp;&nbsp;
                                    <img src={dot} width="4px" height="4px" />&nbsp;&nbsp;
                                    <span className='sponsor-textspanbold5'>1 Report</span>&nbsp;&nbsp;
                                    <img src={morehorizontal} style={{ cursor: "pointer" }} width="24px" height="24px"></img>
                                </div>
                            </div>


                            <div className='d-flex justify-content-between align-items-between px-1'>
                                <div className="d-flex align-items-center">
                                    <span className='sponser-textspanbold6'>Jul. 8</span>&nbsp;&nbsp;
                                    <img src={dot} width="4px" height="4px" />&nbsp;&nbsp;
                                    <span className='sponser-textspanbold6'>8:00 PM to 9:00 PM</span>&nbsp;&nbsp;
                                </div>
                                <div className="sponsor-spotSection d-flex align-items-center justify-content-end">
                                    <span className="sponsor-spotremaining">
                                        <PieChart
                                            animate
                                            animationDuration={40}
                                            animationEasing="ease-in"
                                            data={data1}
                                            lineWidth={20}
                                            lengthAngle={360}
                                            paddingAngle={0}
                                            radius={38}
                                            // rounded
                                            startAngle={90}
                                            endAngle={150} />
                                    </span>
                                    <span className="sponser-textspanlight3">60</span>
                                    <div>
                                        <span className="sponser-textspanlight2">Limited Spots: </span>
                                        <span className="sponsor-textspanbold7" style={{ paddingRight: "8px" }}>28 Spots Remaining</span>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center  px-1'>
                                <div>
                                    <span><img src={location} width="18" height="18" /></span>
                                    <span className='sponser-textspanlight1 ms-25' style={{ cursor: "pointer" }}>TBA - South Boston/Dorchester, MA</span> &nbsp;&nbsp;
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="sponsor-durationsection">
                                    <span className='sponser-textspanlight1 px-1'>Duration: June 10-14</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="hr-line1" />

                    {/* top section ends */}
                    <div>
                        <div className="d-flex justify-content-between pb-1">
                            <div>
                                <span className="sponsor-textspanbold3">Analytics</span>
                            </div>
                            <div>
                                {/* <button className="sponsor-btntextbold1 sponser-viewbtn">View Report</button> */}
                                <button className="sponsor-btntextbold1">Send Report</button>
                            </div>
                        </div>
                        {/* header section ends */}

                        <div>
                            <div className="row">
                                {analyticsCollectedData.map((data) => {
                                    return (
                                        <div className="col-4 analyticsSection-item px-2">
                                            <div className="row d-flex align-items-center justify-content-between analyticsData-section">
                                                <span className="col-5 sponsor-textspanbold1  d-flex justify-content-center analytics-datavalue">{data.value}</span>
                                                <span className="col-7 sponsor-textspanbold2 d-flex justify-content-center" style={{ padding: "4px" }}>{data.dataName}</span>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                    {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint******* */}
                    <div>
                        {/* <div className="row">
                            <span className="sponser-textspanbold8 pt-1 pb-1">Demographics</span>
                        </div> */}
                        {/* 1st row location, interests*/}
                        {/* <div className="row">

                            <div className="col-6 graph-item">
                                <div className="">
                                    <div className="d-flex justify-content-between">
                                        <span className="sponsor-textspanbold9">Top 5 Locations</span>
                                        <span className="sponsor-textspanbold10">View All</span>
                                    </div>
                                    <div className="col-12 chart1">
                                        <Chart options={options1} series={series1} type='bar' height={240} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Top 5 Interests</span>
                                    <span className="sponsor-textspanbold10">View All</span>
                                </div>
                                <div className="col-12 chart2">
                                    <Chart options={options2} series={series2} type='bar' height={240} />
                                </div>
                            </div>

                        </div> */}
                        {/* <hr className="hrline2" /> */}

                        {/* 2nd row age ranges, genders*/}
                        {/* <div className="row">
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Top 3 Age Ranges</span>
                                    <span className="sponsor-textspanbold10">View All</span>
                                </div>
                                <div className="col-12 chart3">
                                    <Chart options={options3} series={series3} type='bar' height={160} />
                                </div> */}
                        {/* <div className="col-12 chart1">
                                    <Chart options={options1} series={series3} type='bar' height={220} />
                                </div> */}
                        {/* </div>
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Top 3 Genders</span>
                                    <span className="sponsor-textspanbold10">View All</span>
                                </div>
                                <div className="col-12 chart4">
                                    <Chart options={options4} series={series4} type='bar' height={160} />
                                </div>
                            </div>

                        </div> */}
                        {/* <hr className="hrline2" /> */}

                        {/* 3rd row realtionship status, attracted to*/}
                        {/* <div className="row">
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Relationship Status</span>
                                    <span className="sponsor-textspanbold10"></span>
                                </div>
                                <div className="col-12 chart5">
                                    <Chart options={options5} series={series5} type='bar' height={160} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Attracted To</span>
                                    <span className="sponsor-textspanbold10"></span>
                                </div>
                                <div className="col-12 chart6">
                                    <Chart options={options6} series={series6} type='bar' height={160} />
                                </div>
                            </div>

                        </div> */}
                        {/* <hr className="hrline2" /> */}

                        {/* 4th row  religious, ethnicities*/}
                        {/* <div className="row">
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Top 3 Religious</span>
                                    <span className="sponsor-textspanbold10">View All</span>
                                </div>
                                <div className="col-12 chart7">
                                    <Chart options={options7} series={series7} type='bar' height={160} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Top 3 Ethnicities</span>
                                    <span className="sponsor-textspanbold10">View All</span>
                                </div>
                                <div className="col-12 chart8">
                                    <Chart options={options8} series={series8} type='bar' height={160} />
                                </div>
                            </div>

                        </div> */}
                        {/* <hr className="hrline2" /> */}

                        {/* 5th row politics, languages*/}
                        {/* <div className="row">
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Top 3 Politics</span>
                                    <span className="sponsor-textspanbold10">View All</span>
                                </div>
                                <div className="col-12 chart9">
                                    <Chart options={options9} series={series9} type='bar' height={160} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Top 3  Languages</span>
                                    <span className="sponsor-textspanbold10">View All</span>
                                </div>
                                <div className="col-12 chart10">
                                    <Chart options={options10} series={series10} type='bar' height={160} />
                                </div>
                            </div>

                        </div> */}
                        {/* <hr className="hrline2" /> */}

                        {/* 6th row kids, drinking habits*/}
                        {/* <div className="row">
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Kids</span>
                                    <span className="sponsor-textspanbold10"></span>
                                </div>
                                <div className="col-12 chart11">
                                    <Chart options={options11} series={series11} type='bar' height={130} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Top 2 Drinking Habits</span>
                                    <span className="sponsor-textspanbold10">View All</span>
                                </div>
                                <div className="col-12 chart12">
                                    <Chart options={options12} series={series12} type='bar' height={130} />
                                </div>
                            </div>

                        </div> */}
                        {/* <hr className="hrline2" /> */}

                        {/* 7th row exercice*/}
                        {/* <div className="row">
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <span className="sponsor-textspanbold9">Exercice</span>
                                    <span className="sponsor-textspanbold10"></span>
                                </div>
                                <div className="col-12 chart13">
                                    <Chart options={options13} series={series13} type='bar' height={160} />
                                </div>
                            </div>


                        </div> */}

                    </div>
                </div>