import React ,{ useState} from 'react';
// import search from '../../assets/images/dashboardimg/searchbar.png'
import checkblankboxes from '../../assets/images/dashboardimg/checkblankbox.png';
import checktickboxes from '../../assets/images/dashboardimg/checktickbox.png';

const FilterEventsSpots = () => {

    const [tags, setTags] = useState([
        {id:"1",naming:'Available' ,checking:true},
        {id:"2",naming:'Filled',checking:true},
       
    ])
   
   
    const handlechange = (index) => {
  
        const newTags = [...tags];
        if (newTags[index].checking === true)
        {
          newTags[index].checking = false
        }
        else
        {
          newTags[index].checking = true
        }
       
        setTags(newTags);
       
      };
      
    
    return (
        <>
       
         
            <div className='mb-2'>
                <span className='font-events'>Number of Spots</span>
                </div>
                <form className="row">
        {tags.map((items, index) => <div key={index} className="col-6">
           
           
            <div className='mb-2 d-flex align-items-center' >
     
     <img onClick={() => {handlechange(index) }} src={items.checking ?checkblankboxes:checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
       <span style={items.css} className='fonting-style13 col-9'>{items.naming} </span><br></br>
       
       
       </div>
      
    
        
  </div> )}
          </form>
           
            
        </>
    )
}
export default FilterEventsSpots