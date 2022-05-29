import React from 'react'
import './about.css'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (
    <div className='contact'>
      <div className="contact_card">
        <div className="contact_head">
          <h1>About Us</h1>
        </div>
          <div className="contact_desc">
            <p>This a fake store website created only for learning purposes. <br /> This Web App is build up using React.js. <br /> No Tailwind or Bootstrap is used in this WebApp. <br /> Only CSS is usewd to make this website fully responsive. <br /> This Web App will work perfectly in Desktop, Tablets, SmartPhones and other devices. <br /> The code for this Wesite is provided in GitHub. </p>
          </div>
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
