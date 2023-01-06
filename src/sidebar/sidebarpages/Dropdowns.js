import React, { Component } from 'react'

export default class Dropdowns extends Component {
  render() {
    return (
      <div className='drpdwn'>
        <h1>Single Button Dropdown</h1>
<select id = "myList"  >  
<option> Select Languages Here </option>  
<option> English</option>  
<option> Hindi </option>  
<option> French </option>  
<option> Spanish </option>  
</select>  
      </div>
    )
  }
}
