import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'


import { Bar } from 'react-chartjs-2'
// ** Reactstrap Imports
// import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

// ** Reactstrap Imports
const SponsorshipActiveEventSendReportTest = ({ info, direction, success, gridLineColor, labelColor, transparent, warning }) => {
    const [show1, setShow1] = useState(false)
    const handleClose = () => setShow1(false)
    const [active, setActive] = useState("1")


    // ** Chart Options1
    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '40%',
                borderRadius: 8,
                borderRadiusApplication: 'end'
            }
        },
        grid: {
            xaxis: {
                // range: 10,
                lines: {
                    show: false
                }
            }
        },
        colors: 'green',
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 700) {
                    return val + '%'
                }
                if (val === 350) {
                    return val + '%'
                }
                if (val === 480) {
                    return val + '%'
                }
                if (val === 600) {
                    return val + '%'
                }
                if (val === 210) {
                    return val + '%'
                }
                if (val === 550) {
                    return val + '%'
                }
                if (val === 150) {
                    return val + '%'
                }
            },
            offsetX: 0,
            offsetY: 0,
            // offsetZ: 0,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        xaxis: {
            range: 30,
            categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23'],
            labels: {
                show: true,

                style: {
                    colors: [''],
                    fontSize: '12px',
                    fontFamily: 'Asap',
                    fontWeight: 800

                },

            },
            yaxis: {
                opposite: direction === 'rtl',

                labels: {
                    show: true,
                    align: 'right',
                    style: {
                        colors: ['red'],
                        fontSize: '12px',
                        fontFamily: 'Asap',
                        fontWeight: 800

                    }

                }
            }
        }
    }

    // ** Chart Series1
    const series = [
        {
            data: [700, 350, 480, 600, 210, 550, 150]
        }
    ]




    // ** Chart Options2
    const options2 = {
        type: 'horizontalBar',


        responsive: true,
        indexAxis: 'y',
        maintainAspectRatio: false,
        animation: { duration: 500 },
        scales: {
            x: {
                grid: {
                    color: "#FFFFFF",
                    borderColor: "#FFFFFF"
                },
                ticks: { color: 'red' }
            },
            y: {
                min: 0,
                max: 600,
                grid: {
                    color: "#FFFFFF",
                    borderColor: "#FFFFFF",
                },
                ticks: {
                    stepSize: 100,
                    color: 'red',
                    crossAlign: 'far',

                },
                // ticks: {
                //     crossAlign: 'far',

                // }
            }
        },
        options: {
            // plugins: {
            legend: { display: false }
            // },
        },
        // scales: {
        //     yAxes: [{
        //         scaleLabel: {
        //             display: true,
        //             labelString: 'HR (Bpm)'
        //         },
        //         ticks: {
        //             mirror: true,
        //             padding: 220
        //         },
        //         layout: {
        //             padding: {
        //                 left: 220
        //             }
        //         }
        //     }]
        // },
        // scales: {
        //     y: {
        //         ticks: {
        //             crossAlign: 'far',
        //         }
        //     }
        // }

        // options:{
        //     display: true
        // },


        // dataLabels: {
        //     enabled: true,
        //     formatter(val) {
        //         if (val === 275) {
        //             return val + '%'
        //         }
        //     }
        // },
    }

    // ** Chart data2
    const data2 = {
        labels: [
            '7sdafsdf',
            '8sdf',
            '9s',
            '10sdfsdfsdfsdfd',
            '11asd',
            '12asdasda',

        ],
        datasets: [
            {
                maxBarThickness: 20,
                backgroundColor: 'green',
                borderColor: 'transparent',
                borderRadius: { topRight: 9, bottomRight: 9 },
                data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190]
            }
        ]
    }

    // ** Chart Options2
    const options2a = {
        type: 'horizontalBar',


        responsive: true,
        indexAxis: 'y',
        maintainAspectRatio: false,
        animation: { duration: 500 },
        scales: {
            x: {
                grid: {
                    color: "#FFFFFF",
                    borderColor: "#FFFFFF"
                },
                ticks: { color: 'red' }
            },
            y: {
                min: 0,
                max: 600,
                grid: {
                    color: "#FFFFFF",
                    borderColor: "#FFFFFF",
                },
                ticks: {
                    stepSize: 100,
                    color: 'red'
                }
            }
        },
        options: {
            // plugins: {
            legend: { display: false }
            // },
        },
        // scales: {
        //     yAxes: [{
        //         scaleLabel: {
        //             display: true,
        //             labelString: 'HR (Bpm)'
        //         },
        //         ticks: {
        //             mirror: true,
        //             padding: 220
        //         },
        //         layout: {
        //             padding: {
        //                 left: 220
        //             }
        //         }
        //     }]
        // },
        // options: {
        //     scales: {
        //       y: {
        //         ticks: {
        //           padding: 300,
        //           crossAlign: 'start'
        //         }
        //       }
        //     }
        //   },
        // scales: {
        //     y: {
        //         ticks: {
        //             crossAlign: 'far',
        //             padding: 30,
        //         }
        //     }
        // },

        // options:{
        //     display: true
        // },
        datasets: [
            {
                maxBarThickness: 20,
                backgroundColor: 'green',
                borderColor: 'transparent',
                borderRadius: { topRight: 7, bottomRight: 7 },
                data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190]
            }
        ],
        // options: {
        //     plugins: {

        //         datalabels: {


        //             formatter: (value, context) => {

        //                 console.log('******',value)
        //             }
        //         },
        //     }
        // }
        // options: {
        //     scales: {
        //         yAxes: [{ ticks: { mirror: true } }]
        //     }
        // },
        // options: {
        //     plugins: {
        //         datalabels: {
        //         enabled: true,
        //             formatter(value) {
        //                 console.log('@@@@@@@', value)
        //                 return context.chart.data.labels[context.dataIndex];
        //             }
        //         }
        //     }
        // },
        // options: {
        //     scales: {
        //         xAxes: [
        //             {
        //                 ticks: {
        //                     autoSkip: false,
        //                     maxRotation: 90,
        //                     minRotation: 90,
        //                     padding: -110
        //                 }
        //             }
        //         ]
        //     }
        // },
    
        // anchor: 'end',
        // align: 'end',

        // dataLabels: {
        //     enabled: true,
        //     formatter(val) {
        //         if (val === 275) {
        //             return val + '%'
        //         }
        //     }
        // },
    }

    // ** Chart data2
    const data2a = {
        labels: [
            '7sdafsdf',
            '8sdfzdcsdfsdfdfsdf',
            '9s',
            'as',
            '11asd',
            '12asdasda',
            '12asdasda',

        ],
        datasets: [
            {
                maxBarThickness: 20,
                backgroundColor: 'green',
                borderColor: 'transparent',
                borderRadius: { topRight: 9, bottomRight: 9 },
                data: [30, 50, 70, 20, 10, 80, 60]
            }
        ]
    }



    //y axis chart
    // ** Chart Options3
    const options3 = {
        indexAxis: 'y',
        type: 'bar',
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500 },
        elements: {
            bar: {
                borderRadius: {
                    topRight: 15,
                    bottomRight: 15
                }
            }
        },
        layout: {
            padding: { top: -4 }
        },
        scales: {
            x: {
                min: 0,
                grid: {
                    drawTicks: false,
                    color: gridLineColor,
                    borderColor: 'transparent'
                },
                ticks: { color: labelColor }
            },
            y: {
                grid: {
                    display: false,
                    borderColor: gridLineColor
                },
                ticks: { color: labelColor }
            }
        },
        plugins: {
            legend: {
                align: 'end',
                position: 'right',
                labels: { color: 'red' }
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                formatter: Math.round,
                font: {
                    weight: 'bold'
                }
            }

        },
        // options: {
        //     scales: {
        //         y: {
        //             ticks: {
        //                 callback: function (value, index, ticks) {
        //                     return '$' + value;
        //                 }
        //             }
        //         }
        //     },
        //     // legend: {
        //     //     position: 'right'
        //     // }
        // },
        options: {
            legend: {
                position: 'left'
            }
        }
    }

    // options: {
    //     legend: {
    //         position: 'right'
    //     }
    // }

    // ** Chart Data3
    const data3 = {
        labels: ['MON', 'TUE', 'WED ', 'THU', 'FRI'],
        datasets: [
            {
                maxBarThickness: 15,
                label: 'Market Data',
                backgroundColor: warning,
                borderColor: 'transparent',
                data: [710, 350, 580, 460, 120]
            },
            {
                maxBarThickness: 15,
                backgroundColor: info,
                label: 'Personal Data',
                borderColor: 'transparent',
                data: [430, 590, 510, 240, 360]
            }
        ]
    }




    // ** new option
    const newoption = {
        type: 'horizontalBar',


        responsive: true,
        indexAxis: 'y',
        maintainAspectRatio: false,
        animation: { duration: 500 },
        scales: {
            x: {
                grid: {
                    color: "#FFFFFF",
                    borderColor: "#FFFFFF"
                },
                ticks: { color: 'red' }
            },
            y: {
                min: 0,
                max: 600,
                grid: {
                    color: "#FFFFFF",
                    borderColor: "#FFFFFF",
                },
                ticks: {
                    stepSize: 100,
                    color: 'red'
                }
            }
        },
        // options: {
    
        //     legend: { display: false }
            
        // },
        // scales: {
        //     yAxes: [{
        //         scaleLabel: {
        //             display: true,
        //             labelString: 'HR (Bpm)'
        //         },
        //         ticks: {
        //             mirror: true,
        //             padding: 220
        //         },
        //         layout: {
        //             padding: {
        //                 left: 220
        //             }
        //         }
        //     }]
        // },
        // scales: {
        //     y: {
        //         ticks: {
        //             crossAlign: 'far',
        //         }
        //     }
        // },
        options: {
            legend: { display: false },
            plugins: {
              datalabels: {
                color: 'blue',
                labels: {
                  title: {
                    font: {
                      weight: 'bold'
                    }
                  },
                  value: {
                    color: 'green'
                  }
                }
              }
            }
          }
    
}

// ** new data
const newdata = {
    labels: [
        '7sdafsdf',
        '8sdf',
        '9s',
        '10sdfsdfsdfsdfd',
        '11asd',
        '12asdasda',

    ],
    datasets: [
        {
            maxBarThickness: 20,
            backgroundColor: 'green',
            borderColor: 'transparent',
            borderRadius: { topRight: 15, topLeft: 15 },
            data: [50, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190]
        }
    ]
}


return (
    <>
        <button onClick={() => setShow1(true)} className="sponsor-btntextbold1">Send Report</button>

        {/* <button onClick={() => setShow1(true)} className="sponsor-btntextbold2 sponsor-btn2">Manage Attending</button> */}
        <Modal show={show1} centered
            dialogClassName="custom-modal" onHide={() => setShow1(false)}>


            <Card>
                <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
                    <div>
                        <CardSubtitle className='text-muted mb-25'>Balance</CardSubtitle>
                    </div>
                </CardHeader>
                <CardBody>
                    <Chart options={options} series={series} type='bar' height={400} width={250} />
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <div style={{ height: '400px' }}>
                        <Bar data={newdata} options={newoption} height={400} />
                    </div>
                </CardBody>
            </Card>


            <div className="row">
                <div className="col-6">
                    {/* Chart js */}
                    <Card>
                        <CardBody>
                            <div style={{ height: '400px' }}>
                                <Bar data={data2} options={options2} height={400} />
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-6">
                    {/* Chart js */}
                    <Card>
                        <CardBody>
                            <div style={{ height: '500px' }}>
                                <Bar data={data2a} options={options2a} height={800} />
                            </div>
                        </CardBody>
                    </Card>
                </div>

            </div>





            {/* y axis chart js */}
            <Card>
                <CardBody>
                    <div style={{ height: '400px' }}>
                        <Bar data={data3} options={options3} height={400} />
                    </div>
                </CardBody>
            </Card>

        </Modal>
    </>
)
}

export default SponsorshipActiveEventSendReportTest