import React, { useState } from 'react';
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react"
import { split } from 'lodash';

const FilterHeight = () => {

	const [minCaption, set_minCaption] = useState('4’ 0”')
	const [maxCaption, set_maxCaption] = useState('7’ 0”')
	// const handleInput = (e) => {
	// 	set_minCaption(e.minCaption)
	// 	set_maxCaption(e.maxCaption)
	// }

	const handleInput = (e) => {
		// set_minCaption(e.minCaption)
		// set_maxCaption(e.maxCaption)
		let minValue = e.minValue
		let maxValue = e.maxValue

		const minFeet = minValue/12
		const minInch = minValue%12

		const maxFeet = maxValue/12
		const maxInch = maxValue%12
		console.log(maxFeet,"aaaaaaa")
		const minText = Math.floor(minFeet) + "’" + minInch + "”"
		const maxText = Math.floor(maxFeet) + "’" + maxInch + "”"

		set_maxCaption(maxText)
		set_minCaption(minText)
		console.log("handleChange",e)
	}

	return (
		<>
			<div className='range d-flex justify-content-between flex-row'>
				<span className="min-header col-10">Height</span>
				{/* <span className=' height-detail text-font'>{minCaption} - {maxCaption}</span> */}

			</div>
			<div className='helooo m-0 p-0'>
				
				<MultiRangeSlider
					baseClassName='multi-range-slider-black mt-1'
					min={36} max={96}
// min={'{a}’{b}”'} max={'{c}’{d}”'}
					// min={'0’1”'} max={'11’1”'}
					// min={0.00}
					// max={100.00}
					// step={5}

					// min={'set_minCaption'} max={'11’1”'}
					minCaption={minCaption}
					maxCaption={maxCaption}


					// minCaption={minCaption}
					// maxCaption={maxCaption}
					// onInput={(e) => {
					// 	handleInput(e);
					// }}

					// onChange={(e) => {
					// 	handleChange(e);
					// }}
					onInput={(e) => {
						handleInput(e);
					}}
				></MultiRangeSlider></div>
		</>
	)
}
export default FilterHeight;