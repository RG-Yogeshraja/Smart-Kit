import usePlacesAutocomplete, { getGeocode, getDetails, getLatLng, getZipCode } from "use-places-autocomplete"
import { useState, useEffect } from 'react'
import useOnclickOutside from "react-cool-onclickoutside"

const EventLocationAPI = (props) => {
    const [latitude, setlatitude] = useState('')
    const [longitude, setlongitude] = useState('')
    const [setval, getval] = useState(false)
    const [locationerror, getlocationerror] = useState('')
    const [submit, setsubmitted] = useState(false)
    const [setcity, getcity] = useState('')
    //
    const { ready, value, suggestions: { status, data }, setValue } = usePlacesAutocomplete({
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
        setValue(e.target.value)
        if (e.target.value === '' && props.data === true) {
            getlocationerror('Location Name is Required')
        } else {
            getlocationerror('')
        }
        getval(false)
    }

    const handleSelect = ({ description }) => () => {
        const parameter = {
            address: description
        }
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false)
        getval(true)
        // Get latitude and longitude via utility functions
        getGeocode(parameter)
            // By default we use the "long_name" value from API response, you can tell the utility to use "short_name"
            // by setting the second parameter to "true"
            .then((results) => {
                const { lat, lng } = getLatLng(results[0])
                console.log("📍 Coordinates: ", lat, lng)
                const lati= lat 
                const longi= lng
                setlatitude(lati)
                setlongitude(longi)
                const parameter1 = {
                    // Use the "place_id" of suggestion from the dropdown (object), here just taking first suggestion for brevity
                    placeId: results[0].place_id,
                    // Specify the return data that you want (optional)
                    fields: ["adr_address"]

                }

                getDetails(parameter1)

                    .then((details) => {
                        let more_region = ''
                        let more_locality = ''
                        let more_postal = ''
                        
                        const val = JSON.stringify(details.adr_address)
                        const m = JSON.parse(val)
                        console.log(m)
                        if (m.includes("locality")) {

                            const locality = m.split('locality">')
                            more_locality = locality[1].split("</span>")
                            getcity(more_locality[0])
    

                        }
                        if (m.includes("region")) {

                            const region = m.split('region">')
                            more_region = region[1].split("</span>")

                        }
                        if (m.includes("postal-code")) {

                            const postal = m.split('postal-code">')
                            more_postal = postal[1].split("</span>")


                        }
                        // 
                        props.sendloc(description, more_locality[0], more_region[0], more_postal[0], latitude, longitude)
                    })
                    .catch((error) => {
                        console.log("Error: ", error)
                    })
            })
        

    }

    const renderSuggestions = () => data.map((suggestion) => {
        
        const {
            place_id,
            structured_formatting: { main_text, secondary_text }
        } = suggestion
        console.log("renderSuggestions", suggestion)
        return (
            <li style={{ listStyleType: 'none' }} className="m-75" key={place_id} onClick={handleSelect(suggestion)}>
                <strong>{main_text} </strong> <small>{secondary_text}</small>
            </li>
        )
    })

    return (
        <div className='col-12' ref={ref}>
            <span className='input_toptext'>Address</span>

            <input autoComplete='off' name="fullname formControl sponsorship_innertext" type="text" placeholder='Add venue address...'
                value={value}
                onChange={handleInput}
                disabled={!ready}
                className='formControl text_field mt-50' />
            {status === "OK" && setval === false && <div className="col-12 " style={{ border: "1px solid #d8d6de", borderRadius: "14px" }}>{renderSuggestions()}</div>}
            <span className='text-danger' >{locationerror}</span>
            {/* <span>{secondary_text}</span> */}
        </div>
    )
}

export default EventLocationAPI
