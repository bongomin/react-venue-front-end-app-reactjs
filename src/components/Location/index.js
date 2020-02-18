import React from 'react'


const Location = () => {
   return (
      <div className="location_wrapper">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.744928204715!2d32.629918214424585!3d0.34752536407320994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db987217a1c5b%3A0x5d51c8f289ef68da!2sKyambogo%20University!5e0!3m2!1sen!2sug!4v1582032720328!5m2!1sen!2sug"
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen
         ></iframe>
         <div className="location_tag">
            <div>Location</div>
         </div>
      </div>

   )
}

export default Location