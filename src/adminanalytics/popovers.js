import React, {useState} from "react"
// import '../@core/scss/base/adminDashboard/popoverss.css'
import sort from '../assets/images/dashboardimg/SortBy.png'
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import Exportcsv from './Exportcsv'
function Dialogs1  () {
    const [popoverOpen, setPopoverOpen] = useState(false)
    const popoversss = () =>{
        setPopoverOpen(!popoverOpen)
    }
return (
    <React.Fragment>
<button class="exportbutton "  style={{width:"22%",marginTop:"-13px", pointerEvents:'none'}} id="pop"><span class="textanalytics" >Export As</span></button>
<UncontrolledPopover isOpen={popoverOpen} toggle={() => setPopoverOpen(!popoverOpen)} class="popover " placement='bottom' target='pop' style={{marginLeft:"-1px !important"}}>
<div >
        <div className="card d-flex flex-column" style={{
border: "2px solid #95E1BF", 
borderRadius: "15px",
 width: "94%",
marginLeft: "40px"}}>
            <div class="col-12 d-flex justify-content-center align-items-center">
           <Exportcsv handle={popoversss}></Exportcsv>
          
           </div>
           <div class="col-12 d-flex justify-content-center align-items-center">
           <button class="excelbutton">Excel</button></div>
           <div class="col-12 d-flex justify-content-center align-items-center">
           <button class="csvbutton">PDF</button></div>
            </div>
            </div>
      </UncontrolledPopover>
      </React.Fragment>
)
}
export default Dialogs1
