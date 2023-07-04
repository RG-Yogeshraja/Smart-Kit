import React, { useState } from "react";
// import { IoIosArrowDropdown } from "react-icons/io";
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown";
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup";
import edit_logo12 from '../assets/images/dashboardimg/edit-logo12.png'

const EditDrinking = () => {

  const [tags, setTags] = useState([
    { id: "1", naming: 'Frequently', checking: true },
    { id: "2", naming: 'Socially', checking: true },
    { id: "3", naming: 'Never', checking: true },
    { id: "4", naming: 'Sober', checking: true },

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
          <img src={edit_logo12} width="20px" height="20px"></img>
          <span className='loc-text ms-1'>Drinking</span>
        </div>
        <div>
          <div onClick={changeShow}>{showLess ? <div><IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
        </div>
      </div>


      <form className="row">



        {showLess ?
          <>
            {tags.map((items, index) => <div key={index} className="col-2">
              {index == 0 || index == 1 || index == 2 || index == 3 ?

                <div className='mb-2 d-flex align-items-center' >

                  <img onClick={() => { handlechange(index); }} src={items.checking ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

                  <span className='fonting-style'>{items.naming} </span><br></br>


                </div>

                : ""}

            </div>)}
          </>
          :
          <>
            {tags.map((items, index) => <div key={index} className="col-2">

              <div className='mb-2 d-flex align-items-center' >
                <img onClick={() => { handlechange(index); }} src={items.checking ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

                <span className='fonting-style'>{items.naming} </span><br></br>


              </div>

            </div>)}
          </>
        }




      </form>








    </>
  )
}

export default EditDrinking