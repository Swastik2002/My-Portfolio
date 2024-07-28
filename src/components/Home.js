import React from 'react'
import './Home.css'

export default function Home(props) {
  return (
    <>
        <div id="home" className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <div className="container homeContact">
                <div className='container'>
                    <pre><h3> Hello <img src="./assets/images/Hello.gif" alt="waving hand" style={{width: "40px"}}/>, I'm</h3></pre>
                    <div className="container animated fadeInUp" style={{animationDuration:1000, opacity:"1"}}>
                        <h1 style={{fontSize: "70px"}}><strong>Swastik Garg</strong></h1>
                    </div>
                    <div className='container text-success' style={{fontSize: "24px"}}>
                        <p><b>Front End Developer</b></p>
                    </div>
                    <div className='container homeContactButton'>
                        <a href="/contact"><button type="button" className={`btn btn-success`}>Contact</button></a>
                    </div>
                    <div className='container'>        
                        <a href="https://www.linkedin.com/in/swastik-garg-111099249/" target="_blank" rel="noreferrer"><img src={'./assets/images/linkedin.svg'} className="homeContactIcon" alt="linkedin"/></a>
                        <a href="https://github.com/Swastik2002" target="_blank" rel="noreferrer"><img src={'./assets/images/github.svg'} className="homeContactIcon" alt="github"/></a>
                        <a href="https://www.instagram.com/swastikgargofficial/" target="_blank" rel="noreferrer"><img src={'./assets/images/instagram.svg'} className="homeContactIcon" alt="instagram"/></a>
                        <a href="https://t.me/+919871370232" target="_blank" rel="noreferrer"><img src={'./assets/images/telegram.svg'} className="homeContactIcon" alt="telegram"/></a>
                    </div>
                </div>
            </div>


            <a href="#home"><img src={props.mode==='light'?'./assets/images/Black_Shirt_pic.png':'./assets/images/White_Shirt_pic.png'} alt="A man standing." className="homeImg" height="650px" width="400px"/></a>
        
            
        </div>
    </>
  )
}
