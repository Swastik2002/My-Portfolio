import React from 'react'
import './Contact.css'

export default function Contact(props) {
  return (
    <>
        <div id='contact' className={`bg-${props.mode}`}>
            <div className='container '>        
                <a href="https://www.linkedin.com/in/swastik-garg-111099249/" target="_blank" rel="noreferrer"><img src={'./assets/images/linkedin.svg'} className="contactIcon" alt="linkedin"/></a>
                <a href="https://github.com/Swastik2002" target="_blank" rel="noreferrer"><img src={'./assets/images/github.svg'} className="contactIcon" alt="github"/></a>
                <a href="https://www.instagram.com/swastikgargofficial/" target="_blank" rel="noreferrer"><img src={'./assets/images/instagram.svg'} className="contactIcon" alt="instagram"/></a>
                <a href="https://t.me/+919871370232" target="_blank" rel="noreferrer"><img src={'./assets/images/telegram.svg'} className="contactIcon" alt="telegram"/></a>
            </div>
        </div>
    </>
  )
}
