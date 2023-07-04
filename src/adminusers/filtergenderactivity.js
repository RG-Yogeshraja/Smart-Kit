import React, { useState} from "react"
// import { IoIosArrowDropdown } from "react-icons/io";
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"

const FilterGenderActivity = ({choosegender}) => {

    const [tags, setTags] = useState([
    {id:'1', name:'Man', checked:false},
    {id:'2', name:'Woman', checked:false},
    {id:'3', name:'Nonbinary', checked:false}
   
])
const [filter, setfilter] = useState(tags)
const [women, setwomen] = useState([])
const [binary, setBinary] = useState([])
const [man, setman] = useState([])

const checkgenderval = (item, index) => {
  
  console.log(item.id)
  const val = [...tags]
  if (val[index].checked === true) {
    val[index].checked = false
  } else {
    val[index].checked = true
  }
  if (val[index].name === "Man" && val[index].checked === true) {
    setman(
      [{ name: "Intersex Man", checked: false }, { name: "Trans Man", checked: false }, { name: "Transmasculine", checked: false }, { name: "Man and Nonbinary", checked: false }, { name: "Cis Man", checked: false }])
  } else if (val[index].name === "Man" && val[index].checked === false) {
    setman([])
  }
 
  if (val[index].name === "Woman" && val[index].checked === true) {
    setwomen([{ name: "Intersex Woman", checked: false }, { name: "Trans Woman", checked: false }, { name: "Transfeminine", checked: false }, { name: "Woman and Nonbinary", checked: false }, { name: "Cis Woman", checked: false }])
  } else  if (val[index].name === "Woman" && val[index].checked === false) {
    setwomen([])
  }
  if (val[index].name === "Nonbinary" && val[index].checked === true) {
setBinary([{ name: "Agender", checked: false }, { name: "Bigender", checked: false }, { name: "Genderfluid", checked: false }, { name: "Genderqueer", checked: false }, { name: "Gender nonconforming", checked: false }, { name: "Gender questioning", checked: false }, { name: "Gender variant", checked: false }, { name: "Intersex", checked: false }, { name: "Neutrois", checked: false }, { name: "Nonbinary man", checked: false }, { name: "Nonbinary woman", checked: false }, { name: "Pangender", checked: false }, { name: "Polygender", checked: false }, { name: "Transgender", checked: false }, { name: "Two-spirit", checked: false }])
  } else  if (val[index].name === "Nonbinary" && val[index].checked === false) {
    setBinary([])
  } 

setTags(val)

}
const overall = (item, index, e) => {
  let tags
  if (e === "women") {
tags = [...women]
  } else if (e === "men") {
    tags = [...man]  
  } else if (e === "binary") {
    tags = [...binary]  
  }
if (tags[index].checked === true) {
  tags[index].checked = false
} else {
  tags[index].checked = true
}
if (e === "women") {
setwomen(tags)
    } else if (e === "men") {
      setman(tags)
    } else if (e === "binary") {
      setBinary(tags)
    }
}
// const handlechange = (index) => {
  
//   const newTags = ;
//   if (newTags[index].checking === true)
//   {
//     newTags[index].checking = false
//   }
//   else
//   {
//     newTags[index].checking = true
//   }
 
//   setTags(newTags);
//   let val = [...tags]
//   val=val.filter(res=>res.checking===false)
//   console.log(val)
//   setfilter(val)
//   choosegender(val)
// // const filter=filter.filter(res=>res.checked===true)
// };


    const [showLess, setshowLess] = useState(true)
const [tick, settick] = useState(true)
    const changeShow = () => {
        setshowLess(!showLess)
      }

    return (
        <>
         <div className='d-flex justify-content-between flex-row mb-2'>
        <span className='loc'>Gender Identity</span> 
        <div onClick={changeShow}>{showLess ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{width:"22px", height:"22px", color:"#003B4A"}}/></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{width:"22px", height:"22px", color:"#003B4A"}} /></div>}</div>
        </div>
 
      
        <form className="row">
  
   
        {showLess ? 
        <>
        {tags.map((items, index) => <div key={index} className="col-4">
            {index == 0 || index == 1 || index == 2 ?
           
            <div className='mb-2 d-flex align-items-center' >
     
     {/* <input type="checkbox" style={{width:"20px",height:"20px"}}></input>&nbsp;&nbsp; */}
     <img onClick={() => { checkgenderval(items, index) }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
       <span className='fonting-style  col-9'>{items.name} </span><br></br>
       
       
       </div>
      
       : ""}
        
  </div>)}
  </>
  :
  <>
  {tags.map((items, index) => <div key={index} className="col-4">
  
  <div className='mb-2 d-flex align-items-center'>

  <img onClick={() => { checkgenderval(items, index) }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

<span className='fonting-style col-9'>{items.name} </span><br></br>


</div>

</div>)}
{man.map((items, index) => <div key={index} className="col-4">
  
  <div className='mb-2 d-flex align-items-center'>

  <img onClick={() => { overall(items, index, 'men') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

<span className='fonting-style col-9'>{items.name} </span><br></br>


</div>

</div>)}
{women.map((items, index) => <div key={index} className="col-4">
  
  <div className='mb-2 d-flex align-items-center'>

  <img onClick={() => { overall(items, index, 'women') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

<span className='fonting-style col-9'>{items.name} </span><br></br>


</div>

</div>)}
{binary.map((items, index) => <div key={index} className="col-4">
  
  <div className='mb-2 d-flex align-items-center'>

  <img onClick={() => { overall(items, index, 'binary') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

<span className='fonting-style col-9'>{items.name} </span><br></br>


</div>

</div>)}
</>
  }
  
 
</form>
       

</>
    )
}

export default FilterGenderActivity