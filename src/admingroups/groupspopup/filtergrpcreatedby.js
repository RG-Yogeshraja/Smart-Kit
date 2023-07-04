

import React from "react";
import closecircle from '../../assets/images/dashboardimg/close-circle.png'
import plusicons from '../../assets/images/dashboardimg/plusicon.png'

import { useState } from "react";







const FilterGrpCreatedby = () =>
{

    const [show, setShow] = useState(false);
    const [tags, setTags] = useState(['John Doe']);
    const [tagInput, setTagInput] = useState('');
    const [showAddInput, setShowAddInput] = useState(false);
    const handleClose = () => setShow(false)
  
    const handleAdd = () => {
      if (tagInput) {
        setTags(prevTags => [...prevTags, tagInput]);
      }
      setTagInput('');
      setShowAddInput(false);
    };
  
    const handleRemove = index => {
      setTags(prevTags => {
        const tags = [...prevTags];
        tags.splice(index, 1);
        return tags;
      });
    };
return(
    <>
<div className='mb-1'>
<span className='font-stylingg111'>Created By</span>
</div>
<div className='row d-flex justify-content-center align-items-center mx-auto'>


{tags.map((tag, tagIndex) => (
  <div className="col" key={tagIndex} style={{ padding: "4px" }}>
    <button className='btn_greens11 d-flex flex-row justify-content-center align-items-center'>

      <span className='text_colors11 text-center'> {tag}{' '}</span>&nbsp;&nbsp;
      {/* <span className='text_colors text-center'>Books</span>&nbsp;&nbsp; */}
      <img src={closecircle} width="20px" height="20px" onClick={() => handleRemove(tagIndex)}></img>

    </button>&nbsp;
  </div>))}


</div>
<div className='borderrs111'>
<div className='d-flex justify-content-center'>
  <input
    className="noningoption11 mb-1"
    value={tagInput}
    onChange={e => setTagInput(e.target.value)}
    onKeyPress={e => {
      if (e.key === 'Enter') {
        handleAdd();
      }
    }}

    autoFocus
  >

  </input>
  {/* <input className='borderss'></input> */}
  <div className='d-flex align-items-end flex-column p-0 mt-1 px-1 positionss11'>
    <img src={plusicons} width="27px" height="27px" onClick={handleAdd} className='positionss11'></img>
  </div>

  {/* <div className='d-flex align-items-center justify-content-center bordersss'></div> */}
</div>
<div className="">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='tag-text mt-1'>Jordan Reed</span><br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='tag-text mt-1'>Johana Johnson</span><br></br>
</div>
{/* &nbsp;&nbsp;&nbsp;<span>Bowling</span> */}
</div>
</>
)
}

export default FilterGrpCreatedby;