import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
// import sortby from '../assets/images/dashboardimg/sorts.png'
// import uparrow from '../assets/images/dashboardimg/uparrows.png'
import sortby from '../../assets/images/dashboardimg/sorts.png'
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown"
import { IoIosArrowUp} from "@react-icons/all-files/io/IoIosArrowUp"
import React, {useState} from 'react'
import checked from "../../assets/images/dashboardimg/checktickbox.png"
import checkblankbox from '../../assets/images/dashboardimg/checkblankbox.png'
import circle from '../../assets/images/dashboardimg/close-circle.png'
import plusicons from '../../assets/images/dashboardimg/plusicon.png'
import SponsorshipLocation from '../sponsorshipevents/sponsorshiplocation'
import '../../@core/scss/base/adminDashboard/groupsmenu/filtergrouppopup.scss'
import '../../@core/scss/base/adminDashboard/manageinterestt.scss'
import FiltergrpWithin from '../../admingroups/groupspopup/filtergrpheight'
import FilterPopularInterests from '../../adminusers/filterpopularinterests'
import FilterGroupInterests from '../../admingroups/groupspopup/fitergrpinterests'
import '../../@core/scss/base/adminDashboard/editprofilepopup.scss'
import '../../@core/scss/base/adminDashboard/adminmenu/adminusersdetail.css'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoreventsmenu/sponsorshipmanagesettingtag.scss'
const Groupsfilterpopup = (props) => {
  const [hide, setUnhide] = useState(false)

const [popoverOpen, setPopoverOpen] = useState(false)
const [showLess, setshowLess] = useState(true)
const [min] = useState('')

const [look] = useState('')
const [max] = useState('')
const [groups, setgroups] = useState([

{id:"2", name:"Active Groups", checked:false},
{id:"3", name:"Deleted Groups", checked:false},
{id:"4", name:"Private Groups", checked:false},
{id:"5", name:"Public Groups", checked:false},
{id:"6", name:"Non-Hint Social Groups", checked:false},
{id:"7", name:"Hint Social Groups", checked:false}
])
const [spots, setspots] =  useState([
  {id:"11", name:"Available", checked:false},
  {id:"12", name:"Filled", checked:false}
])
const [eventname, seteventname] =  useState([
  {id:"1", name:"Alphabetical A-Z", checked:false},
  {id:"2", name:"Alphabetical Z-A", checked:false}
])
const [eventdate, setdate] =  useState([
  {id:"1", name:"Newest to Oldest", checked:false},
  {id:"2", name:"Oldest to Newest", checked:false}
])
const [eventdate1, setdate1] =  useState([
  {id:"3", name:"Newest to Oldest", checked:false},
  {id:"4", name:"Oldest to Newest", checked:false}
])
const [getmember, setmember] =  useState([
  {id:"1", name:"Most to Least", checked:false},
  {id:"2", name:"Least to Most", checked:false}
])
const [getcost, setcost] =  useState([
  {id:"1", name:"Lowest to Highest", checked:false},
  {id:"2", name:"Highest to Lowest", checked:false}
])
const [getcost1, setcost1] =  useState([
    {id:"1", name:"Highest to Lowest", checked:false},
    {id:"2", name:"Lowest to Highest", checked:false}
  ])


const [tags, setTags] = useState(['Comedy Crew'])
const checkboxtrigger = (i) => {
  const newTags = [...groups]
  if (newTags[i].checked === true) {
    newTags[i].checked = false
  } else {
    newTags[i].checked = true
  }
 
  setgroups(newTags)
}
const checkboxeventtrigger = (i, e) => {
  let newTags1
  if (e === "member") {
  newTags1 = [...getmember]
  } else if (e === "spname") {
    newTags1 = [...eventname]
  } else if (e === "cost") {
    newTags1 = [...getcost]
  } else if (e === "cost1") {
    newTags1 = [...getcost1]
  }
  if (newTags1[i].checked === true) {
    newTags1[i].checked = false
  } else {
    newTags1[i].checked = true
  }
  if (e === "member") {
   setmember(newTags1)
    } else if (e === "spname") {
      seteventname(newTags1)
    } else if (e === "cost") {
      setcost(newTags1)
    } else if (e === "cost1") {
        setcost1(newTags1)
      }
}
const checkboxspot = (i) => {
  const newTags1 = [...spots]
  if (newTags1[i].checked === true) {
    newTags1[i].checked = false
  } else {
    newTags1[i].checked = true
  }
 
  setspots(newTags1)
}
const checkboxevent = (i, e) => {
  let newTags2
  if (e === "event") {
newTags2 = [...eventname]
  } else if (e === "eventname") {
  newTags2 = [...eventdate]
  } else if (e === "eventcreate") {
    newTags2 = [...eventdate1]
    }
  if (newTags2[i].checked === true) {
    newTags2[i].checked = false
  } else {
    newTags2[i].checked = true
  }
  if (e === "event") {
    seteventname(newTags2)
      } else if (e === "eventname") {
        setdate(newTags2)
      } else if (e === "eventcreate") {
        setdate1(newTags2)
        }
 
}
const clickhide = () => {
if (hide === false) {
  setUnhide(true)
} else {
  setUnhide(false)
}
}
    const changeShow = () => {
        setshowLess(!showLess)
       console.log(props.data)
      }
      const [tagInput, setTagInput] = useState('')
      const handleAdd = () => {
          if (tagInput) {
            setTags(prevTags => [...prevTags, tagInput])
          }
          setTagInput('')
          setShowAddInput(false)
        }
      
        const handleRemove = index => {
          setTags(prevTags => {
            const tags = [...prevTags]
            tags.splice(index, 1)
            return tags
          })
        }
      const popoversss = () => {
        setPopoverOpen(!popoverOpen)
        setshowLess(!showLess)
        
        console.log(min, max, gender, look)
        props.sendData({minval:min, maxval:max, gend:gender, looks:look})
      }

    return (
        <div>
 <button className='btn_filter1 d-flex flex-row  align-items-center p-1'  style={{border:"1px solid  #95E1BF", borderRadius:"10px", cursor:'pointer'}} onClick={() => changeShow(true)} id='popBottom'>
                <div className='col-10 d-flex justify-content-start'
                
                >
               
        <img src={sortby} width="18px" height="18px"/>&nbsp;&nbsp;<span className='textalgn'>Filter By</span></div>
        <div className='col-1'>
        {showLess ? <div><IoIosArrowDown style={{width:"22px", height:"22px", color:"#003B4A"}}/></div> : <div><IoIosArrowUp style={{width:"22px", height:"22px", color:"#003B4A"}} /></div>}
{/* <IoIosArrowDown style={{width:"22px",height:"22px",color:"#003B4A"}}/> */}
</div>
        </button>&nbsp;&nbsp;&nbsp;
      
      <UncontrolledPopover isOpen={popoverOpen} toggle={() => setPopoverOpen(!popoverOpen)} placement='bottom' target='popBottom'   >
        <div className={`card card_detail p-2 d-block ${props.data === true ? 'width_size1' : 'width_size'}`}style={{border:"1px solid  #95E1BF", borderRadius:"15px"}}>
      <div className='d-flex justify-content-between flex-row align-items-center'>
    <span className='filter_by'>Filter By</span>
    <span className='clear_filter'>Clear Filters</span>
    </div>
    <div className='mt-2'>
  <span className='copy_as_text'>Group Type</span>
</div>
<div className=''>
<div className='row'>
{groups.map((data, index) => {

                                    return (
 <div className='col-6 d-flex align-items-center mt-2'>
  <img className='me-25' onClick={() => checkboxtrigger(index)} src={data.checked === true ? checked : checkblankbox} width="20px" height="20px"></img>
  <span className='text_font_checkbox'>{data.name}</span>
  </div>                                     

                                    )
})
}

</div>
</div>
<hr style={{borderTop:"1px solid #CCD8DB"}} className="mt-2"></hr>

<div className='mt-2'>
  <span className='copy_as_text'>Location</span>
</div>
<SponsorshipLocation></SponsorshipLocation>
<FiltergrpWithin></FiltergrpWithin>
<hr style={{borderTop:"1px solid #CCD8DB"}} className="mt-2"></hr>

<FilterGroupInterests ></FilterGroupInterests>
<FilterPopularInterests></FilterPopularInterests>
<hr style={{borderTop:"1px solid #CCD8DB"}} className="mt-2"></hr>
<div className=''>
  <span className='copy_as_text'>Sort by</span>
</div>
<div className='mt-2'>
  <span className='copy_as_text'>Group Name</span>
</div>
<div className='row mt-1'>
{eventname.map((data, index) => {

                                    return (
 <div className='col-6 d-flex align-items-center'>
  <img className='me-25' onClick={() => checkboxevent(index, "event")} src={data.checked === true ? checked : checkblankbox} width="20px" height="20px"></img>
  <span className='text_font_checkbox'>{data.name}</span>
  </div>                                     

                                    )
})
}

</div>
<hr style={{borderTop:"1px solid #CCD8DB"}} className="mt-2"></hr>
<div className='mt-2'>
  <span className='copy_as_text'>Group Creation Date</span>
</div>
<div className='row mt-1'>
{eventdate.map((data, index) => {

                                    return (
 <div className='col-6 d-flex align-items-center'>
  <img className='me-25' onClick={() => checkboxevent(index, "eventname")} src={data.checked === true ? checked : checkblankbox} width="20px" height="20px"></img>
  <span className='text_font_checkbox'>{data.name}</span>
  </div>                                     

                                    )
})
}

</div>
<hr style={{borderTop:"1px solid #CCD8DB"}} className="mt-2"></hr>
<div className='mt-2'>
  <span className='copy_as_text'>Group Post Date</span>
</div>
<div className='row mt-1'>
{eventdate1.map((data, index) => {

                                    return (
 <div className='col-6 d-flex align-items-center'>
  <img className='me-25' onClick={() => checkboxevent(index, "eventcreate")} src={data.checked === true ? checked : checkblankbox} width="20px" height="20px"></img>
  <span className='text_font_checkbox'>{data.name}</span>
  </div>                                     

                                    )
})
}
</div>
<hr style={{borderTop:"1px solid #CCD8DB"}} className="mt-2"></hr>
<div className='mt-2'>
  <span className='copy_as_text'>Number of Posts</span>
</div>
<div className='row mt-1'>
{getcost1.map((data, index) => {

                                    return (
 <div className='col-6 d-flex align-items-center'>
  <img className='me-25' onClick={() => checkboxeventtrigger(index, "cost1")} src={data.checked === true ? checked : checkblankbox} width="20px" height="20px"></img>
  <span className='text_font_checkbox'>{data.name}</span>
  </div>                                     

                                    )
})
}

</div>

<hr style={{borderTop:"1px solid #CCD8DB"}} className="mt-2"></hr>
<div className='mt-2'>
  <span className='copy_as_text'>Number of Groups Members</span>
</div>
<div className='row mt-1'>
{getmember.map((data, index) => {

                                    return (
 <div className='col-6 d-flex align-items-center'>
  <img className='me-25' onClick={() => checkboxeventtrigger(index, "member")} src={data.checked === true ? checked : checkblankbox} width="20px" height="20px"></img>
  <span className='text_font_checkbox'>{data.name}</span>
  </div>                                     

                                    )
})
}

</div>
<hr style={{borderTop:"1px solid #CCD8DB"}} className="mt-2"></hr>
<div className='mt-2'>
  <span className='copy_as_text'>Sponsor Name</span>
</div>
<div className='row mt-1'>
{eventname.map((data, index) => {

                                    return (
 <div className='col-6 d-flex align-items-center'>
  <img className='me-25' onClick={() => checkboxeventtrigger(index, "spname")} src={data.checked === true ? checked : checkblankbox} width="20px" height="20px"></img>
  <span className='text_font_checkbox'>{data.name}</span>
  </div>                                     

                                    )
})
}

</div>
<hr style={{borderTop:"1px solid #CCD8DB"}} className="mt-2"></hr>
<div className='mt-2'>
  <span className='copy_as_text'>Total Sponsorship Cost</span>
</div>
<div className='row mt-1'>
{getcost.map((data, index) => {

                                    return (
 <div className='col-6 d-flex align-items-center'>
  <img className='me-25' onClick={() => checkboxeventtrigger(index, "cost")} src={data.checked === true ? checked : checkblankbox} width="20px" height="20px"></img>
  <span className='text_font_checkbox'>{data.name}</span>
  </div>                                     

                                    )
})
}

</div>
<div className='d-flex align-items-center justify-content-center mt-3'>

    <button className='btn-applyy'  onClick ={popoversss}>
        <span className='font-applyy'>Apply</span>
    </button>
</div>

        </div>
      </UncontrolledPopover>  
      </div> 
       
    )
}
export default  Groupsfilterpopup