import React from 'react'
// import label from "./images/symbol2.png"
import label from "../images/smallimg.webp"

 const Card = ({dataArrayInReact}) => {
  console.log()
  return (
    <>
    <div className="parent-div">

  {  dataArrayInReact?.map((ele)=>(
    <div className="child-div">
    <div className="backgroundimage">
    <div className="onbackicon white"> 
 <i  className="fa fa-image marg " style={{fontSize: "24px"}}><span className="marg">{ele.galleryData}</span>  </i>
 <i className="fa fa-youtube-play youtube margin marg" style={{fontSize: "24px"}} > <span className="marg">{ele.view}</span>   </i>
 <span className="" style={{marginLeft:"7rem"}}>
 <i className="fa fa-university marg " style={{fontSize:"24px"}}> </i>

 <i className="fa fa-star-o marg" style={{fontSize:"1rem"}}>COLLEGEDUNIA RATINGS</i>
 <h4 className="fourheading">{ele.collegeDuniaRatings}/10</h4>
 </span>

<div>

</div>


 </div>


   
 
 
 
 </div>
 <div className="label">
 <img src={label} alt="this is label image"></img>
 </div>
 <div className='nit white'>  {ele.nameOfCollge}

 </div>
 <div className="location grey ">
 <i className="fa fa-map-marker" style={{fontSize:"36px"}}  ></i>
 <span  >{ele.location}</span>



</div>
<div className="fee-div"> 
<div>
<i className="fa fa-rupee fifty" style={{fontSize:"30px"}}> <span className="margininspan">{ele.fee}</span></i> 
<h3 className="hthree">BE/B.tech- FIRST YEAR </h3>
<h3 className="feee">FEES</h3>
</div>
<div className="verticalline"></div>
<div>
<i className=""  style={{fontSize:"30px"}}> <span className="margininspan">{ele.userRatings}/10</span></i> 
<h3 className="hthree">BASED ON 415 USER </h3>
<h3 className="feee">REVIEWS</h3>
</div>

</div>
<div className="horizontalline">

</div>
<div className="rankdiv"> 
<div > RANKED {ele.rankNirf} OUT OFF 300
<div className='margleftfiverem'> NIRF</div>
</div>
<div>
RANKED {ele.weeklyRank} OUT OF 216 
<div className='margleftfourrem'>THE WEEK</div>
</div>

</div>
<div className="backgroundgrey">
ADMISSION 2022
<span className="spandiv" >
REVIEWS
</span>
<span className="spandivtwo" >
COURSES & FEES
</span>
</div>

<div className='btn' >
<div className='sub-btn bgorange white'>
APPLYNOW
</div>
<div className='sub-btn white'>
BROCHURE



</div>

</div>



       
 

</div>

  ))

}
 
    
    
    </div>
    </>
  )
}

export default Card;