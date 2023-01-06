import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    return (
      <div>
        <h1>Card Example</h1>
        <div className='container'>
              <div className='size'>
                  <div className='text'>React Card</div>
              </div>
              <div className='cardtitle'>
                  <h3>Card Title</h3>
                  <p>React card component provides a flexible and extensible container for displaying content. </p>
                  <button>Go somewhere</button>
              </div>
        </div>
      </div>
    )
  }
}
