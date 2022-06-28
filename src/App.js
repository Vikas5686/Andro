import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Header,Footer,Home,ContactUs,Error,OurTeams,OurServices,Testimonials} from './components'
import {Design_Graphics,Programing,Photos_videos,Digital_Marketing} from './components/Servies_Pages'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid px-0">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/service' element={<OurServices />} />
            <Route path='/ourteams' element={<OurTeams />} />
            <Route path='/DG' element={<Design_Graphics />} />
            <Route path='/Programing' element={<Programing />} />
            <Route path='/Photos_videos' element={<Photos_videos/>} />
            <Route path='/Digital_Marketing' element={<Digital_Marketing/>} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route component={Error} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;