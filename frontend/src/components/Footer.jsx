import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPrint, FaClipboardList, FaLaptopCode, FaMicrochip, FaLock, FaMobileAlt } from 'react-icons/fa';
import '../assets/CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'black' }}>
      <div className="footer__addr">
        <h1 className="footer__logo" style={{ color: 'white' }}>
          Swift Store
        </h1>

        <h2 style={{ color: 'white' }}>Contact</h2>

        <address style={{ color: 'white' }}>
          5534 Somewhere In. The World 22193-10212<br />

          <a className="footer__btn" href="mailto:example@gmail.com">
            <AiOutlineMail /> Email Us
          </a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title" style={{ color: 'white' }}>
            Media
          </h2>

          <ul className="nav__ul">
            <li>
              <a href="/" style={{ color: 'white' }}>
                <FaPrint /> Print
              </a>
            </li>

            <li>
              <a href="/" style={{ color: 'white' }}>
                <FaClipboardList /> Alternative Ads
              </a>
            </li>
          </ul>
        </li>

        <li className="nav__item nav__item--extra">
          <h2 className="nav__title" style={{ color: 'white' }}>
            Technology
          </h2>

          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="/" style={{ color: 'white' }}>
                <FaMobileAlt /> Hardware Design
              </a>
            </li>

            <li>
              <a href="/" style={{ color: 'white' }}>
                <FaLaptopCode /> Software Design
              </a>
            </li>

            <li>
              <a href="/" style={{ color: 'white' }}>
                <FaMicrochip /> Digital Signage
              </a>
            </li>

            <li>
              <a href="/" style={{ color: 'white' }}>
                <FaClipboardList /> Automation
              </a>
            </li>

            <li>
              <a href="/" style={{ color: 'white' }}>
                <FaLock /> Artificial Intelligence
              </a>
            </li>

            <li>
              <a href="/" style={{ color: 'white' }}>
                <FaMicrochip /> IoT
              </a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title" style={{ color: 'white' }}>
            Legal
          </h2>

          <ul className="nav__ul">
            <li>
              <a href="/" style={{ color: 'white' }}>Privacy Policy</a>
            </li>

            <li>
              <a href="/" style={{ color: 'white' }}>Terms of Use</a>
            </li>

            <li>
              <a href="/" style={{ color: 'white' }}>Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal" style={{ color: 'white' }}>
        <p>&copy; 2023 PROSHOP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
