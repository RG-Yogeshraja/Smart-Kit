import React, { useState } from 'react';


const EditEventPopularInterest = () => {

    const [intersetarr1, setinterest1] = useState([
        { name: 'Pets' },
        { name: 'Sports' },
        { name: 'Travel' },
        { name: 'Music' },
        { name: 'Painting' },
        { name: 'Outdoors' }
    ])
    return (
        <>
            <div className='mb-1'>
                <span className='loc1'>Popular Interests</span>
            </div>

            <div className='d-flex flex-row mb-1'>
                {intersetarr1.map((items, index) => <div key={index} className="me-50">
                    <div className='d-flex justify-content-start align-items-start'>
                        <button style={items.css} className='btn-btn-green1 d-flex align-items-center justify-content-center px-1'>
                            <span className='btn-fonty1 ' >{items.name}</span>
                        </button>
                    </div>
                </div>

                )}
            </div>

        </>
    )
}

export default EditEventPopularInterest