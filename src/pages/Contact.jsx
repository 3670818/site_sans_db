import React from 'react'
import ContactForm from "../component/ContactForm";
import './contact_style.scss';

function Contact() {
  return (
    <div id="contact" >
    {/* <h1 className='titre'>Contact</h1> */}
    <p className='titre'>Vous pouvez me contacter en remplissant le formulaire ci-dessous</p>
      
    <ContactForm />
    <div className="droit">   
    <div className="fin">
          <div className="icon-contact">
      <i class="fa-solid fa-envelope"></i>
        <p > email: Ibrahimallae1@gmail.com</p>
      </div>
      <div className="icon-contact">
        <i class="fa-solid fa-phone"></i>
        <p> Téléphone: 06 51 78 25 43</p>
  
      </div>
    </div>
    </div>
   
    </div>
  )
}

export default Contact