
import 'chart.js/auto'
import { PieChart } from "react-minimal-pie-chart"
import Chart from 'react-apexcharts'
import dot1 from '../assets/images/dashboardimg/analytics_dot1.png'
import dot2 from '../assets/images/dashboardimg/analytics_dot2.png'
import dot3 from '../assets/images/dashboardimg/analytics_dot3.png'
const SponsershipAnalytics = ({ direction }) => {
    const data = [
        { title: "Active Sponsored", value:342, color: "#95E1BF", color1:dot1 ,value1:342},
        { title: "Past Sponsored", value:104, color: "#003B4A", color1:dot3 ,value1:342 }
       
      ]
      const series3 = [
        {
          data: [70, 100, 100, 80, 50, 50, 70, 100, 100, 80, 50, 50]
        }
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
    
    return (
        <div>
        <div className='col-12 aligncenter'>
        <span className="analyticsfontstyle mb-1">Sponsorship Analytics</span>
       </div>
       <div className="row mt-1">
        <div className="col-6">
<div className="card d-flex justify-content-center flex-column">
<div className="parent" >
      <div className="text_parent">
        <span className="comparison">123</span><span className="break grp">Sponsored<br></br> Events</span> </div>
    
    <div>
          <PieChart
          
            animate
            animationDuration={40}
            animationEasing="ease-in"
       
            data={data}
            lineWidth={20}
            lengthAngle={360}
            paddingAngle={0}
            radius={32}
            rounded
            startAngle={-120}
            endAngle={150}
            />
            </div>
            </div>
            <div className="col-12 d-flex justify-content-center flex-column p-1">
        
               {data.map(val => (
     <div className="div_bg1 col-11 mx-75 mb-1">
     <div className="d-flex flex-row"> 
     <div className="col-2 flexlay1 ">        
 <img className="mt-50" src={val.color1} width="55px" height='55px' ></img></div>
 <div className="col-8 d-flex align-items-center" style={{marginLeft:"-6%"}} >  
 <span className="small_text">{val.title} Events</span></div>
 <div className="col-2 d-flex justify-content-end align-items-center" >
 <span className="small_text1" >&nbsp;&nbsp;{val.value}</span></div>
 
     </div>
 
 </div>    
              ))}
        </div>
</div>
        </div>
        <div className="col-6 ">
    <div className="card pt-2 px-3 d-flex flex-column">
    <span className="s_graph">Revenue Generated from</span>
    <span className="s_graph"> Sponsored Events</span>
<span className="borders mt-1"></span> 
<div>
<Chart options={options3} series={series3} type='line' height={400} />
</div>
</div>
</div>
      </div>
      <div className="row mt-1">
      <div className="col-6">
<div className="card d-flex justify-content-center flex-column">
<div className="parent" >
      <div className="text_parent">
        <span className="comparison">123</span><span className="break grp">Sponsored <br></br> Groups</span> </div>
    
    <div>
          <PieChart
          
            animate
            animationDuration={40}
            animationEasing="ease-in"
       
            data={data}
            lineWidth={20}
            lengthAngle={360}
            paddingAngle={0}
            radius={33}
            rounded
            startAngle={-120}
            endAngle={150}
            />
            </div>
            </div>
            <div className="col-12 d-flex justify-content-center flex-column p-1">
        
                {data.map(val => (
     <div className="div_bg1 col-11 mx-75 mb-1">
     <div className="d-flex flex-row"> 
     <div className="col-2 flexlay1 ">        
 <img className="mt-50" src={val.color1} width="55px" height='55px' ></img></div>
 <div className="col-8 d-flex align-items-center" style={{marginLeft:"-6%"}} >  
 <span className="small_text">{val.title} Groups</span></div>
 <div className="col-2 d-flex justify-content-end align-items-center" >
 <span className="small_text1" >&nbsp;&nbsp;{val.value}</span></div>
 
     </div>
 
 </div>    
              ))}
              
        </div>
</div>
        </div>
        <div className="col-6 ">
    <div className="card pt-2 px-3 d-flex flex-column">
    <span className="s_graph">Revenue Generated from</span>
    <span className="s_graph"> Sponsored Groups</span>
<span className="borders mt-1"></span> 
<div>
<Chart options={options3} series={series3} type='line' height={400} />
</div>
</div>
</div>
      </div>
      <div className="row mt-1">
      <div className="col-6">
<div className="card d-flex justify-content-center flex-column ">
<div className="parent " >
      <div className="text_parent">
        <span className="comparison">123</span><span className="break grp">Sponsored <br></br> Posts</span> </div>
    
    <div >
          <PieChart
          
            animate
            animationDuration={40}
            animationEasing="ease-in"
       
            data={data}
            lineWidth={20}
            lengthAngle={360}
            paddingAngle={0}
            radius={33}
            rounded
            startAngle={-120}
            endAngle={150}
            />
            </div>
            </div>
            <div className="col-12 d-flex justify-content-center flex-column p-1">
            {data.map(val => (
     <div className="div_bg1 col-11 mx-75 mb-1">
     <div className="d-flex flex-row"> 
     <div className="col-2 flexlay1 ">        
 <img className="mt-50" src={val.color1} width="55px" height='55px' ></img></div>
 <div className="col-8 d-flex align-items-center" style={{marginLeft:"-6%"}} >  
 <span className="small_text">{val.title} Posts</span></div>
 <div className="col-2 d-flex justify-content-end align-items-center" >
 <span className="small_text1" >&nbsp;&nbsp;{val.value}</span></div>
 
     </div>
 
 </div>    
              ))}
        </div>
</div>
        </div>
        <div className="col-6 ">
    <div className="card pt-2 px-3 d-flex flex-column">
    <span className="s_graph">Revenue Generated from</span>
    <span className="s_graph"> Sponsored Posts</span>
<span className="borders mt-1"></span> 
<div>
<Chart options={options3} series={series3} type='line' height={400} />
</div>
</div>
</div>
      </div>
      </div>
    )
}
export default SponsershipAnalytics