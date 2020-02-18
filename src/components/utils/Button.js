import React from 'react';
import Button from '@material-ui/core/Button'
import ticketIcon from '../../resources/images/icons/ticket.png'


const MyButton = (props) => {
   return (
      <Button
         href={props.link}
         variant="contained"
         size="small"
         style={{
            backgroundColor: props.bck,
            color: props.color
         }}

      >
         <img src={ticketIcon} className="iconImage" alt="Icon_button" />
         {props.text}
      </Button>

   );

}
export default MyButton;