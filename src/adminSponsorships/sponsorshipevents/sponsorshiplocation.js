import React, {useState} from 'react'

import search from '../../assets/images/dashboardimg/searchbar.png'
const SponsorshipLocation = () =>{
return(
    <>
 <div className='col-12 mb-2 placeholding mt-2'>
                <div className='d-flex align-items-center border_size'>
                 <img className='search ms-1' src={search} width="20px" height="20px"></img>

                    <input className='w-100 height-range ms-1 text_search change' placeholder='Search neighborhood, city, or state'></input>

                </div>
            </div>
</>
)
}
export default SponsorshipLocation