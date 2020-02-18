import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

export class Discounts extends Component {
   state = {
      discountStart: 0,
      discountend: 30,

   }

   porcentage = () => {
      if (this.state.discountStart < this.state.discountend) {
         this.setState({
            discountStart: this.state.discountStart + 1
         })
      }

   }

   componentDidUpdate() {
      setTimeout(() => {
         this.porcentage()
      }, 30)
   }


   render() {
      return (
         <div className="center_wrapper">
            <div className="discount_wrapper">
               <Fade
                  onReveal={() => this.porcentage()}
               >
                  <div className="discount_porcentage">
                     <span>{this.state.discountStart}%</span>
                     <span>Off</span>
                  </div>
               </Fade>
               <Slide right>
                  <div className="discount_description">
                     <h3>Purchase Tickets before end of week</h3>
                     <p>here goes the descripiotions all..</p>
                     <div>
                        button
                  </div>
                  </div>

               </Slide>


            </div>

         </div>
      )
   }
}

export default Discounts
