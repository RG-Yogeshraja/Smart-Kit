import React, { useState } from 'react';
import search from '../assets/images/dashboardimg/searchbar.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown";
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup";

const FilterLanguages = () => {
    const [languages, setlanguages] = useState([{ name: 'English' }, { name: 'Spanish' }])


    const [showLess, setshowLess] = useState(true);

    const changeShow = () => {
        setshowLess(!showLess);
    };
    return (
        <>
            <div className='d-flex justify-content-between flex-row mb-2'>
                <span className='loc'>Languages</span>
                <div onClick={changeShow}>{showLess ? <div><IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
            </div>


            <div className='row'>
                {languages.map((items, index) => <div key={index} className="col-3">
                    <button className='btn-btn-green mb-2'>
                        <span className='btn-fonty'>{items.name}
                        </span></button>
                </div>)}
            </div>

            <div className='col-12 mb-2'>
                <div className='d-flex align-items-center border_size'>
                    <img className='search ms-1' src={search} width="20px" height="20px"></img>

                    <input className='w-100 height-range ms-1 text_search ' placeholder='Search languages...'></input>

                </div>
            </div>
        </>
    )
}
export default FilterLanguages