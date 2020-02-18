import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// importing third barty library for scrolling effect
import { scroller } from 'react-scroll'




const SideDrawer = (props) => {
   const scrollToElement = (element) => {
      scroller.scrollTo(element, {
         duration: 1500,
         delay: 500,
         smooth: true,
         offset: -150
      })
      props.onClose(false)

   }
   return (
      <Drawer
         anchor="right"
         open={props.open}
         onClose={() => props.onClose(false)}
      >
         <List component="nav">
            <ListItem button onClick={() => scrollToElement("eventStart")}>
               Events starts in
            </ListItem>

            <ListItem button onClick={() => scrollToElement("venueInfo")}>
               Venue Info
            </ListItem>
            <ListItem button onClick={() => scrollToElement("pricing")}>
               Pricing
            </ListItem>

            <ListItem button onClick={() => scrollToElement("highLights")}>
               High Lights
            </ListItem>
            <ListItem button onClick={() => scrollToElement("location")}>
               Location
            </ListItem>
         </List>
      </Drawer>
   );
};

export default SideDrawer;
