import React, { useState } from "react";
// import { IoIosArrowDropdown } from "react-icons/io";
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown";
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup";
import edit_logo11 from '../assets/images/dashboardimg/edit-logo11.png'

const EditExercise = () => {

  const [tags, setTags] = useState([
    { id: "1", naming: 'Active', checking: true },
    { id: "2", naming: 'Sometimes', checking: true },
    { id: "3", naming: 'Almost Never', checking: true },

  ])

  const handlechange = (index) => {

    const newTags = [...tags];
    if (newTags[index].checking === true) {
      newTags[index].checking = false
    }
    else {
      newTags[index].checking = true
    }

    setTags(newTags);
  };
  const [showLess, setshowLess] = useState(true);

  const changeShow = () => {
    setshowLess(!showLess);
  };

  return (
    <>
      <div className='d-flex justify-content-between flex-row mb-2'>
        <div className="">
          <img src={edit_logo11} width="28px" height="30px"></img>
          <span className='loc-text ms-25'>Exercise</span>
        </div>
        <div>
          <div onClick={changeShow}>{showLess ? <div><IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
        </div>
      </div>

      <form className=" d-flex justify-content-between col-7 ">



        {showLess ?
          <>
            {tags.map((items, index) => <div key={index} >
              {index == 0 || index == 1 || index == 2 ?

                <div className='mb-2 d-flex align-items-center' >

                  <img onClick={() => { handlechange(index); }} src={items.checking ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

                  <span className='fonting-style '>{items.naming} </span><br></br>


                </div>

                : ""}

            </div>)}
          </>
          :
          <>
            {tags.map((items, index) => <div key={index} >

              <div className='mb-2 d-flex align-items-center'>

                <img onClick={() => { handlechange(index); }} src={items.checking ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

                <span className='fonting-style '>{items.naming} </span><br></br>


              </div>

            </div>)}
          </>
        }




      </form>








    </>
  )
}

export default EditExercise