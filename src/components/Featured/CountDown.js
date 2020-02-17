import React, { Component } from 'react';
import Slide from "react-reveal/Slide";

export default class CountDown extends Component {
   state = {
      deadline: 'Dec,16,2020',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
   }

   getTimeUntill(deadline) {
      const time = Date.parse(deadline) - Date.parse(new Date());
      if (time < 0) {
         console.log("Date Passed");
      } else {
         const seconds = Math.floor((time / 1000) % 60);
         const minutes = Math.floor((time / 1000 / 60) % 60);
         const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
         const days = Math.floor((time / (1000 * 60 * 60 * 24)));
         this.setState({
            seconds, days, minutes, hours
         })
      }


   }

   componentDidMount() {
      setInterval(() => this.getTimeUntill(this.state.deadline), 1000)

   }
   render() {
      return (
         <Slide left delay={500}>
            <div className="countdown_wrapper">
               <div className="countdown_top">
                  Event Starting in :
            </div>
               <div className="countdown_bottom">

                  <div className="countdown_item">
                     <div className="countdown_time">
                        {this.state.days}
                        <div className="countdown_tag">
                           Days
                     </div>
                     </div>
                  </div>
                  <div className="countdown_item">
                     <div className="countdown_time">
                        {this.state.hours}
                        <div className="countdown_tag">
                           hrs
                     </div>
                     </div>
                  </div>

                  <div className="countdown_item">
                     <div className="countdown_time">
                        {this.state.minutes}
                        <div className="countdown_tag">
                           mins
                     </div>
                     </div>
                  </div>

                  <div className="countdown_item">
                     <div className="countdown_time">
                        {this.state.seconds}
                        <div className="countdown_tag">
                           secs
                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </Slide>
      )
   }
}
