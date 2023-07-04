import cake from '../assets/images/dashboardimg/cakeicon.png'
import Liberal from '../assets/images/dashboardimg/Politics.png'
import Agnostic from '../assets/images/dashboardimg/Religion.png'
import Active from '../assets/images/dashboardimg/weight.png'
import LatinX from '../assets/images/dashboardimg/world.png'
import Single from '../assets/images/dashboardimg/heart.png'
import arrow from '../assets/images/dashboardimg/Height.png'
import Frequent from '../assets/images/dashboardimg/Drink.png'
import HaveKids from '../assets/images/dashboardimg/twins.png'
import english from '../assets/images/dashboardimg/language.png'
import men from '../assets/images/dashboardimg/men.png'
import { useEffect, useState } from 'react'

const Additional_info = (props) => {
    const [icon1, seticons] = useState([])
    const [selectedUserDetails, setselectedUserDetails] = useState([])

    const [icon, seticon] = useState(
        [{ icon: cake, name: "April 14th", color: "yes", width: "16.71px", height: "17.96px" },
        { icon: arrow, name: "5’4”", color: "yes", width: "8px", height: "15px" },
        { icon: Liberal, name: "Liberal", color: "no", width: "17px", height: "17px" },
        { icon: LatinX, name: "LatinX", color: "yes", width: "17px", height: "17px" },
        { icon: Agnostic, name: "Agnostic", color: "no", width: "16px", height: "17px" },
        { icon: Frequent, name: "Frequent", color: "yes", width: "17px", height: "17px" },
        { icon: Active, name: "Active", color: "no", width: "25px", height: "25px" },
        { icon: HaveKids, name: "Don’t Have Kids", color: "yes", width: "19px", height: "15px" },
        { icon: Single, name: "Single", color: "no", width: "18px", height: "16px" },
        { icon: men, name: "Men", color: "yes", width: "15px", height: "16.67px" },
        { icon: english, name: "English, Spanish", color: "no", width: "22px", height: "22px" }
        ])

        const [addindo, setAddinfo]=useState([
        { icon: cake, name: "", width: "16.71px", height: "17.96px" },
        { icon: arrow, name: "", width: "8px", height: "15px" },
        { icon: Liberal, name: "", width: "17px", height: "17px" },
        { icon: LatinX, name: "",width: "17px", height: "17px" },
        { icon: Agnostic, name: "", width: "16px", height: "17px" },
        { icon: Frequent, name: "", width: "17px", height: "17px" },
        { icon: Active, name: "", width: "25px", height: "25px" },
        { icon: HaveKids, name: "", width: "19px", height: "15px" },
        { icon: Single, name: "", width: "18px", height: "16px" },
        { icon: men, name: "", width: "15px", height: "16.67px" },
        { icon: english, name: "", width: "22px", height: "22px" }
        ])

    useEffect(() => {
        //
        setselectedUserDetails(props.userDetails)
        console.log('side profile', selectedUserDetails)
        const dummyicon=[...icon]  
        // if(selectedUserDetails[0].addition_info==undefined){
            // console.log('pass')
        //    if( selectedUserDetails[0].addition_info[0].hasOwnProperty("drinking")){
        //     console.log('paaaaass')
        //    }
        // }

    })

    return (
        <div>
            <span className="addtionalinfo_content">Additional Info</span>
            <div className="row">
                {icon.map((res) => {
                    return (
                        <div className='col-6'>
                            <div className='d-flex align-items-center flex-row mt-1'>
                                <div className='col-2'>
                                    <img src={res.icon} width={res.width} height={res.height}   ></img>
                                </div>
                                <span className='profiles_detail'>{res.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Additional_info