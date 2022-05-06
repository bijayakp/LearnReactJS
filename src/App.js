import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './css/style.css';
import './css/tempcss.scss';
import Header from './common/Header';
import Footer from './common/Footer';
import MenuBar  from './common/NavBar';
import Home  from './Home';
import ToDo from './ToDo';
import FnComp from './FnComp';
import FnCompAPI from './FnCompAPI';
import GitHub from './GitHub';
import ToDoFn from './ToDoFn';
import RefFn from './RefFn';
import RefClass from './RefClass';
import EMI from './EMI';
import FormFn from './FormFn';
import DigitalClock from './DigitalClock';
function App() {
  return (
    <BrowserRouter>
     <div className='container app-wrapper'>
      <Header/>
      <MenuBar/>
      <div className='row'>
          <div className='col-sm-12 col-lg-2 bg-warning bg-opacity-50 app-sidebar'>Left</div>
          <div className='col-sm-12 col-lg-8 bg-light'>
            <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path='/home' element = {<Home/>}/>
              <Route path='/github' element = {<GitHub/>}/>
              <Route path='/todo' element = {<ToDo/>}/>
              <Route path='/fn' element = {<FnComp/>}/>
              <Route path='/fnapi' element = {<FnCompAPI/>}/>
              <Route path='/todofn' element = {<ToDoFn/>}/>
              <Route path='/reffn' element = {<RefFn/>}/>
              <Route path='/refclass' element = {<RefClass/>}/>
              <Route path='/emi' element = {<EMI/>}/>
              <Route path='/formfn' element = {<FormFn/>}/>
              <Route path='/digitalClock' element = {<DigitalClock/>}/>
            </Routes>
          </div>
          <div className='col-sm-12 col-lg-2 bg-warning bg-opacity-50 app-sidebar'>Right</div>
      </div>
      
      <Footer/>

    </div>
  </BrowserRouter>
  );
}

export default App;
