import React ,{ useState} from 'react';
// import search from '../../assets/images/dashboardimg/searchbar.png'
import checkblankboxes from '../../assets/images/dashboardimg/checkblankbox.png';
import checktickboxes from '../../assets/images/dashboardimg/checktickbox.png';

const FiltergrpSortby = () => {

    const [tags, setTags] = useState([
        {id:"1",naming:'Alphabetical A-Z' ,checking:true},
        {id:"2",naming:'Alphabetical Z-A',checking:true},
       
    ])
    const [tags1, setTags1] = useState([
        {id:"1",naming:'Newest to Oldest' ,checking:true},
        {id:"2",naming:'Oldest to Newest',checking:true},
       
    ])
    const [tags2, setTags2] = useState([
        {id:"1",naming:'Newest to Oldest' ,checking:true},
        {id:"2",naming:'Oldest to Newest',checking:true},
       
    ])
    const [tags3, setTags3] = useState([
        {id:"1",naming:'Newest to Oldest' ,checking:true},
        {id:"2",naming:'Oldest to Newest',checking:true},
       
    ])
    const [tags4, setTags4] = useState([
        {id:"1",naming:'Most to Least' ,checking:true},
        {id:"2",naming:'Least to Most',checking:true},
       
    ])
    const [tags5, setTags5] = useState([
        {id:"1",naming:'Most to Least' ,checking:true},
        {id:"2",naming:'Least to Most',checking:true},
       
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
      const handlechange1 = (index) => {
  
        const newTags1 = [...tags1];
        if (newTags1[index].checking === true)
        {
          newTags1[index].checking = false
        }
        else
        {
          newTags1[index].checking = true
        }
       
        setTags1(newTags1);
       
      };

      const handlechange2 = (index) => {
  
        const newTags2 = [...tags2];
        if (newTags2[index].checking === true)
        {
          newTags2[index].checking = false
        }
        else
        {
          newTags2[index].checking = true
        }
       
        setTags2(newTags2);
       
      };

      const handlechange3 = (index) => {
  
        const newTags3 = [...tags];
        if (newTag3s[index].checking === true)
        {
          newTags3[index].checking = false
        }
        else
        {
          newTags3[index].checking = true
        }
       
        setTags3(newTags3);
       
      };

      const handlechange4 = (index) => {
  
        const newTags4 = [...tags4];
        if (newTags4[index].checking === true)
        {
          newTags4[index].checking = false
        }
        else
        {
          newTags4[index].checking = true
        }
       
        setTags4(newTags4);
       
      };

      const handlechange5 = (index) => {
  
        const newTags5 = [...tags5];
        if (newTags5[index].checking === true)
        {
          newTags5[index].checking = false
        }
        else
        {
          newTags5[index].checking = true
        }
       
        setTags5(newTags5);
       
      };

    return (
        <>
       
          <div className='col-12 mt-2 mb-1'>
                <span className='font-groups11'>Sort By</span>
            </div>
            <div className='mb-2'>
                <span className='font-groups'>Group Name</span>
                </div>
                <form className="row">
        {tags.map((items, index) => <div key={index} className="col-6">
           
           
            <div className='mb-2 d-flex align-items-center' >
     
     <img onClick={() => {handlechange(index) }} src={items.checking ?checkblankboxes:checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
       <span style={items.css} className='fonting-style11 col-9'>{items.naming} </span><br></br>
       
       
       </div>
      
    
        
  </div> )}
          </form>
            <hr style={{color:"#CCD8DB"}}></hr>
            <div className='mb-2'>
                <span className='font-groups'>Group Creation Date</span>
            </div>
            <form className="row">
        {tags1.map((items, index) => <div key={index} className="col-6">
           
           
            <div className='mb-2 d-flex align-items-center' >
     
     <img onClick={() => {handlechange1(index) }} src={items.checking ?checkblankboxes:checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
       <span style={items.css} className='fonting-style11 col-9'>{items.naming} </span><br></br>
       
       
       </div>
      
    
        
  </div> )}
          </form>
            <hr style={{color:"#CCD8DB"}}></hr>
            <div className='mb-2'>
                <span className='font-groups'>Group Post Date</span>
            </div>
            <form className="row">
        {tags2.map((items, index) => <div key={index} className="col-6">
           
           
            <div className='mb-2 d-flex align-items-center' >
     
     <img onClick={() => {handlechange2(index) }} src={items.checking ?checkblankboxes:checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
       <span style={items.css} className='fonting-style11 col-9'>{items.naming} </span><br></br>
       
       
       </div>
      
    
        
  </div> )}
          </form>
            <hr style={{color:"#CCD8DB"}}></hr>
            <div className='mb-2'>
                <span className='font-groups'>Last Group Event Date</span>
            </div>
            <form className="row">
        {tags3.map((items, index) => <div key={index} className="col-6">
           
           
            <div className='mb-2 d-flex align-items-center' >
     
     <img onClick={() => {handlechange3(index) }} src={items.checking ?checkblankboxes:checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
       <span style={items.css} className='fonting-style11 col-9'>{items.naming} </span><br></br>
       
       
       </div>
      
    
        
  </div> )}
          </form>
            <hr style={{color:"#CCD8DB"}}></hr>
            <div className='mb-2'>
                <span className='font-groups'>Number of Posts</span>
            </div>
            <form className="row">
        {tags4.map((items, index) => <div key={index} className="col-6">
           
           
            <div className='mb-2 d-flex align-items-center' >
     
     <img onClick={() => {handlechange4(index) }} src={items.checking ?checkblankboxes:checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
       <span style={items.css} className='fonting-style11 col-9'>{items.naming} </span><br></br>
       
       
       </div>
      
    
        
  </div> )}
          </form>
            <hr style={{color:"#CCD8DB"}}></hr>
            <div className='mb-2'>
                <span className='font-groups'>Number of Group Members</span>
            </div>
            <form className="row">
        {tags5.map((items, index) => <div key={index} className="col-6">
           
           
            <div className='mb-2 d-flex align-items-center' >
     
     <img onClick={() => {handlechange5(index) }} src={items.checking ?checkblankboxes:checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
     
       <span style={items.css} className='fonting-style11 col-9'>{items.naming} </span><br></br>
       
       
       </div>
      
    
        
  </div> )}
          </form>
           
        </>
    )
}
export default FiltergrpSortby