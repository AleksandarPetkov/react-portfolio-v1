import React from "react";

const ContactMenu = () => {
  return (
    <div className="contact-menu">
      <h2>Contact Aleksandar</h2>
      <ul>
        <li>Email: a.petkovpetkov@gmail.com</li>
        <li>Phone: +359 87 615 7566 </li>
        <li>
        <a 
            href="https://www.linkedin.com/in/aleksandar-petkov-05a4a516a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-link"
          >
          Linkedin Click
          </a>        </li>
      </ul>
    </div>
  );
};

export default ContactMenu;
