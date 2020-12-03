import React, { Component } from 'react';
import QRCode from 'react-qr-code';

 
class ticketBooking extends Component {
 
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
 
  
  render() {
    return (
      <div>
         <QRCode value="Hello, World!" />
          <div>Thank you, Your Ticked is booked</div>

      </div>
    )
  }
}



export default ticketBooking;