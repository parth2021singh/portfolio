import React, { useContext } from 'react'
import './Contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef } from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react'
import { ThemeContext } from '../../context'

const Contact = () => {
    const[done,setDone] = useState(false)

    const formRef = useRef()

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault()

        emailjs.sendForm(
            'YOUR_SERVICE_ID',
             'YOUR_TEMPLATE_ID', 
             formRef.current, 
             'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
        <h1 className="c-title">Let's discuss your project</h1>
        <div className="c-info">
            <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +91-8887777689
            </div>
            <div className="c-info-item">
                <img src={Email} alt="" className="c-icon" />
                parth@test.com
            </div>
            <div className="c-info-item">
                <img src={Address} alt="" className="c-icon" />
                Gopalganj,Bihar,India
            </div>
        </div>
        </div>


        <div className="c-right">
       <p className="c-desc">
        <b>Whats's your story?</b>Mollit aute officia Lorem ullamco incididunt irure mollit. Do excepteur et in nulla laboris consectetur. Excepteur qui ea.
       </p>
       <form ref={formRef} onSubmit={handleSubmit}>
        <input style={{backgroundColor:darkMode && "gray"}} type="text" placeholder='Name' name="user_name"/>
        <input style={{backgroundColor:darkMode && "gray"}}  type="text" placeholder='Subject' name="user_subject"/>
        <input style={{backgroundColor:darkMode && "gray"}}  type="text" placeholder='Email' name="user_email"/>
        <textarea style={{backgroundColor:darkMode && "gray"}}  rows={5} placeholder="Message" name="message"/>
        <button>Submit</button>
        {done && "Thank you..."}
        
       </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
