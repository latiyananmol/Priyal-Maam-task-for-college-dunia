import React, { useEffect, useState } from 'react';
import Card from "./components/Card";
import ReactSearchBox from "react-search-box";
import { dataArray } from './jsonfolderdata/jsondatafile';

const App = () => {
  const [collegeName,setCollegeName]=useState("");
  console.log("collgename",collegeName);
  const [dataArrayInReact,setDataArray]=useState([...dataArray]);
  const sortByCollegeDunia=()=>{
    setDataArray(dataArrayInReact.sort((a,b)=> a.collegeDuniaRatings> b.collegeDuniaRatings?  1:-1).map((ele)=> ele)
    );
  }
const sortByRatings=()=>{
  setDataArray(dataArrayInReact.sort((a,b)=> a.userRatings> b.userRatings?  1:-1).map((ele)=> ele)
  );
}

const sortByFee=()=>{

  setDataArray(dataArrayInReact.sort((a,b)=> a.fee> b.fee ?  1:-1).map((ele)=> ele)
  );
  
 
}
  const handleOnChange=(e)=>{
    setCollegeName(e.target.value)
  }
  
  useEffect(()=>{
    console.log("this is useeffect");
    setDataArray(dataArray.filter((ele)=>{
      if(ele?.nameOfCollge?.toLowerCase().includes(collegeName?.toLowerCase())) return true;
      else return false;

    } ))

  },[collegeName]);

  return (
    <>
<div className="parentdivdashboard">
<h2 onClick={()=>sortByFee()}>Click here to  Sort By Fees</h2>
<h2 onClick={()=>sortByRatings()} > Click here to Sort By Ratings</h2>
<h2  onClick={()=>sortByCollegeDunia()}>Click here to Sort by collegedunia Ratings</h2>


</div>
<div className="searchbar">
<span className="collegesearch"><h1>Search By College Name  </h1></span>
<input className='inputtag'
placeholder="Enter college Name to Search"
value={collegeName}
onChange={handleOnChange}


></input>
</div>
 <Card dataArrayInReact={dataArrayInReact}></Card>
 
    </>
  )
}

export default App