import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

function Home2() {
    const [minValue, set_minValue] = useState(10);
    const [maxValue, set_maxValue] = useState(60);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    return (
        <div className="App">
            <MultiRangeSlider
                min={0}
                max={100}
                step={5}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                    handleInput(e);
                }}
            />
        </div>
    );
}

export default Home2 