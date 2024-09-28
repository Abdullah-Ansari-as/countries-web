import React from 'react'
import { NavLink } from 'react-router-dom' 
import footerData from '/src/api/FooterData.json'
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";

function Footer() {

  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  }

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
           {
            footerData.map((curElem, index) => {
              return(
                <div className="footer-contact" key={index} >
                <div className="icon">{footerIcon[curElem.icon]}</div>
                <div className="footer-contact-text">
                  <p>{curElem.title}</p>
                  <p>{curElem.details}</p>
                </div>
              </div>
              )
            })
           }
           
          
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
              </p>
            </div>

            <div className="footer-menu">
              <ul className='footer-ul-li'>

                <li>
                <NavLink to="https://www.linkedin.com/in/abdullah-ansari-810781304/" target="_blank">
                  <FaLinkedinIn />
                </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/abdullah_ansari_1775/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://www.facebook.com/profile.php?id=100062463248493"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://github.com/Abdullah-Ansari-as">
                    <FaGithub />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer