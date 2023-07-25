import React from 'react'
import "./HeroSection.css"
export default function HeroSection() {
  return (
  <main className='hero-section'>
<div className="form-area">
    <div className="btns">
        <button className='btn' id='support-chat'>VIA SUPPORT CHAT</button>
        <button  className='btn' id='call-chat'> VIA Call</button>
 
    </div>
<div className="form">
    <button  className='btn'id='email-form' >VIA EMAIL FORM</button>
    <br></br>
<input type="text" placeholder='Name'></input><br></br>
<input type="text" placeholder='E-Mail'></input><br></br>
<input type="text" placeholder='Text'></input><br></br>



</div>



</div>
<div className="image-area">
<a href="https://www.freepnglogos.com/pics/iphone" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/iphone-png/iphone-pictures-transparent-png-pictures-icons-21.png" width="200" alt="iphone pictures transparent png pictures icons"className='iphone-img' /></a>
</div>
  </main>
  )
}
