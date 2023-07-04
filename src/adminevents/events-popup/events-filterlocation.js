import React from 'react';
import search from '../../assets/images/dashboardimg/searchbar.png'

const FilterEventsLocation = () => {
    return (
        <>
          <div className='col-12 mt-2 mb-1'>
                <span className='font-events'>Location</span>
            </div>
            <div className='col-12 mb-2 placeholding'>
                <div className='d-flex align-items-center border_size'>
                 <img className='search ms-2' src={search} width="20px" height="20px"></img>

                    <input className='w-100 height-range ms-1 text_search ' placeholder='Search neighborhood, city, or state'></input>

                </div>
            </div>
        </>
    )
}
export default FilterEventsLocation