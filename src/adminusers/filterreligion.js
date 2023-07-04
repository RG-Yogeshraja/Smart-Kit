import React , { useState} from "react";
// import { IoIosArrowDropdown } from "react-icons/io";
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown";
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup";

const FilterReligion = () =>
{

    const [tags, setTags] = useState([
    {id:"1",naming:'Agnostic' ,checking:true},
    {id:"2",naming:'Atheist',checking:true},
    {id:"3",naming:'Buddhist',checking:true},
    {id:"4",naming:'Catholic',checking:true},
    {id:"5",naming:'Christian',checking:true},
    {id:"6",naming:'Hindu',checking:true},
    {id:"7",naming:'Jain',checking:true},
    {id:"8",naming:'Jewish',checking:true},
    {id:"9",naming:'Mormon',checking:true},
    {id:"10",naming:'Muslim',checking:true},
    {id:"11",naming:'Sikh',checking:true},
    {id:"12",naming:'Spiritual',checking:true},
    {id:"13",naming:'Zoroastrian',checking:true},
    {id:"14",naming:'Other',checking:true},
 

])

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
    const [showLess, setshowLess] = useState(true);

    const changeShow = () => {
        setshowLess(!showLess);
      };

    return(
        <>
         <div className='d-flex justify-content-between flex-row mb-2'>
        <span className='loc'>Religion</span> 
        <div onClick={changeShow}>{showLess ? <div><IoIosArrowDropdown style={{width:"22px",height:"22px", color:"#003B4A"}}/></div> : <div><IoIosArrowDropup style={{width:"22px",height:"22px",color:"#003B4A"}} /></div>}</div>
        </div>
 
      
        <form className="row">
   
  
   
        {showLess ? 
        <>
        {tags.map((items, index) => <div key={index} className="col-4">
            {index== 0 || index==1 || index==2 ?
           
            <div className='mb-2 d-flex align-items-center' >
     
     <img onClick={() => {handlechange(index); }} src={items.checking ?checkblankboxes:checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
       <span className='fonting-style col-9'>{items.naming} </span><br></br>
       
       
       </div>
      
       :""}
        
  </div> )}
  </>
  :
  <>
  {tags.map((items, index) => <div key={index} className="col-4">
  
  <div className='mb-2 d-flex align-items-center'>

  <img onClick={() => {handlechange(index); }} src={items.checking ?checkblankboxes:checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

<span className='fonting-style col-9'>{items.naming} </span><br></br>


</div>

</div> )}
</>
  }
  
  
  
 
</form>

  

  
  
  
       

</>
    )
}

export default FilterReligion