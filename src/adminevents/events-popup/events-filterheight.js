import React, { useState } from 'react';
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react"
import { split } from 'lodash';

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"

const FilterEventsWithin = () => {
	const [width, setwidth] = useState(20)
	const [height, setheight] = useState((20*8)+'px')
	const [minCaption, set_minCaption] = useState(0)
	const [maxCaption, set_maxCaption] = useState(50)
    // const [value, setValue] = useState([]);
	
	
    // const [value, setValue] = useState([]);

	// const handleInput = (e) => {
	// 	set_minCaption(e.minCaption)
	// 	set_maxCaption(e.maxCaption)
	// }
	const [value, setValue] = useState([30, 60]);
	const handleInput = (e) => {

		console.log(e)
		setwidth(e)
		setheight((e*8)+'px')
	}

	return (
		<>
			<div className='range  flex-row mb-1'>
                
<span className="font-events">Within</span>
</div>


 {/* <div className="hello1"> */}
 <div style={{marginLeft:height}} className=" input-within-sliders mb-1">{width}&nbsp;mi</div>
 <InputRange
        maxValue={50}
        minValue={0}
		value={width}
		onChange={handleInput}
       />
      
 {/* <input  style={{width:"95%",display:"flex",justifyContent:'center'}}
        type='range'
        onChange={handleInput}
        min={minCaption}
        max={maxCaption}
		
        value={width}
      ></input> */}
{/* </div>  */}
</>
)
}
export default FilterEventsWithin;