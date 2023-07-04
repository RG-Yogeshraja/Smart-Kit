import React from "react";
import edit_logo4 from '../assets/images/dashboardimg/edit-logo4.png'

const EditHometown = () => {
    return (
        <>
            <div className='mb-2 '>
                <div className="d-flex align-items-center justidy-content-center">
                    <img src={edit_logo4} width="20px" height="20px"></img>&nbsp;&nbsp;
                    <span className='loc-text'>Hometown</span>
                </div>
            </div>
            <div className='col-12 mb-2 placehollding1'>
                <div className='d-flex align-items-center border_size'>

                    <input className='w-100 height-range ms-1 text_search ' style={{ fontFamily: "Asap", fontStyle: 'normal', fontWeight: "500", fontSize: "14px", lineHeight: "16px", color: " #003B4A" }} value='&nbsp;&nbsp;&nbsp;Boston, MA'></input>

                </div>
            </div>
        </>
    )
}

export default EditHometown