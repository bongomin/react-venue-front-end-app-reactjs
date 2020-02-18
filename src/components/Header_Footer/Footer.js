import React from 'react';
import Fade from 'react-reveal/Fade'

const Footer = () => {
   return (
      <footer className="back_red">
         <Fade delay={500}>
            <div>
               <div className=" font_righteous footer_logo_venue">
                  The Venue
            </div>
               <div className="footer_copyright">
                  The venue by Bongomin Daniel <small>Software Engneer | Learning Dollars</small>
               </div>
            </div>


         </Fade>
      </footer>
   )
}

export default Footer;