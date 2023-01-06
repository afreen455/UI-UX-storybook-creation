import React, { Component } from 'react'
import Alert from '../sidebar/sidebarpages/Alert'
import Button from '../sidebar/sidebarpages/Buttons'
import Cards from '../sidebar/sidebarpages/Cards'
import Dropdowns from '../sidebar/sidebarpages/Dropdowns'
import NavBar from '../sidebar/sidebarpages/NavBar'
// import Progress from '../sidebar/sidebarpages/Progress'
import Table from '../sidebar/sidebarpages/Table'
import {Routes,Route} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from './Home'
import Introduction from './Introduction'
import About from './About'
import Modal from '../sidebar/sidebarpages/Modal'
import Pagination from '../sidebar/sidebarpages/Pagination'
export default class MainPage extends Component {
  render() {
    return (
      <div className='mainpage'>
        <Navbar/>
        <Routes>
        <Route path='/alert' element={<Alert/>}/>
        <Route path='/buttons' element={<Button/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/dropdowns' element={<Dropdowns/>}/>
        <Route path='/navbar' element={<NavBar/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/introduction' element={<Introduction/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Modal' element={<Modal/>}/>
        <Route path='/Pagination' element={<Pagination/>}/>
      </Routes>   
      </div>
    )
  }
}
