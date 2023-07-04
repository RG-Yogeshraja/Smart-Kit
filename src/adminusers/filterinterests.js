import React, {useState} from 'react';
import closecircle from '../assets/images/dashboardimg/close-circle.png'
import search from '../assets/images/dashboardimg/searchbar.png'

const FilterInterests = () =>
{

    const [intersetarr,setinterest] = useState([{name:'Books'},{name:'Music'},{name:'Painting'}])
    return(
        <>
        <div className='d-flex justify-content-between flex-row mb-1'>
        <span className='loc'>Interests</span> 
        <span className="text_ch">2 Selected&nbsp;
        <img src={closecircle} width="18px" height="18px"></img>    
        </span>
        </div>
        <div className='row mb-1'>
        {intersetarr.map((items, index) => <div  key={index} className="col-3">

       <button className='btn-btn-green'>
        <span className='btn-fonty'>{items.name}</span>
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

export default FilterInterests