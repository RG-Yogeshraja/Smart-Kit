import React , {useState} from 'react';


const FilterPopularInterests = () =>
{

    const [intersetarr1,setinterest1] = useState([{name:'Pets'},{name:'Sports',css:{marginLeft:"-8px"}},{name:'Travel',css:{marginLeft:"-1px"}},{name:'Music',css:{marginLeft:"5px"}},{name:'Painting',css:{marginLeft:"10px"}}])
    return(
        <>
        <div className='mb-1'>
        <span className='loc1'>Popular Interests</span> 
        </div>

        <div className='row mb-1'>
        {intersetarr1.map((items, index) => <div  key={index} className="col-2 d-flex align-items-start justify-content-start px-1">

       <button style={items.css} className='btn-btn-green1 d-flex align-items-center justify-content-center px-1'>
        <span className='btn-fonty1 ' style={{paddingLeft:"2px", paddingRight:"2px"}}>{items.name}</span>
       </button>
</div>
        
)}
        </div>

        </>
    )
}

export default FilterPopularInterests