
import React, { useState, useEffect } from 'react'
import closecircle from '../assets/images/dashboardimg/close-circle.png'
import search from '../assets/images/dashboardimg/searchbar.png'
import htab_icon from '../assets/images/dashboardimg/htabicon.png'

const EditgroupInterest = (props) => {
    const [intersetarr, setinterest] = useState([])
    const [users, setusers] = useState([])

    const [text, settext] = useState('')
    const [combine, setcombine] = useState([])
    const [suggestions, setsuggestions] = useState([])
    const [manageinterest, setInterests] = useState([
        { id: '1', name: "Fitness", img2: closecircle, val: '' },

        { id: '3', name: "Movies", img2: closecircle, val: '' },
        { id: '4', name: "Food", img2: closecircle, val: '' },

        { id: '7', name: "Comedy", img2: closecircle, val: '' },
        { id: '8', name: "Nightlife", img2: closecircle, val: '' },
        { id: '9', name: "Cooking", img2: closecircle, val: '' },
        { id: '10', name: "Restaurants", img2: closecircle, val: '' },

        { id: '12', name: "Wine", img2: closecircle, val: '' },
        { id: '13', name: "Dogs", img2: closecircle, val: '' },
        { id: '14', name: "TV", img2: closecircle, val: '' },
        { id: '15', name: "Hiking", img2: closecircle, val: '' },
        { id: '16', name: "Art", img2: closecircle, val: '' },


        { id: '19', name: "Fashion", img2: closecircle, val: '' },
        { id: '20', name: "Volunteering", img2: closecircle, val: '' },
        { id: '21', name: "Cocktails", img2: closecircle, val: '' },
        { id: '22', name: "Yoga", img2: closecircle, val: '' },
        { id: '23', name: "Beer", img2: closecircle, val: '' },

        { id: '24', name: "Board Games", img2: closecircle, val: '' },
        { id: '25', name: "Reading", img2: closecircle, val: '' },
        { id: '26', name: "Acting", img2: closecircle, val: '' },
        { id: '27', name: "Activities", img2: closecircle, val: '' },
        { id: '28', name: "Animals", img2: closecircle, val: '' },
        { id: '29', name: "Astrology", img2: closecircle, val: '' },
        { id: '30', name: "Axe Throwing", img2: closecircle, val: '' },
        { id: '31', name: "Baking", img2: closecircle, val: '' },
        { id: '32', name: "Band", img2: closecircle, val: '' },
        { id: '33', name: "Baseball", img2: closecircle, val: '' },
        { id: '34', name: "Basketball", img2: closecircle, val: '' },
        { id: '35', name: "Beach", img2: closecircle, val: '' },
        { id: '36', name: "Boats", img2: closecircle, val: '' },
        { id: '37', name: "Books", img2: closecircle, val: '' },
        { id: '38', name: "Bouldering", img2: closecircle, val: '' },
        { id: '39', name: "Bowling", img2: closecircle, val: '' },
        { id: '40', name: "Boxing", img2: closecircle, val: '' },
        { id: '41', name: "Brunch", img2: closecircle, val: '' },
        { id: '42', name: "Camping", img2: closecircle, val: '' },
        { id: '43', name: "Card Games", img2: closecircle, val: '' },
        { id: '44', name: "Cats", img2: closecircle, val: '' },
        { id: '45', name: "Chess", img2: closecircle, val: '' },
        { id: '46', name: "Coding", img2: closecircle, val: '' },
        { id: '47', name: "Coffee", img2: closecircle, val: '' },
        { id: '48', name: "Comic Books", img2: closecircle, val: '' },
        { id: '49', name: "Concerts", img2: closecircle, val: '' },
        { id: '50', name: "Crafts", img2: closecircle, val: '' },
        { id: '51', name: "Curling", img2: closecircle, val: '' },
        { id: '52', name: "Cycling", img2: closecircle, val: '' },
        { id: '53', name: "Dancing", img2: closecircle, val: '' },
        { id: '54', name: "Darts", img2: closecircle, val: '' },
        { id: '55', name: "Dating", img2: closecircle, val: '' },
        { id: '56', name: "Decorating", img2: closecircle, val: '' },
        { id: '57', name: "Design", img2: closecircle, val: '' },
        { id: '58', name: "Diving", img2: closecircle, val: '' },
        { id: '59', name: "DIY", img2: closecircle, val: '' },
        { id: '60', name: "Drawing", img2: closecircle, val: '' },
        { id: '61', name: "Entrepreneurship", img2: closecircle, val: '' },
        { id: '62', name: "Environment", img2: closecircle, val: '' },
        { id: '63', name: "Equestrian", img2: closecircle, val: '' },
        { id: '64', name: "Fairs", img2: closecircle, val: '' },
        { id: '65', name: "Fall", img2: closecircle, val: '' },
        { id: '66', name: "Fencing", img2: closecircle, val: '' },
        { id: '67', name: "Festivals", img2: closecircle, val: '' },
        { id: '68', name: "Filmmaking", img2: closecircle, val: '' },
        { id: '69', name: "Fishing", img2: closecircle, val: '' },
        { id: '70', name: "Flag Football", img2: closecircle, val: '' },
        { id: '71', name: "Football", img2: closecircle, val: '' },
        { id: '72', name: "Friends", img2: closecircle, val: '' },
        { id: '73', name: "Games", img2: closecircle, val: '' },
        { id: '74', name: "Gardening", img2: closecircle, val: '' },
        { id: '75', name: "Golf", img2: closecircle, val: '' },
        { id: '76', name: "Gymnastics", img2: closecircle, val: '' },
        { id: '77', name: "Health", img2: closecircle, val: '' },
        { id: '78', name: "Hockey", img2: closecircle, val: '' },
        { id: '79', name: "Ice Skating", img2: closecircle, val: '' },
        { id: '80', name: "Indoor Cycling", img2: closecircle, val: '' },
        { id: '81', name: "Karaoke", img2: closecircle, val: '' },
        { id: '82', name: "Kayaking", img2: closecircle, val: '' },
        { id: '83', name: "Kids Activities", img2: closecircle, val: '' },
        { id: '84', name: "Knitting", img2: closecircle, val: '' },
        { id: '85', name: "Lacrosse", img2: closecircle, val: '' },
        { id: '86', name: "Lake", img2: closecircle, val: '' },
        { id: '87', name: "Languages", img2: closecircle, val: '' },
        { id: '88', name: "Lawn Games", img2: closecircle, val: '' },
        { id: '89', name: "Marathons", img2: closecircle, val: '' },
        { id: '90', name: "Martial Arts", img2: closecircle, val: '' },
        { id: '91', name: "Media", img2: closecircle, val: '' },
        { id: '92', name: "Meditation", img2: closecircle, val: '' },
        { id: '93', name: "Mini Golf", img2: closecircle, val: '' },
        { id: '94', name: "Mountains", img2: closecircle, val: '' },
        { id: '95', name: "Museums", img2: closecircle, val: '' },
        { id: '96', name: "Musical Instruments", img2: closecircle, val: '' },
        { id: '97', name: "Musical Theater", img2: closecircle, val: '' },
        { id: '98', name: "Ocean", img2: closecircle, val: '' },
        { id: '99', name: "Paintball", img2: closecircle, val: '' },
        { id: '100', name: "Painting", img2: closecircle, val: '' },
        { id: '101', name: "Parenting", img2: closecircle, val: '' },
        { id: '102', name: "Party", img2: closecircle, val: '' },
        { id: '103', name: "Performing Arts", img2: closecircle, val: '' },
        { id: '104', name: "Photography", img2: closecircle, val: '' },
        { id: '105', name: "Pickleball", img2: closecircle, val: '' },
        { id: '106', name: "Pilates", img2: closecircle, val: '' },
        { id: '107', name: "Ping Pong", img2: closecircle, val: '' },
        { id: '108', name: "Podcasts", img2: closecircle, val: '' },
        { id: '109', name: "Poker", img2: closecircle, val: '' },
        { id: '110', name: "Pool", img2: closecircle, val: '' },
        { id: '111', name: "Pottery", img2: closecircle, val: '' },
        { id: '112', name: "Puzzles", img2: closecircle, val: '' },
        { id: '113', name: "Racing", img2: closecircle, val: '' },
        { id: '114', name: "Racquetball", img2: closecircle, val: '' },
        { id: '115', name: "Radio", img2: closecircle, val: '' },
        { id: '116', name: "Rapping", img2: closecircle, val: '' },
        { id: '117', name: "Robotics", img2: closecircle, val: '' },
        { id: '118', name: "Rock Climbing", img2: closecircle, val: '' },
        { id: '119', name: "Roller Skating", img2: closecircle, val: '' },
        { id: '120', name: "Rowing", img2: closecircle, val: '' },
        { id: '121', name: "Rugby", img2: closecircle, val: '' },
        { id: '122', name: "Running", img2: closecircle, val: '' },
        { id: '123', name: "Screenwriting", img2: closecircle, val: '' },
        { id: '124', name: "Scuba Diving", img2: closecircle, val: '' },
        { id: '125', name: "Singles", img2: closecircle, val: '' },
        { id: '126', name: "Skateboarding", img2: closecircle, val: '' },
        { id: '127', name: "Skiing", img2: closecircle, val: '' },
        { id: '128', name: "Snorkeling", img2: closecircle, val: '' },
        { id: '129', name: "Snowboarding", img2: closecircle, val: '' },
        { id: '130', name: "Soccer", img2: closecircle, val: '' },
        { id: '131', name: "Social", img2: closecircle, val: '' },
        { id: '132', name: "Songwriting", img2: closecircle, val: '' },
        { id: '133', name: "Spring", img2: closecircle, val: '' },
        { id: '134', name: "Squash", img2: closecircle, val: '' },
        { id: '135', name: "Styling", img2: closecircle, val: '' },
        { id: '136', name: "Summer", img2: closecircle, val: '' },
        { id: '137', name: "Surfing", img2: closecircle, val: '' },
        { id: '138', name: "Sustainability", img2: closecircle, val: '' },
        { id: '139', name: "Swimming", img2: closecircle, val: '' },
        { id: '140', name: "Table Tennis", img2: closecircle, val: '' },
        { id: '141', name: "Tea", img2: closecircle, val: '' },
        { id: '142', name: "Technology", img2: closecircle, val: '' },
        { id: '143', name: "Tennis", img2: closecircle, val: '' },
        { id: '144', name: "Theater", img2: closecircle, val: '' },
        { id: '145', name: "Triathlons", img2: closecircle, val: '' },
        { id: '146', name: "Trivia", img2: closecircle, val: '' },
        { id: '147', name: "Vegan", img2: closecircle, val: '' },
        { id: '148', name: "Vegetarian", img2: closecircle, val: '' },
        { id: '149', name: "Video Games", img2: closecircle, val: '' },
        { id: '150', name: "Visual Arts", img2: closecircle, val: '' },
        { id: '151', name: "Volleyball", img2: closecircle, val: '' },
        { id: '152', name: "Water Sports", img2: closecircle, val: '' },
        { id: '153', name: "Weight Lifting", img2: closecircle, val: '' },
        { id: '154', name: "Wellness", img2: closecircle, val: '' },
        { id: '155', name: "Winter", img2: closecircle, val: '' },
        { id: '156', name: "Woodworking", img2: closecircle, val: '' },
        { id: '157', name: "Wrestling", img2: closecircle, val: '' },
        { id: '158', name: "Writing", img2: closecircle, val: '' },
        { id: '159', name: "Free", img2: closecircle, val: '' },

        { id: '160', name: "Parade", img2: closecircle, val: '' },
        { id: '161', name: "Drinks", img2: closecircle, val: '' },
        { id: '162', name: "Drag", img2: closecircle, val: '' },
        { id: '163', name: "Pride", img2: closecircle, val: '' },
        { id: '164', name: "Seltzer", img2: closecircle, val: '' },
        { id: '165', name: "Cider", img2: closecircle, val: '' },
        { id: '166', name: "Spritz", img2: closecircle, val: '' },
        { id: '167', name: "Shopping", img2: closecircle, val: '' },
        { id: '168', name: "Beauty", img2: closecircle, val: '' },
        { id: '169', name: "Nailcare", img2: closecircle, val: '' },
        { id: '170', name: "Spa", img2: closecircle, val: '' },
        { id: '171', name: "Speaker", img2: closecircle, val: '' },
        { id: '172', name: "Talk", img2: closecircle, val: '' },
        { id: '173', name: "Mindfulness", img2: closecircle, val: '' },
        { id: '174', name: "Charity", img2: closecircle, val: '' },
        { id: '175', name: "Fundraiser", img2: closecircle, val: '' },
        { id: '176', name: "Workout", img2: closecircle, val: '' },
        { id: '177', name: "Roofdeck", img2: closecircle, val: '' },
        { id: '178', name: "Patio", img2: closecircle, val: '' },
        { id: '179', name: "Lounge", img2: closecircle, val: '' },
        { id: '180', name: "Speakeasy", img2: closecircle, val: '' }
    ])

    const [intersetarr1, setinterest1] = useState([
        { id: '2', name: 'Pets', img2: closecircle, val: '1' },
        { id: '5', name: 'Sports', img2: closecircle, val: '1' },
        { id: '6', name: 'Travel', img2: closecircle, val: '1' },
        { id: '11', name: 'Music', img2: closecircle, val: '1' },
        { id: '17', name: 'Painting', img2: closecircle, val: '1' },
        { id: '18', name: 'Outdoors', img2: closecircle, val: '1' }
    ])
    useEffect(() => {
        const val_interest = []
        if (props.data !== undefined) {
            if (props.data.length !== 0) {

                const values = [...props.data]
                for (let i = 0; i < values.length; i++) {

                    val_interest.push({ name: values[i], img2: closecircle })
                }
                setinterest(val_interest)
            }
        }
        console.log(props.data)
    }, [props.data])
    const popularclick = (item, index) => {

        //
        console.log(item)
        const f = [...intersetarr1]
        const sp = f.splice(index, 1)
        setinterest(oldArray => [...oldArray, { name: sp[0].name, img2: closecircle, val: '1' }])
        setinterest1(f)
    }
    const onChangeHandler = (text) => {

        console.log(users)
        let matches = []
        if (text.length > 0) {

            matches = users.filter(user => {

                const regex = new RegExp(`${text}`, "gi")
                console.log(regex)
                return user.name.match(regex)
            })
        }
        console.log("matches", matches)
        setsuggestions(matches)

        settext(text)


    }
    const changeval = (vals, i) => {

        setsuggestions([])
        settext(vals)
        setinterest(oldArray => [...oldArray, { name: vals, img2: closecircle, val: '' }])
        settext("")
        console.log(text)
        const arr = [...suggestions]

        const splice = arr.splice(i, 1)

        setusers(arr)
        setsuggestions([])
        // setsuggestions(prevTags => {
        //     const tags = [...prevTags]
        //     tags.splice(i, 1)
        //     return tags
        //   })
        console.log(suggestions)
    }
    const clickapi = (i, val) => {
        //

        const add = [...intersetarr]
        const splice1 = add.splice(i, 1)
        setinterest(add)
        if (val.name === "Sports" || val.name === "Pets" || val.name === "Travel" || val.name === "Music" || val.name === "Painting" || val.name === "Outdoors") {
            setinterest1(oldArray => [...oldArray, { name: splice1[0].name, img2: closecircle, val: '' }])
        }
        setusers(oldArray => [...oldArray, { name: splice1[0].name, img2: closecircle, val: '1' }])

    }

    useEffect(() => {
        //
        const vall = [...manageinterest]
        const val3 = [...intersetarr1]
        const val2 = [...intersetarr]
        for (let i = vall.length - 1; i >= 0; i--) {

            for (let j = 0; j < val2.length; j++) {
                if (vall[i] !== undefined) {
                    if (vall[i].name === val2[j].name) {


                        vall.splice(i, 1)

                        setusers(vall)
                    }

                } else {


                }
            }
            setusers(vall)

        }
        for (let i = val3.length - 1; i >= 0; i--) {

            for (let j = 0; j < val2.length; j++) {
                if (val3[i] !== undefined) {
                    if (val3[i].name === val2[j].name) {


                        val3.splice(i, 1)

                        setinterest1(val3)

                    }
                } else {


                }
            }
            setinterest1(val3)

        }
        //
        props.handle(intersetarr)

    }, [intersetarr])
    return (

        <>
            <div className='d-flex justify-content-between flex-row mt-2 mb-1 '>
                <span className='loc'>Interests</span>
                {/* <span className="text_ch">2 Selected&nbsp;
                <img src={closecircle} width="18px" height="18px"></img>    
                </span> */}
            </div>
            <div className='d-flex flex-row flex-wrap   mb-1'>
                {intersetarr.map((items, index) => <div key={index} >

                    {/* <button className='btn-btn-green11 me-50 mt-1' style={items.css}> */}
                    <button className='btn-btn-green11 me-50 mt-1' style={{ display: items.name !== '' ? '' : 'none' }}>

                        <span className='btn-fonty'>{items.name}</span>&nbsp;
                        <img src={items.img2} width="20px" height="20px" onClick={() => clickapi(index, items)}></img>
                    </button>
                </div>

                )}
            </div>


            <div className='col-12 mb-1'>
                <div className='d-flex align-items-center border_size mb-1'>
                    <img className='search ms-1' src={search} width="20px" height="20px"></img>

                    <input className='w-100 height-range ms-1 text_search ' placeholder='Search interests...' onChange={e => onChangeHandler(e.target.value)} defaultValue={text}></input>

                </div>
                <div style={{ border: "1px solid #ECECEC", marginTop: "-14px", borderRadius: "9px", display: suggestions.length ? '' : 'none' }}>
                    {suggestions && suggestions.map((sug, i) => {
                        return (

                            <div className='mb-50 mt-50 mx-2 ' style={{ cursor: 'pointer' }} onClick={() => changeval(sug.name, i)} key={i}><span className='textspan1' >{sug.name}</span></div>

                        )
                    })

                    }
                </div>
            </div>
            <div className='mb-1'>
                <span className='loc1'>Popular Interests</span>
            </div>

            <div className='d-flex flex-row mb-1'>
                {intersetarr1.map((items, index) => <div key={index} className="me-50">
                    <div className='d-flex justify-content-start align-items-start'>
                        <button style={items.css} type="button" className='btn-btn-green1 d-flex align-items-center justify-content-center px-1' onClick={() => popularclick(items, index)}>
                            <span className='btn-fonty1 ' >{items.name}</span>
                        </button>
                    </div>
                </div>

                )}
            </div>

        </>
    )
}
export default EditgroupInterest