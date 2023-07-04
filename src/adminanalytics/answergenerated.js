import React from "react"
import Chart from 'react-apexcharts'
import dot1 from '../assets/images/dashboardimg/analytics_dot1.png'
import dot2 from '../assets/images/dashboardimg/analytics_dot2.png'
import dot3 from '../assets/images/dashboardimg/analytics_dot3.png'
import { ChevronDown } from "react-feather"
import 'chart.js/auto'
import ShowOthers from './seeotheranswerspopup'
import SendReport from "./sendanswerreport"
import { PieChart } from "react-minimal-pie-chart"
import sort from '../assets/images/dashboardimg/SortBy.png'
import ViewActiveUserDetail from "./viewactiveusers"
const AnswerGenerated = ({direction }) => {
    const data1 = [
        { title: "Yes", value:42, color: "#95E1BF", color1:dot1},
        { title: "No", value:104, color: "#003B4A", color1:dot3 }
      ]
      const options3 = {
        chart: {
          zoom: {
            enabled: false
          },
          parentHeightOffset: 0,
          toolbar: {
            show: false
          }
        },
    
        markers: {
          strokeWidth: 3,
          strokeOpacity: 1,
          strokeColors: ['#fff'],
          colors: ['#003B4A']
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2,
          curve: 'smooth'
        },
        colors: ["#95E1BF"],
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
        // tooltip: {
        //   // custom(data) {
        //   //   return `<div class='px-1 py-50'>
        //   //         <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
        //   //       </div>`
        //   }
        // },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
            
          ]
        },
        yaxis: {
         
          
        }
      }
    
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
            return val+ ' ' + '( 0.6%) '
            }
            if (val === 100) {
              return val+ ' ' + '( 40%) '
              }
              if (val === 70) {
                return val+ ' ' + '( 20%) '
                }
                if (val === 1) {
                  return val+ ' ' + '( 0.6%) '
                  }
        },

          offsetX:50,
          style: {
            fontFamily: 'Asap',
         fontWeight: 500,
         fontSize: "10px",
         lineHeight: "22px",
        colors: ['#003B4A']
           
        }
         
        },
       
        tooltip: {
          enabled:false
        },
        xaxis: {
     range:20,
        
          categories: [['Have never heard of it',''], ['Had heard of it but didn’t','know what it was',''], ['cost',''], ['Not that into comedy',''], ['Didn’t have other people', 'to go with',''], ['N/A - have not been to a', 'DTC show before']],
         
          labels:{
            position:'bottom',
            style: {
              colors: ['#003B4A'],
              fontSize: '11px',
              fontFamily: 'Asap',
              fontWeight:500
             
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
          position: 'top', 
         
          labels:{
            
            style: {
              colors: ['#003B4A'],
              fontSize: '11px',
              fontFamily: 'Asap',
              fontWeight:500
             
          }
        }
        }
      }
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
              position: 'top',

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
            return val+ ' ' + '( 0.6%) '
            }
            if (val === 100) {
              return val+ ' ' + '( 40%) '
              }
              if (val === 70) {
                return val+ ' ' + '( 20%) '
                }
                if (val === 1) {
                  return val+ ' ' + '( 0.6%) '
                  }
        },

          offsetX:50,
          style: {
            fontFamily: 'Asap',
         fontWeight: 500,
         fontSize: "10px",
         lineHeight: "22px",
        colors: ['#003B4A']
           
        }
         
        },
       
        tooltip: {
          enabled:false
        },
        xaxis: {
     range:20,
        
          categories: ['Instagram Ad', 'Google Search', 'Media Article', 'Friend', ['N/A - have not been to a', 'DTC show before']],
          labels:{
            style: {
              colors: ['#003B4A'],
              fontSize: '11px',
              fontFamily: 'Asap',
              fontWeight:500
             
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
          labels:{
            style: {
              colors: ['#003B4A'],
              fontSize: '11px',
              fontFamily: 'Asap',
              fontWeight:500
             
          }
        }
        }
      }
    
      // ** Chart Series
      const series = [
        {
          data: ["20 ()", "100 ()", "70 ()", "20 ()", "1 ()"]
        }
      ]
      const series1 = [
        {
          data: [20,20, 100, 1, 70, 20, 1]
        }
      ]
      const series2 = [
        {
          data: [20,20, 100, 1, 70, 20, 1]
        }
      ]
      const series3 = [
        {
          data: [70, 100, 100, 80, 50, 50, 70, 100, 100, 80, 50, 50]
        }
      ]
      
    return (
      <div>
     <div className=" mb-75 d-flex justify-content-between align-items-center pe-0 f_margin">   
      <span className="an">Answers Generated Per Event</span>
      <SendReport></SendReport>
    
      </div>
              <div className="col-4 disp d-flex flex-direction-column justify-content-center">
             
            <button  className="answer_button"><span className="align_answer">&nbsp;<img src={sort}></img><span className="style_font">&nbsp;&nbsp;&nbsp;<b>Event:</b> Don’t Tell Comedy Show</span>&nbsp;<ChevronDown className="lineheight" style={{width:"18px",height:"18px"}}></ChevronDown></span></button>
            
            </div>
            <div className="col-12 card mt-2 pt-2 px-3 d-flex flex-column card_look">
<span className="style_font">Question 1: <b>Have you ever been to a Don't Tell Comedy show?</b></span>
<span className="borders mt-1"></span>
<div className="row">
            <div className="col-4 m_adjusts">
          
        <div className=" parent" >
      <div className="text_parent">
        <span className="comparison">123</span><span className="break grp1">Total Responses</span> </div>
    
    
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
        <div className="col-8 d-flex justify-content-center flex-column">
        {data1.map(val => (
              <div className="col-4 mb-2 div_adjusts ">
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
<div className="row ">
  <div className="col-6 ">
    <div className="card pt-2 px-2 d-flex flex-column card_look">
    <span className="style_font">Question 2: <b>Because you selected yes, how did you find out about it?</b> Select all that apply.</span>
<span className="borders mt-1"></span>
<div className="d-flex justify-content-between mt-2">
  <span className="bgg">190 Answers</span>
 <ShowOthers></ShowOthers>
</div>
<div className="col-12 mb-2" style={{marginLeft:"-8px"}} >
<Chart className="col-12" options={options} series={series} type='bar' height={220} width={399} />
</div>
    </div>
  </div>
  <div className="col-6">
    <div className="card pt-2 px-2 d-flex flex-column card_look">
    <span className="style_font">Question 2: <b>Because you selected no, why not? </b>
<br></br>Select all that apply.</span>
<span className="borders mt-1"></span>
<div className="d-flex justify-content-between mt-2">
  <span className="bgg">190 Answers</span>
  <button className="small_ex_but"><span class="textanalytics">See “Other” Answers</span></button>
</div>
<div className="col-12 mb-2" style={{marginLeft:"-8px;"}}>
<Chart options={options1} series={series1} type='bar' height={220} width={390} />
</div>
    </div>
  </div>
</div>
<div className="  mb-2 d-flex justify-content-between align-items-center  pe-0">   
      <span className="an">Fees Generated from Events</span>
      <ViewActiveUserDetail></ViewActiveUserDetail>
      </div>
      <div className="row ">
  <div className="col-6 ">
    <div className="card pt-2 px-2 d-flex flex-column">
    <span className="s_graph">Fees Generated from All Hint</span>
    <span className="s_graph"> Social Events</span>
<span className="borders mt-1"></span> 
<div>
<Chart options={options3} series={series3} type='line' height={400} />
</div>
</div>
</div>
<div className="col-6 ">
    <div className="card pt-2 px-2  d-flex  flex-column">
      <div className="col-12 d-flex">
      <div className="col-7 ">
    <span className="s_graph">Fees Generated from Don’t Tell Comedy Show Event</span>
    </div>
    <div className="col-5 ">
    <button  className="answer_button p-0"><span className="align_answer"><img src={sort}></img><span className="style_font"><b>Event:</b> Don’t Tell...</span><ChevronDown className="lineheight"></ChevronDown></span></button>
  </div>
  </div>
<span className="borders mt-1"></span>  

  <div className="col-12">
<Chart options={options3} series={series3} type='line' height={400} />
</div>
</div>
</div>
</div>
</div> 


    )
}
export default AnswerGenerated