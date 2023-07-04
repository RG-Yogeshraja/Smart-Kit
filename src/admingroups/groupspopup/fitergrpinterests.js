import React, {useState} from 'react';
import closecircle from '../../assets/images/dashboardimg/close-circle.png'
import search from '../../assets/images/dashboardimg/searchbar.png'
import htab_icon from '../../assets/images/dashboardimg/htabicon.png'

const FilterGroupInterests = () =>
{

    const [intersetarr,setinterest] = useState([
    {name:'Recommended' ,img1:htab_icon, img2:closecircle},
    {name:'Outdoors',img2:closecircle , css:{marginLeft:"-14px"}}
])
    return(
        <>
        <div className='d-flex justify-content-between flex-row mb-1'>
        <span className='loc'>Interests</span> 
        {/* <span className="text_ch">2 Selected&nbsp;
        <img src={closecircle} width="18px" height="18px"></img>    
        </span> */}
        </div>
        <div className='row mb-1'>
        {intersetarr.map((items, index) => <div  key={index} className="col-5">

       <button className='btn-btn-green11 d-flex align-items-center' >
        {index == 0 ?
        <img src={items.img1} width="21px" height="21px"></img> : ""}&nbsp;
        <span className='btn-fonty'>{items.name}</span>&nbsp;
        <img src={items.img2} width="20px" height="20px"></img>
       </button>
</div>
        
)}
        </div>


        <div className='col-12 mb-1'>
                <div className='d-flex align-items-center border_size'>
<img className='search ms-1' src={search} width="20px" height="20px"></img>

                <input className='w-100 height-range ms-1 text_search ' placeholder='Search interests...'></input>
                
            </div>
        </div>
        </>
    )
}

export default FilterGroupInterests