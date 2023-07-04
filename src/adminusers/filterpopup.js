import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import sortby from '../assets/images/dashboardimg/sorts.png'
import uparrow from '../assets/images/dashboardimg/uparrows.png'
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp} from "@react-icons/all-files/io/IoIosArrowUp";

import FilterAgeRange from './filteragerange'
import React, { useState } from "react"
import FilterLocation from './filterlocation'
import FilterInterests from './filterinterests'
import FilterPopularInterests from './filterpopularinterests'
import FilterGenderActivity from './filtergenderactivity'
import FilterLookingFor from './filterlookingfor'
import FilterRelationshipStatus from './filterrelationshipsstatus'
import FilterAttractedTo from './filterattractedto'
import FilterPronouns from './filterpronouns'
import FilterHometown from './filterhometown'
import FilterHeight from './filterheight'
import FilterEthinicity from './filterethinicity'
import FilterLanguages from './filterlanguages'
import FilterReligion from './filterreligion'
import FilterKids from './filterkids'
import FilterPolitics from './filterpolitics'
import FilterExercise from './filterexercise'
import FilterDrinking from './filterdrinking'
import { use } from 'i18next';

const Filterpopup = (props) => {
  
const [show,setShow]= useState(true);
const [popoverOpen, setPopoverOpen] = useState(false)
const [showLess, setshowLess] = useState(true);
const [min,setmin]=useState('')
const [gender,setgender]=useState('')
const [look,setlooks]=useState('')
const [max,setmax]=useState('')
    const changeShow = () => {
        setshowLess(!showLess);
       console.log(props.data)
      };
      const popoversss = () =>{
        setPopoverOpen(!popoverOpen)
        setshowLess(!showLess);
        
        console.log(min,max,gender,look)
        props.sendData({minval:min,maxval:max,gend:gender,looks:look})
      }
      const choosegenders=(messages)=>{
        setgender(messages)
console.log(messages)
      }
      const chooselooks = (messages) =>{
        setlooks(messages)
        console.log(messages)
      }
      const chooseMessage = (message) => {
       setmin(message.val)
       setmax(message.val1)
       console.log(message)
      };
    return (
        <div>
 <button className='btn_filter d-flex flex-row justify-content-flex-start align-items-center'  style={{border:"1px solid  #95E1BF",borderRadius:"10px",cursor:'pointer'}} onClick={() => changeShow(true)} id='popBottom'>
                <div className='col-10 d-flex justify-content-center'
                
                >
               
        <img src={sortby} width="18px" height="18px"/><span className='textalgn'>&nbsp;&nbsp;&nbsp;Filter By</span></div>
        <div className='col-1'>
        {showLess ? <div><IoIosArrowDown style={{width:"22px",height:"22px", color:"#003B4A"}}/></div> : <div><IoIosArrowDown style={{width:"22px",height:"22px", color:"#003B4A"}}/></div> }
{/* <IoIosArrowDown style={{width:"22px",height:"22px",color:"#003B4A"}}/> */}
</div>
        </button>&nbsp;&nbsp;&nbsp;
        {/*1. isOpen={popoverOpen} 2. <div><IoIosArrowUp style={{width:"22px",height:"22px",color:"#003B4A"}} /></div> */}
      <UncontrolledPopover toggle={() => setPopoverOpen(!popoverOpen)} placement='bottom' target='popBottom'   >
        <div className={`card p-2 d-block ${props.data==true? 'width_size1' : 'width_size'}`}style={{border:"1px solid  #95E1BF",borderRadius:"2px"}}>
      <div className='d-flex justify-content-between flex-row align-items-center  mb-3'>
    <span className='filter_by'>Filter By</span>
    <span className='clear_filter'>Clear Filters</span>
    </div>

    <FilterAgeRange  chooseMessage={chooseMessage} />
    <FilterLocation />
    <FilterInterests />
    <FilterPopularInterests />
   
<hr style={{color:"#CCD8DB"}}></hr>
<FilterGenderActivity  choosegender={choosegenders}/>
<hr style={{color:"#CCD8DB"}}></hr>
<FilterLookingFor />
<hr style={{color:"#CCD8DB"}}></hr>
<FilterRelationshipStatus choosefilter={chooselooks}/>
<hr style={{color:"#CCD8DB"}}></hr>
<FilterAttractedTo />
<hr style={{color:"#CCD8DB"}}></hr>

<FilterPronouns />
<hr style={{color:"#CCD8DB"}}></hr>
<FilterHometown />
<FilterHeight />

<hr className='mt-25' style={{color:"#CCD8DB"}}></hr>
<FilterEthinicity />
<hr style={{color:"#CCD8DB"}}></hr>
<FilterLanguages />
<hr style={{color:"#CCD8DB"}}></hr>
<FilterReligion />
<hr style={{color:"#CCD8DB"}}></hr>
<FilterKids />
<hr style={{color:"#CCD8DB"}}></hr>
<FilterPolitics />
<hr style={{color:"#CCD8DB"}}></hr>
<FilterExercise />
<hr style={{color:"#CCD8DB"}}></hr>
<FilterDrinking />


<div className='d-flex align-items-center justify-content-center mt-1 mb-3'>
    <button className='btn-applyy'  onClick ={popoversss}>
        <span className='font-applyy'>Apply</span>
    </button>
</div>

        </div>
      </UncontrolledPopover>  
      </div> 
       
    )
}
export default  Filterpopup