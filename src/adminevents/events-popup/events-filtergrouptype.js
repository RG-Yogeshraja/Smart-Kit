

import React from "react"


import { useState, useEffect } from "react"

import checkblankboxes from '../../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../../assets/images/dashboardimg/checktickbox.png'


const FilterEventsType = (props) => {
    const [tags, setTags] = useState([
        {id:0, naming:'Private Events', checking:false},
        {id:1, naming:'Public Events', checking:false},
        {id:2, naming:'Limited Spot Events', checking:false},
        {id:3, naming:'Open Events', checking:false},
        {id:4, naming:'Sponsored Events', checking:false},
        {id:5, naming:'Past Events', checking:false},
        {id:6, naming:'Hint Social Events', checking:false},
        {id:7, naming:'Non-Hint Social Events', checking:false}
        // {id:8,naming:'Live Events' ,checking:true},
        // {id:9,naming:'Hint Social Events Only',checking:true},
        // {id:10,naming:'Non-Hint Social Events Only',checking:true},
        
        
     ])
     
useEffect(() => {
  const vals = []
  const mu = tags.filter(res => res.checking === true)
  if (mu.length !== 0) {
   for (let i = 0; i < mu.length; i++) {
    vals.push(mu[i].naming)
   }
  }
  // props.getfilter(vals)
 
}, [])

    const handlechange = (index) => {
      const val = []
      const newTags = [...tags]
      if (newTags[index].checking === true) {
        newTags[index].checking = false
      } else {
        newTags[index].checking = true
      }
     
      setTags(newTags)
      
      const mu = newTags.filter(res => res.checking === true)
      if (mu.length !== 0) {
       for (let i = 0; i < mu.length; i++) {
        val.push(mu[i].naming)
       }
      }
      props.getfilter(val)
      props.handlechange(val)
    }
    
  
return (
    <>
    <div className="mt-1 mb-2">
        <span className="font-events">Event Type</span>
    </div>


<form className="row">
        {tags.map((items, index) => <div key={index} className="col-6">
           
           
            <div className='mb-2 d-flex align-items-center' >
     
     <img onClick={() => { handlechange(index) }} src={items.checking ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
     <span className="font-grptype13">{items.naming}</span>
       
       
       </div>
    
        
  </div>)}
          
</form>
    
   
</>
)
}

export default FilterEventsType