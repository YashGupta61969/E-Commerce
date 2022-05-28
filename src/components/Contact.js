import React, { useRef, useState } from 'react'
import './contact.css'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {

  const ref = useRef();
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[message, setMessage] = useState('')
  const[data, setData] = useState({})

  const handleChange = (e)=>{
    switch(e.target.id){
      case 'name':
        return setName(e.target.value);

        case 'email':
          return setEmail(e.target.value);
          
          case 'message':
            return setMessage(e.target.value);

            default:
              return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
        
    setData({name,email,message})
  
  }


  return (
    <div className='contact'>
      <div className="contact_card">
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_head">
            <h1>Contact Us</h1>
          </div>
          <div className="form_data">
            <label htmlFor="name">Name</label>
            <input value={name} onChange={handleChange} ref={ref} type="text" id='name' placeholder='Eg. Elon Musk' />
          </div>
          <div className="form_data">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={handleChange} ref={ref} type="email" id='email' placeholder='Eg. example@gmail.com' />
          </div>
          <div className="form_message">
            <label htmlFor="message">Message</label>
            <textarea id="message" value={message} onChange={handleChange} cols="30" rows="10" placeholder='Write a message you want to send'></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </div>

      <div className="contact_social_links">
        <div onClick={() => {
          navigator.clipboard.writeText("yashgupta61969@gmail.com");
          alert("Email copied to Clipboard")
        }} className="social_row">
          <strong>Email</strong> <EmailIcon style={{ fontSize: '4rem' }} />
        </div>
        <a href='https://github.com/YashGupta61969' target='_blank' rel="noopener noreferrer" className="social_row">
          <strong>GitHub</strong> <GitHubIcon style={{ fontSize: '4rem' }} />
        </a>
        <a href='https://www.linkedin.com/in/yash-gupta-70540123a/' target='_blank' rel="noopener noreferrer" className="social_row" >
          <strong>Linkedin</strong> <LinkedInIcon style={{ fontSize: '4rem' }} />
        </a>
        <div className="social_row" onClick={() => { navigator.clipboard.writeText(7869974637); alert("Number copied to Clipboard") }}>
          <strong>Call</strong> <LocalPhoneIcon style={{ fontSize: '4rem' }} />
        </div>
        <a href='https://www.instagram.com/yash_gupta_99/' target='_blank' rel="noopener noreferrer" className="social_row">
          <strong>Instagram</strong> <InstagramIcon style={{ fontSize: '4rem' }} />
        </a>
      </div>
    </div>
  )
}

export default Contact
