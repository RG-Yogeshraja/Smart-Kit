import React, {useState} from 'react'
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react"

const FilterAgeRange = ({chooseMessage}) => {

    const [minValue, set_minValue] = useState(25)
const [maxValue, set_maxValue] = useState(60)
const [nxval, set_maxval] = useState(maxValue)
const handleInput = (e) => {
if (e.maxValue === 75) {
set_maxval("75+")
console.log(nxval, "aaaa")
} else {
set_maxval(e.maxValue)
}
set_minValue(e.minValue)
 set_maxValue(e.maxValue)

 chooseMessage({val:minValue, val1:nxval})


}
    return (
<>
<div className='range d-flex justify-content-between flex-row'>
<span className="min-header col-10">Age Range</span>
<span className=' height-detail text-font1'>{minValue} - {nxval}
 

</span>
       
        </div>
        <MultiRangeSlider min={18} max={75} minCaption={minValue} maxCaption={nxval} onInput={(e) => { handleInput(e) }}></MultiRangeSlider>
</>
    )
}
export default FilterAgeRange