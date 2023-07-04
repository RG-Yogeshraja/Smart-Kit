import React, { useState} from "react"
// import { IoIosArrowDropdown } from "react-icons/io";
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"

const FilterRelationshipStatus = () => {

    const [tags, setTags] = useState([
    {id:"1", naming:'Single ', checking:true},
    {id:"2", naming:'In a Relationship', checking:true, css:{marginLeft:'-23px'}},
    {id:"3", naming:'Married', checking:true},
    {id:"4", naming:'Engaged', checking:true},
    {id:"5", naming:'It’s Complicated', checking:true, css:{marginLeft:'-23px'}},
    {id:"6", naming:'ENM', checking:true},
    {id:"7", naming:'Divorced', checking:true},
    {id:"8", naming:'Separated', checking:true, css:{marginLeft:'-23px'}},
    {id:"9", naming:'Widowed', checking:true}

])
    const [showLess, setshowLess] = useState(true)

    const changeShow = () => {
      if (showLess === true) {
        setshowLess(false)
      } else {
        setshowLess(true)
      }
      }
      const handlechange = (index) => {
  
        const newTags = [...tags]
        if (newTags[index].checking === true) {
          newTags[index].checking = false
        } else {
          newTags[index].checking = true
        }
       
        setTags(newTags)
      }
    return (
        <>
         <div className='d-flex justify-content-between flex-row mb-2'>
        <span className='loc'>Relationship Status</span> 
        <div onClick={changeShow}>{showLess ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{width:"22px", height:"22px", color:"#003B4A"}}/></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{width:"22px", height:"22px", color:"#003B4A"}} /></div>}</div>
        </div>
 
      
        <form className="row">
  
   
        {showLess ? <>
        {tags.map((items, index) => <div key={index} className="col-4">
            {index == 0 || index == 1 || index == 2 ? <div className='mb-2 d-flex align-items-center' style={items.css}>
     
     <img onClick={() => { handlechange(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
       <span className='fonting-style col-9'>{items.naming} </span><br></br>
       
       
       </div> : ""}
        
  </div>)}
  </> : <>
  {tags.map((items, index) => <div key={index} className="col-4">
  
  <div className='mb-2 d-flex align-items-center' style={items.css}>

  <img onClick={() => { handlechange(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

<span className='fonting-style col-9'>{items.naming} </span><br></br>


</div>

</div>)}
</>
  }
  
 
</form>
       

</>
    )
}

export default FilterRelationshipStatus