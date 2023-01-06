import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div>
        <br></br>
        <div className='modal'>
            <div className='firstrow'>
                <span><h2>Modal Title</h2></span>
            </div>
            <div className='secondrow'>
              <p>Modal body text goes here.</p>
            </div>
            <div className='thirdrow'>
              <button>close</button>
              <button>Save Changes</button>
            </div>
        </div>
      </div>
    )
  }
}
