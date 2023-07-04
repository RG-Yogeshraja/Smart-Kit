import React , { useState} from "react";
// import { IoIosArrowDropdown } from "react-icons/io";
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown";
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup";

const FilterPronouns = () =>
{

    const [tags, setTags] = useState([
    {id:"1",naming:'she/her' ,checking:true},
    {id:"2",naming:'he/him',checking:true},
    {id:"3",naming:'they/them',checking:true},
    {id:"4",naming:'ze/zir',checking:true},
    {id:"5",naming:'xe/xim',checking:true},
    {id:"6",naming:'co/co',checking:true},
    {id:"7",naming:'ey/em',checking:true},
    {id:"8",naming:'ve/ver',checking:true},
    {id:"9",naming:'per/per',checking:true},
    {id:"10",naming:'Other',checking:true}

])
    const [showLess, setshowLess] = useState(true);

    const changeShow = () => {
        setshowLess(!showLess);
      };

      const handlechange = (index) => {
  
        const newTags = [...tags];
        if (newTags[index].checking === true)
        {
          newTags[index].checking = false
        }
        else
        {
          newTags[index].checking = true
        }
       
        setTags(newTags);
      };

    return(
        <>
         <div className='d-flex justify-content-between flex-row mb-2'>
        <span className='loc'>Pronouns</span> 
        <div onClick={changeShow}>{showLess ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{width:"22px",height:"22px", color:"#003B4A"}}/></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{width:"22px",height:"22px",color:"#003B4A"}} /></div>}</div>
        </div>
 
      
        <form className="row">
   
  
   
        {showLess ? 
        <>
        {tags.map((items, index) => <div key={index} className="col-4">
            {index== 0 || index==1 || index==2 ?
           
            <div className='mb-2 d-flex align-items-center' >
     
     <img onClick={() => {handlechange(index); }} src={items.checking ?checkblankboxes:checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
       <span className='fonting-style'>{items.naming} </span><br></br>
       
       
       </div>
      
       :""}
        
  </div> )}
  </>
  :
  <>
  {tags.map((items, index) => <div key={index} className="col-4">
  
  <div className='mb-2 d-flex align-items-center'>

  <img onClick={() => {handlechange(index); }} src={items.checking ?checkblankboxes:checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

<span className='fonting-style'>{items.naming} </span><br></br>


</div>

</div> )}

<div className='col-12 mb-1 placeholding'>
                <div className='d-flex align-items-center border_size'>
                <input className='w-100 height-range ms-1 text_search ' placeholder='&nbsp;&nbsp;&nbsp;&nbsp;Let us know what we are missing...'></input>
                
            </div>
        </div>


</>
  }
  
  
  
 
</form>

  

  
  
  
       

</>
    )
}

export default FilterPronouns