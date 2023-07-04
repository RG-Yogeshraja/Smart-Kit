import { useRef, useEffect } from "react";
import Autocomplete from "react-google-autocomplete"

const AutoComplete = () => {
  
  
 return (
    <Autocomplete
    apiKey="AIzaSyAim93LMftM69NWYoby2N-IzO2_QiPnTJI"
    onPlaceSelected={(place) => {
        
      console.log(place)
    }}
  />
 )
}
export default AutoComplete