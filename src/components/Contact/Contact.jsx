import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import "./Contact.css"

const Contact = () => {
    const ref=useRef();
    const [success,setSuccess]=useState(false)
    const handleSubmit =e=>{
  e.preventDefault();
  emailjs.sendForm('service_azkoomq', 'template_aq3wbyp', ref.current, 'a0QuK0vzXNEKhwx9B')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div style={{padding:"2rem",display:"flex",}}>
        <div className="leftC">
            <span className='contactClass'>Wanna Contact Me??</span>
            <form ref={ref} className="form-contact" onSubmit={handleSubmit}>
            <input placeholder="Your Name" name="name" required='true' type="text" />
            <input placeholder="Your Email" name="email" required='true' type="email" />
            <textarea placeholder="Write your Message"  name="message" rows={10} required='true' />
           
            <button type="submit" class="btn  formButton">Send</button>
            {success && <span className='ackform'>Your response is recorded</span>}
        </form>
        </div>
        <div></div>

    </div>
  )
}

export default Contact