import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  // For Emailing API from Contact
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yvdzbzb','template_7g24y44', form.current, 'P2T4UnYD99Wt4QO6t')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>manishrai0021@gmail.com</h5>
            <a href="mailto:manishrai0021@gmail.com" rel="noreferrer" target='_blank'>Send a Massage</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>Manish Kumar Rai</h5>
            <a href="https://m.me/100009820152155" rel="noreferrer" target='_blank'>Send a Massage</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option_icon'/>
            <h4>WhatsApp</h4>
            {/* <h5>9827027338</h5> */}
            <a href="https://api.whatsapp.com/send?phone+=9827027338" rel="noreferrer" target='_blank'>Send a Massage</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
        {/* <form> */}
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="massage"rows="7" placeholder='Your Massage' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Massage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact