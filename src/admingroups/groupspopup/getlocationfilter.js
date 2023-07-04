import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
  } from "use-places-autocomplete"
  import { useState, useEffect } from 'react'
  import useOnclickOutside from "react-cool-onclickoutside"
  const AutoComplete1 = (props) => {
    const [latitude, setlatitude] = useState('')
    const [longitude, setlongitude] = useState('')
    const [setval, getval] = useState(false)
  
    const [locationerror, getlocationerror] = useState('')
    //
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue
  
    } = usePlacesAutocomplete({
      requestOptions: {
        /* Define search scope here */
      },
      debounce: 1000
    })
    useEffect(() => {
      if (props.sendloc !== undefined || props.sendloc !== '') {
        setValue(props.sendloc)
        getval(true)
      }
      if (props.data === true && value === '') {
        getlocationerror('Location Name is Required')
      } else {
        getlocationerror('')
      }
    }, [])
    const ref = useOnclickOutside(() => {
      // When user clicks outside of the component, we can dismiss
      // the searched suggestions by calling this method
  
    })
  
    const handleInput = (e) => {
      // Update the keyword of the input element
      //
      setValue(e.target.value)
      if (e.target.value === '' && props.data === true) {
        getlocationerror('Location Name is Required')
      } else {
        getlocationerror('')
      }
      getval(false)
    }
    //
    const handleSelect =
  
      ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
  
        setValue(description, false)
        getval(true)
  
  
        // clearSuggestions()
  
        // Get latitude and longitude via utility functions
        getGeocode({ address: description }).then((results) => {
          //
          const { lat, lng } = getLatLng(results[0])
          console.log("📍 Coordinates: ", lat, lng)
          setlatitude(lat)
          setlongitude(lng)
          props.handle(description, lat, lng)
        })
      }
  
    const renderSuggestions = () => data.map((suggestion) => {
      //
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion
  
      return (
        <li style={{ listStyleType: 'none' }} className="m-75" key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })
  
    return (
      <div className='col-12' ref={ref}>
        <span className='input_toptext'>Location</span>
  
        <input
          name="fullname"
          type="text"
          placeholder='Search a location...'
          value={value}
          onChange={handleInput}
          disabled={!ready}
          className='formControl text_field mt-50'
        />
        {status === "OK" && setval === false && <div className="col-12 " style={{ border: "1px solid #d8d6de", borderRadius: "14px" }}>{renderSuggestions()}</div>}
        <span className='text-danger' >{locationerror}</span>
      </div>
      //   <div >
      //     <input
      //       value={value}
      //       onChange={handleInput}
  
      //       placeholder="Location"
      //     />
  
      //     {/* We can use the "status" to decide whether we should display the dropdown or not */}
      //     
      //   </div>
    )
  }
  export default AutoComplete1
  