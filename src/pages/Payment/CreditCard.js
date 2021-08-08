import React from 'react'
import Card from 'react-credit-cards'
import { Link } from 'react-router-dom'

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from './utils'

import 'react-credit-cards/es/styles-compiled.css'
import './style.css'

export default class App extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer })
    }
  }

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    })
  }

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
    }

    this.setState({ [target.name]: target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { issuer } = this.state
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value
        return acc
      }, {})

    this.setState({ formData })
    this.form.reset()
  }

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state

    return (
      <div key="Payment">
        <div className="App-payment">
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form
            className="form__credit-card"
            ref={(c) => (this.form = c)}
            onSubmit={this.handleSubmit}
          >
            <div className="form-group d-flex justify-content-center">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              {/* <small>E.g.: 49..., 51..., 36..., 37...</small> */}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <Link to="/member/order">
              <div className="form-actions d-flex justify-content-center">
                <button className="btn btn-primary btn-block">付款</button>
              </div>
            </Link>
          </form>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

// import React, { useState } from 'react'
// import Cards from 'react-credit-cards'
// import 'react-credit-cards/es/styles-compiled.css'
// import './style.css'

// const CreditCard = () => {
//   const [data, setData] = useState({
//     cvc: '',
//     expiry: '',
//     name: '',
//     number: '',
//   })
//   const handleInputChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     })
//   }

//   return (
//     <div id="PaymentForm">
//       <Cards
//         cvc={data.cvc}
//         expiry={data.expiry}
//         focus={data.focus}
//         name={data.name}
//         number={data.number}
//       />
//       <form action="">
//         <input
//           type="number"
//           name="cvc"
//           placeholder="CVC"
//           onChange={handleInputChange}
//         />
//         <input
//           type="date"
//           name="expiry"
//           placeholder="Expire Date"
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="number"
//           placeholder="Card Number"
//           onChange={handleInputChange}
//         />
//       </form>
//     </div>
//   )
// }

// export default CreditCard
