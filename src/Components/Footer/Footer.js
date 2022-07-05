import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Other Services from IITG</p>
          </div>
          <div className="list">
            <ul>
              <li>OneStop IITG</li>
              <li>LBC Library</li>
              <li>Khoka Rentals</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>OLX IITG</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>© 2020 OLX IITG</p>
      </div>
    </div>
  );
}

export default Footer;
