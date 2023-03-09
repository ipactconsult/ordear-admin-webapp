import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { TextField } from '@mui/material';
import axios from 'axios';
export default class CreditCard extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    email:''
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
   OnRegisterCard = (e) => {
   e.preventDefault()
   //console.log(this.state)
   let creditcard={
    number: this.state.number,
    exp_month: parseInt(this.state.expiry.substring(0,2)),
    exp_year: parseInt(this.state.expiry.substring(2,4)),
    cvc: this.state.cvc,
   }
   console.log(creditcard)
   axios.post('/customer_payments/register_credit_card/'+this.props.name+'/'+this.props.email,creditcard)
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
    console.log(this.state)
  }
  
  render() {
    return (
      <div>
       
        <br></br>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        /><br></br><br></br>
        
        <form style={{"marginLeft":"520px"}}>
        	<TextField
            type="tel"
            variant='outlined'
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> <br></br><br></br>
          	<TextField
            type="tel"
            variant='outlined'
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
           <br></br><br></br>
          	<TextField
            type="tel"
            variant='outlined'
            name="expiry"
            placeholder="exp"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
           <br></br><br></br>
          	<TextField
            type="tel"
            variant='outlined'
            name="name"
            placeholder="name"
            value={this.props.name}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br></br><br></br>
          	<TextField
            type="tel"
            variant='outlined'
            name="email"
            value={this.props.email}
            placeholder="email"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br></br><br></br>
          <button className='btn btn-dark' onClick={this.OnRegisterCard}>Register Credit Card</button>
        </form>
      </div>
    );
  }
}