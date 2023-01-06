import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <div>
        <h2> Table</h2>
        <table>
  <tr>
    <th>Employee Name</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Afreen</td>
    <td>1234567890</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Althaf</td>
    <td>1123465454</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Sanwar</td>
    <td>2341342541</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Ibrahim</td>
    <td>2345677544</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Ismail</td>
    <td>2346432212</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Aman</td>
    <td>2345443236</td>
    <td>Italy</td>
  </tr>
</table>
      </div>
    )
  }
}
