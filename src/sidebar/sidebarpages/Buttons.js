import React, { Component } from 'react'

export default class Buttons extends Component {
 
  render() {
    const color=['green','red','pink','blue',]
    return (
      <div className='center'>
        {
          color.map((item,i)=>{
            return(
              <div className='button'>
                <button style={{backgroundColor:item}}>BUTTON {i}</button>
                <hr/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
