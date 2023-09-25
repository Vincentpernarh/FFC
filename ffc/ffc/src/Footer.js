import React, { useState } from "react";
import ContactForm from "./ContactForm";
import face from "/workspaces/FFC/ffc/ffc/src/images/facebook.png";
import insta from "/workspaces/FFC/ffc/ffc/src/images/insta.png";
import whats from "/workspaces/FFC/ffc/ffc/src/images/whats.png";

const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactButtonClick = () => {
    // Toggle the value of showContactForm
    setShowContactForm((prevState) => !prevState);
  };

  return (
    <footer>
      <div className="foot-contact">
        <h1>Contatos</h1>
          <div className="email">
            <h4>Email : FFC_escolar.ffc</h4> 
            <h4>Num 1 :3197530054</h4>
            <h4>Num 2 :0242237591</h4>
          </div>
        
      </div>

      <div className="entre-em-contato">
        <h1><button className="Contact_button" onClick={handleContactButtonClick}>
          {showContactForm ? "Fechar" : "Entre em contato?"}
        </button>
        </h1>
        {showContactForm && <ContactForm />}
        
        <p className="copyright">&copy; 2023 Flex Fluency Center</p>
      </div>
      <div className="Redes-sociais">
        <h1 className="rede">Redes sociais</h1>
        <div className="img_name"><img src={whats} alt="image1" /> WhatsApp    
        </div>
        <div className="img_name"> <img src={insta} alt="image1" /> Instagram</div>
        <div className="img_name"><img src={face} alt="image1" /> Facebook</div>
        
       
      </div>

    </footer>
  );
};

export default Footer;
