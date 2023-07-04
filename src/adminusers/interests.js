import React, { useState } from 'react'
const Interests = () => {
        const [intersetarr, setinterest] = useState([{ name: 'Books' }, { name: 'Music' }, { name: 'Painting' }])
        return (
                <>
                        <div className='d-flex justify-content-between flex-row mb-2'>
                                <span className='loc'>Interests</span>
                        </div>
                        <div className='row mb-1 '>
                                {intersetarr.map((items, index) => <div key={index} className="col-3 me-1">
                                        {/* <div className='d-flex justify-content-start align-items-start'> */}
                                        <button className='btn-btn-green'>
                                                <span className='btn-fonty'>{items.name}</span>
                                        </button>
                                        {/* </div> */}
                                </div>

                                )}
                        </div>


                </>
        )
}
export default Interests