import React, { useState, useEffect } from "react"
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'
import secretcomedysmall from "../../../src/assets/images/dashboardimg/secretcomedysmall.png"
import morehorizontal from "../../../src/assets/images/dashboardimg/morehorizontal.png"
import dot from "../../../src/assets/images/dashboardimg/Ellipse11.png"
import location from "../../../src/assets/images/dashboardimg/location.png"
import hintsocial_fullColor from "../../../src/assets/images/dashboardimg/hintsocial_fullColor.png"
import { PieChart } from "react-minimal-pie-chart"
import Chart from 'react-apexcharts'
import 'chart.js/auto'
import SponsorshipEventManageAttendingDialog from "./sponsorshipeventmanageattendingdialog"
import SponsorshipActiveEventViewreport from "./sponsorship-activeevent-viewreport"
import SponsorshipActiveEventSendReport from "./sponsorship-activeevent-sendreport"
import SponsorshipSendEmail from "./sponsorship-sendemail"
import SponsorshipActiveEventReport from "./sponsorship-activeventreport"
import SponsorshipActiveEventSendReportTest from "./sponsorship-activeevent-sendreport-test"
import SponsorshipGraphTest from "./sponsorship-graphtest"
import { useDispatch, useSelector, connect } from "react-redux"
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import moment from 'moment'
import calendardark from '../../assets/images/dashboardimg/calendardark.png'
import { getAllSponsorEvents_APIcall, sponsorEventDetailsPayload } from '../slice-sponsorship/slice-sponsorshipEvents/slice-getAllSponsorEvents'
import { getSponsorEventDemograph_APIcall } from '../slice-sponsorship/slice-sponsorshipEvents/slice-getSponsorEventDemograph'
// import { PieChart } from "react-minimal-pie-chart"

const SponsorshipEventActiveTab = (props) => {
    const dispatch = useDispatch()
    const authStat_getAllSponsorEvents = useSelector((state) => state.getAllSponsorEventsData)
    const authStat_getSponsorEventDemograph = useSelector((state) => state.getSponsoreventDemographData)
    const [eventList, setEventList] = useState([])
    const [loader, setLoader] = useState(false)
    const [ind, setindex] = useState("")
    const [analyticsCollectedData, setAnalyticsCollectedData] = useState([])
    const [getAllSponsorEventsList, setAllSponsorEventList] = useState([])
    const [displayAllGenders, setDisplayAllGenders] = useState(false)
    const [displayAllDrinking, setDisplayAllDrinking] = useState(false)
    const [displayAllRelation, setDisplayAllRelation] = useState(false)
    const [displayAllKids, setDisplayAllKids] = useState(false)
    const [displayAllAttractedTo, setDisplayAllAttractedTo] = useState(false)
    const [displayAllAgeRange, setDisplayAllAgeRange] = useState(false)
    const [displayAllInterest, setDisplayAllInterest] = useState(false)
    const [displayAllLocation, setDisplayAllLocation] = useState(false)
    const [top2drinkinghabits, setDrinking] = useState([])
    const [exercise, setExercise] = useState([])
    const [top3genders, settop3genders] = useState([])
    const [relationshipstatus, setRelationshipstatus] = useState([])
    const [haveKids, setHaveKids] = useState([])
    const [attractedto, setAttactedTo] = useState([])
    const [top3ageranges, setAgeRanges] = useState([])
    const [getInterests, setInterests] = useState([])
    const [getLocations, setLocations] = useState([])

    const [getdata1, setgetdata1] = useState(
        [{
            "user_id": "011E9198-5F38-47C6-BE1E-5E8EEADE93EB",
            "full_name": "Add F",
            "email_address": "image@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/011E9198-5F38-47C6-BE1E-5E8EEADE93EB/WedJun14202309%3A53%3A09GMT%2B0000%28CoordinatedUniversalTime%292023-06-14T09%3A53%3A03.754Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "0C17EF03-A95E-4795-821B-D4AA2AADCAEE",
            "full_name": "Bbb 05",
            "email_address": "bbb05@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/0C17EF03-A95E-4795-821B-D4AA2AADCAEE/ThuJun22202311%3A56%3A54GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T11%3A56%3A50.407Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "10F4FB31-6C7E-4597-A989-4B51F7451F27",
            "full_name": "Monisha M",
            "email_address": "moni24@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/10F4FB31-6C7E-4597-A989-4B51F7451F27/WedJun21202315%3A18%3A26GMT%2B0000%28CoordinatedUniversalTime%292023-06-21T15%3A20%3A51.366Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "185D2E5D-143B-4AAD-8A78-50825F002DD6",
            "full_name": "RGI - 100",
            "email_address": "kkk100@gmail.com",
            "user_image": "",
            "is_active": "active"
        },
        {
            "user_id": "1E8727D2-EF2F-4713-AFA8-4FCB02DEF3EC",
            "full_name": "Dora Dora",
            "email_address": "dora@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/1E8727D2-EF2F-4713-AFA8-4FCB02DEF3EC/ThuJun01202310%3A32%3A13GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "2082516D-A4ED-4A82-8B9C-D28D4507A1CC",
            "full_name": " aaa 01",
            "email_address": "aaa01@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/2082516D-A4ED-4A82-8B9C-D28D4507A1CC/ThuJun22202309%3A10%3A39GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T09%3A10%3A35.797Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "22647410-FBD1-4A52-A6B0-FECE727B7F54",
            "full_name": "Qqq 2",
            "email_address": "qqq2@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/22647410-FBD1-4A52-A6B0-FECE727B7F54/ThuJun22202318%3A16%3A23GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T18%3A16%3A19.129Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "37594CF2-C75C-43A2-8C56-800ADF6A41AB",
            "full_name": "Vishnu R",
            "email_address": "jacky@gmail.com",
            "user_image": "",
            "is_active": "active"
        },
        {
            "user_id": "3FC1FC08-EBE7-4EFA-BA19-40624D8CBD3C",
            "full_name": "Train 12",
            "email_address": "train13@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/3FC1FC08-EBE7-4EFA-BA19-40624D8CBD3C/ThuJun22202317%3A29%3A40GMT%2B0000%28CoordinatedUniversalTime%29IMG_0001.JPG_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "42236F95-A595-4AC7-BC69-01B0980E4B07",
            "full_name": "Kish Ore",
            "email_address": "kishor@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/42236F95-A595-4AC7-BC69-01B0980E4B07/TueJun27202308%3A42%3A42GMT%2B0000%28CoordinatedUniversalTime%292023-06-27T08%3A42%3A35.549Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "44C3648F-92A1-4865-99A4-A12F78FB0EC0",
            "full_name": "Sss 2",
            "email_address": "sss2@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/44C3648F-92A1-4865-99A4-A12F78FB0EC0/ThuJun22202313%3A52%3A13GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T13%3A52%3A11.174Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "45EECF41-0087-4AA0-B143-033FCBF7FCFD",
            "full_name": "Aaa 1",
            "email_address": "aaa1@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/45EECF41-0087-4AA0-B143-033FCBF7FCFD/ThuJun22202308%3A24%3A58GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T08%3A24%3A54.879Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "46B07605-2518-484F-9B31-B492444AE093",
            "full_name": "Jathu V",
            "email_address": "joker@gmail.com",
            "user_image": "",
            "is_active": "active"
        },
        {
            "user_id": "4727FDBD-2D9E-4121-AD94-EF19F3B1AAE9",
            "full_name": "Devil V",
            "email_address": "yadhu@gmail.com",
            "user_image": "",
            "is_active": "active"
        },
        {
            "user_id": "4CA1D972-34F1-4AE6-852F-302A55B9A934",
            "full_name": "Stephin J Bency",
            "email_address": "Stephin@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/4CA1D972-34F1-4AE6-852F-302A55B9A934/ThuMay25202308%3A30%3A06GMT%2B0000%28CoordinatedUniversalTime%292023-05-25T08%3A29%3A57.099Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "4FAFC1D7-34F2-45C6-8F40-0F68851835CB",
            "full_name": "Android 02",
            "email_address": "android02@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/4FAFC1D7-34F2-45C6-8F40-0F68851835CB/TueMay30202311%3A10%3A46GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "500EF136-2178-4DBD-9A5B-383B984DDE08",
            "full_name": "Dq V",
            "email_address": "kangoo@gmail.com",
            "user_image": "",
            "is_active": "active"
        },
        {
            "user_id": "572373A6-9854-4392-A2E5-B41AAB8F66E3",
            "full_name": "Dolu D",
            "email_address": "dolu@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/572373A6-9854-4392-A2E5-B41AAB8F66E3/ThuMay25202307%3A01%3A42GMT%2B0000%28CoordinatedUniversalTime%292023-05-25T07%3A00%3A55.163Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "572C25C5-E37A-40C2-A67B-D61D5CD6AD2E",
            "full_name": "Revolution Games India Pvt Ltd",
            "email_address": "qa123@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/572C25C5-E37A-40C2-A67B-D61D5CD6AD2E/TueMay30202309%3A56%3A45GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "5BB60A87-5811-40CE-8A50-0909279FE84C",
            "full_name": "Kkk 1",
            "email_address": "kkk1@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/5BB60A87-5811-40CE-8A50-0909279FE84C/WedJun21202307%3A46%3A46GMT%2B0000%28CoordinatedUniversalTime%292023-06-21T07%3A46%3A36.455Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "6527139A-061C-4C98-A45A-44C89DB2FDBB",
            "full_name": "Aaa 2",
            "email_address": "aaa3@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/6527139A-061C-4C98-A45A-44C89DB2FDBB/ThuJun22202304%3A07%3A07GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T04%3A07%3A02.990Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "6C58D78B-3BCC-47AA-B0C1-5F110E94360A",
            "full_name": "Chiivv V",
            "email_address": "chennav@gmail.com",
            "user_image": "",
            "is_active": "active"
        },
        {
            "user_id": "708547FB-7F2D-4D39-9333-5424703A97D8",
            "full_name": "raja Wow",
            "email_address": "jangoz@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/708547FB-7F2D-4D39-9333-5424703A97D8/ThuJun22202314%3A41%3A04GMT%2B0000%28CoordinatedUniversalTime%29IMG_0001.JPG_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "70B95290-5C53-4672-B2D2-B0DEEA59D858",
            "full_name": "Black Black",
            "email_address": "black@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/70B95290-5C53-4672-B2D2-B0DEEA59D858/ThuJun01202313%3A36%3A24GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "7322CA02-E31B-403A-9EEC-FEC6E70C67F4",
            "full_name": "Chandru A S",
            "email_address": "chandruas888@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/7322CA02-E31B-403A-9EEC-FEC6E70C67F4/FriJun02202305%3A58%3A02GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "7360C907-0119-41B6-BDCC-AD7695809CDE",
            "full_name": "Cool S",
            "email_address": "gym@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/7360C907-0119-41B6-BDCC-AD7695809CDE/ThuJun01202315%3A40%3A57GMT%2B0000%28CoordinatedUniversalTime%292023-06-01T15%3A41%3A15.873Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "75D9EBF8-C1A8-4618-828E-8A8194FE9DF0",
            "full_name": "algorithm e",
            "email_address": "algorithm@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/75D9EBF8-C1A8-4618-828E-8A8194FE9DF0/FriJun23202305%3A22%3A42GMT%2B0000%28CoordinatedUniversalTime%29IMG_0001.JPG_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "7F68A9F4-BE4C-4AC6-8D83-FE691F7B17D4",
            "full_name": " chenu 123",
            "email_address": "manju123@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/7F68A9F4-BE4C-4AC6-8D83-FE691F7B17D4/ThuJun22202316%3A36%3A55GMT%2B0000%28CoordinatedUniversalTime%29IMG_0001.JPG_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "80B5C299-0BCD-4E09-AF11-5EEDDEEE18FB",
            "full_name": "John Son",
            "email_address": "event123@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/80B5C299-0BCD-4E09-AF11-5EEDDEEE18FB/ThuJun22202313%3A56%3A28GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T13%3A56%3A17.196Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "88235FDA-ED11-4AF9-BA93-E3C22A2E1935",
            "full_name": "Chandru A S",
            "email_address": "chan@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/88235FDA-ED11-4AF9-BA93-E3C22A2E1935/FriJun23202312%3A44%3A32GMT%2B0000%28CoordinatedUniversalTime%29IMG_0001.JPG_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "8D442260-9DCF-4B1A-A654-40367D99593A",
            "full_name": "Gxg Jvj",
            "email_address": "tedttttt@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/8D442260-9DCF-4B1A-A654-40367D99593A/WedJun28202311%3A42%3A53GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "90E55464-312D-41C7-95B5-4D82464BA02B",
            "full_name": "Ramu 123",
            "email_address": "ramu@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/90E55464-312D-41C7-95B5-4D82464BA02B/WedJun28202309%3A43%3A35GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "913C4034-1A59-4789-AAE4-AD41269736E2",
            "full_name": "V V",
            "email_address": "chenni@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/913C4034-1A59-4789-AAE4-AD41269736E2/TueJun20202309%3A40%3A51GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "92E60D1D-4339-400A-B340-DF42D9549929",
            "full_name": "Bob Y ",
            "email_address": "bob@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/92E60D1D-4339-400A-B340-DF42D9549929/ThuJun22202318%3A10%3A21GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T18%3A10%3A17.503Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "93A6B4E8-8020-4ABC-8FA2-B502EFE8BFE0",
            "full_name": "Test Tester",
            "email_address": "test@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/93A6B4E8-8020-4ABC-8FA2-B502EFE8BFE0/ThuJun22202309%3A22%3A12GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T09%3A24%3A39.425Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "985A86D0-DEFD-4F52-A8D0-8834C9ACEAF3",
            "full_name": "Dev Osiris",
            "email_address": "shym@revolutiongamesindia.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/985A86D0-DEFD-4F52-A8D0-8834C9ACEAF3/FriJun23202306%3A33%3A23GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "9C1F019E-03B7-4CEC-9FBE-7807CA529E56",
            "full_name": "* 12#",
            "email_address": "benza+102@revolutiongamesindia.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/9C1F019E-03B7-4CEC-9FBE-7807CA529E56/TueJun27202311%3A10%3A48GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "9D1B6E04-05F7-4322-8281-B73290D14B96",
            "full_name": "Bbb 01",
            "email_address": "bbb01@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/9D1B6E04-05F7-4322-8281-B73290D14B96/ThuJun22202310%3A37%3A52GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T10%3A37%3A45.786Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "9DE0BFDA-AB11-495D-BEA6-E07A6EB1E132",
            "full_name": "SIgn up 1",
            "email_address": "Signup1@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/9DE0BFDA-AB11-495D-BEA6-E07A6EB1E132/ThuMay25202308%3A13%3A17GMT%2B0000%28CoordinatedUniversalTime%29IMG_0001.JPG_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "A511B5C0-CFEF-4291-8304-27BEF73048F5",
            "full_name": "ds Pc",
            "email_address": "jadyu@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/A511B5C0-CFEF-4291-8304-27BEF73048F5/ThuJun22202317%3A27%3A11GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T17%3A27%3A07.794Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "A6807E0D-B44B-40EF-8996-5B779204CE39",
            "full_name": "Aaa 2",
            "email_address": "aaa2@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/A6807E0D-B44B-40EF-8996-5B779204CE39/ThuJun22202308%3A26%3A04GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T08%3A26%3A01.814Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "A747BFFD-FEAF-43D2-9DA4-06EC2AFBC4C9",
            "full_name": "janu •••",
            "email_address": "janu1@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/A747BFFD-FEAF-43D2-9DA4-06EC2AFBC4C9/TueMay30202315%3A02%3A56GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "AAED4B94-3DEE-4667-BD2D-2151ACF396E5",
            "full_name": "Chennai V",
            "email_address": "ste@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/AAED4B94-3DEE-4667-BD2D-2151ACF396E5/ThuJun22202313%3A13%3A57GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T13%3A13%3A55.513Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "AF45A50B-00C5-4C41-9FAC-D227F564C06D",
            "full_name": "Odisha O",
            "email_address": "eventalgorithm@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/AF45A50B-00C5-4C41-9FAC-D227F564C06D/FriJun23202305%3A35%3A32GMT%2B0000%28CoordinatedUniversalTime%292023-06-23T05%3A35%3A26.598Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "B21481AF-7DA2-4673-B789-DB59DC13A90B",
            "full_name": "Bbb 4",
            "email_address": "bbb5@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/B21481AF-7DA2-4673-B789-DB59DC13A90B/ThuJun22202306%3A20%3A28GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T06%3A20%3A24.579Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "B237A8A9-445E-4901-91F0-CFF217FFEF19",
            "full_name": "Android 03",
            "email_address": "android03@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/B237A8A9-445E-4901-91F0-CFF217FFEF19/WedMay31202311%3A50%3A19GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "B2DBC1AE-4646-4872-A2B3-D299D560EAFB",
            "full_name": "One 1",
            "email_address": "one@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/B2DBC1AE-4646-4872-A2B3-D299D560EAFB/ThuJun22202306%3A41%3A37GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "B7F67430-D58D-4819-92C8-1E13FF17F8E2",
            "full_name": "Itachi Uchiha",
            "email_address": "Itachi027@gmail.com",
            "user_image": "",
            "is_active": "active"
        },
        {
            "user_id": "B9E5C949-D7BC-4C75-A9BE-D514E57E86B0",
            "full_name": "Jose Christy",
            "email_address": "jose@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/B9E5C949-D7BC-4C75-A9BE-D514E57E86B0/ThuMay25202307%3A01%3A00GMT%2B0000%28CoordinatedUniversalTime%292023-05-25T07%3A00%3A47.809Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "BCEB33C9-287A-47F3-AA7F-D9A9FD83A8AD",
            "full_name": "Sabu U",
            "email_address": "checking@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/BCEB33C9-287A-47F3-AA7F-D9A9FD83A8AD/ThuJun22202311%3A04%3A05GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "BDE3564B-EEFE-42E1-9AF5-24509B837F93",
            "full_name": "Manav V",
            "email_address": "manavo@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/BDE3564B-EEFE-42E1-9AF5-24509B837F93/ThuJun22202310%3A02%3A29GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "C1A9B092-8ADF-490C-A976-45886967C190",
            "full_name": "Ios Dev",
            "email_address": "iosdev01@gmail.om",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/C1A9B092-8ADF-490C-A976-45886967C190/FriMay26202310%3A22%3A49GMT%2B0000%28CoordinatedUniversalTime%292023-05-26T10%3A22%3A40.524Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "C6EAB01F-33FE-48F3-86C5-C989848FF6B5",
            "full_name": "Chennai V",
            "email_address": "chennaii123@gmail.com",
            "user_image": "",
            "is_active": "active"
        },
        {
            "user_id": "CE934087-E644-46C6-BCA7-CA5C53D6FD40",
            "full_name": "Josh Boz",
            "email_address": "josh@gmal.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/CE934087-E644-46C6-BCA7-CA5C53D6FD40/WedJun21202310%3A28%3A01GMT%2B0000%28CoordinatedUniversalTime%29croppedImage.jpg",
            "is_active": "active"
        },
        {
            "user_id": "CF8824E1-3C3E-43EF-9CA5-BC0493125D01",
            "full_name": "Sahana S",
            "email_address": "bala@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/CF8824E1-3C3E-43EF-9CA5-BC0493125D01/WedJun07202316%3A34%3A31GMT%2B0000%28CoordinatedUniversalTime%292023-06-07T16%3A34%3A25.152Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "CFC8AC7D-FC5D-4F88-AB66-DA2AA0826FB0",
            "full_name": "Test Test",
            "email_address": "testing1@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/CFC8AC7D-FC5D-4F88-AB66-DA2AA0826FB0/ThuJun22202310%3A12%3A16GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T10%3A12%3A06.729Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "D554C2F9-ACED-4E50-A348-D1743AFDDCE1",
            "full_name": "resal v",
            "email_address": "sigma@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/D554C2F9-ACED-4E50-A348-D1743AFDDCE1/FriJun23202310%3A58%3A11GMT%2B0000%28CoordinatedUniversalTime%29IMG_0001.JPG_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "DC5AE2A0-24AD-43D4-AC02-AF1E7602E9C0",
            "full_name": "Chennai 1",
            "email_address": "issue@gmail.com",
            "user_image": "",
            "is_active": "active"
        },
        {
            "user_id": "DD6564A1-3DF0-480B-B5A4-669AC39641D3",
            "full_name": "RGI - 111",
            "email_address": "kkk111@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/DD6564A1-3DF0-480B-B5A4-669AC39641D3/ThuJun15202311%3A25%3A20GMT%2B0000%28CoordinatedUniversalTime%292023-06-15T11%3A27%3A06.570Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "E017EA87-B958-4529-ADD5-D1FFBCC9724D",
            "full_name": "Chennai Blogger",
            "email_address": "chennaivlog@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/E017EA87-B958-4529-ADD5-D1FFBCC9724D/ThuJun22202313%3A04%3A27GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T13%3A04%3A24.322Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "E344471C-997F-4929-ADE0-F39BAEDC91DB",
            "full_name": "Joker J",
            "email_address": "jobin@gmail.com",
            "user_image": "",
            "is_active": "active"
        },
        {
            "user_id": "E464646D-C262-409C-B015-49CA034C6472",
            "full_name": "Priya R",
            "email_address": "priya@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/E464646D-C262-409C-B015-49CA034C6472/TueJun27202310%3A09%3A13GMT%2B0000%28CoordinatedUniversalTime%292023-06-27T10%3A09%3A06.791Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "E6BFAC27-B5CD-42EF-B08F-8805AFA92F31",
            "full_name": "Android 0001",
            "email_address": "android01@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/E6BFAC27-B5CD-42EF-B08F-8805AFA92F31/WedJun21202312%3A59%3A19GMT%2B0000%28CoordinatedUniversalTime%292023-06-21T13%3A01%3A44.842Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "E7A084DA-C0C8-40A8-B22A-7682A5718F97",
            "full_name": "Aaa 02",
            "email_address": "aaa02@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/E7A084DA-C0C8-40A8-B22A-7682A5718F97/ThuJun22202309%3A12%3A09GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T09%3A12%3A03.396Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "F1128C06-491E-4C2C-9AA4-0B9B6F497F25",
            "full_name": "Ben Ben",
            "email_address": "benza+104@revolutiongamesindia.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/F1128C06-491E-4C2C-9AA4-0B9B6F497F25/TueJun27202311%3A49%3A54GMT%2B0000%28CoordinatedUniversalTime%292023-06-27T11%3A51%3A41.071Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "F1F64EA8-A770-4A68-8674-7C9147A6383D",
            "full_name": "Aaa 4",
            "email_address": "aaa4@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/F1F64EA8-A770-4A68-8674-7C9147A6383D/WedJun21202312%3A11%3A28GMT%2B0000%28CoordinatedUniversalTime%292023-06-21T12%3A11%3A19.919Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "FF9DCDFC-E5D8-42FB-8BD9-A086DC1783AD",
            "full_name": "Sss 1",
            "email_address": "sss1@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/FAA850E7-0A25-43A4-9041-91B12753399F/ThuJun22202313%3A49%3A56GMT%2B0000%28CoordinatedUniversalTime%292023-06-22T13%3A49%3A53.658Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "FF9DCDFC-E5D8-42FB-8BD9-A086DC1783AD",
            "full_name": "Sss 4",
            "email_address": "sss4@gmail.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/FBA4059F-F251-4C83-9E7F-9D52491FFA9E/FriJun23202304%3A33%3A40GMT%2B0000%28CoordinatedUniversalTime%292023-06-23T04%3A33%3A32.543Z_crop.jpg",
            "is_active": "active"
        },
        {
            "user_id": "FF9DCDFC-E5D8-42FB-8BD9-A086DC1783AD",
            "full_name": "Kincaid .",
            "email_address": "benza+103@revolutiongamesindia.com",
            "user_image": "https://hintsocial-demo.s3.amazonaws.com/image_file/FF9DCDFC-E5D8-42FB-8BD9-A086DC1783AD/TueJun27202311%3A39%3A43GMT%2B0000%28CoordinatedUniversalTime%29IMG_0001.JPG_crop.jpg",
            "is_active": "active"
        }]
    )


    useEffect(() => {

        const data = []
        for (let i = 0; i < getdata1.length; i++) {
            data.push(getdata1[i].user_id)
        }
        console.log(data)
        const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
        console.log([...new Set(findDuplicates(data))])

    })

    const [analyticsCollectedData1] = useState([
        { id: '1', value: "354", dataName: "Unique Viewers" },
        { id: '2', value: "354", dataName: "Impressions" },
        { id: '3', value: "443", dataName: "Event Clicks" },
        { id: '4', value: "354", dataName: "Cost per Unique Viewer" },
        { id: '5', value: "354", dataName: "Cost per Impression" },
        { id: '6', value: "$5.50", dataName: "Cost Per Event Click" },
        { id: '7', value: "443", dataName: "Event Link Clicks" },
        { id: '8', value: "443", dataName: "Sponsor Link Clicks" },
        { id: '9', value: "443", dataName: "Members Attending" },
        { id: '10', value: "$5.50", dataName: "Cost Per Event Link Click" },
        { id: '11', value: "$5.50", dataName: "Cost Per Sponsor Link Click" },
        { id: '12', value: "$554", dataName: "Total Spent" }
    ])
    const data1 = [
        { title: "Yes", value: 100, color: "#d7f2e6" },
        { title: "No", value: 104, color: "#95E1BF" }
    ]

    //*********** */

    const [top5locations] = useState([
        { id: 1, yaxis: "Miami, FL", width: "100%", value: "15%" },
        { id: 2, yaxis: "New York, NY", width: "75%", value: "12%" },
        { id: 3, yaxis: "Boston, MA", width: "65%", value: "10%" },
        { id: 4, yaxis: "Austin, TX", width: "55%", value: "8%" },
        { id: 5, yaxis: "Denver, CO", width: "45%", value: "6%" },
    ])

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



    const datetime = (data) => {
        const monthValue = moment(data).format('MMM')
        const dateValue = moment(data).format('DD')
        return (<span>{`${monthValue}. ${dateValue}`}</span>)
    }

    const startTimeFormat = (data) => {
        const localDateTimeConversion = new Date(data)
        const UTCTimePick = moment(localDateTimeConversion, "h:mmA").format("HH:mm")
        const localTimeConversion = moment(UTCTimePick, ["HH:mm"]).format("hh:mm A")
        return (<span>{localTimeConversion}</span>)
    }

    const endTimeFormat = (data) => {
        const localDateTimeConversion = new Date(data)
        const UTCTimePick = moment(localDateTimeConversion, "h:mmA").format("HH:mm")
        const localTimeConversion = moment(UTCTimePick, ["HH:mm"]).format("hh:mm A")
        return (<span>{localTimeConversion}</span>)
    }


    useEffect(() => {
        const payload = {
            user_id: localStorage.getItem('loggedIn_userId')
        }
        setLoader(true)
        dispatch(getAllSponsorEvents_APIcall(payload))
    }, [])

    useEffect(() => {
        if (authStat_getAllSponsorEvents.data.responseCode == 200 && authStat_getAllSponsorEvents.data.responseBody != undefined) {
            const responseData = authStat_getAllSponsorEvents.data.responseBody
            setAllSponsorEventList(authStat_getAllSponsorEvents.data.responseBody.active_events)
            eventDetail(0, authStat_getAllSponsorEvents.data.responseBody.active_events[0].event_id, authStat_getAllSponsorEvents.data.responseBody.active_events[0])
            console.log(responseData)
        }
        else {
            setAllSponsorEventList([])
        }
    }, [authStat_getAllSponsorEvents.data])

    const eventDetail = (i, eventId, data) => {
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
            event_id: eventId
        }
        dispatch(getSponsorEventDemograph_APIcall(payload))
        // dispatch(passActualSponsorEventId(eventData_payload))
        setindex(i)
        setDisplayAllGenders(false)
        setDisplayAllDrinking(false)
        setDisplayAllRelation(false)
        setDisplayAllKids(false)
        setDisplayAllAttractedTo(false)
        setDisplayAllAgeRange(false)
        setDisplayAllInterest(false)
        setDisplayAllLocation(false)

        const { sponsor_info } = data
        const result = [
            { id: '1', value: sponsor_info.uniqueViewers, dataName: "Unique Viewers" },
            { id: '2', value: sponsor_info.impressions, dataName: "Impressions" },
            { id: '3', value: sponsor_info.eventClicks, dataName: "Event Clicks" },
            { id: '4', value: sponsor_info.costPerUniqueViewer, css: { padding: "2px" }, dataName: "Cost per Unique Viewer" },
            { id: '5', value: sponsor_info.costPerImpression, dataName: "Cost per Impression" },
            { id: '6', value: sponsor_info.costPerEventClick, dataName: "Cost Per Event Click" },
            { id: '7', value: sponsor_info.sponsorLinkClicks, dataName: "Event Link Clicks" },
            { id: '8', value: sponsor_info.memberAttending, dataName: "Sponsor Link Clicks" },
            { id: '9', value: sponsor_info.costPerEventLinkClick, dataName: "Members Attending" },
            { id: '10', value: sponsor_info.costPerSponsorLinkClick, css: { padding: "2px" }, dataName: "Cost Per Event Link Click" },
            { id: '11', value: sponsor_info.totalSpent, css: { padding: "2px" }, dataName: "Cost Per Sponsor Link Click" },
            { id: '12', value: sponsor_info.totalSpent, dataName: "Total Spent" }
        ]
        setAnalyticsCollectedData(result)
        dispatch(sponsorEventDetailsPayload(data))
    }

    useEffect(() => {

        if (authStat_getSponsorEventDemograph.data.responseCode == 200) {
            console.log('*****************', authStat_getSponsorEventDemograph.data.responseBody)
            if ((authStat_getSponsorEventDemograph.data.responseBody).length !== 0) {
                const { gender_demography } = authStat_getSponsorEventDemograph.data.responseBody
                const { relationship_demography } = authStat_getSponsorEventDemograph.data.responseBody
                const { exercise_relationship_demography } = authStat_getSponsorEventDemograph.data.responseBody
                const { drinking_demography } = authStat_getSponsorEventDemograph.data.responseBody
                const { kids_demography } = authStat_getSponsorEventDemograph.data.responseBody
                const { attracted_demography } = authStat_getSponsorEventDemograph.data.responseBody
                const { age_demography } = authStat_getSponsorEventDemograph.data.responseBody
                const { interest_demography } = authStat_getSponsorEventDemograph.data.responseBody
                const { location_demograph } = authStat_getSponsorEventDemograph.data.responseBody

                const gender_democracy_result = [
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
                    { id: 1, yaxis: "Other", width: gender_demography.two_spirit + "%", value: gender_demography.two_spirit + "%", values: gender_demography.two_spirit }
                ]
                const genderArray = [...gender_democracy_result]
                const genderArraySorting = genderArray.sort((p1, p2) => (p1.values < p2.values) ? 1 : (p1.values > p2.values) ? -1 : 0)
                settop3genders(genderArraySorting)

                const relationship_democracy_result = [
                    { id: 1, yaxis: "Single", width: relationship_demography.single + "%", value: relationship_demography.single + "%", values: relationship_demography.single },
                    { id: 1, yaxis: "In a Relationship", width: relationship_demography.in_a_relationship + "%", value: relationship_demography.in_a_relationship + "%", values: relationship_demography.in_a_relationship },
                    { id: 1, yaxis: "It's Complicated", width: relationship_demography.its_complicated + "%", value: relationship_demography.its_complicated + "%", values: relationship_demography.its_complicated },
                    // { id: 1, yaxis: "Engaged", width: relationship_democracy.engaged + "%", value: relationship_democracy.engaged + "%", values: relationship_democracy.engaged },
                    // { id: 1, yaxis: "Married", width: relationship_democracy.married + "%", value: relationship_democracy.married + "%", values: relationship_democracy.married },
                    // { id: 1, yaxis: "Widowed", width: relationship_democracy.widowed + "%", value: relationship_democracy.widowed + "%", values: relationship_democracy.widowed },
                    // { id: 1, yaxis: "Enm", width: relationship_democracy.enm + "%", value: relationship_democracy.enm + "%", values: relationship_democracy.enm },
                    // { id: 1, yaxis: "Separated", width: relationship_democracy.separated + "%", value: relationship_democracy.separated + "%", values: relationship_democracy.separated },
                    // { id: 1, yaxis: "Divorced", width: relationship_democracy.divorced + "%", value: relationship_democracy.divorced + "%", values: relationship_democracy.divorced }
                ]
                const relationshipArray = [...relationship_democracy_result]
                const relationshipArraySorting = relationshipArray.sort((p1, p2) => (p1.values < p2.values) ? 1 : (p1.values > p2.values) ? -1 : 0)
                setRelationshipstatus(relationshipArraySorting)

                const exercise_democracy_result = [
                    { id: 1, yaxis: "Something", width: exercise_relationship_demography.Something + "%", value: exercise_relationship_demography.Something + "%", values: exercise_relationship_demography.Something },
                    { id: 1, yaxis: "Active", width: exercise_relationship_demography.Active + "%", value: exercise_relationship_demography.Active + "%", values: exercise_relationship_demography.Active },
                    { id: 1, yaxis: "Almost Never", width: exercise_relationship_demography.Almost_never + "%", value: exercise_relationship_demography.Almost_never + "%", values: exercise_relationship_demography.Almost_never }
                ]
                const exerciseArray = [...exercise_democracy_result]
                const exerciseArraySorting = exerciseArray.sort((p1, p2) => (p1.values < p2.values) ? 1 : (p1.values > p2.values) ? -1 : 0)
                setExercise(exerciseArraySorting)

                const drinking_democracy_result = [
                    { id: 1, yaxis: "Frequently", width: drinking_demography.Frequently + "%", value: drinking_demography.Frequently + "%", values: drinking_demography.Frequently },
                    { id: 1, yaxis: "Sober", width: drinking_demography.Sober + "%", value: drinking_demography.Sober + "%", values: drinking_demography.Sober },
                    { id: 1, yaxis: "Socially", width: drinking_demography.Socially + "%", value: drinking_demography.Socially + "%", values: drinking_demography.Socially },
                    { id: 1, yaxis: "Never", width: drinking_demography.Never + "%", value: drinking_demography.Never + "%", values: drinking_demography.Never }
                ]
                const drinkingHabitsArray = [...drinking_democracy_result]
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
                    { id: 1, yaxis: "Woman & Nonbinary", width: attracted_demography.woman_and_nonbinary + "%", value: attracted_demography.woman_and_nonbinary + "%", values: attracted_demography.woman_and_nonbinary },
                    { id: 1, yaxis: "Man", width: attracted_demography.man + "%", value: attracted_demography.man + "%", values: attracted_demography.man },
                    { id: 1, yaxis: "Intersex Man", width: attracted_demography.intersex_man + "%", value: attracted_demography.intersex_man + "%", values: attracted_demography.intersex_man },
                    { id: 1, yaxis: "Trans Man", width: attracted_demography.trans_man + "%", value: attracted_demography.trans_man + "%", values: attracted_demography.trans_man },
                    { id: 1, yaxis: "Cis Man", width: attracted_demography.cis_man + "%", value: attracted_demography.cis_man + "%", values: attracted_demography.cis_man },
                    { id: 1, yaxis: "Transmasculine", width: attracted_demography.transmasculine + "%", value: attracted_demography.transmasculine + "%", values: attracted_demography.transmasculine },
                    { id: 1, yaxis: "Man & Nonbinary", width: attracted_demography.man_and_nonbinary + "%", value: attracted_demography.man_and_nonbinary + "%", values: attracted_demography.man_and_nonbinary },
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
            else if ((authStat_getSponsorEventDemograph.data.responseBody).length === 0) {
                setLoader(false)
            }
        }
        else if (authStat_getSponsorEventDemograph.data.responseCode == 201) {
            const gender_democracy_result = [
                { id: 1, yaxis: "Man", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Woman", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Inter Sex Woman", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Trans Woman", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Cis Woman", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Transfeminine", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Woman & Nonbinary", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Intersex Man", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Trans Man", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Cis Man", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Transmasculine", width: 0 + "%", value: 0 + "%" },
                { id: 1, yaxis: "Man & Nonbinary", width: 0 + "%", value: 0 + "%" },
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
                { id: 1, yaxis: "In a Relationship", width: 0 + "%", value: 0 + "%" },
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
            setLoader(true)
        }
    }, [authStat_getSponsorEventDemograph.data])


    const handleViewAllHide = (value) => {
        debugger

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

                {getAllSponsorEventsList?.map((data, index) => {
                    return (
                        <div className="card p-1 flex-column cards activegroup-mainsection" style={{ border: index === ind ? '1px solid #95E1BF' : 'none' }}>
                            <div className="d-flex col-12" onClick={() => eventDetail(index, data.event_id, data)}>
                                <div className='col-1 ps-3'>
                                    <div className="parent mt-50" style={{ position: "relative" }}>
                                        {data.event_image.image_url != "" ?
                                            <img src={data.event_image.image_url} width="86px" height="86px" style={{ borderRadius: "15px" }} /> :
                                            <div className="noEventSection p-2">
                                                <img className="noeventimg" src={calendardark} width="40px" height="41px" />
                                            </div>
                                        }
                                    </div>
                                </div> &nbsp;&nbsp;&nbsp;
                                <div className='col-11 top-contentSection'>
                                    <div className='d-flex justify-content-between align-items-between px-1'>
                                        <div>
                                            <span className='sponsor-textspanbold16'>{data.event_title}</span>&nbsp;&nbsp;
                                            {/* <span className=''>{data.event_id}</span> */}
                                            {/* <span className="sponsor-hintsocialicon"><img src={hintsocial_fullColor} width="55px" height="29px" /></span>&nbsp; */}
                                        </div>
                                        <div>
                                            <span className='sponsor-textspanbold5'>{data.group_name}</span>&nbsp;&nbsp;
                                            <img src={morehorizontal} style={{ cursor: "pointer" }} width="24px" height="24px"></img>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-between px-1'>
                                        <div className="d-flex align-items-center">
                                            <span className='sponsor-textspanbold17'>{datetime(data.start_date)}</span>&nbsp;&nbsp;
                                            <img src={dot} width="4px" height="4px" />&nbsp;&nbsp;
                                            <span className='sponsor-textspanbold17'>{startTimeFormat(data.start_date)} to {endTimeFormat(data.end_date)}</span>&nbsp;&nbsp;
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center  px-1'>
                                        <div>
                                            <span><img src={location} width="18" height="18" /></span>
                                            <span className='sponser-textspanlight1 ms-25' style={{ cursor: "pointer" }}>{data.event_location}</span> &nbsp;&nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* top section ends */}
                            {index === ind ?
                                <div>
                                    <hr style={{ border: "1px solid #CCD8DB" }} />
                                    <div className="d-flex justify-content-between pb-1">
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
                                            {analyticsCollectedData.map((data) => {
                                                return (
                                                    <div className="col-4 analyticsSection-item px-2">
                                                        <div className="row d-flex align-items-center justify-content-between analyticsData-section">
                                                            <span className="col-5 sponsor-textspanbold1  d-flex justify-content-center analytics-datavalue">
                                                                <div style={{ height: "30px", }}></div>{data.value}</span>
                                                            <span className="col-7 sponsor-textspanbold2 d-flex justify-content-center" style={data.css}>{data.dataName}</span>
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
                }
                )}
            </div>
        </>
    )
}


export default SponsorshipEventActiveTab
