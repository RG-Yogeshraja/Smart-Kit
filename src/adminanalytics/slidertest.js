// import React, { useState } from 'react';
// import Slider from 'react-slider';
// import ReactSlider from 'react-slider'
// import AgeRangeSlider from './slidertest2'



// const TwoSidedMultiRangeSlider = () => {
//   const [values, setValues] = useState([20, 50, 80]);

//   const handleRangeChange = (newValues) => {
//     setValues(newValues);
//   };

//   return (
//     <div>
//       <Slider
//         min={0}
//         max={100}
//         values={values}
//         onChange={handleRangeChange}
//         renderTrack={(props, state) => (
//           <div
//             {...props}
//             style={{
//               ...props.style,
//               height: '6px',
//               backgroundColor: state.index === 0 ? '#f00' : '#0f0',
//             }}
//           />
//         )}
//         renderThumb={(props, state) => (
//           <div
//             {...props}
//             style={{
//               ...props.style,
//               height: '20px',
//               width: '20px',
//               borderRadius: '50%',
//               backgroundColor: state.index === 0 ? '#f00' : '#0f0',
//               outline: 'none',
//             }}
//           />
//         )}
//       />
//       <ReactSlider
//         className="horizontal-slider"
//         thumbClassName="example-thumb"
//         trackClassName="example-track"
//         defaultValue={[0, 100]}
//         ariaLabel={['Lower thumb', 'Upper thumb']}
//         ariaValuetext={state => `Thumb value ${state.valueNow}`}
//         renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
//         pearling
//         minDistance={10}
//       />

//       {/* <AgeRangeSlider/> */}
//     </div>

    


//   );
// };

// export default TwoSidedMultiRangeSlider;
