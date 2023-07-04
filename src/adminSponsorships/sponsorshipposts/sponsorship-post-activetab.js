import React, { useState } from "react"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorpostsmenu/sponsorshippostmain.scss'
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import activepostimg from "../../../src/assets/images/dashboardimg/activepostimg.png"
import morehorizontal from "../../../src/assets/images/dashboardimg/morehorizontal.png"
import message from '../../../src/assets/images/dashboardimg/message.png'
import smilingeyes from '../../../src/assets/images/dashboardimg/smilingeyes.png'
import thumpsup from '../../../src/assets/images/dashboardimg/thumpsup.png'
import redheart from '../../../src/assets/images/dashboardimg/redheart.png'
import SponsorshipPostEventViewReport from "./sponsorship-post-viewreport"
import SponsorshipActiveEventSendReport from "../sponsorshipevents/sponsorship-activeevent-sendreport.js"
import SponsorPostActiveComments from "./sponsorship-post-comments"
import { useEffect } from "react"
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import { connect, useDispatch, useSelector } from "react-redux"
import defaultpostimage from '../../../src/assets/images/dashboardimg/defaultpostimage.png'
import { getSponsorPostDemograph_APIcall } from "../slice-sponsorship/slice-sponsorshipPosts/slice-getSponsorPostDemograph"
import { getAllSponsorPosts_APIcall } from "../slice-sponsorship/slice-sponsorshipPosts/slice-getAllSponsorPosts"
import { sponsorPostsDetailsPayload } from "../slice-sponsorship/slice-sponsorshipPosts/slice-getAllSponsorPosts"


const SponsorshipPostsActiveTab = () => {

    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false)
    const [ind, setindex] = useState("")
    const [analyticsCollectedData, setAnalyticsCollectedData] = useState([])
    const [getAllSponsorPostList, setAllSponsorPostList] = useState([])
    const authStat_getAllSponsorPosts = useSelector((state) => state.getAllSponsorPostsData)
    const authStat_getSponsorPostDemograph = useSelector((state) => state.getSponsorPostDemographData)
    const [displayAllGenders, setDisplayAllGenders] = useState(false)
    const [displayAllDrinking, setDisplayAllDrinking] = useState(false)
    const [displayAllRelation, setDisplayAllRelation] = useState(false)
    const [haveKids, setHaveKids] = useState([])
    const [attractedto, setAttactedTo] = useState([])
    const [top3ageranges, setAgeRanges] = useState([])
    const [getInterests, setInterests] = useState([])
    const [getLocations, setLocations] = useState([])
    const [displayAllKids, setDisplayAllKids] = useState(false)
    const [displayAllAttractedTo, setDisplayAllAttractedTo] = useState(false)
    const [displayAllAgeRange, setDisplayAllAgeRange] = useState(false)
    const [displayAllInterest, setDisplayAllInterest] = useState(false)
    const [displayAllLocation, setDisplayAllLocation] = useState(false)
    const [top2drinkinghabits, setDrinking] = useState([])
    const [exercise, setExercise] = useState([])
    const [top3genders, settop3genders] = useState([])
    const [relationshipstatus, setRelationshipstatus] = useState([])


    const [analyticsCollectedData1] = useState([
        { id: '1', value: "354", dataName: "Unique Viewers" },
        { id: '2', value: "354", dataName: "Impressions" },
        { id: '3', value: "443", dataName: "Post Clicks" },
        { id: '4', value: "$3.54", dataName: "Cost per Unique Viewer" },
        { id: '5', value: "354", dataName: "Cost per Impression" },
        { id: '6', value: "$5.50", dataName: "Cost Per Post Click" },
        { id: '7', value: "443", dataName: "Sponsor Link Clicks" },
        { id: '8', value: "$5.50", dataName: "Cost Per Sponsor Link Click" },
        { id: '9', value: "$554", dataName: "Total Spent" }
    ])

    const data1 = [
        { title: "Yes", value: 100, color: "#d7f2e6" },
        { title: "No", value: 104, color: "#95E1BF" }
    ]
    //*********** */

    const [top3religious] = useState([
        { id: 1, yaxis: "Agnostic", width: "100%", value: "60%" },
        { id: 2, yaxis: "Catholic", width: "75%", value: "30%" },
        { id: 3, yaxis: "Christian", width: "65%", value: "10%" },
    ])
    const [top5ethnicities] = useState([
        { id: 1, yaxis: "white", width: "100%", value: "45%" },
        { id: 2, yaxis: "Hispanic", width: "75%", value: "40%" },
        { id: 3, yaxis: "Latin X", width: "65%", value: "10%" },
    ])
    const [top3politics] = useState([
        { id: 1, yaxis: "Liberal", width: "100%", value: "60%" },
        { id: 2, yaxis: "Moderate", width: "75%", value: "30%" },
        { id: 3, yaxis: "Conservative", width: "65%", value: "10%" },
    ])
    const [top3languages] = useState([
        { id: 1, yaxis: "English", width: "100%", value: "50%" },
        { id: 2, yaxis: "Spanish", width: "75%", value: "40%" },
        { id: 3, yaxis: "German", width: "65%", value: "10%" },
    ])


    useEffect(() => {
        const payload = {
            user_id: localStorage.getItem('loggedIn_userId')
        }
        setLoader(true)
        dispatch(getAllSponsorPosts_APIcall(payload))
    }, [])

    useEffect(() => {
        if (authStat_getAllSponsorPosts.data.responseCode == 200 && authStat_getAllSponsorPosts.data.responseBody != undefined) {
            setAllSponsorPostList(authStat_getAllSponsorPosts.data.responseBody)
            postDetail(0, authStat_getAllSponsorPosts.data.responseBody[0].post_id, authStat_getAllSponsorPosts.data.responseBody[0])
        }
        else {
            setAllSponsorPostList([])
        }
    }, [authStat_getAllSponsorPosts.data])

    const postDetail = (i, postId, data) => {
        // settop3genders([])
        // setRelationshipstatus([])
        // setExercise([])
        // setDrinking([])
        // setHaveKids([])
        // setAttactedTo([])
        // setAgeRanges([])
        // setInterests([])
        // setLocations([])
        setLoader(true)
        const payload = {
            user_id: localStorage.getItem("loggedIn_userId"),
            post_id: postId
        }
        dispatch(getSponsorPostDemograph_APIcall(payload))
        setindex(i)
        setDisplayAllGenders(false)
        setDisplayAllDrinking(false)
        setDisplayAllRelation(false)
        setDisplayAllKids(false)
        setDisplayAllAttractedTo(false)
        setDisplayAllAgeRange(false)
        setDisplayAllInterest(false)
        setDisplayAllLocation(false)
        const result = [
            { id: '1', value: data.uniqueViewers, dataName: "Unique Viewers" },
            { id: '2', value: data.impressions, dataName: "Impressions" },
            { id: '3', value: data.postClicks, dataName: "Event Clicks" },
            { id: '4', value: data.costPerUniqueViewer, css: { padding: "2px" }, dataName: "Cost per Unique Viewer" },
            { id: '5', value: data.costPerImpression, dataName: "Cost per Impression" },
            { id: '6', value: data.costPerPostClick, dataName: "Cost Per Event Click" },
            { id: '7', value: data.costPerPostClick, dataName: "Event Link Clicks" },
            { id: '8', value: data.costPerPostClick, dataName: "Sponsor Link Clicks" },
            { id: '9', value: data.costPerPostClick, dataName: "Members Attending" },
            { id: '10', value: data.costPerPostClick, css: { padding: "2px" }, dataName: "Cost Per Event Link Click" },
            { id: '11', value: data.costPerPostClick, css: { padding: "2px" }, dataName: "Cost Per Sponsor Link Click" },
            { id: '12', value: data.costPerPostClick, dataName: "Total Spent" }
        ]
        setAnalyticsCollectedData(result)
        dispatch(sponsorPostsDetailsPayload(data))
    }

    useEffect(() => {
        if (authStat_getSponsorPostDemograph.data.responseCode == 200) {

            if ((authStat_getSponsorPostDemograph.data.responseBody).length !== 0) {
                const { gender_demography } = authStat_getSponsorPostDemograph.data.responseBody
                const { relationship_demography } = authStat_getSponsorPostDemograph.data.responseBody
                const { exercise_relationship_demography } = authStat_getSponsorPostDemograph.data.responseBody
                const { drinking_demography } = authStat_getSponsorPostDemograph.data.responseBody
                const { kids_demography } = authStat_getSponsorPostDemograph.data.responseBody
                const { attracted_demography } = authStat_getSponsorPostDemograph.data.responseBody
                const { age_demography } = authStat_getSponsorPostDemograph.data.responseBody
                const { interest_demography } = authStat_getSponsorPostDemograph.data.responseBody
                const { location_demograph } = authStat_getSponsorPostDemograph.data.responseBody

                const gender_demograpy_result = [
                    { id: 1, yaxis: "Man", width: gender_demography.man + "%", value: gender_demography.man + "%", values: gender_demography.man },
                    { id: 1, yaxis: "Woman", width: gender_demography.woman + "%", value: gender_demography.woman + "%", values: gender_demography.woman },
                    { id: 1, yaxis: "Inter Sex Woman", width: gender_demography.inter_sex_woman + "%", value: gender_demography.inter_sex_woman + "%", values: gender_demography.inter_sex_woman },
                    { id: 1, yaxis: "Trans Woman", width: gender_demography.trans_woman + "%", value: gender_demography.trans_woman + "%", values: gender_demography.trans_woman },
                    { id: 1, yaxis: "Cis Woman", width: gender_demography.cis_woman + "%", value: gender_demography.cis_woman + "%", values: gender_demography.cis_woman },
                    { id: 1, yaxis: "Transfeminine", width: gender_demography.transfeminine + "%", value: gender_demography.transfeminine + "%", values: gender_demography.transfeminine },
                    { id: 1, yaxis: "Woman & Nonbinary", width: gender_demography.woman_and_nonbinary + "%", value: gender_demography.woman_and_nonbinary + "%", values: gender_demography.woman_and_nonbinary },
                    { id: 1, yaxis: "Intersex Man", width: gender_demography.intersex_man + "%", value: gender_demography.intersex_man + "%", values: gender_demography.intersex_man },
                    { id: 1, yaxis: "Trans Man", width: gender_demography.trans_man + "%", value: gender_demography.trans_man + "%", values: gender_demography.trans_man },
                    { id: 1, yaxis: "Cis Man", width: gender_demography.cis_man + "%", value: gender_demography.cis_man + "%", values: gender_demography.cis_man },
                    { id: 1, yaxis: "Transmasculine", width: gender_demography.transmasculine + "%", value: gender_demography.transmasculine + "%", values: gender_demography.transmasculine },
                    { id: 1, yaxis: "Man & Nonbinary", width: gender_demography.man_and_nonbinary + "%", value: gender_demography.man_and_nonbinary + "%", values: gender_demography.man_and_nonbinary },
                    { id: 1, yaxis: "Nonbinary", width: gender_demography.nonbinary + "%", value: gender_demography.nonbinary + "%", values: gender_demography.nonbinary },
                    { id: 1, yaxis: "Agender", width: gender_demography.agender + "%", value: gender_demography.agender + "%", values: gender_demography.agender },
                    { id: 1, yaxis: "Bigender", width: gender_demography.bigender + "%", value: gender_demography.bigender + "%", values: gender_demography.bigender },
                    { id: 1, yaxis: "Genderfluid", width: gender_demography.genderfluid + "%", value: gender_demography.genderfluid + "%", values: gender_demography.genderfluid },
                    { id: 1, yaxis: "Genderqueer", width: gender_demography.genderqueer + "%", value: gender_demography.genderqueer + "%", values: gender_demography.genderqueer },
                    { id: 1, yaxis: "Gender Nonconforming", width: gender_demography.gender_nonconforming + "%", value: gender_demography.gender_nonconforming + "%", values: gender_demography.gender_nonconforming },
                    { id: 1, yaxis: "Gender Questioning", width: gender_demography.gender_questioning + "%", value: gender_demography.gender_questioning + "%", values: gender_demography.gender_questioning },
                    { id: 1, yaxis: "Gender Variant", width: gender_demography.gender_variant + "%", value: gender_demography.gender_variant + "%", values: gender_demography.gender_variant },
                    { id: 1, yaxis: "Intersex", width: gender_demography.intersex + "%", value: gender_demography.intersex + "%", values: gender_demography.intersex },
                    { id: 1, yaxis: "Neutrolis", width: gender_demography.neutrolis + "%", value: gender_demography.neutrolis + "%", values: gender_demography.neutrolis },
                    { id: 1, yaxis: "Nonbinary Man", width: gender_demography.nonbinary_man + "%", value: gender_demography.nonbinary_man + "%", values: gender_demography.nonbinary_man },
                    { id: 1, yaxis: "Nonbinary Woman", width: gender_demography.nonbinary_woman + "%", value: gender_demography.nonbinary_woman + "%", values: gender_demography.nonbinary_woman },
                    { id: 1, yaxis: "Pangender", width: gender_demography.pangender + "%", value: gender_demography.pangender + "%", values: gender_demography.pangender },
                    { id: 1, yaxis: "Polygender", width: gender_demography.polygender + "%", value: gender_demography.polygender + "%", values: gender_demography.polygender },
                    { id: 1, yaxis: "Transgender", width: gender_demography.transgender + "%", value: gender_demography.transgender + "%", values: gender_demography.transgender },
                    { id: 1, yaxis: "Two Spirit", width: gender_demography.two_spirit + "%", value: gender_demography.two_spirit + "%", values: gender_demography.two_spirit }
                ]
                const genderArray = [...gender_demograpy_result]
                const genderArraySorting = genderArray.sort((a, b) => (a.values < b.values) ? 1 : (a.values > b.values) ? -1 : 0)
                console.log(genderArraySorting)
                settop3genders(genderArraySorting)

                const relationship_demograpy_result = [
                    { id: 1, yaxis: "Single", width: relationship_demography.single + "%", value: relationship_demography.single + "%", values: relationship_demography.single },
                    { id: 1, yaxis: "In a relationship", width: relationship_demography.in_a_relationship + "%", value: relationship_demography.in_a_relationship + "%", values: relationship_demography.in_a_relationship },
                    { id: 1, yaxis: "It's Complicated", width: relationship_demography.its_complicated + "%", value: relationship_demography.its_complicated + "%", values: relationship_demography.its_complicated },
                    // { id: 1, yaxis: "Engaged", width: relationship_demography.engaged + "%", value: relationship_demography.engaged + "%", values: relationship_demography.engaged },
                    // { id: 1, yaxis: "Married", width: relationship_demography.married + "%", value: relationship_demography.married + "%", values: relationship_demography.married },
                    // { id: 1, yaxis: "Widowed", width: relationship_demography.widowed + "%", value: relationship_demography.widowed + "%", values: relationship_demography.widowed },
                    // { id: 1, yaxis: "Enm", width: relationship_demography.enm + "%", value: relationship_demography.enm + "%", values: relationship_demography.enm },
                    // { id: 1, yaxis: "Separated", width: relationship_demography.separated + "%", value: relationship_demography.separated + "%", values: relationship_demography.separated },
                    // { id: 1, yaxis: "Divorced", width: relationship_demography.divorced + "%", value: relationship_demography.divorced + "%", values: relationship_demography.divorced },
                ]
                const relationshipArray = [...relationship_demograpy_result]
                const relationshipArraySorting = relationshipArray.sort((a, b) => (a.values < b.values) ? 1 : (a.values > b.values) ? -1 : 0)
                setRelationshipstatus(relationshipArraySorting)

                const exercise_demograpy_result = [
                    { id: 1, yaxis: "Something", width: exercise_relationship_demography.Something + "%", value: exercise_relationship_demography.Something + "%", values: exercise_relationship_demography.Something },
                    { id: 1, yaxis: "Active", width: exercise_relationship_demography.Active + "%", value: exercise_relationship_demography.Active + "%", values: exercise_relationship_demography.Active },
                    { id: 1, yaxis: "Almost Never", width: exercise_relationship_demography.Almost_never + "%", value: exercise_relationship_demography.Almost_never + "%", values: exercise_relationship_demography.Almost_never }
                ]
                const exerciseArray = [...exercise_demograpy_result]
                const exerciseArraySorting = exerciseArray.sort((p1, p2) => (p1.values < p2.values) ? 1 : (p1.values > p2.values) ? -1 : 0)
                setExercise(exerciseArraySorting)

                const drinking_demograpy_result = [
                    { id: 1, yaxis: "Frequently", width: drinking_demography.Frequently + "%", value: drinking_demography.Frequently + "%", values: drinking_demography.Frequently },
                    { id: 1, yaxis: "Sober", width: drinking_demography.Sober + "%", value: drinking_demography.Sober + "%", values: drinking_demography.Sober },
                    { id: 1, yaxis: "Socially", width: drinking_demography.Socially + "%", value: drinking_demography.Socially + "%", values: drinking_demography.Socially },
                    { id: 1, yaxis: "Never", width: drinking_demography.Never + "%", value: drinking_demography.Never + "%", values: drinking_demography.Never }
                ]
                const drinkingHabitsArray = [...drinking_demograpy_result]
                const drinkingHabitsArraySorting = drinkingHabitsArray.sort((p1, p2) => (p1.values < p2.values) ? 1 : (p1.values > p2.values) ? -1 : 0)
                setDrinking(drinkingHabitsArraySorting)

                const kids_democracy_result = [
                    { id: 1, yaxis: "Have Kids", width: kids_demography.Have_kids + "%", value: kids_demography.Have_kids + "%", values: kids_demography.Have_kids },
                    { id: 1, yaxis: "Don't Have Kids", width: kids_demography.Dont_have_kids + "%", value: kids_demography.Dont_have_kids + "%", values: kids_demography.Dont_have_kids }
                ]
                const kidsArray = [...kids_democracy_result]
                const kidsArraySorting = kidsArray.sort((p1, p2) => (p1.values < p2.values) ? 1 : (p1.values > p2.values) ? -1 : 0)
                setHaveKids(kidsArraySorting)

                const attractedto_demograpy_result = [
                    { id: 1, yaxis: "Men", width: attracted_demography.men + "%", value: attracted_demography.men + "%", values: attracted_demography.men },
                    { id: 1, yaxis: "Women", width: attracted_demography.women + "%", value: attracted_demography.women + "%", values: attracted_demography.women },
                    // { id: 1, yaxis: "Nonbinary", width: attracted_demography.non_binary + "%", value: attracted_demography.non_binary + "%", values: attracted_demography.non_binary },
                    { id: 1, yaxis: "Cis Woman", width: attracted_demography.cis_woman + "%", value: attracted_demography.cis_woman + "%", values: attracted_demography.cis_woman },
                    { id: 1, yaxis: "Transfeminine", width: attracted_demography.transfeminine + "%", value: attracted_demography.transfeminine + "%", values: attracted_demography.transfeminine },
                    { id: 1, yaxis: "Woman and Nonbinary", width: attracted_demography.woman_and_nonbinary + "%", value: attracted_demography.woman_and_nonbinary + "%", values: attracted_demography.woman_and_nonbinary },
                    { id: 1, yaxis: "Man", width: attracted_demography.man + "%", value: attracted_demography.man + "%", values: attracted_demography.man },
                    { id: 1, yaxis: "Intersex Man", width: attracted_demography.intersex_man + "%", value: attracted_demography.intersex_man + "%", values: attracted_demography.intersex_man },
                    { id: 1, yaxis: "Trans Man", width: attracted_demography.trans_man + "%", value: attracted_demography.trans_man + "%", values: attracted_demography.trans_man },
                    { id: 1, yaxis: "Cis Man", width: attracted_demography.cis_man + "%", value: attracted_demography.cis_man + "%", values: attracted_demography.cis_man },
                    { id: 1, yaxis: "Transmasculine", width: attracted_demography.transmasculine + "%", value: attracted_demography.transmasculine + "%", values: attracted_demography.transmasculine },
                    { id: 1, yaxis: "Man and Nonbinary", width: attracted_demography.man_and_nonbinary + "%", value: attracted_demography.man_and_nonbinary + "%", values: attracted_demography.man_and_nonbinary },
                    { id: 1, yaxis: "Nonbinary", width: attracted_demography.nonbinary + "%", value: attracted_demography.nonbinary + "%", values: attracted_demography.nonbinary },
                    { id: 1, yaxis: "Agender", width: attracted_demography.agender + "%", value: attracted_demography.agender + "%", values: attracted_demography.agender },
                    { id: 1, yaxis: "Bigender", width: attracted_demography.bigender + "%", value: attracted_demography.bigender + "%", values: attracted_demography.bigender },
                    { id: 1, yaxis: "Genderfluid", width: attracted_demography.genderfluid + "%", value: attracted_demography.genderfluid + "%", values: attracted_demography.genderfluid },
                    { id: 1, yaxis: "Genderqueer", width: attracted_demography.genderqueer + "%", value: attracted_demography.genderqueer + "%", values: attracted_demography.genderqueer },
                    { id: 1, yaxis: "Gender Nonconforming", width: attracted_demography.gender_nonconforming + "%", value: attracted_demography.gender_nonconforming + "%", values: attracted_demography.gender_nonconforming },
                    { id: 1, yaxis: "Gender Questioning", width: attracted_demography.gender_questioning + "%", value: attracted_demography.gender_questioning + "%", values: attracted_demography.gender_questioning },
                    { id: 1, yaxis: "Gender Variant", width: attracted_demography.gender_variant + "%", value: attracted_demography.gender_variant + "%", values: attracted_demography.gender_variant },
                    { id: 1, yaxis: "Intersex", width: attracted_demography.intersex + "%", value: attracted_demography.intersex + "%", values: attracted_demography.intersex },
                    { id: 1, yaxis: "Neutrolis", width: attracted_demography.neutrolis + "%", value: attracted_demography.neutrolis + "%", values: attracted_demography.neutrolis },
                    { id: 1, yaxis: "Nonbinary Woman", width: attracted_demography.nonbinary_woman + "%", value: attracted_demography.nonbinary_woman + "%", values: attracted_demography.nonbinary_woman },
                    { id: 1, yaxis: "Nonbinary Man", width: attracted_demography.nonbinary_man + "%", value: attracted_demography.nonbinary_man + "%", values: attracted_demography.nonbinary_man },
                    { id: 1, yaxis: "Pangender", width: attracted_demography.pangender + "%", value: attracted_demography.pangender + "%", values: attracted_demography.pangender },
                    { id: 1, yaxis: "Polygender", width: attracted_demography.polygender + "%", value: attracted_demography.polygender + "%", values: attracted_demography.polygender },
                    { id: 1, yaxis: "Transgender", width: attracted_demography.transgender + "%", value: attracted_demography.transgender + "%", values: attracted_demography.transgender },
                    { id: 1, yaxis: "Two Spirit", width: attracted_demography.two_spirit + "%", value: attracted_demography.two_spirit + "%", values: attracted_demography.two_spirit }
                ]
                const attractedToArray = [...attractedto_demograpy_result]
                const attractedToArraySorting = attractedToArray.sort((p1, p2) => (p1.values < p2.values) ? 1 : (p1.values > p2.values) ? -1 : 0)
                setAttactedTo(attractedToArraySorting)

                const ageRangeData = Object(age_demography)
                const ageResult = []
                const modifiedAgeRangeArray = []
                for (let data in ageRangeData) {
                    ageResult.push({
                        'ageRangeName': data,
                        'ageRangeValue': ageRangeData[data]
                    })
                }
                for (let i = 0; i < ageResult.length; i++) {
                    modifiedAgeRangeArray.push({
                        id: i, yaxis: ageResult[i].ageRangeName, width: ageResult[i].ageRangeValue + "%", value: ageResult[i].ageRangeValue + "%", values: ageResult[i].ageRangeValue
                    })
                }
                const ageRangeArray = [...modifiedAgeRangeArray]
                const ageRangeArraySorting = ageRangeArray.sort((p1, p2) => (p1.values < p2.values) ? 1 : (p1.values > p2.values) ? -1 : 0)
                setAgeRanges(ageRangeArraySorting)

                const interestData = Object.keys(interest_demography)
                const result = []
                for (let i = 0; i < interestData.length; i++) {
                    if (interestData[i].includes('_') == true) {
                        const data = interestData[i].replace('_', ' ')
                        console.log(data)
                        result.push({
                            'interestName': data,
                            'interestValue': interest_demography[interestData[i]]
                        })
                    }
                    else if (interestData[i].includes('_') == false) {
                        result.push({
                            'interestName': interestData[i],
                            'interestValue': interest_demography[interestData[i]]
                        })
                    }
                }
                const modifiedInterestArray = []
                for (let i = 0; i < result.length; i++) {
                    modifiedInterestArray.push({ id: i, yaxis: result[i].interestName, width: result[i].interestValue + "%", value: result[i].interestValue + "%", values: result[i].interestValue })
                }
                const interestArray = [...modifiedInterestArray]
                const interestArraySorting = interestArray.sort((p1, p2) => (p1.values < p2.values) ? 1 : (p1.values > p2.values) ? -1 : 0)
                setInterests(interestArraySorting)
                console.log('mmmmm', interestArraySorting)

                const locationData = Object(location_demograph)
                const locationResult = []
                const modifiedLocationArray = []
                for (let data in locationData) {
                    locationResult.push({
                        'locationName': data,
                        'locationValue': locationData[data]
                    })
                }
                for (let i = 0; i < locationResult.length; i++) {
                    modifiedLocationArray.push({
                        id: i, yaxis: locationResult[i].locationName, width: locationResult[i].locationValue + "%", value: locationResult[i].locationValue + "%", values: locationResult[i].locationValue
                    })
                }
                const locationArray = [...modifiedLocationArray]
                const locationArraySorting = locationArray.sort((p1, p2) => (p1.values < p2.values) ? 1 : (p1.values > p2.values) ? -1 : 0)
                setLocations(locationArraySorting)
                setLoader(false)
            }
            else if ((authStat_getSponsorPostDemograph.data.responseBody).length === 0) {
                setLoader(false)
            }
        }
        else if (authStat_getSponsorPostDemograph.data.responseCode == 201) {
            const gender_democracy_result = [
                { id: 1, yaxis: "Male", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Woman", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Inter Sex Woman", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Trans Woman", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Cis Woman", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Transfeminine", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Woman and Nonbinary", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Intersex Man", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Trans Man", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Cis Man", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Transmasculine", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Man and Nonbinary", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Nonbinary", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Agender", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Bigender", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Genderfluid", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Genderqueer", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Gender Nonconforming", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Gender Questioning", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Gender Variant", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Intersex", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Neutrolis", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Nonbinary Man", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Nonbinary Woman", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Pangender", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Polygender", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Transgender", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Two Spirit", width: 0 + "%", value: 0 + "%" }
            ]
            settop3genders(gender_democracy_result)

            const relationship_democracy_result = [
                { id: 1, yaxis: "Single", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "In a relationship", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "It's Complicated", width: 0 + "%", value: 0 + "%" },
                // { id: 1, yaxis: "Engaged", width: 0 + "%", value: 0 + "%" },
                // { id: 1, yaxis: "Married", width: 0 + "%", value: 0 + "%" },
                // { id: 1, yaxis: "Widowed", width: 0 + "%", value: 0 + "%" },
                // { id: 1, yaxis: "Enm", width: 0 + "%", value: 0 + "%" },
                // { id: 1, yaxis: "Separated", width: 0 + "%", value: 0 + "%" },
                // { id: 1, yaxis: "Divorced", width: 0 + "%", value: 0 + "%" },
            ]
            setRelationshipstatus(relationship_democracy_result)

            const exercise_democracy_result = [
                { id: 1, yaxis: "Something", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Active", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Almost Never", width: 0 + "%", value: 0 + "%" }
            ]
            setExercise(exercise_democracy_result)

            const drinking_democracy_result = [
                { id: 1, yaxis: "Frequently", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Sober", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Socially", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Never", width: 0 + "%", value: 0 + "%" }
            ]
            setDrinking(drinking_democracy_result)

            const havekids_demograpy_result = [
                { id: 1, yaxis: "Have Kids", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Don't Have Kids", width: 0 + "%", value: 0 + "%" }
            ]
            setHaveKids(havekids_demograpy_result)

            const attractedTo_demograpy_result = [
                { id: 1, yaxis: "Men", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Women", width: 0 + '%', value: 0 + '%' },
                // { id: 1, yaxis: "Non binary", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Cis Woman", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Transfeminine", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Woman & Nonbinary", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Man", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Intersex Man", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Trans Man", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Cis Man", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Transmasculine", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Man & Nonbinary", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Non binary", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Agender", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Bigender", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Genderfluid", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Genderqueer", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Gender Nonconforming", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Gender Questioning", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Gender Variant", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Intersex", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Neutrolis", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Nonbinary Woman", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Nonbinary Man", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Pangender", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Polygender", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Transgender", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "Two Spirit", width: 0 + '%', value: 0 + '%' }
            ]
            setAttactedTo(attractedTo_demograpy_result)

            const ageRange_demograpy_result = [
                { id: 1, yaxis: "10-15", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "15-20", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "20-25", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "25-30", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "30-35", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "35-40", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "40-45", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "45-50", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "50-55", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "55-65", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "65-70", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "70-75", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "75-80", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "80-85", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "85-90", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "90-95", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "95-100", width: 0 + '%', value: 0 + '%' },
                { id: 1, yaxis: "100-above", width: 0 + '%', value: 0 + '%' }
            ]
            setAgeRanges(ageRange_demograpy_result)

            const interest_demograpy_result =
                [{ id: 1, yaxis: "Music", width: "0%", value: "0%" },
                { id: 11, yaxis: "Travel", width: "0%", value: "0%" },
                { id: 14, yaxis: "Hiking", width: "0%", value: "0%" },
                { id: 2, yaxis: "Movies", width: "0%", value: "0%" },
                { id: 5, yaxis: "Comedy", width: "0%", value: "0%" },
                { id: 8, yaxis: "Cooking", width: "0%", value: "0%" },
                { id: 17, yaxis: "Fashion", width: "0%", value: "0%" },
                { id: 4, yaxis: "Fitness", width: "0%", value: "0%" },
                { id: 6, yaxis: "Sports", width: "0%", value: "0%" },
                { id: 9, yaxis: "Restaurants", width: "0%", value: "0%" },
                { id: 12, yaxis: "Dogs", width: "0%", value: "0%" },
                { id: 0, yaxis: "Board Games", width: "0%", value: "0%" },
                { id: 3, yaxis: "Food", width: "0%", value: "0%" },
                { id: 7, yaxis: "Nightlife", width: "0%", value: "0%" },
                { id: 10, yaxis: "Wine", width: "0%", value: "0%" },
                { id: 13, yaxis: "Tv", width: "0%", value: "0%" },
                { id: 15, yaxis: "Art", width: "0%", value: "0%" },
                { id: 16, yaxis: "Outdoors", width: "0%", value: "0%" },
                { id: 18, yaxis: "Volunteering", width: "0%", value: "0%" },
                { id: 19, yaxis: "Cocktails", width: "0%", value: "0%" },
                { id: 20, yaxis: "Pets", width: "0%", value: "0%" },
                { id: 21, yaxis: "Yoga", width: "0%", value: "0%" },
                { id: 22, yaxis: "Beer", width: "0%", value: "0%" },
                { id: 23, yaxis: "Reading", width: "0%", value: "0%" },
                { id: 24, yaxis: "Painting", width: "0%", value: "0%" },
                { id: 25, yaxis: "Acting", width: "0%", value: "0%" },
                { id: 26, yaxis: "Activities", width: "0%", value: "0%" },
                { id: 27, yaxis: "Animals", width: "0%", value: "0%" },
                { id: 28, yaxis: "Astrology", width: "0%", value: "0%" },
                { id: 29, yaxis: "Axe Throwing", width: "0%", value: "0%" },
                { id: 30, yaxis: "Baking", width: "0%", value: "0%" },
                { id: 31, yaxis: "Band", width: "0%", value: "0%" },
                { id: 32, yaxis: "Baseball", width: "0%", value: "0%" },
                { id: 33, yaxis: "Basketball", width: "0%", value: "0%" },
                { id: 34, yaxis: "Beach", width: "0%", value: "0%" },
                { id: 35, yaxis: "Boats", width: "0%", value: "0%" },
                { id: 36, yaxis: "Books", width: "0%", value: "0%" },
                { id: 37, yaxis: "Bouldering", width: "0%", value: "0%" },
                { id: 38, yaxis: "Bowling", width: "0%", value: "0%" },
                { id: 39, yaxis: "Boxing", width: "0%", value: "0%" },
                { id: 40, yaxis: "Brunch", width: "0%", value: "0%" },
                { id: 41, yaxis: "Camping", width: "0%", value: "0%" },
                { id: 42, yaxis: "Card Games", width: "0%", value: "0%" },
                { id: 43, yaxis: "Cats", width: "0%", value: "0%" },
                { id: 44, yaxis: "chess", width: "0%", value: "0%" },
                { id: 45, yaxis: "Coding", width: "0%", value: "0%" },
                { id: 46, yaxis: "Coffee", width: "0%", value: "0%" },
                { id: 47, yaxis: "Comic Books", width: "0%", value: "0%" },
                { id: 48, yaxis: "Concerts", width: "0%", value: "0%" },
                { id: 49, yaxis: "Crafts", width: "0%", value: "0%" },
                { id: 50, yaxis: "Curling", width: "0%", value: "0%" },
                { id: 51, yaxis: "Cycling", width: "0%", value: "0%" },
                { id: 52, yaxis: "Dancing", width: "0%", value: "0%" },
                { id: 53, yaxis: "Darts", width: "0%", value: "0%" },
                { id: 54, yaxis: "Dating", width: "0%", value: "0%" },
                { id: 55, yaxis: "Decorating", width: "0%", value: "0%" },
                { id: 56, yaxis: "Design", width: "0%", value: "0%" },
                { id: 57, yaxis: "Diving", width: "0%", value: "0%" },
                { id: 58, yaxis: "Diy", width: "0%", value: "0%" },
                { id: 59, yaxis: "Drawing", width: "0%", value: "0%" },
                { id: 60, yaxis: "Entrepreneurship", width: "0%", value: "0%" },
                { id: 61, yaxis: "Environment", width: "0%", value: "0%" },
                { id: 62, yaxis: "Equestrian", width: "0%", value: "0%" },
                { id: 63, yaxis: "Fairs", width: "0%", value: "0%" },
                { id: 64, yaxis: "Fall", width: "0%", value: "0%" },
                { id: 65, yaxis: "Fencing", width: "0%", value: "0%" },
                { id: 66, yaxis: "Festivals", width: "0%", value: "0%" },
                { id: 67, yaxis: "Filmmaking", width: "0%", value: "0%" },
                { id: 68, yaxis: "Fishing", width: "0%", value: "0%" },
                { id: 69, yaxis: "Flag Football", width: "0%", value: "0%" },
                { id: 70, yaxis: "Football", width: "0%", value: "0%" },
                { id: 71, yaxis: "Friends", width: "0%", value: "0%" },
                { id: 72, yaxis: "Games", width: "0%", value: "0%" },
                { id: 73, yaxis: "Gardening", width: "0%", value: "0%" },
                { id: 74, yaxis: "Golf", width: "0%", value: "0%" },
                { id: 75, yaxis: "Gymnastics", width: "0%", value: "0%" },
                { id: 76, yaxis: "Health", width: "0%", value: "0%" },
                { id: 77, yaxis: "Hockey", width: "0%", value: "0%" },
                { id: 78, yaxis: "Ice skating", width: "0%", value: "0%" },
                { id: 79, yaxis: "Indoor Cycling", width: "0%", value: "0%" },
                { id: 80, yaxis: "Karaoke", width: "0%", value: "0%" },
                { id: 81, yaxis: "Kayaking", width: "0%", value: "0%" },
                { id: 82, yaxis: "Kids Activities", width: "0%", value: "0%" },
                { id: 83, yaxis: "Knitting", width: "0%", value: "0%" },
                { id: 84, yaxis: "Lacrosse", width: "0%", value: "0%" },
                { id: 85, yaxis: "Lake", width: "0%", value: "0%" },
                { id: 86, yaxis: "Languages", width: "0%", value: "0%" },
                { id: 87, yaxis: "Lawn Games", width: "0%", value: "0%" },
                { id: 88, yaxis: "Marathons", width: "0%", value: "0%" },
                { id: 89, yaxis: "Martial Arts", width: "0%", value: "0%" },
                { id: 90, yaxis: "Media", width: "0%", value: "0%" },
                { id: 91, yaxis: "Meditation", width: "0%", value: "0%" },
                { id: 92, yaxis: "Mini Golf", width: "0%", value: "0%" },
                { id: 93, yaxis: "Mountains", width: "0%", value: "0%" },
                { id: 94, yaxis: "Museums", width: "0%", value: "0%" },
                { id: 95, yaxis: "Musical Instruments", width: "0%", value: "0%" },
                { id: 96, yaxis: "Musical Theater", width: "0%", value: "0%" },
                { id: 97, yaxis: "Ocean", width: "0%", value: "0%" },
                { id: 98, yaxis: "Paintball", width: "0%", value: "0%" },
                { id: 99, yaxis: "Parenting", width: "0%", value: "0%" },
                { id: 100, yaxis: "Party", width: "0%", value: "0%" },
                { id: 101, yaxis: "Performing Arts", width: "0%", value: "0%" },
                { id: 102, yaxis: "Photography", width: "0%", value: "0%" },
                { id: 103, yaxis: "Pickleball", width: "0%", value: "0%" },
                { id: 104, yaxis: "Pilates", width: "0%", value: "0%" },
                { id: 105, yaxis: "Ping Pong", width: "0%", value: "0%" },
                { id: 106, yaxis: "Podcasts", width: "0%", value: "0%" },
                { id: 107, yaxis: "Poker", width: "0%", value: "0%" },
                { id: 108, yaxis: "Pool", width: "0%", value: "0%" },
                { id: 109, yaxis: "Pottery", width: "0%", value: "0%" },
                { id: 110, yaxis: "Puzzles", width: "0%", value: "0%" },
                { id: 111, yaxis: "Racing", width: "0%", value: "0%" },
                { id: 112, yaxis: "Racquetball", width: "0%", value: "0%" },
                { id: 113, yaxis: "Radio", width: "0%", value: "0%" },
                { id: 114, yaxis: "Rapping", width: "0%", value: "0%" },
                { id: 115, yaxis: "Robotics", width: "0%", value: "0%" },
                { id: 116, yaxis: "Rock Climbing", width: "0%", value: "0%" },
                { id: 117, yaxis: "Roller Skating", width: "0%", value: "0%" },
                { id: 118, yaxis: "Rowing", width: "0%", value: "0%" },
                { id: 119, yaxis: "Rugby", width: "0%", value: "0%" },
                { id: 120, yaxis: "Running", width: "0%", value: "0%" },
                { id: 121, yaxis: "Screenwriting", width: "0%", value: "0%" },
                { id: 122, yaxis: "Scuba Diving", width: "0%", value: "0%" },
                { id: 123, yaxis: "Singles", width: "0%", value: "0%" },
                { id: 124, yaxis: "Skateboarding", width: "0%", value: "0%" },
                { id: 125, yaxis: "Skiing", width: "0%", value: "0%" },
                { id: 126, yaxis: "Snorkeling", width: "0%", value: "0%" },
                { id: 127, yaxis: "Snowboarding", width: "0%", value: "0%" },
                { id: 128, yaxis: "Soccer", width: "0%", value: "0%" },
                { id: 129, yaxis: "Social", width: "0%", value: "0%" },
                { id: 130, yaxis: "Songwriting", width: "0%", value: "0%" },
                { id: 131, yaxis: "Spring", width: "0%", value: "0%" },
                { id: 132, yaxis: "Squash", width: "0%", value: "0%" },
                { id: 133, yaxis: "Styling", width: "0%", value: "0%" },
                { id: 134, yaxis: "Summer", width: "0%", value: "0%" },
                { id: 135, yaxis: "Surfing", width: "0%", value: "0%" },
                { id: 136, yaxis: "Sustainability", width: "0%", value: "0%" },
                { id: 137, yaxis: "Swimming", width: "0%", value: "0%" },
                { id: 138, yaxis: "Table Tennis", width: "0%", value: "0%" },
                { id: 139, yaxis: "Tea", width: "0%", value: "0%" },
                { id: 140, yaxis: "Technology", width: "0%", value: "0%" },
                { id: 141, yaxis: "Tennis", width: "0%", value: "0%" },
                { id: 142, yaxis: "Theater", width: "0%", value: "0%" },
                { id: 143, yaxis: "Triathlons", width: "0%", value: "0%" },
                { id: 144, yaxis: "Trivia", width: "0%", value: "0%" },
                { id: 145, yaxis: "Vegan", width: "0%", value: "0%" },
                { id: 146, yaxis: "Vegetarian", width: "0%", value: "0%" },
                { id: 147, yaxis: "Video Games", width: "0%", value: "0%" },
                { id: 148, yaxis: "Visual Arts", width: "0%", value: "0%" },
                { id: 149, yaxis: "Volleyball", width: "0%", value: "0%" },
                { id: 150, yaxis: "Water Sports", width: "0%", value: "0%" },
                { id: 151, yaxis: "Weight Lifting", width: "0%", value: "0%" },
                { id: 152, yaxis: "Wellness", width: "0%", value: "0%" },
                { id: 153, yaxis: "Winter", width: "0%", value: "0%" },
                { id: 154, yaxis: "Woodworking", width: "0%", value: "0%" },
                { id: 155, yaxis: "Wrestling", width: "0%", value: "0%" },
                { id: 156, yaxis: "Writing", width: "0%", value: "0%" },
                { id: 157, yaxis: "Free", width: "0%", value: "0%" },
                { id: 158, yaxis: "Parade", width: "0%", value: "0%" },
                { id: 159, yaxis: "drinks", width: "0%", value: "0%" },
                { id: 160, yaxis: "Pride", width: "0%", value: "0%" },
                { id: 161, yaxis: "Seltzer", width: "0%", value: "0%" },
                { id: 162, yaxis: "Cider", width: "0%", value: "0%" },
                { id: 163, yaxis: "Spritz", width: "0%", value: "0%" },
                { id: 164, yaxis: "Shopping", width: "0%", value: "0%" },
                { id: 165, yaxis: "Beauty", width: "0%", value: "0%" },
                { id: 166, yaxis: "Skincare", width: "0%", value: "0%" },
                { id: 167, yaxis: "Nailcare", width: "0%", value: "0%" },
                { id: 168, yaxis: "Spa", width: "0%", value: "0%" },
                { id: 169, yaxis: "Speaker", width: "0%", value: "0%" },
                { id: 170, yaxis: "Talk", width: "0%", value: "0%" },
                { id: 171, yaxis: "Mindfulness", width: "0%", value: "0%" },
                { id: 172, yaxis: "Charity", width: "0%", value: "0%" },
                { id: 173, yaxis: "Fundraiser", width: "0%", value: "0%" },
                { id: 174, yaxis: "Workout", width: "0%", value: "0%" },
                { id: 175, yaxis: "Roofdeck", width: "0%", value: "0%" },
                { id: 176, yaxis: "Patio", width: "0%", value: "0%" },
                { id: 177, yaxis: "Lounge", width: "0%", value: "0%" },
                { id: 178, yaxis: "Speakeasy", width: "0%", value: "0%" },
                { id: 179, yaxis: "Snacks", width: "0%", value: "0%" },
                { id: 180, yaxis: "Apps", width: "0%", value: "0%" },
                { id: 181, yaxis: "Drag", width: "0%", value: "0%" }]
            setLocations(interest_demograpy_result)
            setLoader(false)
        }

        else {
            setLoader(false)
        }
    }, [authStat_getSponsorPostDemograph.data])

    const handleViewAllHide = (value) => {

        if (value == 'genders') {
            if (displayAllGenders == false) {
                setDisplayAllGenders(true)
            }
            else if (displayAllGenders == true) {
                setDisplayAllGenders(false)
            }
        }
        else if (value == 'drinking') {
            if (displayAllDrinking == false) {
                setDisplayAllDrinking(true)
            }
            else if (displayAllDrinking == true) {
                setDisplayAllDrinking(false)
            }
        }
        else if (value == 'relation') {
            if (displayAllRelation == false) {
                setDisplayAllRelation(true)
            }
            else if (displayAllRelation == true) {
                setDisplayAllRelation(false)
            }
        }
        else if (value == 'attractedTo') {
            if (displayAllAttractedTo == false) {
                setDisplayAllAttractedTo(true)
            }
            else if (displayAllAttractedTo == true) {
                setDisplayAllAttractedTo(false)
            }
        }
        else if (value == 'ageRanges') {
            if (displayAllAgeRange == false) {
                setDisplayAllAgeRange(true)
            }
            else if (displayAllAgeRange == true) {
                setDisplayAllAgeRange(false)
            }
        }
        else if (value == 'interests') {
            if (displayAllInterest == false) {
                setDisplayAllInterest(true)
            }
            else if (displayAllInterest == true) {
                setDisplayAllInterest(false)
            }
        }
        else if (value == 'locations') {
            if (displayAllLocation == false) {
                setDisplayAllLocation(true)
            }
            else if (displayAllLocation == true) {
                setDisplayAllLocation(false)
            }
        }
    }


    return (
        <>
            <div>
                <div style={{ display: loader !== false ? '' : 'none' }}>
                    <div className='enable-loader1'>
                        <img src={load} width="80px" height="80px"></img>
                    </div>
                </div>
                {getAllSponsorPostList?.map((data, index) => {
                    return (
                        <div className="card p-1 flex-column cards activegroup-mainsection" style={{ border: index === ind ? '1px solid #95E1BF' : 'none' }}>
                            <div className="d-flex col-12" onClick={() => postDetail(index, data.post_id, data)}>
                                <div className='col-1'>
                                    {data.image_url != '' ?
                                        <img src={data.image_url} width="86px" height="86px" style={{ borderRadius: "15px" }}></img> :
                                        <img src={defaultpostimage} width="86px" height="86px" style={{ borderRadius: "15px" }}></img>
                                    }
                                </div>

                                <div className='col-11 top-contentSection ps-3'>
                                    <div className='d-flex justify-content-between align-items-center ps-1'>
                                        <div>
                                            <span className='sponsor-textspanbold23'>Sponsor Name</span>
                                            {/* <span className=''>{data.post_id}</span> */}
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="sponsor-textspanlight11" style={{ fontWeight: "500" }}>Duration:</span>&nbsp;
                                            <span className="sponsor-textspanlight11" style={{ fontWeight: "600" }}></span>
                                            <img className="ms-75" src={morehorizontal} width="24px" height="24px" />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-between px-1 pt-75'>
                                        <span className='sponsor-textspanbold24' style={{ fontWeight: "700", wordBreak: "break-all" }}>{data.description}</span>
                                    </div>
                                </div>
                            </div>
                            {index === ind ?
                                <div>
                                    <div className="d-flex justify-content-between pb-75 pt-50 align-items-center">
                                        <div>
                                            <span className="sponsor-textspanbold3">Analytics</span>
                                        </div>
                                        <div>
                                            <SponsorshipActiveEventSendReport />
                                        </div>
                                    </div>
                                    {/* header section ends */}

                                    <div className="analytics-section">
                                        <div className="row">
                                            {analyticsCollectedData?.map((data) => {
                                                return (
                                                    <div className="col-4 analyticsSection-item px-2">
                                                        <div className="row d-flex align-items-center justify-content-between analyticsData-section">
                                                            <span className="col-5 sponsor-textspanbold1 d-flex justify-content-center">
                                                                <div className="" style={{ width: "20px", height: "35px" }}> {data.value}</div>
                                                            </span>
                                                            {/* {data.value == "" ?
                                                                <span className="col-2 sponsor-textspanbold1 d-flex justify-content-center analytics-datavalue">10</span> : null} */}
                                                            <span className="col-7 sponsor-textspanbold2 d-flex justify-content-center" style={{ padding: "2px" }}>{data.dataName}</span>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>

                                    <div>
                                        <div className="row">
                                            <span className="sponser-textspanbold8 pt-1 pb-1">Demographics</span>
                                        </div>

                                        <div className="row mb-50" >
                                            <div className="col-6 barchartsection">
                                                <div className="d-flex justify-content-between pb-25">
                                                    <span className="chartheading-left">Locations</span>
                                                    <span className="chartheading-right" onClick={() => { handleViewAllHide('locations') }} style={{ cursor: "pointer" }}>View All</span>
                                                </div>
                                                {displayAllLocation == false ?
                                                    <div>
                                                        {getLocations.slice(0, 5).map((data, index) => {
                                                            return (
                                                                <div className="row d-flex ">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                                {displayAllLocation == true ?
                                                    <div>
                                                        {getLocations.map((data, index) => {
                                                            return (
                                                                <div className="row d-flex ">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                            </div>
                                            <div className="col-6 barchartsection">
                                                <div className="d-flex justify-content-between pb-25">
                                                    <span className="chartheading-left">Top 5 Interests</span>
                                                    <span className="chartheading-right" onClick={() => { handleViewAllHide('interests') }} style={{ cursor: "pointer" }}>View All</span>
                                                </div>
                                                {displayAllInterest == false ?
                                                    <div>
                                                        {getInterests.slice(0, 5).map((data, index) => {
                                                            return (
                                                                <div className="row d-flex ">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                                {displayAllInterest == true ?
                                                    <div>
                                                        {getInterests.map((data, index) => {
                                                            return (
                                                                <div className="row d-flex ">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                            </div>
                                        </div>
                                        <hr style={{ border: "1px solid #CCD8DB" }} />

                                        <div className="row mb-50">
                                            <div className="col-6 barchartsection">
                                                <div className="d-flex justify-content-between pb-25">
                                                    <span className="chartheading-left">Age Ranges</span>
                                                    <span className="chartheading-right" onClick={() => { handleViewAllHide('ageRanges') }} style={{ cursor: "pointer" }}>View All</span>
                                                </div>
                                                {displayAllAgeRange == false ?
                                                    <div>
                                                        {top3ageranges.slice(0, 3).map((data, index) => {
                                                            return (
                                                                <div className="row d-flex ">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue"></span>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                                {displayAllAgeRange == true ?
                                                    <div>
                                                        {top3ageranges.map((data, index) => {
                                                            return (
                                                                <div className="row d-flex ">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                            </div>
                                            <div className="col-6 barchartsection">
                                                <div className="d-flex justify-content-between pb-25">
                                                    <span className="chartheading-left">Gender Identity</span>
                                                    <span className="chartheading-right" onClick={() => { handleViewAllHide('genders') }} style={{ cursor: "pointer" }}>View All</span>
                                                </div>
                                                {displayAllGenders == false ?
                                                    <div>
                                                        {top3genders.slice(0, 3).map((data, index) => {
                                                            return (
                                                                <div className="row d-flex">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                                {displayAllGenders == true ?
                                                    <div>
                                                        {top3genders.map((data, index) => {
                                                            return (
                                                                <div className="row d-flex">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                            </div>
                                        </div>
                                        <hr style={{ border: "1px solid #CCD8DB" }} />

                                        <div className="row mb-50">
                                            <div className="col-6 barchartsection">
                                                <div className="d-flex justify-content-start pb-25">
                                                    <span className="chartheading-left">Relationship Status</span>
                                                    {/* <span className="chartheading-right" onClick={() => { handleViewAllHide('relation') }} style={{ cursor: "pointer" }}>View All</span> */}
                                                </div>
                                                {displayAllRelation == false ?
                                                    <div>
                                                        {relationshipstatus.slice(0, 3).map((data, index) => {
                                                            return (
                                                                <div className="row d-flex">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                                {displayAllRelation == true ?
                                                    <div>
                                                        {relationshipstatus.map((data, index) => {
                                                            return (
                                                                <div className="row d-flex">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                            </div>
                                            <div className="col-6 barchartsection">
                                                <div className="d-flex justify-content-between pb-25">
                                                    <span className="chartheading-left">Attracted To</span>
                                                    <span className="chartheading-right" onClick={() => { handleViewAllHide('attractedTo') }} style={{ cursor: "pointer" }}>View All</span>
                                                </div>
                                                {displayAllAttractedTo == false ?
                                                    <div>
                                                        {attractedto.slice(0, 3).map((data, index) => {
                                                            return (
                                                                <div className="row d-flex ">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                                {displayAllAttractedTo == true ?
                                                    <div>
                                                        {attractedto.map((data, index) => {
                                                            return (
                                                                <div className="row d-flex ">
                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                            </div>
                                        </div>
                                        <hr style={{ border: "1px solid #CCD8DB" }} />

                                        <div className="row mb-50">
                                            <div className="col-6 barchartsection">
                                                <div className="d-flex justify-content-start pb-25">
                                                    <span className="chartheading-left">Kids</span>
                                                </div>
                                                {haveKids.map((data, index) => {
                                                    return (
                                                        <div className="row d-flex ">
                                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                <div className="ybar" style={{ width: data.width, height: data.id == 3 ? "70%" : "90%" }}></div>
                                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="col-6 barchartsection">
                                                <div className="d-flex justify-content-between pb-25">
                                                    <span className="chartheading-left">Drinking</span>
                                                    <span className="chartheading-right" onClick={() => { handleViewAllHide('drinking') }} style={{ cursor: "pointer" }}>View All</span>
                                                </div>
                                                {displayAllDrinking == false ?
                                                    <div>
                                                        {top2drinkinghabits.slice(0, 2).map((data, index) => {
                                                            return (
                                                                <div className="row d-flex ">

                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>

                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}

                                                {displayAllDrinking == true ?
                                                    <div>
                                                        {top2drinkinghabits.map((data, index) => {
                                                            return (
                                                                <div className="row d-flex ">

                                                                    <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                                    <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                        <div className="ybar" style={{ width: data.width }}></div>
                                                                        <span className="ps-50 yaxisValue">{data.value}</span>
                                                                    </div>

                                                                </div>
                                                            )
                                                        })}
                                                    </div> : null}
                                            </div>
                                        </div>

                                        <hr style={{ border: "1px solid #CCD8DB" }} />
                                        <div className="row mb-50" >
                                            <div className="col-6 barchartsection">
                                                <div className="d-flex justify-content-start pb-25">
                                                    <span className="chartheading-left">Exercise</span>
                                                </div>
                                                {exercise.map((data, index) => {
                                                    return (
                                                        <div className="row d-flex ">
                                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                                <div className="ybar" style={{ width: data.width, height: data.id == 3 ? "70%" : "90%" }}></div>
                                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div> : ''}
                        </div>
                    )
                })}




                {/* basic UI */}
                {/* <div className="card p-1 flex-column cards activegroup-mainsection"> */}
                {/* <div className="d-flex col-12">
                        <div className='col-1'>
                            <img src={activepostimg} width="86px" height="86px"></img>
                        </div>

                        <div className='col-11 top-contentSection ps-3'>
                            <div className='d-flex justify-content-between align-items-center ps-1'>
                                <div>
                                    <span className='sponsor-textspanbold23'>Barry's</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="sponsor-textspanlight11" style={{ fontWeight: "500" }}>Duration:</span>&nbsp;
                                    <span className="sponsor-textspanlight11" style={{ fontWeight: "600" }}>June 10-14</span>
                                    <img className="ms-75" src={morehorizontal} width="24px" height="24px" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-between px-1 pt-75'>
                                <div className="d-flex flex-column">
                                    <div>
                                        <span className='sponsor-textspanbold24' style={{ fontWeight: "700" }}>The Barry’s SUMMER 6 PACK SALE is BACK - 7/6 to 7/10 ONLY. </span>
                                        <span className='sponsor-textspanbold24' style={{ fontWeight: "400" }}>Click</span>
                                    </div>
                                    <span className='sponsor-textspanbold24' style={{ fontWeight: "400" }}>to learn more and grab your pack!</span>
                                </div>

                            </div>
                        </div>
                    </div> */}
                {/* ****** PLEASE DON'T REMOVE THE CODE-the commented code are no need for current sprint ******* */}
                {/* <div className="col-12 postevent-expressionSection">
                        <div className="p-0 d-flex align-items-center justify-content-end">
                            <span className="pe-75"><button className="postreaction-btn">
                                <span className=""><img className="" src={thumpsup} height="16px" width="16px" /> </span>
                                <span className="postreaction-count d-flex align-items-center justify-content-center">4</span>
                            </button></span>
                            <span className="pe-75"><button className="postreaction-btn">
                                <span className=""><img className="" src={redheart} height="16px" width="16px" /> </span>
                                <span className="postreaction-count d-flex align-items-center justify-content-center">3</span>
                            </button></span>
                            <span className="pe-75"><button className="postreaction-btn">
                                <span className=""><img className="" src={smilingeyes} height="16px" width="16px" /> </span>
                                <span className="postreaction-count d-flex align-items-center justify-content-center">1</span>
                            </button></span>
                           
                            <SponsorPostActiveComments></SponsorPostActiveComments>
                            <span className="sponsor-textspanlight12 pb-25" style={{cursor:"pointer"}}>18</span>
                        </div>
                    </div>
 */}
                {/* 
                    <div>
                        <div className="d-flex justify-content-between pb-75 pt-25 align-items-center">
                            <div>
                                <span className="sponsor-textspanbold3">Analytics</span>
                            </div>
                            <div>
                                <SponsorshipActiveEventSendReport />
                            </div>
                        </div>
                        <div className="analytics-section">
                            <div className="row">
                                {analyticsCollectedData.map((data) => {
                                    return (
                                        <div className="col-4 analyticsSection-item px-2">
                                            <div className="row d-flex align-items-center justify-content-between analyticsData-section">
                                                <span className="col-5 sponsor-textspanbold1  d-flex justify-content-center analytics-datavalue">{data.value}</span>
                                                <span className="col-7 sponsor-textspanbold2 d-flex justify-content-center">{data.dataName}</span>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div> */}


                {/* ****** PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint ******* */}
                {/* <div>
                        <div className="row">
                            <span className="sponser-textspanbold8 pt-1 pb-1">Demographics</span>
                        </div>
                        <div className="row">
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-between pb-25">
                                    <span className="chartheading-left">Top 5 Locations</span>
                                    <span className="chartheading-right">View All</span>
                                </div>
                                {top5locations.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width, height: data.id == 2 ? "70%" : "90%" }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-between pb-25">
                                    <span className="chartheading-left">Top 5 Interests</span>
                                    <span className="chartheading-right">View All</span>
                                </div>
                                {top5interests.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <hr style={{ border: "1px solid #CCD8DB" }} />
                        <div className="row">
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-between pb-25">
                                    <span className="chartheading-left">Top 3 Age Ranges</span>
                                    <span className="chartheading-right">View All</span>
                                </div>
                                {top3ageranges.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-between pb-25">
                                    <span className="chartheading-left">Top 5 Genders</span>
                                    <span className="chartheading-right">View All</span>
                                </div>
                                {top3genders.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <hr style={{ border: "1px solid #CCD8DB" }} />
                        <div className="row">
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-between pb-25">
                                    <span className="chartheading-left">Relationship Status</span>
                                    <span className="chartheading-right">View All</span>
                                </div>
                                {relationshipstatus.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width, height: data.id == 2 ? "65%" : "90%" }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-start pb-25">
                                    <span className="chartheading-left">Attracted To</span>
                                </div>
                                {attractedto.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <hr style={{ border: "1px solid #CCD8DB" }} />
                        <div className="row">
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-between pb-25">
                                    <span className="chartheading-left">Top 3 Religious</span>
                                    <span className="chartheading-right">View All</span>
                                </div>
                                {top3religious.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-between pb-25">
                                    <span className="chartheading-left">Top 5 Ethnicities</span>
                                    <span className="chartheading-right">View All</span>
                                </div>
                                {top5ethnicities.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <hr style={{ border: "1px solid #CCD8DB" }} />
                        <div className="row">
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-between pb-25">
                                    <span className="chartheading-left">Top 5 Politics</span>
                                    <span className="chartheading-right">View All</span>
                                </div>
                                {top3politics.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-between pb-25">
                                    <span className="chartheading-left">Top 5 Languages</span>
                                    <span className="chartheading-right">View All</span>
                                </div>
                                {top3languages.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <hr style={{ border: "1px solid #CCD8DB" }} />
                        <div className="row">
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-start pb-25">
                                    <span className="chartheading-left">Kids</span>
                                </div>
                                {kids.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width, height: data.id == 2 ? "65%" : "90%" }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-between pb-25">
                                    <span className="chartheading-left">Top 2 Drinking Habits</span>
                                    <span className="chartheading-right">View All</span>
                                </div>
                                {top2drinkinghabits.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <hr style={{ border: "1px solid #CCD8DB" }} />
                        <div className="row">
                            <div className="col-6 barchartsection">
                                <div className="d-flex justify-content-start pb-25">
                                    <span className="chartheading-left">Exercise</span>
                                </div>
                                {exercise.map((data, index) => {
                                    return (
                                        <div className="row d-flex ">
                                            <span className=" pe-25 align-items-center d-flex yaxisLabel">{data.yaxis}</span>
                                            <div className=" yaxisbar-section py-50 d-flex flex-row p-0 align-items-center" >
                                                <div className="ybar" style={{ width: data.width, height: data.id ==3  ? "70%" : "90%" }}></div>
                                                <span className="ps-50 yaxisValue">{data.value}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </>
    )
}

export default SponsorshipPostsActiveTab
