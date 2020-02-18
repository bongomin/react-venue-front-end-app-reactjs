import React, { Component } from 'react'
import Button from '../utils/Button'
import Zoom from 'react-reveal/Zoom'

export class Pricing extends Component {

   state = {
      prices: [100, 150, 250],
      positions: ['Premium', 'Gold', 'Bronze'],
      description: [
         'ypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
         'ypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
         'ypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      ],
      linkTo: [
         'http://levelup.com/p',
         'http://levelup.com/g',
         'http://levelup.com/b'

      ],
      delay: [500, 0, 500]

   }

   showBoxes = () => (
      this.state.prices.map((box, i) => (
         <Zoom key={i}
            delay={this.state.delay[i]}
         >
            <div className="pricing_item">
               <div className="pricing_inner_wrapper">
                  <div className="pricing_title">
                     <span>${this.state.prices[i]}</span>
                     <span>${this.state.positions[i]}</span>

                  </div>
                  <div className="pricing_description">
                     <span>${this.state.description[i]}</span>
                  </div>
                  <div className="pricing_buttons">
                     <Button
                        text="Purchase"
                        bck="#ffa800"
                        color="#ffffff"
                        link={this.state.linkTo[i]}
                     />

                  </div>

               </div>
            </div>
         </Zoom>


      ))
   )

   render() {
      return (
         <div className="bck_black">
            <div className="center_wrapper pricing_section">
               <h2>Pricing</h2>
               <div className="pricing_wrapper">
                  {this.showBoxes()}
               </div>
            </div>
         </div>
      )
   }
}

export default Pricing
