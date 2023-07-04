import React, { useState } from 'react';
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react"
import { split } from 'lodash';
import edit_logo5 from '../assets/images/dashboardimg/edit-logo5.png'
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"

const EditHeight = () => {
	const [width, setwidth] = useState(32)
	const [height, setheight] = useState((32 - 4) + '%')
	const [minCaption, set_minCaption] = useState('3’ 8”')
	const [maxCaption, set_maxCaption] = useState('7’ 8”')
	const [minValue, set_minValue] = useState('3’ 0”')
	const [maxValue, set_maxValue] = useState('8’ 0”')
	const [value, setValue] = useState([30, 60])
	
	const handleInput = (e) => {
		let minValue = e.target.value
		let maxValue = e.target.value
		setwidth(e.target.value)
		setheight(e.target.value - 4 + '%')
		const minFeet = minValue / 12
		const minInch = minValue % 12
		const maxFeet = maxValue / 12
		const maxInch = maxValue % 12
		console.log(maxFeet, "aaaaaaa")
		const minText = Math.floor(minFeet) + "’" + minInch + "”"
		const maxText = Math.floor(maxFeet) + "’" + maxInch + "”"
		
		set_maxCaption(maxText)
		set_minCaption(minText)
		console.log("handleChange", e)
	}

	return (
		<>
			<div className='range  flex-row mb-2'>
				<img src={edit_logo5} width="9px" height="19px"></img> &nbsp;&nbsp;
				<span className="loc-text">Height</span>
			</div>

			<div className="hello1" data-tip="This is the text of the tooltip2">
				<div style={{ marginLeft: height }}>{minCaption}</div>
				<input style={{ width: "100%" }}
					type='range'
					onChange={handleInput}
					min={minCaption}
					max={96}
					value={width}></input>
			</div>
		</>
	)
}
export default EditHeight;