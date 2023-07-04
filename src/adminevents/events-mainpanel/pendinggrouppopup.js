// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// // import '../@core/scss/base/adminDashboard/controlusersettings.scss';
// import '../../@core/scss/base/adminDashboard/groupsmenu/pendinganddeltedtab.scss';
// import deletedpending from '../../assets/images/dashboardimg/delete-pending.png'
// import documenttext from '../../assets/images/dashboardimg/document-text.png'



// function PendingGroupPopup() {

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false)




//   return (
//     <>
//       <img src={deletedpending} onClick={() => setShow(true)} width="32px" height="32px"></img>&nbsp;&nbsp;

//       {/* <Button onClick={() => setShow(true)}>Manage Interest Tags</Button> */}
//       <div className='area-top'>
//         <Modal className=''
//           show={show} centered
//           onHide={() => setShow(false)}
//           backdrop="static"
//           keyboard={false}

//         >

//           <Modal.Body >

//             <div className='p-2 my-1'>
//               <div className='px-0'>
//                 <form>
//                   <div className='d-flex align-items-center justify-content-center mb-2'>
//                     <span className='font-lovers'>Reason for declining Dog Lovers?</span>
//                   </div>

//                   <div className="form-group">
//                     <img src={documenttext} height="20px" width="20px"></img> <label className='font-document'>Description</label>

//                     {/* <textarea
              
//                style={{height:"171px",resize:'none'}}
//                 placeholder='Type a description....'
               
//                 className={`formControl`}

//               ></textarea> */}
//                     <textarea name="w3review" className='formControl mt-50' style={{ minHeight: "171px", resize: 'none' }} rows="200" cols="200" placeholder='Type a description...'>

//                     </textarea>
//                   </div>


//                   <div className='col-12 d-flex justify-content-between mt-3 mb-2'>
//                     <button className='btnstyle21' onClick={handleClose}>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <button className='btnstyledetail21'>Submit</button>
//                   </div>






//                 </form>
//               </div>
//             </div>

//           </Modal.Body>

//         </Modal>
//       </div>
//     </>
//   )
// }
// export default PendingGroupPopup