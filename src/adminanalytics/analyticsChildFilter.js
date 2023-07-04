import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import sortby from '../assets/images/dashboardimg/sorts.png'
import uparrow from '../assets/images/dashboardimg/uparrows.png'
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown"
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp"
import MultiRangeSlider from "multi-range-slider-react"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector, connect } from 'react-redux'
import usePlacesAutocomplete, { getGeocode, getDetails, getLatLng, getZipCode } from "use-places-autocomplete"
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import searchIcon from '../assets/images/dashboardimg/searchIcon.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"
import AnalyticsChildFilterAttractedTo from './analyticsChildFilterattractedto'
import AnalyticsChildFilterGenderActivity from './analyticsChilldfiltergenderidentity'
import AnalyticsChildFilterRelationshipStatus from './analyticsfilterrelationshipstatus'
import * as Icon from 'react-feather'
import { admin_analytics_Childfilter_value_APICall, admin_analytics_filter_value_APICall, admin_analytics_subfilter_value_APICall } from './slice-adminanalytics/filteradmin-getsplice';
import { analyticsChildFilter_APIcall, analyticsChildFilter_payloadDataPass } from "./slice-adminanalytics/slice-childFilter"
import load from '../assets/images/dashboardimg/loadersimg.gif'
// import TwoSidedMultiRangeSlider from "./slidertest"

const AnalyticsChildFilterDialog = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false)
    const [showLess, setshowLess] = useState(true);
    const [gender, setgenders] = useState('')
    const [look, setlooks] = useState('')
    const [latitude, setlatitude] = useState('')
    const [loader, setLoader] = useState(false)
    const [longitude, setlongitude] = useState('')
    const [setval, getval] = useState(false)
    const [icon, seticon] = useState(false)
    const [locationerror, getlocationerror] = useState('')
    const [submit, setsubmitted] = useState(false)
    const [setcity, getcity] = useState('')
    const [setrelation_shipstatuss, getrelationshipstatuss] = useState([])
    const min = 0
    const max = 1000
    const [getMiles, setMiles] = useState('')
    const [getenteredlocation, setenteredlocation] = useState('')
    const authStat = useSelector((state) => state.admin_analytics_filter_global)
    const authStat_childFilterData = useSelector((state) => state.analyticsChildFilterData)
    const [setattract, getattract] = useState([])
    const [attracting_update, setattracting_update] = useState([])
    const [setothergenderinfo, pushothergenderinfo] = useState('')
    const [getgenderidentity, setgenderidentity] = useState([])
    const [setgender, pushgender] = useState([])
    const [getrelationship_state, set_relationship_stat] = useState([])
    const [setrelation_shipstatus, getrelationshipstatus] = useState([])
    const [datingOpt, setdatingOpt] = useState(false)
    const [dated, setdated] = useState([])
    const dispatch = useDispatch()
    const [milesDisabled, setMilesDisabled] = useState(true)
    const [parentFilterPayloadObject, setParentFilterPayloadObject] = useState({})
    const [showLess_lookingfor, setshowLess_lookingfor] = useState(false)
    const authStat_childFilteredDate = useSelector((state) => state.admin_analytics_filter_global)
    const authStat_parentFilterPayloadData = useSelector((state) => state.analyticsParentFilterData)
    const authStat_parentFilterResponseData = useSelector((state) => state.analyticsParentFilterData)

    //gender identity declaration start
    const [genderIdentityParent, setGenderIdentityParent] = useState([
        { id: "1", name: 'Man', checked: false, values: 'Man' },
        { id: "2", name: 'Woman', checked: false, values: 'Woman' },
        { id: "3", name: 'Nonbinary', checked: false, values: 'Nonbinary' }
    ])
    // const [genders, setGenderIdentityItems] = useState([props.data])
    const [women, setwomen] = useState([])
    const [binary, setBinary] = useState([])
    const [man, setman] = useState([])
    const [getallgender, setallgender] = useState([])
    const [setinput, getinput] = useState(false)
    const [genderIdentityShowLess, setGenderIdentityShowLess] = useState(true)

    //gender identity declaration ends

    const [lookingfor, setLookingfor] = useState([
        { id: 0, name: 'New Friends', keyname: "New Friends", checked: false, show: true, values: 'new_friends' },
        { id: 1, name: 'Activity Partner', keyname: "Activity Partner", checked: false, show: true, values: 'activity_partners' },
        { id: 2, name: 'Dating', keyname: "Dating", checked: false, show: true, values: 'dating' },
        { id: 3, name: 'Things to Do', keyname: "Things to Do", checked: false, show: false, values: 'things_to_do' },
        { id: 4, name: 'Business', keyname: "Business", checked: false, show: false, values: 'business' }
    ])

    const [dating, setDating] = useState([
        { id: 5, name: 'Long-Term Relationship', keyname: "Long-Term Relationship", checked: false },
        { id: 6, name: 'Casual', keyname: 'Casual', checked: false },
        { id: 7, name: 'Marriage', keyname: 'Marriage', checked: false },
        { id: 8, name: 'Not Sure Yet', keyname: 'Not Sure Yet', checked: false }
    ])

    //relationship status section starts
    const [setrelation, getrelationship] = useState(props.dataval)
    const [getRelationStatus, setRelationStatus] = useState([
        // { id: "4", naming: 'Engaged', checked: false, value: 'Engaged' },
        // { id: "5", naming: 'Married', checked: false, css: { marginLeft: '-23px' }, value: 'Married' },
        // { id: "6", naming: 'Widowed', checked: false, value: 'Widowed' },
        // { id: "7", naming: 'ENM', checked: false, value: 'ENM' },
        // { id: "8", naming: 'Separated', checked: false, css: { marginLeft: '-23px' }, value: 'Separated' },
        // { id: "9", naming: 'Divorced', checked: false, value: 'Divorced' }
    ])
    const [relationShow, setRelationShowLess] = useState(true)
    const [getnewRelationShipStatus, setnewRelationShipStatus] = useState([])
    const [relationShipStatusParent, setRelationShipStatusParent] = useState([
        { id: "1", naming: 'Single ', checked: false, value: 'Single' },
        { id: "2", naming: 'In a Relationship', checked: false, css: { marginLeft: '-23px' }, value: 'In a Relationship' },
        { id: "3", naming: 'It’s Complicated', checked: false, value: 'Its Complicated' }
    ])
    //relationship status section ends

    //attracted to section starts
    const [attactedToParent, setAttactedToParent] = useState([
        { id: "2", name: 'Women', checked: false, values: 'Women' },
        { id: "1", name: 'Men', checked: false, values: 'Men' },
        { id: "3", name: 'Nonbinary', checked: false, values: 'Nonbinary' }
    ])
    const [getAttractedToWomen, setAttractedToWomen] = useState()
    const [getAttractedToBinary, setAttractedToBinary] = useState([])
    const [getAttactedToMan, setAttractedToMan] = useState([])
    const [getAttractedToShowLess, setAttractedToShowLess] = useState(true)
    const [getAttractedToOverall_val, setAttractedToOverallval] = useState(props.setattract)
    const attractedToChangeShow = () => {
        setAttractedToShowLess(!getAttractedToShowLess)
    }
    //attracted to section ends

    const popoverHandle = () => {
        setPopoverOpen(!popoverOpen)
        setshowLess(!showLess);
        // console.log(mins, maxs, gender, look)
    }

    useEffect(() => {

        console.log(authStat_parentFilterPayloadData.parentFilterPayload)
        setParentFilterPayloadObject(authStat_parentFilterPayloadData.parentFilterPayload)
    }, [authStat_parentFilterPayloadData.parentFilterPayload])

    const applyChildFilter = () => {
        const choosedVal = []
        const lookingForchoosedFilter = lookingfor.filter((item) => item.checked == true)
        for (let i = 0; i < lookingForchoosedFilter.length; i++) {
            choosedVal.push(lookingForchoosedFilter[i].keyname)
        }
        const lookingForchoosedFilter2 = dating.filter((item) => item.checked == true)
        for (let i = 0; i < lookingForchoosedFilter2.length; i++) {
            choosedVal.push(lookingForchoosedFilter2[i].keyname)
        }
        const endAgeResult = []
        setdated(choosedVal)
        const latitudes = latitude
        const logititudes = longitude
        const miles = getMiles
        const startAge = minValues
        const endAge = maxValue
        if (endAge != 75) {
            endAgeResult.push(endAge)
        }
        else if (endAge == 75) {
            endAgeResult.push('125')
        }
        const genderIdentity = setgender
        const lookingFor = choosedVal
        const relationshipStatus = getrelationship_state
        const attractedTo = attracting_update
        const payload = {
            admin_id: localStorage.getItem('loggedIn_userId'),
            sort_by_date: parentFilterPayloadObject.sort_by_date,
            start_date: parentFilterPayloadObject.start_date,
            end_date: parentFilterPayloadObject.end_date,
            start_age: Number(startAge),
            end_age: Number(endAgeResult),
            location: getenteredlocation,
            longitude: logititudes.toString(),
            latitude: latitudes.toString(),
            miles: Number(miles),
            gender_identity: genderIdentity,
            looking_for: lookingFor,
            relationship_status: relationshipStatus,
            attracted_to: attractedTo
        }
        // set_minValues(startAge)
        // set_maxValue(endAge)
        debugger
        dispatch(analyticsChildFilter_APIcall(payload))
        dispatch(analyticsChildFilter_payloadDataPass(payload))
        // setLoader(true)
        popoverHandle()
    }

    const childFilterDialogOpen = () => {
        debugger

        if (icon === false) {
            seticon(true)
        } else {
            seticon(false)
        }
        debugger
        // handleInput({
        //     max: 75,
        //     maxValue: 60,
        //     min: 18,
        //     minValue: 38,
        //     previousData: true
        // })

        // var slider = new MultiRangeSlider();

        // Set the value of the slider
        // slider.setValue([20, 80]);
    }

    const applyClearFilter = () => {
        debugger
        //1 age range start

        //2 location start
        setMiles('')
        setValue('')
        setenteredlocation('')
        setlatitude('')
        setlongitude('')

        //3 gender identity
        setGenderIdentityShowLess(true)
        const newGenderIdentityParent = [
            { id: "1", name: 'Man', checked: false, values: 'Man' },
            { id: "2", name: 'Woman', checked: false, values: 'Woman' },
            { id: "3", name: 'Nonbinary', checked: false, values: 'Nonbinary' }
        ]
        setGenderIdentityParent(newGenderIdentityParent)
        setBinary([])
        setwomen([
            { name: "Intersex Woman", checked: false, values: "Intersex Woman" },
            { name: "Trans Woman", checked: false, values: 'Trans Woman' },
            { name: "Cis Woman", checked: false, values: 'Cis Woman' },
            { name: "Transfeminine", checked: false, values: 'Transfeminine' },
            { name: "Woman & Nonbinary", checked: false, values: 'Woman And Nonbinary' },
            { name: "Other", checked: false, values: 'Other' }
        ])
        setman([
            { name: "Intersex Man", checked: false, values: "Intersex Man" },
            { name: "Trans Man", checked: false, values: "Trans Man" },
            { name: "Cis Man", checked: false, values: "Cis Man" },
            { name: "Transmasculine", checked: false, values: "Transmasculine" },
            { name: "Man & Nonbinary", checked: false, values: "Man And Nonbinary" },
            { name: "Other", checked: false, values: 'Other' }
        ])
        setBinary([
            { name: "Agender", checked: false, values: 'Agender' },
            { name: "Bigender", checked: false, values: 'Bigender' },
            { name: "Genderfluid", checked: false, values: 'Genderfluid' },
            { name: "Gender Nonconforming", checked: false, values: "Gender nonconforming" },
            { name: "Genderqueer", checked: false, values: "Genderqueer" },
            { name: "Gender Questioning", checked: false, values: "Gender questioning" },
            { name: "Gender Variant", checked: false, values: "Gender variant" },
            { name: "Intersex", checked: false, values: "Intersex" },
            { name: "Neutrois", checked: false, values: "Neutrois" },
            { name: "Nonbinary Woman", checked: false, values: "Nonbinary woman" },
            { name: "Nonbinary Man", checked: false, values: "Nonbinary man" },
            { name: "Pangender", checked: false, values: "Pangender" },
            { name: "Polygender", checked: false, values: "Polygender" },
            { name: "Transgender", checked: false, values: "Transgender" },
            { name: "Other", checked: false, values: "Other" }
        ])
        pushgender([])

        //4 looking for start
        const newLookingFor = [...lookingfor]
        for (let i = 0; i < newLookingFor.length; i++) {
            newLookingFor[i].checked = false
        }
        const newLookingForDating = [...dating]
        for (let i = 0; i < newLookingForDating.length; i++) {
            newLookingForDating[i].checked = false
        }
        setLookingfor(newLookingFor)
        setDating(newLookingForDating)
        setshowLess_lookingfor(false)
        setdatingOpt(false)

        //5 relationship status
        setRelationShipStatusParent([
            { id: "1", naming: 'Single ', checked: false, value: 'Single' },
            { id: "2", naming: 'In a Relationship', checked: false, css: { marginLeft: '-23px' }, value: 'In a Relationship' },
            { id: "3", naming: 'It’s Complicated', checked: false, value: 'Its Complicated' }
        ])
        setRelationStatus([])
        setRelationShowLess(true)
        set_relationship_stat([])

        //6 attracted to
        setAttractedToMan([])
        setAttractedToShowLess(!getAttractedToShowLess)
        setAttractedToWomen([])
        setAttractedToBinary([])
        setattracting_update([])
        setAttactedToParent([
            { id: "2", name: 'Women', checked: false, values: 'Women' },
            { id: "1", name: 'Men', checked: false, values: 'Men' },
            { id: "3", name: 'Nonbinary', checked: false, values: 'Nonbinary' }
        ])
    }

    useEffect(() => {
        if (authStat_parentFilterResponseData.data.responseCode == 200 && authStat_parentFilterResponseData.data.responseBody != undefined) {
            applyClearFilter()
        }
    }, [authStat_parentFilterResponseData.data])


    //1 age range section starts
    // const [mins, setmin] = useState('')
    // const [maxs, setmax] = useState('')

    // const chooseMessage = (message) => {
    //     setmin(message.val)
    //     setmax(message.val1)
    //     // console.log(message)
    // }

    const [minValues, set_minValues] = useState(18)
    const [maxValue, set_maxValue] = useState(75)
    const [nxval, set_maxval] = useState(maxValue)
    const handleInput = (e) => {
        debugger

        // if (e.previousData != undefined) {
            if (e.maxValue === 75) {
                set_maxval("75+")
            } else {
                set_maxval(e.maxValue)
            }
            set_minValues(e.minValue)
            set_maxValue(e.maxValue)
            // chooseMessage({ val: minValues, val1: nxval })
        // }
        // if (e.previousData == undefined) {
        //     if (e.maxValue === 75) {
        //         set_maxval("75+")
        //     } else {
        //         set_maxval(e.maxValue)
        //     }
        //     set_minValues(e.minValue)
        //     set_maxValue(e.maxValue)
        //     // chooseMessage({ val: minValues, val1: nxval })
        // }

    }
    //1 age range section ends

    //2 search location section starts
    const handleChange = event => {
        let val
        const values = Math.max(min, Math.min(max, Number(event.target.value)));
        if (values === 0) {
            val = ''
        } else {
            val = values
        }
        setMiles(val);
    }

    const numberInputOnWheelPreventChange = (e) => {
        e.target.blur()
        e.stopPropagation()
        setTimeout(() => {
            e.target.focus()
        }, 0)
    }

    const handleInputs = (e) => {
        if (e.target.value === '') {
            // alert('empty ...')
            setValue('')
            setenteredlocation('')
            setlatitude('')
            setlongitude('')
        }
        setValue(e.target.value)
        if (e.target.value === '' && props.data === true) {
            getlocationerror('Location Name is Required')
        } else {
            getlocationerror('')
        }
        getval(false)
    }

    // ******* location API start********
    const { ready, value, suggestions: { status, data }, setValue } = usePlacesAutocomplete({
        requestOptions: {
        },
        debounce: 1000
    })
    const handleSelect = ({ description }) => () => {
        const parameter = { address: description }
        setValue(description, false)
        getval(true)
        getGeocode(parameter)
            .then((results) => {
                const { lat, lng } = getLatLng(results[0])
                const lati = lat
                const longi = lng
                setlatitude(lati)
                setlongitude(longi)
                setenteredlocation(description)
            })
    }
    const renderSuggestions = () => data.map((suggestion) => {
        const {
            place_id,
            structured_formatting: { main_text, secondary_text }
        } = suggestion
        if ((suggestion == '') || (suggestion == null) || (suggestion == undefined)) {
            alert('empty')
        }
        console.log("renderSuggestions", suggestion)
        console.log(typeof (suggestion))
        return (
            <li style={{ listStyleType: 'none' }} className="m-75" key={place_id} onClick={handleSelect(suggestion)}>
                <strong>{main_text} </strong> <small>{secondary_text}</small>
            </li>
        )
    })
    // ******* location API ends********

    useEffect(() => {
        if (getenteredlocation == '') {
            setMilesDisabled(true)
            setMiles('')
        }
        else if (getenteredlocation != '') {
            setMilesDisabled(false)
        }
    }, [getenteredlocation])
    //2 search location section ends

    //3 gender identity section start
    const genderval = (women, men, binary, over_all) => {
        debugger
        console.log(men, binary, women, over_all)
        let mans = []
        let binaries = []
        let womens = []
        let full_load = []
        if (men.length !== 0) {
            mans = men.filter(res => res.checked === true)
        }
        if (binary.length !== 0) {
            binaries = binary.filter(res => res.checked === true)
        }
        if (women.length !== 0) {
            womens = women.filter(res => res.checked === true)
        }
        if (over_all.length !== 0) {
            full_load = over_all.filter(res => res.checked === true)
        }
        let items = []
        items = [...mans, ...binaries, ...womens, ...full_load]
        console.log(items)
        const values_index = []
        const val_data = [...items]
        for (let i = 0; i < val_data.length; i++) {
            values_index.push(val_data[i].values)
        }
        pushgender(values_index)
    }

    const checkgenderval = (item, index) => {
        debugger
        console.log(item.id)
        const val = [...genderIdentityParent]
        for (let i = 0; i < val.length; i++) {
            if (item.id === val[i].id && val[i].checked === false) {
                val[i].checked = true
                if (val[i].name === "Man" && val[i].checked === true) {
                    setBinary([])
                    setwomen([])
                    setman([
                        { name: "Intersex Man", checked: false, values: "Intersex Man" },
                        { name: "Trans Man", checked: false, values: "Trans Man" },
                        { name: "Cis Man", checked: false, values: "Cis Man" },
                        { name: "Transmasculine", checked: false, values: "Transmasculine" },
                        { name: "Man & Nonbinary", checked: false, values: "Man And Nonbinary" },
                        { name: "Other", checked: false, values: 'Other' }
                    ])
                }
                if (val[i].name === "Woman" && val[i].checked === true) {
                    setman([])
                    setwomen([
                        { name: "Intersex Woman", checked: false, values: "Intersex Woman" },
                        { name: "Trans Woman", checked: false, values: 'Trans Woman' },
                        { name: "Cis Woman", checked: false, values: 'Cis Woman' },
                        { name: "Transfeminine", checked: false, values: 'Transfeminine' },
                        { name: "Woman & Nonbinary", checked: false, values: 'Woman And Nonbinary' },
                        { name: "Other", checked: false, values: 'Other' }
                    ])
                    setBinary([])
                }
                debugger
                console.log(women)
                if (val[index].name === "Nonbinary" && val[index].checked === true) {
                    setman([])
                    setwomen([])
                    setBinary([
                        { name: "Agender", checked: false, values: 'Agender' },
                        { name: "Bigender", checked: false, values: 'Bigender' },
                        { name: "Genderfluid", checked: false, values: 'Genderfluid' },
                        { name: "Gender Nonconforming", checked: false, values: "Gender nonconforming" },
                        { name: "Genderqueer", checked: false, values: "Genderqueer" },
                        { name: "Gender Questioning", checked: false, values: "Gender questioning" },
                        { name: "Gender Variant", checked: false, values: "Gender variant" },
                        { name: "Intersex", checked: false, values: "Intersex" },
                        { name: "Neutrois", checked: false, values: "Neutrois" },
                        { name: "Nonbinary Woman", checked: false, values: "Nonbinary woman" },
                        { name: "Nonbinary Man", checked: false, values: "Nonbinary man" },
                        { name: "Pangender", checked: false, values: "Pangender" },
                        { name: "Polygender", checked: false, values: "Polygender" },
                        { name: "Transgender", checked: false, values: "Transgender" },
                        { name: "Other", checked: false, values: "Other" }
                    ])
                }
            } else {
                val[i].checked = false
                if (val[i].name === 'Man') {
                    const newMan = [...man]
                    for (let i = 0; i < newMan.length; i++) {
                        newMan[i].checked = false
                    }
                    setman(newMan)
                    setman([])
                    console.log(man)
                }
                if (val[i].name === 'Woman') {
                    const newWoman = [...women]
                    for (let i = 0; i < newWoman.length; i++) {
                        newWoman[i].checked = false
                    }
                    setwomen(newWoman)
                    setwomen([])
                    console.log(women)
                }
                if (val[i].name === 'Nonbinary') {
                    const newNonbinary = [...binary]
                    for (let i = 0; i < newNonbinary.length; i++) {
                        newNonbinary[i].checked = false
                    }
                    setBinary(newNonbinary)
                    setBinary([])
                    console.log(binary);
                }
            }
        }
        setGenderIdentityParent(val)
        debugger
        genderval(women, man, binary, genderIdentityParent)
    }

    useEffect(() => {
        // setGenderIdentityItems(props.data)
        if (setgender.length !== 0) {
            const fgender = [...setgender[0]]
            const filterbinary = fgender.filter(res => res === 'nonbinary')
            const filterfemale = fgender.filter(res => res === 'woman')
            const filtermale = fgender.filter(res => res === 'man')
            const gen = [...setgender[0]]
            const val = [...genderIdentityParent]
            if (gen.length >= val.length) {
                for (let j = 0; j < gen.length; j++) {
                    for (let i = 0; i < val.length; i++) {
                        if (gen[j] === val[i].values) {
                            val[i].checked = true
                        }
                    }
                }
            } else if (gen.length < val.length) {
                for (let i = 0; i < val.length; i++) {
                    for (let j = 0; j < gen.length; j++) {
                        if (gen[j] === val[i].values) {
                            val[i].checked = true
                        }
                    }
                }
            }
            if (filterfemale.length !== 0) {
                const valfemale = [
                    { name: "Intersex Woman", checked: false, values: "Intersex Woman" },
                    { name: "Trans Woman", checked: false, values: 'Trans Woman' },
                    { name: "Cis Woman", checked: false, values: 'Cis Woman' },
                    { name: "Transfeminine", checked: false, values: 'Transfeminine' },
                    { name: "Woman & Nonbinary", checked: false, values: 'Woman And Nonbinary' },
                    { name: "Other", checked: false, values: 'Other' }
                ]
                if (gen.length >= valfemale.length) {
                    for (let i = 0; i < valfemale.length; i++) {
                        for (let j = 0; j < gen.length; j++) {
                            if (valfemale[i] !== undefined) {
                                if (gen[j] === valfemale[i].values) {
                                    valfemale[i].checked = true
                                }
                            }
                        }
                    }
                } else if (gen.length < valfemale.length) {
                    for (let i = 0; i < valfemale.length; i++) {
                        for (let j = 0; j < gen.length; j++) {
                            if (valfemale[i] !== undefined) {
                                if (gen[j] === valfemale[i].values) {
                                    valfemale[i].checked = true
                                }
                            }
                        }
                    }
                }
                setwomen(valfemale)
            }
            if (filtermale.length !== 0) {
                const valuesmale = [
                    { name: "Intersex Man", checked: false, values: "Intersex Man" },
                    { name: "Trans Man", checked: false, values: "Trans Man" },
                    { name: "Cis Man", checked: false, values: "Cis Man" },
                    { name: "Transmasculine", checked: false, values: "Transmasculine" },
                    { name: "Man and Nonbinary", checked: false, values: "Man And Nonbinary" },
                    { name: "Other", checked: false, values: 'Other' }
                ]
                if (gen.length >= valuesmale.length) {
                    for (let i = 0; i < valuesmale.length; i++) {
                        for (let j = 0; j < gen.length; j++) {
                            if (gen[j] === valuesmale[i].values) {
                                valuesmale[i].checked = true
                            }
                        }
                    }
                } else if (gen.length < valuesmale.length) {
                    for (let i = 0; i < valuesmale.length; i++) {
                        for (let j = 0; j < gen.length; j++) {
                            if (gen[j] === valuesmale[i].values) {
                                valuesmale[i].checked = true
                            }
                        }
                    }
                }
                setman(valuesmale)
            }
            if (filterbinary.length !== 0) {
                const dataa = [
                    { name: "Agender", checked: false, values: 'Agender' },
                    { name: "Bigender", checked: false, values: 'Bigender' },
                    { name: "Genderfluid", checked: false, values: 'Genderfluid' },
                    { name: "Genderqueer", checked: false, values: "Genderqueer" },
                    { name: "Gender Nonconforming", checked: false, values: "Gender nonconforming" },
                    { name: "Gender Questioning", checked: false, values: "Gender questioning" },
                    { name: "Gender Variant", checked: false, values: "Gender variant" },
                    { name: "Intersex", checked: false, values: "Intersex" },
                    { name: "Neutrois", checked: false, values: "Neutrois" },
                    { name: "Nonbinary Man", checked: false, values: "Nonbinary man" },
                    { name: "Nonbinary Woman", checked: false, values: "Nonbinary woman" },
                    { name: "Pangender", checked: false, values: "Pangender" },
                    { name: "Polygender", checked: false, values: "Polygender" },
                    { name: "Transgender", checked: false, values: "Transgender" },
                    { name: "Other", checked: false, values: "Other" }
                ]
                if (gen.length >= dataa.length) {
                    for (let i = 0; i < dataa.length; i++) {
                        for (let j = 0; j < gen.length; j++) {
                            if (gen[j] === dataa[i].values) {
                                dataa[i].checked = true
                            }
                        }
                    }
                } else if (gen.length < dataa.length) {
                    for (let i = 0; i < dataa.length; i++) {
                        for (let j = 0; j < gen.length; j++) {
                            if (gen[j] === dataa[i].values) {
                                dataa[i].checked = true
                            }
                        }
                    }
                }
                setBinary(dataa)
            }
            setGenderIdentityParent(val)
            const overrall = women.filter(res => res.values === 'other' && res.checked === true)
            const val1 = man.filter(res => res.values === 'other' && res.checked === true)
            const val2 = binary.filter(res => res.values === 'other' && res.checked === true)
            if (overrall.length !== 0) {
                getinput(true)
            } else if (val1.length !== 0) {
                getinput(true)
            } else if (val2.length !== 0) {
                getinput(true)
            } else {
                getinput(false)
            }
            genderval(women, man, binary, genderIdentityParent)
        }
    }, [])

    const overall = (item, index, e) => {
        let tags_overall
        const items = [...getallgender]
        if (e === "women") {
            tags_overall = [...women]
        } else if (e === "men") {
            tags_overall = [...man]
        } else if (e === "binary") {
            tags_overall = [...binary]
        }

        if (tags_overall[index] !== undefined) {
            if (tags_overall[index].checked === true) {
                tags_overall[index].checked = false
            } else {
                tags_overall[index].checked = true
                items.push(tags_overall[index].values)
                console.log(items)
            }

            console.log(items)
            if (e === "women") {
                setwomen(tags_overall)
            } else if (e === "men") {
                setman(tags_overall)
            } else if (e === "binary") {
                setBinary(tags_overall)
            }
        }

        const val = [...women, ...man, ...binary]
        console.log(genderIdentityParent)
        const overrall = women.filter(res => res.values === 'other' && res.checked === true)
        const val1 = man.filter(res => res.values === 'other' && res.checked === true)
        const val2 = binary.filter(res => res.values === 'other' && res.checked === true)
        if (overrall.length !== 0) {
            getinput(true)
        } else if (val1.length !== 0) {
            getinput(true)
        } else if (val2.length !== 0) {
            getinput(true)
        } else {
            getinput(false)
        }
        genderval(women, man, binary, genderIdentityParent)
    }

    const changeShow = () => {
        setGenderIdentityShowLess(!genderIdentityShowLess)
    }
    //3 gender identity section ends

    //4 looking for section start
    const changeShow_lookingfor = () => {
        setshowLess_lookingfor(!showLess_lookingfor)
    }

    const lookingforHandle = (index) => {
        const newLookingfor1 = [...lookingfor]
        if (index === 2 && newLookingfor1[index].checked === true && showLess_lookingfor == true) {
            setshowLess_lookingfor(false)
            const newLookingForDating = [...dating]
            for (let i = 0; i < newLookingForDating.length; i++) {
                newLookingForDating[i].checked = false
            }
            setDating(newLookingForDating)
        }
        if (newLookingfor1[index].checked === false) {
            newLookingfor1[index].checked = true
            // selectedraw.push(newLookingfor1[index].keyname)
            setLookingfor(newLookingfor1)
        } else {
            newLookingfor1[index].checked = true
            newLookingfor1[index].checked = false
            setLookingfor(newLookingfor1)
        }
        debugger
        if (index === 2 && newLookingfor1[index].checked === true) {
            setdatingOpt(true)
            setLookingfor(newLookingfor1)
            console.log(datingOpt)
            console.log(newLookingfor1)
            // datingOpt == true && showLess_lookingfor
        } else if (index === 2 && newLookingfor1[index].checked === false) {
            setdatingOpt(false)
            console.log(datingOpt)
            setLookingfor(newLookingfor1)
            datingOpt == true && showLess_lookingfor
        }
    }

    const lookingforDatingHandle = (index) => {
        const newDating = [...dating]
        if (newDating[index].checked === false) {
            newDating[index].checked = true
            setDating(newDating)
        } else {
            newDating[index].checked = true
            newDating[index].checked = false
            setDating(newDating)
        }
        console.log(dating)
    }
    //4 looking for section ends

    //5 relationship status section starts
    const relationshipvalue = (relation, tag) => {
        debugger
        let m = []
        let v = []
        let totalval = []
        const relate1 = []
        if (relation.length !== 0) {
            m = relation.filter(res => res.checked === true)
        }
        if (tag.length !== 0) {
            v = tag.filter(res => res.checked === true)
        }
        totalval = [...m, ...v]
        for (let i = 0; i < totalval.length; i++) {
            relate1.push(totalval[i].value)
        }
        set_relationship_stat(relate1)
        console.log("dddd", relate1)
    }


    const relationshipStatusShow = () => {
        debugger
        if (relationShow === true) {
            setRelationShowLess(false)
        } else {
            setRelationShowLess(true)
        }
        const m = relationShipStatusParent.filter(res => res.checked === true)
        if (m.length !== 0 && relationShow === true) {
            setRelationStatus([
                { id: "4", naming: 'Engaged', checked: false, value: 'Engaged' },
                { id: "5", naming: 'Married', checked: false, css: { marginLeft: '-23px' }, value: 'Married' },
                { id: "6", naming: 'Widowed', checked: false, value: 'Widowed' },
                { id: "7", naming: 'ENM', checked: false, value: 'ENM' },
                { id: "8", naming: 'Separated', checked: false, css: { marginLeft: '-23px' }, value: 'Separated' },
                { id: "9", naming: 'Divorced', checked: false, value: 'Divorced' }
            ])
        } else {
            setRelationStatus([])
        }
        debugger
        relationshipvalue(getRelationStatus, relationShipStatusParent)
    }

    const handlechange1 = (index) => {
        debugger
        const tagval = [...getRelationStatus]
        if (tagval[index].checked === true) {
            tagval[index].checked = false
        } else {
            tagval[index].checked = true
        }
        setRelationStatus(tagval)
        debugger
        relationshipvalue(tagval, relationShipStatusParent)
    }

    const handlechange = (index, name) => {
        debugger
        const newtags = [...relationShipStatusParent]
        for (let i = 0; i < newtags.length; i++) {
            if (newtags[i].naming === name && newtags[i].checked === false) {
                newtags[i].checked = true
            } else if (newtags[i].checked === true) {
                newtags[i].checked = false
            }
        }
        const f = newtags.filter(res => res.checked === true)
        if (f.length !== 0) {
            setRelationShowLess(false)
            setRelationStatus([
                { id: "4", naming: 'Engaged', checked: false, value: 'Engaged' },
                { id: "5", naming: 'Married', checked: false, css: { marginLeft: '-23px' }, value: 'Married' },
                { id: "6", naming: 'Widowed', checked: false, value: 'Widowed' },
                { id: "7", naming: 'ENM', checked: false, value: 'ENM' },
                { id: "8", naming: 'Separated', checked: false, css: { marginLeft: '-23px' }, value: 'Separated' },
                { id: "9", naming: 'Divorced', checked: false, value: 'Divorced' }
            ])

            console.log(getRelationStatus)
            const newRelationShipStatus = [...getRelationStatus]
            for (let i = 0; i < newRelationShipStatus.length; i++) {
                newRelationShipStatus[i].checked = false
            }
            setnewRelationShipStatus(newRelationShipStatus)
        } else {
            setRelationShowLess(true)
            setRelationStatus([])
        }
        setRelationShipStatusParent(newtags)
        debugger
        relationshipvalue(getnewRelationShipStatus, relationShipStatusParent)
    }
    //5 relationship status section ends

    //6 attracted to section starts
    const getattractvalue = (overall, men, women, binary, itemName) => {
        debugger
        const allgen = []
        let mergegend = []
        console.log(overall, men, women, binary)
        const CheckedData = []
        for (let i = 0; i < overall.length; i++) {
            if (overall[i].checked == true) {
                CheckedData.push(overall[i].name)
            }
        }
        let womenData = women
        let menData = men
        let binaryData = binary

        if (overall.length !== 0) {
            for (let i = 0; i < overall.length; i++) {
                if (itemName == 'Women') {
                    womenData = []
                    console.log(womenData)
                }
                if (itemName == 'Men') {
                    menData = []
                    console.log(menData)
                }
                if (itemName == 'Nonbinary') {
                    binaryData = []
                    console.log(binaryData)
                }
            }
        }
        if (overall.length === 0) {
            womenData = []
            menData = []
            binaryData = []
            setAttractedToShowLess(true)
        }
        console.log(womenData)
        console.log(menData)
        console.log(binaryData)

        mergegend = [...CheckedData, ...menData, ...womenData, ...binaryData]
        for (let i = 0; i < mergegend.length; i++) {
            if (mergegend[i].values == undefined) {
                allgen.push(mergegend[i])
            }
            else if (mergegend[i].values != undefined) {
                allgen.push(mergegend[i].values)
            }
        }
        setattracting_update(allgen)
        console.log(allgen, "bbbbb")
    }


    const attractedToCheckGenderVal = (item, index, itemName) => {
        debugger
        console.log(item.id)
        const val = [...attactedToParent]
        if (val[index].checked === true) {
            val[index].checked = false
        } else {
            val[index].checked = true
        }

        //men section
        if (val[index].name === "Men" && val[index].checked === true) {
            setAttractedToMan([
                { name: "Intersex Men", checked: false, values: "Intersex Men" },
                { name: "Trans Men", checked: false, values: "Trans Men" },
                { name: "Cis Men", checked: false, values: "Cis Men" },
                { name: "Transmasculine", checked: false, values: "Transmasculine" },
                { name: "Men & Nonbinary", checked: false, values: "Men & Nonbinary" },
                { name: "Other", checked: false, values: 'Other' }
            ])

            // const newAttractedToMan = [...getAttactedToMan]
            // for (let i = 0; i < newAttractedToMan.length; i++) {
            //     newAttractedToMan[i].checked = false
            // }
            // setAttractedToMan(newAttractedToMan)
        } else if (val[index].name === "Men" && val[index].checked === false) {
            setAttractedToMan([])
        }

        //women section
        if (val[index].name === "Women" && val[index].checked === true) {
            setAttractedToWomen([
                { name: "Intersex Women", checked: false, values: "Intersex Women" },
                { name: "Trans Women", checked: false, values: 'Trans Women' },
                { name: "Cis Women", checked: false, values: 'Cis Women' },
                { name: "Transfeminine", checked: false, values: 'Transfeminine' },
                { name: "Women & Nonbinary", checked: false, values: 'Women & Nonbinary' },
                { name: "Other", checked: false, values: 'Other' }
            ])
            // const newAttractedToWomen = [...getAttractedToWomen]
            // for (let i = 0; i < newAttractedToWomen.length; i++) {
            //     newAttractedToWomen[i].checked = false
            // }
            // setAttractedToWomen(newAttractedToWomen)
        } else if (val[index].name === "Women" && val[index].checked === false) {
            setAttractedToWomen([])
        }
        console.log(getAttractedToWomen)

        //nonbinary section
        if (val[index].name === "Nonbinary" && val[index].checked === true) {
            setAttractedToBinary([
                { name: "Agender", checked: false, values: 'Agender' },
                { name: "Bigender", checked: false, values: 'Bigender' },
                { name: "Genderfluid", checked: false, values: 'Genderfluid' },
                { name: "Gender Nonconforming", checked: false, values: "Gender nonconforming" },
                { name: "Genderqueer", checked: false, values: "Genderqueer" },
                { name: "Gender Questioning", checked: false, values: "Gender questioning" },
                { name: "Gender Variant", checked: false, values: "Gender variant" },
                { name: "Intersex", checked: false, values: "Intersex" },
                { name: "Neutrois", checked: false, values: "Neutrois" },
                { name: "Nonbinary Women", checked: false, values: "Nonbinary woman" },
                { name: "Nonbinary Men", checked: false, values: "Nonbinary man" },
                { name: "Pangender", checked: false, values: "Pangender" },
                { name: "Polygender", checked: false, values: "Polygender" },
                { name: "Transgender", checked: false, values: "Transgender" },
                { name: "Other", checked: false, values: "Other" }
            ])
            // const newAttractedToBinary = [...getAttractedToBinary]
            // for (let i = 0; i < newAttractedToBinary.length; i++) {
            //     newAttractedToBinary[i].checked = false
            // }
            // setAttractedToBinary(newAttractedToBinary)
        } else if (val[index].name === "Nonbinary" && val[index].checked === false) {
            setAttractedToBinary([])
        }
        console.log(getAttractedToBinary)

        //remove duplicateoption('Other' option)
        if ((val[0].name === "Women" && val[0].checked === true) && (val[index].name === "Men" && val[index].checked === true)) {
            getAttractedToWomen.splice(5, 1)
        }
        else if ((val[1].name === "Men" && val[1].checked === true) && (val[index].name === "Women" && val[index].checked === true)) {
            getAttactedToMan.splice(5, 1)
        }
        else if ((val[1].name === "Men" && val[1].checked === true) && (val[index].name === "Nonbinary" && val[index].checked === true)) {
            getAttactedToMan.splice(5, 1)
        }
        else if ((val[2].name === "Nonbinary" && val[2].checked === true) && (val[index].name === "Men" && val[index].checked === true)) {
            getAttractedToBinary.splice(14, 1)
        }
        else if ((val[0].name === "Nonbinary" && val[2].checked === true) && (val[index].name === "Nonbinary" && val[index].checked === true)) {
            getAttractedToWomen.splice(5, 1)
        }
        else if ((val[2].name === "Nonbinary" && val[2].checked === true) && (val[index].name === "Women" && val[index].checked === true)) {
            getAttractedToBinary.splice(14, 1)
        }
        else if ((val[0].name === "Women" && val[0].checked === true) &&
            (val[1].name === "Men" && val[1].checked === true) &&
            (val[2].name === "Nonbinary" && val[2].checked === true)) {
            getAttractedToWomen.splice(5, 1)
            getAttactedToMan.splice(5, 1)
        }
        console.log(getAttactedToMan)

        // 
        // const allGenders = [...man, ...women, ...binary]
        // console.log(allGenders)

        setAttactedToParent(val)
        const sendgender = val.filter(res => res.checked === true)
        console.log(sendgender)
        const mans = getAttactedToMan.filter(res => res.checked === true)
        console.log(sendgender)
        const womans = getAttractedToWomen.filter(res => res.checked === true)
        console.log(sendgender)
        const binaries = getAttractedToBinary.filter(res => res.checked === true)
        console.log(sendgender)
        getattractvalue(sendgender, mans, womans, binaries, itemName)
    }

    const attractedToOverall = (item, index, e) => {
        debugger
        let tags1
        if (e === "women") {
            tags1 = [...getAttractedToWomen]
        } else if (e === "men") {
            tags1 = [...getAttactedToMan]
        } else if (e === "binary") {
            tags1 = [...getAttractedToBinary]
        }
        if (tags1[index].checked === true) {
            tags1[index].checked = false
        } else {
            tags1[index].checked = true
        }
        if (e === "women") {
            setAttractedToWomen(tags1)
        } else if (e === "men") {
            setAttractedToMan(tags1)
        } else if (e === "binary") {
            setAttractedToBinary(tags1)
        }

        const sendgender = attactedToParent.filter(res => res.checked === true)
        console.log(sendgender)
        const mans = getAttactedToMan.filter(res => res.checked === true)
        console.log(sendgender)
        const womans = getAttractedToWomen.filter(res => res.checked === true)
        console.log(sendgender)
        const binaries = getAttractedToBinary.filter(res => res.checked === true)
        console.log(sendgender)
        getattractvalue(sendgender, mans, womans, binaries)
    }
    //6 attracted to section ends


    return (
        <div>
            <button onClick={childFilterDialogOpen} className='btn_filter d-flex flex-row justify-content-flex-start align-items-center' style={{ border: "1px solid  #95E1BF", borderRadius: "10px", cursor: 'pointer' }} id='popBottoms'>
                <div className='col-10 d-flex justify-content-center'>
                    <img src={sortby} width="18px" height="18px" /><span className='textalgn'>&nbsp;&nbsp;&nbsp;Filter By</span></div>
                <div className='col-1'>
                    {/* {showLess ? <div><IoIosArrowDown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowUp style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>} */}
                    <Icon.ChevronDown className='filteralign ' style={{ display: icon === true ? 'none' : 'block', color: "#003B4A", marginLeft: "-5px" }}>
                    </Icon.ChevronDown>
                    <Icon.ChevronUp className='filteralign' style={{ display: icon === false ? 'none' : 'block', color: "#003B4A", marginLeft: "-5px" }}></Icon.ChevronUp>
                    {/* <IoIosArrowDown style={{width:"22px",height:"22px",color:"#003B4A"}}/> */}
                </div>
            </button>&nbsp;&nbsp;&nbsp;
            {/*1. isOpen={popoverOpen} 2. <div><IoIosArrowUp style={{width:"22px",height:"22px",color:"#003B4A"}} /></div> */}
            <UncontrolledPopover isOpen={popoverOpen} toggle={() => setPopoverOpen(!popoverOpen)} placement='bottom' target='popBottoms'   >
                {/* <UncontrolledPopover isOpen={popoverOpen} onClick={openPopover} placement='bottom' target='popBottoms'   > */}
                <div style={{ display: loader !== false ? '' : 'none' }}>
                    <div className='enable-loader1'>
                        <img src={load} width="80px" height="80px"></img>
                    </div>
                </div>

                <div className={`card p-2 d-block ${props.data == true ? 'width_size2' : 'width_size3'}`} style={{ border: "1px solid  #95E1BF", borderRadius: "2px" }}>
                    <div className='d-flex justify-content-between flex-row align-items-center  mb-3'>
                        <span className='filter_by'>Filter By</span>
                        <span className='clear_filter' onClick={applyClearFilter} style={{ cursor: 'pointer' }}>Clear Filters</span>
                    </div>

                    <div>
                        <div className='range d-flex justify-content-between flex-row'>
                            <span className="min-header col-10">Age</span>
                            <span className=' height-detail text-font1'>{minValues} - {nxval}
                            </span>
                        </div>
                        <MultiRangeSlider minValue={18} min={18} max={75} minCaption={minValues} maxCaption={nxval} step={5} onInput={(e) => { handleInput(e) }}></MultiRangeSlider>
                    </div>

                    {/* <div className='my-4'>
                        <TwoSidedMultiRangeSlider/>
                    </div> */}

                    <div>
                        <div className='range flex-row mb-50'>
                            <span className="min-header col-10">Location</span>
                        </div>
                        <div className='mb-2'>
                            <div className='d-flex align-items-between justify-content-between'>
                                <div className='col-9 pe-2'>
                                    <img src={searchIcon} width='20px' height='20px' style={{ position: "absolute", left: "6%", marginTop: "23px" }} />
                                    <input type="text" className='formControl text_field' placeholder='Search city or state...'
                                        value={value} onChange={handleInputs}
                                        disabled={!ready} style={{ paddingLeft: "11%" }}></input>
                                    {status === "OK" && setval === false && <div className="col-12 " style={{ border: "1px solid #d8d6de", borderRadius: "14px" }}>{renderSuggestions()}</div>}
                                </div>
                                <div className='col-3'>
                                    <input type="number" onWheel={numberInputOnWheelPreventChange} className='formControl text_field' placeholder='Add miles' disabled={milesDisabled}
                                        value={getMiles} onChange={handleChange}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ color: "#CCD8DB" }}></hr>

                    {/* <AnalyticsChildFilterGenderActivity data={getgenderidentity} handles={genderval}></AnalyticsChildFilterGenderActivity> */}

                    <div>
                        <div className='d-flex justify-content-between flex-row mb-2'>
                            <div>
                                <span className="min-header col-10">Gender Identity</span>
                            </div>
                            <div>
                                <div onClick={changeShow}>{genderIdentityShowLess ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
                            </div>
                        </div>


                        <div className="row">
                            {genderIdentityShowLess ? <>
                                {genderIdentityParent.map((items, index) => <div key={index} className="col-4 ">
                                    {index === 0 || index === 1 || index === 2 ? <div className='mb-2 d-flex align-items-center' >
                                        <img onClick={() => { checkgenderval(items, index) }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                        <span className='fonting-style  col-9'>{items.name} </span><br></br>
                                    </div> : ""}
                                </div>)}

                            </> : <>
                                {genderIdentityParent.map((items, index) => <div key={index} className="col-4 ">
                                    <div className='mb-2 d-flex align-items-center'>
                                        <img onClick={() => { checkgenderval(items, index) }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                        <span className='fonting-style col-9'>{items.name} </span><br></br>
                                    </div>
                                </div>)}

                                {women.map((items, index) => <div key={index} className="col-4 ">
                                    <div className='mb-2 d-flex align-items-center'>
                                        <img onClick={() => { overall(items, index, 'women') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                        <span className='fonting-style col-9'>{items.name} </span><br></br>
                                    </div>
                                </div>)}

                                {man.map((items, index) => <div key={index} className="col-4 ">
                                    <div className='mb-2 d-flex align-items-center'>
                                        <img onClick={() => { overall(items, index, 'men') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                        <span className='fonting-style col-9'>{items.name} </span><br></br>
                                    </div>
                                </div>)}

                                {binary.map((items, index) => <div key={index} className="col-4 ">
                                    <div className='mb-2 d-flex align-items-center'>
                                        <img onClick={() => { overall(items, index, 'binary') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                        <span className='fonting-style col-9'>{items.name} </span><br></br>
                                    </div>

                                </div>)}

                                {/* <div className='col-12 mb-1 placeholding' style={{ display: setinput === true ? '' : 'none' }}>
            <div className='d-flex align-items-center border_size'>
              <input type="input" readOnly className='w-100 height-range ms-1 text_search ' value={props.data1} placeholder='&nbsp;&nbsp;&nbsp;&nbsp;Let us know what we are missing...'></input>
            </div>
          </div> */}
                            </>
                            }
                        </div>
                    </div>

                    <hr style={{ color: "#CCD8DB" }}></hr>

                    <div className="col-12">
                        {/* <FilterLookingFor></FilterLookingFor> */}

                        {/* filter looking for start */}
                        <div>
                            <div className='d-flex justify-content-between flex-row mb-2'>
                                <div>
                                    <span className='loc'>Looking for</span>
                                </div>
                                <div>
                                    <div onClick={changeShow_lookingfor}>{showLess_lookingfor ?
                                        <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;
                                            <IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>
                                        :
                                        <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;
                                            <IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>
                                    }</div>
                                </div>
                            </div>

                            <div className="row">
                                {lookingfor.map((items, index) => {
                                    return (
                                        <div key={index} className="col-4">
                                            <div className='mb-2 d-flex align-items-center' >
                                                <img className="me-50" onClick={() => { lookingforHandle(index) }} src={items.checked == true ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>
                                                <span style={items.css} className='fonting-style col-9'>{items.name} </span><br></br>
                                            </div>
                                        </div>
                                    )
                                })}
                                {datingOpt == true && showLess_lookingfor ? <div className="row">
                                    <div className="mb-1" >
                                        <span className='fonting-styling'>Because you selected dating...</span><br></br>
                                    </div>
                                    {dating.map((items1, index) => {
                                        return (
                                            <div key={index} className="col-6">
                                                <div className='mb-2 d-flex align-items-center'>
                                                    <img className="me-50" onClick={() => { lookingforDatingHandle(index) }} src={items1.checked == true ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>
                                                    <span className='fonting-style col'>{items1.name} </span><br></br>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )}
                                </div> : null}
                            </div>
                        </div>

                        {/* filter looking for ends */}
                        {/* hitClearFilter={getApplyClearFilter} */}
                    </div>
                    <hr style={{ color: "#CCD8DB" }}></hr>
                    {/* <AnalyticsChildFilterRelationshipStatus dataval={setrelation_shipstatus} sethandle={relationshipvalue}></AnalyticsChildFilterRelationshipStatus> */}

                    <div>
                        <div className='d-flex justify-content-between flex-row mb-2 '>
                            <div>
                                <span className="min-header col-10">Relationship Status</span>
                            </div>
                            <div>
                                <div onClick={relationshipStatusShow}>{relationShow ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
                            </div>
                        </div>

                        <form className="row">
                            {relationShipStatusParent.map((items, index) => <div key={index} className="col-4">
                                <div className='mb-2 d-flex align-items-center' style={items.css}>
                                    <img onClick={() => { handlechange(index, items.naming) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                    <span className='fonting-style '>{items.naming} </span><br></br>
                                </div>
                            </div>)}

                            {getRelationStatus.map((items, index) => <div key={index} className="col-4">
                                <div className='mb-2 d-flex align-items-center' style={items.css}>
                                    <img onClick={() => { handlechange1(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                    <span className='fonting-style col-9'>{items.naming} </span><br></br>
                                </div>
                            </div>)}
                        </form>
                    </div>

                    <hr style={{ color: "#CCD8DB" }}></hr>
                    {/* <AnalyticsChildFilterAttractedTo datavalue={setattract} setattraction={getattractvalue}></AnalyticsChildFilterAttractedTo> */}
                    <div>
                        <div className='d-flex justify-content-between flex-row mb-2'>
                            <div>
                                <span className="min-header col-10">Attracted To</span>
                            </div>
                            <div>
                                <div onClick={attractedToChangeShow}>{getAttractedToShowLess ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
                            </div>
                        </div>

                        <form className="row">
                            {getAttractedToShowLess ? <>
                                {attactedToParent.map((items, index) => <div key={index} className="col-4">
                                    {index == 0 || index == 1 || index == 2 || index == 3 || index == 4 || index == 5 ? <div className='mb-2 d-flex align-items-center' >
                                        <img onClick={() => { attractedToCheckGenderVal(items, index, items.name) }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                        <span className='fonting-style col-12'>{items.name} </span><br></br>
                                    </div> : ""}
                                </div>)}
                            </> : <>
                                {attactedToParent.map((items, index) => <div key={index} className="col-4">
                                    <div className='mb-2 d-flex align-items-center'>
                                        <img onClick={() => { attractedToCheckGenderVal(items, index, items.name) }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                        <span className='fonting-style  col-12'>{items.name} </span><br></br>
                                    </div>
                                </div>)}

                                {getAttractedToWomen.map((items, index) => <div key={index} className="col-4">
                                    <div className='mb-2 d-flex align-items-center'>
                                        <img onClick={() => { attractedToOverall(items, index, 'women') }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                        <span className='fonting-style  col-12'>{items.name} </span><br></br>
                                    </div>
                                </div>)}

                                {getAttactedToMan.map((items, index) => <div key={index} className="col-4">
                                    <div className='mb-2 d-flex align-items-center'>
                                        <img onClick={() => { attractedToOverall(items, index, 'men') }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                        <span className='fonting-style  col-12'>{items.name} </span><br></br>
                                    </div>
                                </div>)}

                                {getAttractedToBinary.map((items, index) => <div key={index} className="col-4">
                                    <div className='mb-2 d-flex align-items-center'>
                                        <img onClick={() => { attractedToOverall(items, index, 'binary') }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
                                        <span className='fonting-style  col-12'>{items.name} </span><br></br>
                                    </div>
                                </div>)}
                            </>
                            }
                        </form>
                    </div>

                    <div className='d-flex align-items-center justify-content-center mt-1 mb-3'>
                        <button className='btn-applyy' onClick={() => applyChildFilter()}>
                            <span className='font-applyy'>Apply</span>
                        </button>
                    </div>

                </div>
            </UncontrolledPopover>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        admin_analytics_filter_global: state.admin_analytics_filter_global,
        analyticsParentFilterData: state.analyticsParentFilterData,
        analyticsChildFilterData: state.analyticsChildFilterData
    }
}
export default connect(mapStateToProps, {})(AnalyticsChildFilterDialog)
