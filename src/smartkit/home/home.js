import React, { useEffect, useState } from "react"
import MultiRangeSlider from "multi-range-slider-react"
import Home2 from "./home2";



const SmartKitHome = () => {
    const [sliderValues, setSliderValues] = useState([]); // Initial values for 3'1" and 7'11"
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);

    const handleChange = (values) => {
        // debugger

        setSliderValues([values.min, values.max])
        set_minValue(10);
        set_maxValue(80);

        console.log(sliderValues)

    }

    useEffect(() => {
        // setSliderValues([values.min, values.max])
        // handleChange()


    }, [sliderValues])

    const formatHeight = (value) => {
        // debugger
        const feet = value
        const inches = value
        return `${feet}'${inches}"`;
    }

    const ChangeResult = (e) => {
        debugger
        console.log(e)
    }

    return (
        <>
            <MultiRangeSlider
                min={35} // Corresponds to 3'1"
                max={95} // Corresponds to 7'11"
                step={1}
                minValue={minValue}
                maxValue={maxValue}
                thumbSize={25}
                // preventWheel={false}
                onInput={(e) => {
                    ChangeResult(e)
                }}
                values={sliderValues}
                onChange={handleChange}
                formatValue={formatHeight}
            />
            <div>
                {/* Min Height: {sliderValues[0]} */}
            </div>
            <div>
                {/* Max Height: {sliderValues[2]} */}
                {sliderValues.map((data) => {
                    return (
                        <>
                            <span>{data}</span>
                        </>
                    )
                })}
            </div>

            <Home2></Home2>
        </>
    )
}

export default SmartKitHome