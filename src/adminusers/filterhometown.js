import React from "react";

const FilterHometown = () => {
    return (
        <>
            <div className='col-12 mt-2 mb-2'>
                <span className='loc'>Hometown</span>
            </div>
            <div className='col-12 mb-2 placehollding1'>
                <div className='d-flex align-items-center border_size'>

                    <input className='w-100 height-range ms-1 text_search ' style={{fontFamily:"Asap",fontStyle:'normal',fontWeight:"400",fontSize:"14px",lineHeight:"16px",color:" #003B4A"}} value='&nbsp;&nbsp;&nbsp;Boston, MA'></input>

                </div>
            </div>
        </>
    )
}

export default FilterHometown