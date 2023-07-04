import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import '../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss'
import dot1 from '../assets/images/dashboardimg/analytics_dot1.png'
import dot3 from '../assets/images/dashboardimg/analytics_dot3.png'
import { PieChart } from "react-minimal-pie-chart"
import person1 from '../assets/images/dashboardimg/users1.png'
import person4 from '../assets/images/dashboardimg/users2.png'
import person2 from '../assets/images/dashboardimg/users3.png'
import person3 from '../assets/images/dashboardimg/userfriend3.png'
import loc from '../assets/images/dashboardimg/location.png'
import dot from '../assets/images/dashboardimg/Ellipse11.png'
import cake from '../assets/images/dashboardimg/birthdaycakefire.png'
import exite from '../assets/images/dashboardimg/analyticsexite.png'
import Chart from 'react-apexcharts'
import Exportcsv from './Exportcsv'
function SendReport() {
  const [show, setShow] = useState(false)

  const handleClose = (e) => {
    if (e === "dat") {
      
      setShow(false)
    }
  }
  const handleShow = () => {

    setShow(true)
  }
  const [json, setjson] = useState([
    { img: person1, pname: "Justin Rosser", name: "South End, Boston", location: loc, cakes: cake, value: "30", answer1: "1. Have you ever been to a Don't Tell Comedy show?", answer2: "2. Because you selected yes, how did you find out about it?", known: "Google search", ans: "Yes", width: "0px", height: "0px", width1: '0px', height1: '0px' },
    { img: person2, pname: "Alex Hardy", name: "Abington", location: loc, cakes: cake, value: "34", answer1: "1. Have you ever been to a Don't Tell Comedy show?", answer2: "2. Because you selected no, why not?", known: "Other - Relatives", ans: "No", width: "0px", height: "0px", width1: '0px', height1: '0px' },
    { img: person3, pname: "Giana Bergson", name: "Worcester", location: loc, cakes: cake, value: "25", answer1: "1. Have you ever been to a Don't Tell Comedy show?", answer2: "2. Because you selected no, why not?", known: "N/A - have never been to DTC", ans: "No", dots: dot, names: 'Really excited!!', ing: exite, width: "4px", height: "4px", width1: '15px', height1: '15px' },
    { img: person4, pname: "Amy Delacruz", name: "Abington", location: loc, cakes: cake, value: "34", answer1: "1. Have you ever been to a Don't Tell Comedy show?", answer2: "2. Because you selected yes, how did you find out about it?", known: "Google search", ans: "Yes", width: "0px", height: "0px", width1: '0px', height1: '0px' }
  ])
  const options = {
    chart: {
      width: '100%',
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },

    plotOptions: {
      bar: {


        horizontal: true,
        barHeight: '50%',
        borderRadius: 8,
        columnWidth: '75%',
        borderRadiusApplication: 'end',
        dataLabels: {
          position: 'top'

        }
      }
    },
    grid: {
      xaxis: {

        lines: {
          show: false

        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    colors: "#003B4A",
    dataLabels: {
      enabled: true,
      formatter(val) {

        if (val === 20) {
          return `${val} ` + `( 0.6%) `
        }
        if (val === 100) {
          return `${val} ` + `( 40%) `
        }
        if (val === 70) {
          return `${val} ` + `( 20%) `
        }
        if (val === 1) {
          return `${val} ` + `( 0.6%) `
        }
      },

      offsetX: 50,
      style: {
        fontFamily: 'Asap',
        fontWeight: 500,
        fontSize: "10px",
        lineHeight: "22px",
        colors: ['#003B4A']

      }

    },

    tooltip: {
      enabled: false
    },
    xaxis: {
      range: 20,

      categories: ['Instagram Ad', 'Google Search', 'Media Article', 'Friend', ['N/A - have not been to a', 'DTC show before']],
      labels: {
        style: {
          colors: ['#003B4A'],
          fontSize: '11px',
          fontFamily: 'Asap',
          fontWeight: 500


        }
      }
    },
    axisBorder: {
      show: true,
      color: '#78909C',
      height: 1,
      width: '100%',
      offsetX: 0,
      offsetY: 0
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#78909C',
      height: 6,
      offsetX: 0,
      offsetY: 0
    },
    yaxis: {
      forceNiceScale: true,
      labels: {
        style: {
          colors: ['#003B4A'],
          fontSize: '11px',
          fontFamily: 'Asap',
          fontWeight: 500

        }
      }
    }
  }
  const series = [
    {
      data: ["20 ()", "100 ()", "70 ()", "20 ()", "1 ()"]
    }
  ]
  const options1 = {
    chart: {
      width: '100%',
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },

    plotOptions: {
      bar: {


        horizontal: true,
        barHeight: '70%',
        borderRadius: 8,
        columnWidth: '75%',
        borderRadiusApplication: 'end',
        dataLabels: {
          position: 'top'

        }
      }
    },
    grid: {
      xaxis: {

        lines: {
          show: false

        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    colors: "#003B4A",
    dataLabels: {
      enabled: true,
      formatter(val) {

        if (val === 20) {
          return `${val} ` + `( 0.6%) `
        }
        if (val === 100) {
          return `${val} ` + `( 40%) `
        }
        if (val === 70) {
          return `${val} ` + `( 20%) `
        }
        if (val === 1) {
          return `${val} ` + `( 0.6%) `
        }
      },

      offsetX: 50,
      style: {
        fontFamily: 'Asap',
        fontWeight: 500,
        fontSize: "10px",
        lineHeight: "22px",
        colors: ['#003B4A']

      }

    },

    tooltip: {
      enabled: false
    },
    xaxis: {
      range: 20,

      categories: [['Have never heard of it', ''], ['Had heard of it but didn’t', 'know what it was', ''], ['cost', ''], ['Not that into comedy', ''], ['Didn’t have other people', 'to go with', ''], ['N/A - have not been to a', 'DTC show before']],

      labels: {
        position: 'bottom',
        style: {
          colors: ['#003B4A'],
          fontSize: '11px',
          fontFamily: 'Asap',
          fontWeight: 500

        }
      }
    },
    axisBorder: {
      show: true,
      color: '#78909C',
      height: 1,
      width: '100%',
      offsetX: 0,
      offsetY: 0
    },
    axisTicks: {
      show: false,
      borderType: 'solid',
      color: '#78909C',
      height: 6,
      offsetX: 0,
      offsetY: 0
    },
    yaxis: {
      forceNiceScale: true,
      position: 'top',
      tickAmount: 6,
      labels: {

        style: {
          colors: ['#003B4A'],
          fontSize: '11px',
          fontFamily: 'Asap',
          fontWeight: 500

        }
      }
    }
  }
  const series1 = [
    {
      data: [20, 20, 100, 1, 70, 20, 1]
    }
  ]
  const data1 = [
    { title: "Yes", value: 42, color: "#95E1BF", color1: dot1 },
    { title: "No", value: 104, color: "#003B4A", color1: dot3 }
  ]

  return (
    <>
      <button class="exportbuttons_ans" style={{ width: "24%" }}><span class="textanalytics_ans" onClick={handleShow}>Send Answer Report</span></button>
      <Modal className="ajai"
        show={show}
        centered
        // size='lg'
        dialogClassName="flx"


        onHide={handleClose}>
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center">
            <span className="answerreport">Answers Report</span>
            <span className="comedyshow">Don’t Tell Comedy Show</span>
          </div>
          <div className="mt-1">
            <span className="comedyshow">Overview Report</span>
          </div>
          <div className="col-12 card mt-2 pt-2 px-3 d-flex flex-column card_look">
            <span className="style_font">Question 1: <b>Have you ever been to a Don't Tell Comedy show?</b></span>
            <span className="borders mt-1"></span>
            <div className="row">
              <div className="col-7 m_adjusts">

                <div className=" parent" >
                  <div className="text_parent">
                    <span className="comparison">123</span><span className="break aqone">Total Responses</span> </div>


                  <PieChart

                    animate
                    animationDuration={40}
                    animationEasing="ease-in"

                    data={data1}
                    lineWidth={20}
                    lengthAngle={360}
                    paddingAngle={0}
                    radius={30}
                    rounded
                    startAngle={-120}
                    endAngle={150}
                  />
                </div>

              </div>
              <div className="col-5 d-flex justify-content-center flex-column">
                {data1.map(val => (
                  <div className="col-12 mb-2 div_adjusts ">
                    <div className="col-2 d-flex align-items-center  ">
                      <img className="mt-50" src={val.color1} width="55px" height='55px' ></img></div>&nbsp;
                    <div className="col-7 d-flex align-items-center" >
                      <span className="small_text">{val.title}</span></div>
                    <div className="col-2 d-flex align-items-center justify-content-end me-1" >
                      <span className="small_text1" >&nbsp;&nbsp;{val.value}</span></div>
                  </div>
                  //   <div className="col-4 flexss1 div_adjust1 mb-2 p-0">
                  //     <ul className="ma col-3">
                  //  <li className="clss" style={{color:val.color}}></li></ul><span className="adjust small_text col-7">{val.title}</span>
                  //     <span className="small_text adjt " >{val.value}</span>

                  //     </div> 
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 ">
            <div className="card pt-2 px-2 d-flex flex-column card_look">
              <span className="style_font">Question 2: <b>Because you selected yes, how did you find out about it?</b> Select all that apply.</span>
              <span className="borders mt-1"></span>
              <div className="d-flex justify-content-end mt-2">
                <span className="bgg">190 Answers</span>
              </div>
              <div className="col-12 " style={{ marginLeft: "-8px", marginTop: "-44px" }} >
                <Chart className="col-12" options={options} series={series} type='bar' height={220} width={420} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card pt-2 px-2 d-flex flex-column card_look">
              <span className="style_font">Question 2: <b>Because you selected no, why not? </b>
                Select all that apply.</span>
              <span className="borders mt-1"></span>
              <div className="d-flex justify-content-end mt-2">
                <span className="bgg">190 Answers</span>

              </div>
              <div className="col-12 mb-2" style={{ marginLeft: "-8px", marginTop: "-44px" }}>
                <Chart options={options1} series={series1} type='bar' height={220} width={420} />
              </div>
            </div>
          </div>
          <div>
            <span className="comedyshow">Individual User Report</span>
          </div>
          <div className="scrollbar mt-2" id="style-2">
            {json.map((val, index) => {
              return (
                <div className=" row ">
                  <div className="col-1">
                    <img src={val.img} width="50px" height="50px">

                    </img></div>
                  <div className="col-11">
                    <div className="ms-1 mt-50 d-flex flex-row align-items-center"> &nbsp;
                      <span className="topname">{val.pname}</span>&nbsp;<img src={val.dots} width={val.width} height={val.height}></img> &nbsp;&nbsp;<img src={val.ing} width={val.width1} height={val.height1}></img> <span className="analytics_really ms-25">{val.names}</span>
                    </div>
                    <div className="d-flex flex-row align-items-center ms-1 mt-25">
                      <img src={val.location} width="15px" height="15px"></img>&nbsp;<span className="topva">{val.name}</span>&nbsp;<img src={dot} width="4px" height="4px"></img> <img className="ms-25" src={val.cakes} width="12px" height="12px">


                      </img>&nbsp;<span className="topva">{val.value}</span>
                    </div>

                  </div>
                  <div className="d-flex justify-content-between mt-1">
                    <span className="classans">{val.answer1}</span>
                    <span className="valans me-2">{val.ans}</span>
                  </div>
                  <div className="d-flex justify-content-between mt-1">
                    <span className="classans">{val.answer2}</span>
                    <span className="valans me-2">{val.known}</span>
                  </div>
                  <div className="mt-50" style={{ display: index !== json.length - 1 ? '' : 'none' }}>
                    <hr style={{ border: "1px solid #CCD8DB", width: "96%" }}></hr>
                  </div>

                </div>

              )

            }
            )}

          </div>
          <div className="mt-3 col-12 ">
            <button onClick={() => handleClose("dat")} className=' closebuttonuser   col-6' style={{ width: "45%" }}>Close</button>

            <Exportcsv clickhandle={() => handleClose("dat")} data="Export" ></Exportcsv>

          </div>
        </div>
      </Modal>
    </>
  )
}
export default SendReport