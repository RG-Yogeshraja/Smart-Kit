import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
// import '../@core/scss/base/adminDashboard/adminusersdetail.css'
import '../@core/scss/base/adminDashboard/manageinterestt.scss'
import closecircle from '../assets/images/dashboardimg/close-circle.png'
import plusicons from '../assets/images/dashboardimg/plusicon.png'
import search from '../assets/images/dashboardimg/searchbar.png'


function ManageInterestTags(props) {
  // console.log(props.data)
  const [pop, setpop] = useState(false)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const [tags, setTags] = useState([])
  useEffect(() => {
  if (props.val !== '') {
  setTags(['Books', 'Boating'])
  // setTags(['Books', props.val])
  } else {
    setTags(['Books'])
  }
},[])
  const [tagInput, setTagInput] = useState('')
  const [showAddInput, setShowAddInput] = useState(false)

  const [searchValue, setSearchValue] = useState("")
  const handleAdd = () => {
    if (tagInput) {
      setTags(prevTags => [...prevTags, tagInput])
    }
    setTagInput('')
    setShowAddInput(false)
  }

  const handleRemove = index => {
    setTags(prevTags => {
      const tags = [...prevTags]
      tags.splice(index, 1)
      return tags
    })
  }


  const handleRemove1 = index => {
    setInterests(prevTags => {
      const manageinterest = [...prevTags]
      tags.manageinterest(index, 1)
      return manageinterest
    })
  }


  const [manageinterest, setInterests] = useState([
    { id: '1', name: "Fitness", image: closecircle },
    { id: '2', name: "Music", image: closecircle },
    { id: '3', name: "Movies", image: closecircle },
    { id: '4', name: "Food", image: closecircle },
    { id: '5', name: "Comedy", image: closecircle },
    { id: '7', name: "Sports", image: closecircle },
    { id: '8', name: "Nightlife", image: closecircle },
    { id: '9', name: "Cooking", image: closecircle },
    { id: '10', name: "Restaurants", image: closecircle },
    { id: '11', name: "Wine", image: closecircle },
    { id: '12', name: "Travel", image: closecircle },
    { id: '13', name: "Dogs", image: closecircle },
    { id: '14', name: "TV", image: closecircle },
    { id: '15', name: "Hiking", image: closecircle },
    { id: '16', name: "Art", image: closecircle },
    { id: '17', name: "Pets", image: closecircle },
    { id: '18', name: "Outdoors", image: closecircle },
    { id: '19', name: "Fashion", image: closecircle },
    { id: '20', name: "Volunteering", image: closecircle },
    { id: '21', name: "Cocktails", image: closecircle },
    { id: '22', name: "Yoga", image: closecircle },
    { id: '23', name: "Beer", image: closecircle },

    { id: '24', name: "Board Games", image: closecircle },
    { id: '25', name: "Reading", image: closecircle }
    
    
  ])

  return (
    <>
      <button style={{ cursor: props.data === true ? 'pointer' : 'not-allowed' }} onClick={() => (props.data === true ? setShow(false) : setShow(false))} className='btn_green d-flex flex-row justify-content-center align-items-center'>
        <span className='text_color text-center'>
          <span >Manage Interest Tags
          </span></span></button>

      {/* <Button onClick={() => setShow(true)}>Manage Interest Tags</Button> */}

      <Modal

        show={show}
        onHide={() => setShow(false)}
      // aria-labelledby="example-modal-sizes-title"
      >
        <Modal.Body >
          {/* <div className='d-flex justify-content-between align-items-between'> */}
          <div className='p-1 my-1'>
            <div className=''>
              <div className='mb-1'>
                <span className='font-stylingg mb-4'>Manage Interest Tags</span>
              </div>
              <div className=''>
                <span className='font-stylingg1'>Recommended by Default</span>

              </div>
              <div className='col-12 mt-1 mb-1 '>
                            <div className='d-flex align-items-center border_size me-2'>
                                <img className='search ms-1' src={search} width="20px" height="20px"></img>
                                <input className='w-100 height-range ms-1 text_search ' placeholder='Search '   value={searchValue}

onChange={e => setSearchValue(e.target.value)}></input>
                            </div>
                        </div>

            </div>


            {/* <div className=''> */}
            <div className='mt-1 d-flex flex-row flex-wrap justify-content-between'>
              {manageinterest.filter(items => items.name.match(new RegExp(searchValue, "i"))).map((items, index) => <div key={index} className='' style={{ padding: "4px" }}>
                <div className='d-flex flex-row'>
                  <button className='btn_greens d-flex flex-row justify-content-center align-items-center'>
                    <span className='text_colors text-center'>{items.name}</span>&nbsp;&nbsp;
                    <img src={items.image} width="20px" height="20px" onClick={() => handleRemove1(tagIndex)}></img>
                  </button>&nbsp;
                </div>
              </div>)}

              {/* </div> */}
            </div>


            <div className='mt-1'>
              <span className='font-stylingg1'>Custom</span>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-start mx-auto mt-1'>


              {tags.map((tag, tagIndex) => (
                <div className="d-flex flex-row" key={tagIndex} style={{ padding: "4px" }}>
                  <button className='btn_greens d-flex flex-row justify-content-center align-items-center'>

                    <span className='text_colors text-center'> {tag}{' '}</span>&nbsp;&nbsp;
                    {/* <span className='text_colors text-center'>Books</span>&nbsp;&nbsp; */}
                    <img src={closecircle} width="20px" height="20px" onClick={() => handleRemove(tagIndex)}></img>

                  </button>&nbsp;
                </div>))}


            </div>
            <div className='borderrs mt-1'>
              <div className='d-flex justify-content-center'>
                <input
                  className="noningoption mb-1"
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  onKeyPress={e => {
                    if (e.key === 'Enter') {
                      handleAdd()
                    }
                  }}

                  autoFocus
                >

                </input>
                {/* <input className='borderss'></input> */}
                <div className='d-flex align-items-end flex-column p-0 mt-1 px-1 positionss'>
                  <img src={plusicons} width="27px" height="27px" onClick={handleAdd} className='positionss'></img>
                </div>

                {/* <div className='d-flex align-items-center justify-content-center bordersss'></div> */}
              </div>
              &nbsp;&nbsp;&nbsp;<span className='mb-1'>Books</span><br></br>
              &nbsp;&nbsp;&nbsp;<span className='mb-1'>Boating</span><br></br>
              &nbsp;&nbsp;&nbsp;<span>Bowling</span>
            </div>


            <div className='col-12 d-flex justify-content-between mt-3 mb-2'>
              <button className='btnstyle1' onClick={handleClose}>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className='btnstyledetail1'>Save</button>
            </div>
          </div>
          {/* </div> */}

        </Modal.Body>

      </Modal>
    </>
  )
}
export default ManageInterestTags